import React, { useState, Fragment, useEffect } from 'react'
import styles from './Pagination.module.css'
import cx from 'classnames'
import { NumberLink } from './NumberLink/NumberLink'
import { ArrowLink } from './ArrowLink/ArrowLink'

const LEFT_PAGE = 'LEFT'
const RIGHT_PAGE = 'RIGHT'
const ARROW_RIGHT = '\u00BB'
const ARROW_LEFT = '\u00AB'

/**
 * Вспомогательный метод для создания диапазона значений
 * range(1, 5) => [1, 2, 3, 4, 5]
 */
const range = (from, to, step = 1) => {
  let counter = from
  const range = []

  while (counter <= to) {
    range.push(counter)
    counter += step
  }

  return range
}

export function Pagination({
  totalRecords,
  onPageChanged,
  pageLimit = 15,
  pageNeighbours = 0,
  isNeedRefreshPage,
}) {
  const pageNeighbourslocal = pageNeighbours > 2 ? 2 : pageNeighbours

  const [totalPages, setTotalPages] = useState(
    Math.ceil(totalRecords / pageLimit)
  )
  useEffect(() => {
    setTotalPages(Math.ceil(totalRecords / pageLimit))
    gotoPage(1)
  }, [totalRecords, pageLimit, totalPages])

  const [currentPage, setCurrentPage] = useState(1)
  useEffect(() => {
    gotoPage(currentPage)
  }, [isNeedRefreshPage])

  /**
   * Допустим у нас есть 10 страниц и мы установили pageNeighbours = 2
   * current page = 6
   * Компонент pagination будет выглядеть следующим образом:
   *
   * (1) < {4 5} [6] {7 8} > (10)
   *
   * (x) => конечные страницы: первая и последняя страница (всегда видимы)
   * [x] => представляет текущую страницу
   * {...x} => представляет соседние страницы
   */
  const fetchPageNumbers = () => {
    /**
     * totalNumbers: общее число номеров страниц показываемых в контроле
     * totalBlocks: totalNumbers + 2 покрывает левый(<) и правый(>) индикаторы
     */
    const totalNumbers = pageNeighbourslocal * 2 + 3
    const totalBlocks = totalNumbers + 2

    if (totalPages > totalBlocks) {
      const startPage = Math.max(2, currentPage - pageNeighbourslocal)
      const endPage = Math.min(
        totalPages - 1,
        currentPage + pageNeighbourslocal
      )
      let pages = range(startPage, endPage)
      /**
       * hasLeftSpill: имеет скрытые страницы слева от себя
       * hasRightSpill: имеет скрытые страницы справа от себя
       * spillOffset: общее число скрытых страниц
       */
      const hasLeftSpill = startPage > 2
      const hasRightSpill = totalPages - endPage > 1
      const spillOffset = totalNumbers - (pages.length + 1)

      switch (true) {
        // для ситуации: (1) < {5 6} [7] {8 9} (10)
        case hasLeftSpill && !hasRightSpill: {
          const extraPages = range(startPage - spillOffset, startPage - 1)
          pages = [LEFT_PAGE, ...extraPages, ...pages]
          break
        }

        // для ситуации: (1) {2 3} [4] {5 6} > (10)
        case !hasLeftSpill && hasRightSpill: {
          const extraPages = range(endPage + 1, endPage + spillOffset)
          pages = [...pages, ...extraPages, RIGHT_PAGE]
          break
        }

        // для ситуации: (1) < {4 5} [6] {7 8} > (10)
        case hasLeftSpill && hasRightSpill:
        default: {
          pages = [LEFT_PAGE, ...pages, RIGHT_PAGE]
          break
        }
      }

      return [1, ...pages, totalPages]
    }

    return range(1, totalPages)
  }

  const gotoPage = (page) => {
    const newCurrentPage = Math.max(0, Math.min(page, totalPages))
    setCurrentPage(newCurrentPage)
    const paginationData = {
      currentPage: newCurrentPage,
      pageLimit: pageLimit,
    }
    onPageChanged(paginationData)
  }

  useEffect(() => {
    gotoPage(1)
  }, [])

  const onClick = (page) => (event) => {
    gotoPage(page)
  }

  const onMoveLeft = (event) => {
    gotoPage(currentPage - pageNeighbours * 2 - 1)
  }

  const onMoveRight = (event) => {
    gotoPage(currentPage + pageNeighbours * 2 + 1)
  }

  if (!totalRecords || totalPages === 1) return <div />

  const pages = fetchPageNumbers()

  return (
    <Fragment>
      <div className={styles._}>
        {pages.map((page, index) => {
          if (page === LEFT_PAGE)
            return (
              <div
                key={index}
                className={styles.page_item}
                onClick={onMoveLeft}>
                <ArrowLink caption={ARROW_LEFT} />
              </div>
            )

          if (page === RIGHT_PAGE)
            return (
              <div
                key={index}
                className={styles.page_item}
                onClick={onMoveRight}>
                <ArrowLink caption={ARROW_RIGHT} />
              </div>
            )

          return (
            <div
              onClick={onClick(page)}
              key={index}
              className={cx(styles.page_item, {
                [styles.page_item_active]: currentPage === page,
              })}>
              <NumberLink page={page} isActive={currentPage === page} />
            </div>
          )
        })}
      </div>
    </Fragment>
  )
}
