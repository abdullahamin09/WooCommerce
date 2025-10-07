import { Table } from "antd"
import { Link } from "react-router-dom";
import Button from "./Shared/Button";

const MyAccOrder = () => {
    const columns = [
        { title: 'order', dataIndex: 'order', key: 'order' },
        { title: 'date', dataIndex: 'date', key: 'date' },
        { title: 'status', dataIndex: 'status', key: 'status' },
        { title: 'total', dataIndex: 'total', key: 'total' },
        {
            title: 'Action',
            dataIndex: '',
            key: 'x',
            render: () => <Link to='orderlist'>
                <Button
                    onClick={() => setActivePage('orderDetails')}
                    content='View'
                    btnClass="!w-[117px] !text-[16px]/[24px] !h-[44px]"
                 />
            </Link>,
        },
    ];

    const data = [
        {
            key: 1,
            order: '#972',
            date: '9 May 2023',
            status: 'Cancelled',
            total: 'R2030,00 for 20 items',
        },
        {
            key: 2,
            order: '#973',
            date: '9 May 2023',
            status: 'Cancelled',
            total: 'R2030,00 for 20 items',
        },
        {
            key: 3,
            order: '#675',
            date: '9 May 2023',
            status: 'Cancelled',
            total: 'R2030,00 for 20 items',
        },
        {
            key: 4,
            order: '#678',
            date: '9 May 2023',
            status: 'Cancelled',
            total: 'R2030,00 for 20 items',
        },

    ];

    return (
        <div className="order my-[30px]">
            <Table
                columns={columns}
                dataSource={data}
                pagination={false}
            />
        </div>
    )
}

export default MyAccOrder
