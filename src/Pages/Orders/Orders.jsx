import React, { Fragment } from "react";
import "./orders.css";
import DataTable from "react-data-table-component";
import { ordersData } from "../../DummyData";
import { MdEdit, MdDelete } from "react-icons/md";

function Orders() {
  const columns = [
    {
      name: "Id",
      selector: (row) => row.id,
      sortable: true,
    },
    {
      name: "Order Number",
      selector: (row) => row.order_number,
      sortable: true,
    },
    {
      name: "Order Date",
      selector: (row) => row.order_date,
      sortable: true,
    },
    {
      name: "Customer Name",
      selector: (row) => row.customer_name,
      sortable: true,
    },
    {
      name: "Status",
      selector: (row) => row.status,
    },
    {
      name: "Action",
      selector: () => (
        <Fragment>
          <button type="button" className="btn">
            <MdEdit />
          </button>
          <button type="button" className="btn btn-delete">
            <MdDelete />
          </button>
        </Fragment>
      ),
    },
  ];
  return (
    <div className="orders-list">
      <button className="orders-add-btn">Add New</button>
      <DataTable
        title="Orders List"
        columns={columns}
        data={ordersData}
        pagination
      />
    </div>
  );
}

export default Orders;
