import {Header} from '../Header/Header';
import {FilterHeaderPanel} from '../FilterHeaderPanel/FilterHeaderPanel';
import {FilterBodyPanel} from '../FilterBodyPanel/FilterBodyPanel';
import {Table} from '../Table/Table';

export function Page (props) {
    const tableData = [
        {ID: 14332423, date: "15.02.2020", status: "Отложен", itemsCount: 3, sum: 2001.54, customerName: "Иванов Иван Иванович"},
        {ID: 324234, date: "01.02.2021", status: "Выполнен", itemsCount: 1, sum: 154.30, customerName: "Сидоров Сидор Сидорович"},
        {ID: 21233333, date: "11.10.2019", status: "Отменен", itemsCount: 2, sum: 15434, customerName: "Петров Петр Петрович"}
    ];
    const tableHeaderData = ["#", "Дата", "Статус", "Позиций", "Сумма", "ФИО покупателя"];
    return (
        <div className="page">
            <Header/>
            <FilterHeaderPanel/>
            <FilterBodyPanel/>
            <Table headerData={tableHeaderData} data={tableData}></Table>
        </div>
    );
}