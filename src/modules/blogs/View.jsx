import React, { useEffect, useState } from "react";
import { Modal, Spin, Button } from "../../component";
import { List, ListItem, ListItemMeta } from "../../component/List";
import { useNavigate } from "react-router-dom";
import Home from "../../component/SideBar";
import {
  deleteData,
  getBlogs,
  getFilteredBlogs,
  getSearchedBlogs,
} from "./service";

let count = 0;

const View = () => {
  count += 1;
  const [blog, setBlog] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);

  const [page, setPage] = useState(1);
  const limit = 5;

  const [filterValue, setFilterValue] = useState("all");

  const [bid, setBid] = useState("");
  const navigate = useNavigate();

  const handleDelete = (id) => {
    setIsModalOpen(true);
    setBid(id);
  };

  const handleSearch = () => {
    if (search.length > 0) {
      searchData();
    }
  };

  const deleteIt = async (bid) => {
    try {
      await deleteData(bid);
    } catch (error) {
      if (error.response?.status === 401) {
        localStorage.removeItem("authToken");
        navigate("/");
      }
    }
  };

  const handleOk = () => {
    deleteIt(bid);
    setIsModalOpen(false);
    setBlog((prevBlog) => prevBlog.filter((item) => item._id !== bid));
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const handleEdit = async (bid) => {
    navigate(`/update/${bid}`);
  };
  const handleView = async (bid) => {
    navigate(`/details/${bid}`);
  };

  const getData = async () => {
    setLoading(true);
    const { data } = await getBlogs(page, limit);
    setBlog(data.data);
    setLoading(false);
  };

  const searchData = async () => {
    setLoading(true);
    try {
      const { data } = await getSearchedBlogs(search, page, limit);
      setBlog(data.data);
    } catch (err) {
      navigate("/other");
    } finally {
      setLoading(false);
    }
  };

  const filterData = async () => {
    const { data } = await getFilteredBlogs(filterValue, page, limit);
    setBlog(data.data);
  };

  // const handleFilter = async () => {
  //   setLoading(true);
  //   if (filterValue !== "all") {
  //     await filterData();
  //   }
  //   else{
  //     await getData()
  //   }
  //   console.log(loading);
  //   setLoading(false);
  // };

  useEffect(() => {
    if (filterValue !== "all") {
      filterData();
    } else if (filterValue === "all" && count > 1) {
      getData();
    }
  }, [filterValue]);

  useEffect(() => {
    if (!search && filterValue === "all") getData();
    else if (search) {
      searchData();
    } else if (filterValue !== "all" && page > 1) {
      filterData();
    }
  }, [page]);

  if (blog.length === 0) {
    return (
      <Home>
        <div>
          <p>No data available</p>
        </div>
      </Home>
    );
  }

  const handlePrevious = () => {
    setPage((prev) => (prev === 1 ? prev : prev - 1));
  };

  const handleNext = () => {
    setPage((prev) => prev + 1);
  };

  const handleCreate = () => {
    navigate("/update/create");
  };

  const handleSearchWithKey = async (e) => {
    if (e.key === "Enter") {
      searchData();
    }
  };

  return (
    <Home>
      <div
        data-testid="header-div"
        style={{
          backgroundColor: "#333",
          display: "flex",
          alignItems: "center",
          padding: "0 4px",
          height: "60px",
          margin: 0,
          borderBottom: "2px solid black",
        }}
      >
        <input
          id="search"
          type="text"
          data-testid="search-input"
          placeholder="Search Here...."
          value={search}
          style={{
            border: "2px solid black",
            height: 30,
            margin: 0,
            padding: "0 8px",
            borderRadius: "4px",
          }}
          onChange={(e) => setSearch(e.target.value)}
          onKeyDown={handleSearchWithKey}
        />

        <Button
          onClick={handleSearch}
          iconname="search"
          data-testid="search-btn"
          style={{
            border: "2px solid black",
            height: 30,
            width: 30,
            margin: "0 4px",
            padding: "2px",
            color: "black",
            cursor: "pointer",
          }}
        />

        <select
          name="menubar"
          value={filterValue}
          data-testid="filter-menu"
          style={{
            border: "2px solid black",
            height: 30,
            margin: "0 5px",
            padding: 0,
            backgroundColor: "#444",
            color: "white",
          }}
          onChange={(e) => {
            setFilterValue(e.target.value);
            // handleFilter();
          }}
        >
          <option value="all">All</option>
          <option value="travel">Travel</option>
          <option value="study">Study</option>
          <option value="fitness">Fitness</option>
          <option value="lifestyle">Lifestyle</option>
        </select>

        <button
          data-testid="create-icon"
          type="dashed"
          onClick={handleCreate}
          style={{
            border: "2px solid black",
            height: 30,
            width: 60,
            margin: "4px 4px 4px auto",
            padding: 2,
          }}
        >
          create
        </button>
      </div>

      <Modal
        title="Confirmation "
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      />
      {loading ? <Spin data-testid="spinner" /> : null}

      <List
        data-testid="list-blog"
        itemLayout="vertical"
        size="large"
        dataSource={blog}
        renderItem={(item) => (
          <ListItem
            key={item?.title}
            extra={
              <img
                width={272}
                height={180}
                alt="logo"
                // src="https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png"
                src={item?.imageUrl}
              />
            }
          >
            <ListItemMeta title={item?.title} description={item?.categories} />

            {item?.body.description}
            <br />
            <br />

            <Button
              data-testid="view-btn"
              onClick={() => handleView(item?._id)}
              style={{ marginRight: 40 }}
              iconname="view"
            />
            <Button
              data-testid="edit-btn"
              onClick={() => handleEdit(item._id)}
              style={{ marginRight: 40 }}
              iconname="edit"
            />

            <Button
              data-testid="delete-btn"
              onClick={() => handleDelete(item?._id)}
              iconname="delete"
            />
          </ListItem>
        )}
      />

      <footer>
        <button disabled={page === 1} onClick={handlePrevious}>
          Previous
        </button>
        <span>{`Page ${page}`}</span>
        <button onClick={handleNext}>Next</button>
      </footer>
    </Home>
  );
};

export default View;
