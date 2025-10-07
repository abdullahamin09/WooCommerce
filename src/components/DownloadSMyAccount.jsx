import { Table } from "antd"
import { Link } from "react-router-dom";
import Button from "./Shared/Button";


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
            render: () => <Link>
                <Button
                    content='Download'
                    iconProp = 'fa-solid:download'
                    btnClass="!w-[152px] !h-[42px] !gap-[10px] !text-[16px]/[24px]"
                />
            </Link>,
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
