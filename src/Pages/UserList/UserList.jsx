import React, { Fragment, useState } from "react";
import "./userList.css";
import { Link } from "react-router-dom";
import DataTable from "react-data-table-component";
import { User } from "../../DummyData";
import { MdEdit, MdDelete } from "react-icons/md";

function UserList() {
  const [data, setData] = useState(User);

  const handleDelete = (id) => {
    setData(data.filter((eachItem) => eachItem.id !== id));
  };

  const columns = [
    {
      name: "Id",
      selector: (row) => row.id,
      sortable: true,
    },
    {
      name: "Username",
      selector: (row) => row.username,
      sortable: true,
    },
    {
      name: "Avatar",
      selector: (row) => (
        <img src={row.avatar} alt={row.id} className="user-avatar" />
      ),
    },
    {
      name: "Email",
      selector: (row) => row.email,
    },
    {
      name: "Status",
      selector: (row) => row.status,
      sortable: true,
    },
    {
      name: "Action",
      selector: (row) => (
        <Fragment>
          <Link to={`/user/${row.id}`}>
            <button type="button" className="btn">
              <MdEdit />
            </button>
          </Link>
          <button
            type="button"
            className="btn btn-delete"
            onClick={() => handleDelete(row.id)}
          >
            <MdDelete />
          </button>
        </Fragment>
      ),
    },
  ];
  return (
    <div className="user-list">
      <Link to="/new-user">
        <button className="user-add-btn">Add User</button>
      </Link>
      <DataTable title="User List" columns={columns} data={data} pagination />
    </div>
  );
}

export default UserList;
