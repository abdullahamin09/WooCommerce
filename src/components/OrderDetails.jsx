import { Table } from "antd"
import AddressMyAcc from "./AddressMyAcc";

const OrderDetails = () => {
    const columns = [
        { title: 'Product', dataIndex: 'product', key: 'product' },
        { title: 'Downloads Remaining', dataIndex: 'downloadsRemaining', key: 'downloadsRemaining' },
        { title: 'Expires', dataIndex: 'expires', key: 'expires' },
        { title: 'Download', dataIndex: 'download', key: 'download' },

    ];
    const columnsOrderDets = [
        { title: 'Product', dataIndex: 'product', key: 'product' },
        { title: 'total', dataIndex: 'total', key: 'total' },

    ];

    const dataOrderDets = [
        {
            key: 1,
            product: 'LSX Banners',
            total: 'R150',
        },
        {
            key: 2,
            product: 'LSX Banners',
            total: 'R150',
        },
        {
            key: 3,
            product: 'LSX Banners',
            total: 'R150',
        },
        {
            key: 4,
            product: 'LSX Banners',
            total: 'R150',
        },
    ];

    const data = [
        {
            key: 1,
            product: 'LSX Banners',
            downloadsRemaining: '∞',
            expires: 'Never',
            download: 'LSX:Banners',
        },
        {
            key: 2,
            product: 'LSX Banners',
            downloadsRemaining: '∞',
            expires: 'Never',
            download: 'LSX:Banners',
        },
        {
            key: 3,
            product: 'LSX Banners',
            downloadsRemaining: '∞',
            expires: 'Never',
            download: 'LSX:Banners',
        },
        {
            key: 4,
            product: 'LSX Banners',
            downloadsRemaining: '∞',
            expires: 'Never',
            download: 'LSX:Banners',
        },


    ];
    return (
        <div className="orderDetails">
            <div className="flex flex-col gap-[20px]">
                <p className="text-[20px]/[30px] font-medium">Order <span>#972</span> was placed on <span>9 May 2023</span></p>
                <p className="text-[30px]/[42px] font-bold">Downloads</p>
                <div className="downloads">
                    <Table
                        columns={columns}
                        dataSource={data}
                        pagination={false}
                    />
                </div>
                <p className="text-[30px]/[42px] font-bold">Order details</p>
                <div className="order-Dets">
                    <Table
                        columns={columnsOrderDets}
                        dataSource={dataOrderDets}
                        pagination={false}
                    />
                </div>
                <a href="#" className="text-[16px]/[24px] font-bold underline text-[#2F8EFF]">Order again</a>
            </div>
            <div className="flex orderDetailsAddress">
                <AddressMyAcc/>
            </div>
        </div>
    )
}

export default OrderDetails
