import axios from "axios";
import { Base_API } from "../../config/config";

const getBlogs = async (page, limit) => {
  return await axios.get(
    `${Base_API}/get?page=${page}&limit=${limit}`,

    {
      headers: {
        Authorization: localStorage.getItem("authToken"),
      },
    }
  );
};

const getSearchedBlogs = async (search, page, limit) => {
  return await axios.get(
    `${Base_API}/search/${search}?page=${page}&limit=${limit}`
  );
};

const getFilteredBlogs = async (filterValue, page, limit) => {
  return await axios.get(
    `${Base_API}/getbycategories/${filterValue}?page=${page}&limit=${limit}`
  );
};

const getBulkErrorData = async (session_id) => {
  return await axios.get(`${Base_API}/bulk-uploads-errors/${session_id}`);
};

const getBulkData = async () => {
  return await axios.get(`${Base_API}/bulk-uploads-list`);
};

const uploadBulk = async (formData) => {
  return await axios.post(`${Base_API}/bulk-upload`, formData, {
    headers: {
      "Content-Type": "multipart/form-data",
      Authorization: localStorage.getItem("authToken"),
    },
  });
};

const deleteData = async (bid) => {
  return await axios.delete(`${Base_API}/${bid}`, {
    headers: {
      Authorization: localStorage.getItem("authToken"),
    },
  });
};

const fetchEditData = async (id) => {
  return await axios.get(`${Base_API}/getbyid/${id}`);
};

const EditData = async (updatedBlogsItem, id) => {
  await axios.patch(`${Base_API}/updatebyid/${id}`, updatedBlogsItem, {
    headers: {
      Authorization: localStorage.getItem("authToken"),
    },
  });
};

const createData = async (newBlogsItem) => {
  return await axios.post(`${Base_API}/create`, newBlogsItem, {
    headers: {
      Authorization: localStorage.getItem("authToken"),
    },
  });
};

const detailData = async (id) => {
  return await axios.get(`${Base_API}/getbyid/${id}`);
};

export {
  getBlogs,
  getBulkData,
  deleteData,
  fetchEditData,
  EditData,
  createData,
  getBulkErrorData,
  uploadBulk,
  detailData,
  getSearchedBlogs,
  getFilteredBlogs,
};
