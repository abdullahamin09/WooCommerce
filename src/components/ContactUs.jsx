import { useState } from "react";
import axios from "axios";
import { message } from "antd";
import Button from "./Shared/Button";
import Input from "./Shared/Input";
import TextArea from "./Shared/TextArea";

const ContactUs = () => {
  const [messageApi, contextHolder] = message.useMessage();

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const payload = {
      name: `${formData.firstName} ${formData.lastName}`,
      email: formData.email,
      message: formData.message,
    };

    try {
      console.log("Submitting:", payload);
      const response = await axios.post("http://localhost:8000/api/message", payload);
      console.log("Response:", response.data);
      messageApi.open({
        type: 'success',
        content: 'Message added successfully',
      });

      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        message: "",
      });
    } catch (error) {
      console.error("Error submitting form:", error);
      messageApi.open({
        type: 'error',
        content: 'Failed to add message',
      });
    }

  };

  return (
    <div className="flex items-center flex-col">
      {contextHolder}
      <form
        onSubmit={handleSubmit}
        className="max-w-[600px] my-[60px] flex flex-col gap-10 mx-[30px]"
      >
        <div className="flex sm:flex-row flex-col gap-[20px]">
          <Input
            Label="First Name"
            id="firstName"
            type="text"
            inputClass="flex-1"
            textSize="font-bold"
            mb="[20px]"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            important
          />
          <Input
            Label="Last Name"
            id="lastName"
            type="text"
            inputClass="flex-1"
            textSize="font-bold"
            mb="[20px]"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            important
          />
        </div>

        <Input
          Label="Email"
          id="email"
          type="email"
          textSize="[20px] font-bold"
          mb="[20px]"
          name="email"
          value={formData.email}
          onChange={handleChange}
          important
        />

        <TextArea
          Label="Message"
          name="message"
          id="message"
          important
          areaWrapClass="!font-bold"
          value={formData.message}
          onChange={handleChange}
        />

        <Button
          content="Submit"
          btnClass="max-w-[100px] !text-[20px]/[30px]"
          btnType="submit"
        />
      </form>
    </div>
  );
};

export default ContactUs;
