import { Table } from "antd"

const DownloadSMyAccount = () => {
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
        <div>
            <div className="downloads my-[30px]">
                <Table
                    columns={columns}
                    dataSource={data}
                    pagination={false}
                />
            </div>
            <div className="order-Dets my-[30px]">
                <Table
                    columns={columnsOrderDets}
                    dataSource={dataOrderDets}
                    pagination={false}
                />
            </div>
        </div>
    )
}

export default DownloadSMyAccount
