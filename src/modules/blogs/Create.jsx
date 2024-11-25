import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import Home from "../../component/SideBar";
import {
  Card,
  InputNumber,
  Button,
  Select,
  RadioGroup,
  Form,
  FormItem,
  FormComp,
} from "../../component";
import { Input } from "antd";
import { EditData, createData, fetchEditData } from "./service";

const { TextArea } = Input;

const Create = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [form] = FormComp.useForm();

  const [blogsItem, setBlogsItem] = useState({
    title: "",
    body: {
      description: "",
      links: "",
    },
    likes: "",
    approved: "",
    imageUrl: "",
    categories: "",
    isSensitive: "",
    tags: "",
    writer: {
      id: "",
      name: "",
      email: "",
      profileUrl: "",
      famousWorks: "",
    },
  });

  useEffect(() => {
    if (id) {
      fetchItem();
    }
  }, [id]);

  const fetchItem = async () => {
    try {
      const response = await fetchEditData(id);
      const itemData = response.data.data;
      console.log(itemData);

      setBlogsItem({
        title: itemData.title,
        body: {
          description: itemData.body?.description || "",
          links: itemData.body?.links || "",
        },
        likes: itemData.likes || "",
        approved: itemData.approved.toString() || "",
        imageUrl: itemData.imageUrl || "",
        categories: itemData.categories || "",
        isSensitive: itemData.isSensitive.toString() || "",
        tags: itemData.tags || "",
        writer: {
          id: itemData.writer.id || "",
          name: itemData.writer.name || "",
          email: itemData.writer.email || "",
          profileUrl: itemData.writer.profileUrl || "",
          famousWorks: itemData.writer.famousWorks || "",
        },
      });

      form.setFieldsValue({
        title: itemData.title,
        body: itemData.body?.description || "",
        imageUrl: itemData.imageUrl,
        categories: itemData.categories,
        likes: itemData.likes,
        approved: itemData.approved.toString(),
        isSensitive: itemData.isSensitive.toString(),
        tags: itemData.tags,
        writerId: itemData.writer.id,
        writerName: itemData.writer.name,
        writerEmail: itemData.writer.email,
        writerProfile: itemData.writer.profileUrl,
      });
    } catch (error) {
      console.error("Error fetching item:", error);
    }
  };

  const onFinish = (values) => {
    const updatedBlogsItem = {
      title: values.title,
      body: {
        description: values.body || "",
        links: "",
      },
      imageUrl: values.imageUrl || "",
      categories: values.categories || "",
      likes: values.likes || "",
      approved: values.approved || "",
      isSensitive: values.isSensitive || "",
      tags: values.tags || "",
      writer: {
        id: values.writerId || "",
        name: values.writerName || "",
        email: values.writerEmail || "",
        profileUrl: values.writerProfile || "",
        famousWorks: "",
      },
    };

    if (id === "create") {
      handleAdd(updatedBlogsItem);
    } else {
      handleUpdate(updatedBlogsItem);
    }
  };

  const handleAdd = async (newBlogsItem) => {
    try {
      await createData(newBlogsItem);
      navigate("/view");
    } catch (error) {
      if (error.response?.status === 401) {
        navigate("/");
        localStorage.removeItem("authToken");
      }
    }
  };

  const handleUpdate = async (updatedBlogsItem) => {
    try {
      await EditData(updatedBlogsItem, id);

      navigate("/view");
    } catch (error) {
      if (error.response?.status === 401) {
        localStorage.removeItem("authToken");
        navigate("/");
      }
    }
  };

  const options = [
    { value: "travel", label: "travel" },
    { value: "study", label: "study" },
    { value: "fitness", label: "fitness" },
    { value: "lifestyle", label: "lifestyle" },
    { value: "sports", label: "sports" },
  ];

  const optionsRadio = [
    { value: "true", label: "True" },
    { value: "false", label: "False" },
  ];

  return (
    <Home>
      <h2 style={{ margin: "auto" }}>
        {id !== "create" ? "EDIT BLOG" : "ADD BLOG"}
      </h2>
      <Card
        style={{
          width: "1500",
          margin: 0,
          borderRadius: 10,
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
          backgroundColor: "#ccc",
        }}
      >
        <Form
          form={form}
          labelCol={{
            span: 4,
          }}
          wrapperCol={{
            span: 14,
          }}
          layout="horizontal"
          style={{
            maxWidth: 600,
            alignContent: "center",
          }}
          onFinish={onFinish}
        >
          <FormItem
            name={"title"}
            label="Title"
            rules={[{ required: true, message: "Please enter a title" }]}
          >
            <Input defaultValue={blogsItem.title} />
          </FormItem>
          <FormItem
            label="Body"
            name={"body"}
            rules={[{ required: true, message: "Please enter body" }]}
          >
            <TextArea rows={4} />
          </FormItem>
          <FormItem label="imageUrl" name={"imageUrl"}>
            <Input />
          </FormItem>
          <FormItem
            label="Categories"
            name={"categories"}
            rules={[{ required: true, message: "Please select category" }]}
          >
            <Select options={options} />
          </FormItem>
          <FormItem label="likes" name={"likes"}>
            <InputNumber />
          </FormItem>
          <FormItem
            aria-label="Approved"
            label="Approved"
            name={"approved"}
            rules={[{ required: true, message: "Please mention approved" }]}
          >
            <RadioGroup options={optionsRadio} />
          </FormItem>
          <FormItem
            aria-label="isSensitive"
            label="isSensitive"
            name={"isSensitive"}
            rules={[{ required: true, message: "Please specify sensitivity" }]}
          >
            <RadioGroup options={optionsRadio} />
          </FormItem>
          <FormItem label="Writer-Id" name={"writerId"}>
            <InputNumber />
          </FormItem>
          <FormItem label="Writer-Name" name={"writerName"}>
            <Input />
          </FormItem>
          <FormItem label="Writer-Email" name={"writerEmail"}>
            <Input />
          </FormItem>
          <FormItem label="Writer-ProfilePicUrl" name={"writerProfile"}>
            <Input />
          </FormItem>

          <FormItem label="tags" name={"tags"}>
            <TextArea rows={3} />
          </FormItem>
          <FormItem label=" " colon={false}>
            <Button
              data-testid="add-btn"
              type="primary"
              htmlType="submit"
              name="ADD"
            />
          </FormItem>
        </Form>
      </Card>
    </Home>
  );
};

export default Create;
