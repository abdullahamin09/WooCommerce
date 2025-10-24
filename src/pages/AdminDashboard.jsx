import { useEffect, useState } from "react";
import { Table, InputNumber, Form, message, Upload, Button, Image, Modal, Input } from "antd"
import { Icon } from "@iconify/react";
import axios from 'axios';


const AdminDashboard = () => {
    const [data, setData] = useState([]);
    const [messageApi, contextHolder] = message.useMessage();
    const [editingRecord, setEditingRecord] = useState(null);
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [updatedData, setUpdatedData] = useState({
        title: "",
        price: "",
        discountPrice: "",
        description: "",
        Image: ""
    });
    const [preview, setPreview] = useState(updatedData.Image || null);
    const [form] = Form.useForm();
    const [fileList, setFileList] = useState([]);
    const [loading, setLoading] = useState(false);


    // Handle new data Form Submit
    const handleFinish = async (values) => {
        try {
            setLoading(true);

            const formData = new FormData();
            formData.append("title", values.title);
            formData.append("price", values.price);
            formData.append("discountPrice", values.discountPrice || "");
            formData.append("description", values.description);

            if (fileList[0]) {
                formData.append("image", fileList[0].originFileObj);
            }

            // Send to backend
            const res = await axios.post("http://localhost:8000/api/products", formData, {
                headers: { "Content-Type": "multipart/form-data" },
            });

            messageApi.open({
                type: 'success',
                content: 'Product added successfully!',
            });
            fetchProductData();
            form.resetFields();
            setFileList([]);
            console.log("Response:", res.data);
        } catch (error) {
            console.error("Error adding product:", error);
            messageApi.open({
                type: 'error',
                content: 'Error adding product',
            });
        } finally {
            setLoading(false);
        }
    };
    // handle single file selection
    const handleChange = ({ fileList: newFileList }) => {
        // Always keep only the latest file
        const latestFile = newFileList.slice(-1);

        setFileList(latestFile);
    };


    const fetchProductData = async () => {
        try {
            const res = await axios.get("http://localhost:8000/api/products");
            const formattedData = res.data.map((item) => ({
                ...item,
                key: item._id,
            }));
            setData(formattedData);
        } catch (error) {

        }
    }

    useEffect(() => {
        fetchProductData();
    }, []);

    const columns = [
        { title: 'Title', dataIndex: 'title', key: 'title' },
        { title: 'Price', dataIndex: 'price', key: 'price' },
        { title: 'Discount Price', dataIndex: 'discountPrice', key: 'discountPrice' },
        { title: 'Ratings', dataIndex: 'ratings', key: 'ratings' },
        { title: 'Description', dataIndex: 'description', key: 'description' },
        {
            title: "Image",
            dataIndex: "Image",
            key: "Image",
            render: (ImageObj) => (
                <Image
                    width={60}
                    height={60}
                    src={ImageObj?.url || ImageObj}
                    alt="product image"
                    style={{ borderRadius: "8px", objectFit: "cover" }}
                />
            ),
        },
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


    const handleDelete = async (id) => {
        try {
            await axios.delete(`${"http://localhost:8000/api/products/"}${id}`);
            messageApi.open({
                type: 'success',
                content: 'it will delete',
            });

            fetchProductData();

        } catch (error) {
            console.log('Error deleting product', error);

            messageApi.open({
                type: 'success',
                content: 'it will delete',
            });
        }

    };


    const handleEdit = (record) => {
        try {
            setEditingRecord(record);
            setUpdatedData({
                title: record.title,
                price: record.price,
                discountPrice: record.discountPrice,
                description: record.description,
                Image: record.Image?.url || record.Image,
            });
            setPreview(record.Image?.url || record.Image); // ✅ show existing image
            setIsModalVisible(true);
        } catch (error) {
            console.log('Error editing product', error);
            setIsModalVisible(false);
            messageApi.open({
                type: 'error',
                content: 'Failed to open edit',
            });
        }
    };

    const handleUpdate = async () => {
        try {
            const formData = new FormData();
            formData.append("title", updatedData.title);
            formData.append("price", updatedData.price);
            formData.append("discountPrice", updatedData.discountPrice);
            formData.append("description", updatedData.description);

            // 🖼️ If user picked a new image (object = File)
            if (updatedData.Image && typeof updatedData.Image === "object") {
                formData.append("image", updatedData.Image);
            }

            await axios.put(
                `http://localhost:8000/api/products/${editingRecord._id}`,
                formData,
                {
                    headers: {
                        "Content-Type": "multipart/form-data",
                    },
                }
            );

            messageApi.open({
                type: "success",
                content: "Product updated successfully!",
            });

            setIsModalVisible(false);
            fetchProductData();
        } catch (error) {
            console.error("Error updating product:", error);
            messageApi.open({
                type: "error",
                content: "Failed to update product",
            });
        }
    };

    // update product image
    const handleFileChange = ({ fileList }) => {
        // Keep only the most recent file
        const latestFile = fileList[fileList.length - 1];

        if (latestFile && latestFile.originFileObj) {
            const selectedFile = latestFile.originFileObj;
            setUpdatedData((prev) => ({
                ...prev,
                Image: selectedFile, // store file object for upload
            }));
            setPreview(URL.createObjectURL(selectedFile)); // show instant preview
        } else {
            // if user removes image
            setUpdatedData((prev) => ({ ...prev, Image: "" }));
            setPreview(null);
        }
    };


    return (
        <div className="my-[30px]">
            {contextHolder}

            <div className="max-w-lg my-10 mx-auto bg-white p-6 rounded-xl shadow-md mt-8">
                <h2 className="text-xl font-semibold mb-4 text-center">Add New Product</h2>

                <Form
                    form={form}
                    layout="vertical"
                    onFinish={handleFinish}
                    autoComplete="off"
                >
                    {/* Title */}
                    <Form.Item
                        name="title"
                        label="Title"
                        rules={[{ required: true, message: "Please enter a product title" }]}
                    >
                        <Input placeholder="Enter product title" />
                    </Form.Item>

                    {/* Price */}
                    <Form.Item
                        name="price"
                        label="Price"
                        rules={[{ required: true, message: "Please enter the price" }]}
                    >
                        <InputNumber
                            className="w-full"
                            min={0}
                            placeholder="Enter price"
                        />
                    </Form.Item>

                    {/* Discount Price */}
                    <Form.Item
                        name="discountPrice"
                        label="Discount Price">
                        <InputNumber
                            className="w-full"
                            min={0}
                            placeholder="Enter discount price (optional)"
                        />
                    </Form.Item>

                    {/* Description */}
                    <Form.Item
                        name="description"
                        label="Description"
                        rules={[{ required: true, message: "Please enter a description" }]}
                    >
                        <Input.TextArea rows={4} placeholder="Enter product description" />
                    </Form.Item>

                    {/* Image Upload */}
                    <Form.Item
                        name="Image"
                        label="Product Image"
                        rules={[{ required: true, message: "Please upload a product image" }]}
                    >
                        <div style={{ textAlign: "center" }}>
                            <Upload
                                beforeUpload={() => false} // prevent auto-upload
                                fileList={fileList}
                                onChange={handleChange}
                                listType="picture-card" // ✅ square preview layout
                                maxCount={1}
                                accept="image/*"
                                onRemove={() => setFileList([])}
                            >
                                {fileList.length === 0 && (
                                    <div>
                                        <Button>Upload Image</Button>
                                    </div>
                                )}
                            </Upload>
                        </div>
                    </Form.Item>


                    {/* Submit Button */}
                    <Form.Item>
                        <Button
                            type="primary"
                            htmlType="submit"
                            className="w-full"
                            loading={loading}
                        >
                            {loading ? "Submitting..." : "Submit"}
                        </Button>
                    </Form.Item>
                </Form>
            </div>


            <Table
                columns={columns}
                dataSource={data}
                pagination={false}
            />

            <Modal
                title="Edit Product Data"
                open={isModalVisible}
                onOk={handleUpdate}
                onCancel={() => setIsModalVisible(false)}
                okText="Save"
            >
                {/* 🟦 Profile-style image upload section */}
                <div className="text-center mb-[20px]">
                    <Upload
                        beforeUpload={() => false} // prevent auto-upload
                        onChange={handleFileChange}
                        fileList={[]} // prevent showing list below
                        showUploadList={false}
                        accept="image/*"
                        maxCount={1}
                    >
                        {preview ? (
                            <div
                                className="w-[120px] h-[120px] rounded-full overflow-hidden mx-auto cursor-pointer border-[3px] border-[#1677ff] shadow-[0_0_8px_rgba(0,0,0,0.15)] relative"
                            >
                                <img
                                    src={preview}
                                    alt="Preview"
                                    className="w-full h-full object-cover"
                                />
                                <div className="hover-overlay absolute bottom-0 w-full h-[40px] bg-[rgba(0,0,0,0.4)] flex items-center justify-center opacity-0 transition-opacity duration-300 cursor-pointer"
                                >
                                    <span className="text-white text-[20px]">📷</span>
                                </div>
                            </div>
                        ) : (
                            <Button>Upload Image</Button>
                        )}
                    </Upload>
                    <p className="mt-2 text-[#888]">Click image to change</p>
                </div>


                {/* 🟩 Input fields with spacing */}
                <div className="flex flex-col gap-3">
                    <Input
                        placeholder="Title"
                        value={updatedData.title}
                        onChange={(e) =>
                            setUpdatedData({ ...updatedData, title: e.target.value })
                        }
                    />
                    <Input
                        placeholder="Price"
                        value={updatedData.price}
                        onChange={(e) =>
                            setUpdatedData({ ...updatedData, price: e.target.value })
                        }
                    />
                    <Input
                        placeholder="Discount Price"
                        value={updatedData.discountPrice}
                        onChange={(e) =>
                            setUpdatedData({ ...updatedData, discountPrice: e.target.value })
                        }
                    />
                    <Input.TextArea
                        placeholder="Description"
                        value={updatedData.description}
                        onChange={(e) =>
                            setUpdatedData({ ...updatedData, description: e.target.value })
                        }
                        rows={3}
                    />
                </div>
            </Modal>



        </div>
    )
}

export default AdminDashboard
