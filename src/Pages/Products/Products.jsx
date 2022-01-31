import React, { Fragment, useEffect, useState } from "react";
import "./products.css";
import DataTable from "react-data-table-component";
import axios from "axios";
import { MdEdit, MdDelete } from "react-icons/md";

function Products() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const getProducts = async () => {
    setLoading(true);
    await axios
      .get("https://fakestoreapi.com/products")
      .then((response) => {
        setLoading(false);
        setProducts(response.data);
      })
      .catch((e) => {
        console.log(e.response);
      });
  };
  useEffect(() => {
    getProducts();
  }, []);
  const columns = [
    {
      name: "Id",
      selector: (row) => row.id,
      sortable: true,
    },
    {
      name: "Product Name",
      selector: (row) => row.title,
      sortable: true,
    },
    {
      name: "Image",
      selector: (row) => (
        <img src={row.image} alt={row.id} className="products-image" />
      ),
    },
    {
      name: "Product Price",
      selector: (row) => row.price,
      sortable: true,
    },
    {
      name: "Category",
      selector: (row) => row.category,
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
    <div className="products-list">
      <button className="products-add-btn">Add New</button>
      <DataTable
        title="Products List"
        columns={columns}
        data={products}
        pagination
        progressPending={loading}
      />
    </div>
  );
}

export default Products;
