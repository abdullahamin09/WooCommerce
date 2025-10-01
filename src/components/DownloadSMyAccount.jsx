import { Icon } from "@iconify/react";
import { Table } from "antd"

const DownloadSMyAccount = () => {
    const columns = [
        { title: 'Product', dataIndex: 'product', key: 'product' },
        { title: 'Downloads Remaining', dataIndex: 'downloadsRemaining', key: 'downloadsRemaining' },
        { title: 'Expires', dataIndex: 'expires', key: 'expires' },
        { title: 'Download', dataIndex: 'download', key: 'download' },
        {
            title: 'Action',
            dataIndex: '',
            key: 'x',
            render: () => <button className="w-[152px] h-[42px] bg-[#2F8EFF] text-white flex items-center justify-center gap-[10px] cursor-pointer">
                Download
                <Icon icon="fa-solid:download" width="20" height="20" style={{ color: '#fff' }} />
            </button>,
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
        </div>
    )
}

export default DownloadSMyAccount
