
import { useEffect, useState } from "react";
import { Table, message, Modal, Input } from "antd"
import { Icon } from "@iconify/react";
import axios from 'axios';


const ContactMessages = () => {
    const [data, setData] = useState([]);
    const [editingRecord, setEditingRecord] = useState(null);
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [updatedData, setUpdatedData] = useState({ name: "", email: "", message: "" });
    const [messageApi, contextHolder] = message.useMessage();

    const API_URL = "http://localhost:8000/api/message/"

    const fetchMessages = async () => {
        try {
            const res = await axios.get(API_URL)
            const formattedData = res.data.map((item) => ({
                ...item,
                key: item._id,
            }));
            setData(formattedData);
        } catch (error) {
            messageApi.open({
                type: 'error',
                content: 'Failed to fetch data',
            });

        }
    };

    useEffect(() => {
        fetchMessages();
    }, []);

    const handleDelete = async (id) => {
        try {
            await axios.delete(`${API_URL}${id}`)
            messageApi.open({
                type: 'success',
                content: 'Deleted successfully',
            });
            fetchMessages();
            console.log("Deleted successfully");
            
        } catch (error) {
            console.log("Not Deleted");
            
            messageApi.open({
                type: 'error',
                content: 'Failed to delete',
            });
        }
    };

    const handleEdit = (record) => {
        setEditingRecord(record);
        setUpdatedData({
            name: record.name,
            email: record.email,
            message: record.message,
        });
        setIsModalVisible(true);
    };

    const handleUpdate = async () => {
        try {
            await axios.put(`${API_URL}${editingRecord._id}`, updatedData);
            setIsModalVisible(false);
            fetchMessages();
            messageApi.open({
                type: 'success',
                content: 'Updated successfully',
            });

        } catch (error) {
            messageApi.open({
                type: 'error',
                content: 'Failed to update',
            });
        }
    };


    const columns = [
        { title: 'Name', dataIndex: 'name', key: 'name' },
        { title: 'Email', dataIndex: 'email', key: 'email' },
        { title: 'Message', dataIndex: 'message', key: 'message' },
        {
            title: 'Action',
            dataIndex: '',
            key: 'x',
            render: (_, record) => <div className='flex items-center gap-2'>
                <Icon onClick={() => handleDelete(record._id)} className='cursor-pointer' icon="material-symbols:delete-rounded" width="16" height="16" style={{ color: '#da3700' }} />
                <Icon onClick={() => handleEdit(record)} className='cursor-pointer' icon="tabler:edit" width="16" height="16" style={{ color: "#17e700" }} />
            </div>,
        },
    ];
    return (
        <div className="my-[30px]">
            {contextHolder}
            <Table
                columns={columns}
                dataSource={data}
                pagination={false}
            />

            <Modal
                title="Edit Message"
                open={isModalVisible}
                onOk={handleUpdate}
                onCancel={() => setIsModalVisible(false)}
                okText="Save"
            >
                <Input
                    placeholder="Name"
                    value={updatedData.name}
                    onChange={(e) => setUpdatedData({ ...updatedData, name: e.target.value })}
                    className="mb-2"
                />
                <Input
                    placeholder="Email"
                    value={updatedData.email}
                    onChange={(e) => setUpdatedData({ ...updatedData, email: e.target.value })}
                    className="mb-2"
                />
                <Input.TextArea
                    placeholder="Message"
                    value={updatedData.message}
                    onChange={(e) => setUpdatedData({ ...updatedData, message: e.target.value })}
                    rows={3}
                />
            </Modal>
        </div>
    )
}

export default ContactMessages

