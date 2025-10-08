import { Table } from "antd"
import AddressMyAcc from "../components/AddressMyAcc"

const CheckoutConfirmd = () => {
    const orderListColumns = [
        { title: 'Order number:', dataIndex: 'OrderNumber', key: 'OrderNumber' },
        { title: 'Date', dataIndex: 'date', key: 'date' },
        { title: 'Total:', dataIndex: 'total', key: 'total' },
        { title: 'Payment method:', dataIndex: 'paymentMethod', key: 'paymentMethod' },
    ];
    const orderListData = [
        {
            key: 1,
            OrderNumber: '1365',
            date: '9 May 2023',
            total: 'R150,00',
            paymentMethod: 'Direct bank transfer',
        },
        {
            key: 2,
            OrderNumber: '1367',
            date: '9 May 2023',
            total: 'R250,00',
            paymentMethod: 'Direct bank transfer',
        },

    ];
    const orderDetailsColumns = [
        { title: 'Product', dataIndex: 'product', key: 'product' },
        { title: 'Total:', dataIndex: 'total', key: 'total' },
    ];
    const orderDetailsData = [
        {
            key: 1,
            product: 'LSX Mega Menus x 1',
            total: 'R150,00',
        },
        {
            key: 2,
            product: 'Subtotal',
            total: 'R250,00',
        },
        {
            key: 3,
            product: 'Payment Method',
            total: 'Direct bank transfer',
        },
        {
            key: 4,
            product: 'Total',
            total: 'R250,00',
        },

    ];
    return (
        <div className="checkoutConfirmed md:mx-[60px] mx-[30px] lg:mx-[100px] 2xl:mx-[120px] my-[70px]">
            <p className="text-[48px]/[66px] font-bold mb-[30px] max-md:text-center">Checkout</p>
            <p className="text-[28px]/[40px] font-medium mb-[40px] max-md:text-center">Thank you. Your order has been received.</p>
            <div className="orderList w-full">
                <Table className="text-[20px]/[30px]"
                    columns={orderListColumns}
                    dataSource={orderListData}
                    pagination={false}
                />
            </div>
            <div className="checkoutorderDetails mb-[20px]">
                <p className="text-[20px]/[30px] font-bold mb-[30px]">Order Details</p>
                <Table className="text-[20px]/[30px]"
                    columns={orderDetailsColumns}
                    dataSource={orderDetailsData}
                    pagination={false}
                />
            </div>
            <div className="checkOutAddress mb-[60px]">
                <div className="flex orderDetailsAddress">
                    <AddressMyAcc />
                </div>
            </div>
        </div>
    )
}

export default CheckoutConfirmd
