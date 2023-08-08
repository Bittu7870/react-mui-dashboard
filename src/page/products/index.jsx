import React, { useState, useEffect } from "react";
import { useTheme } from "@mui/material";
import { tokens } from "../../theme";
import { Box } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import Header from "../../components/Header";
import { ProductsApi } from "../../services/api/api.Service";
import "../../assets/style.css";
import Loader from "../../components/Loader";

const Products = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  // const convertUppercase = (data) => {
  //   const newData = [];
  //   for (let eachData of data) {
  //     newData.push(eachData.split(",").join(" ").toUpperCase());
  //   }
  //   return newData;
  // };

  // const keys = products && products.length > 0 ? Object.keys(products[0]) : [];
  // const KEYS = convertUppercase(keys);

  useEffect(() => {
    ProductsApi()
      .then((response) => {
        // console.log(response.data.data);
        setProducts(response.data.data.reverse());
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, []);

  // const columns = keys.map((keys, index) => ({
  //   field: keys,
  //   headerName: KEYS[index],
  // }));
  console.log(products);

  const columns = [
    {
      field: "id",
      headerName: "ID",
      flex: 0.5,
    },
    {
      field: "categories_id",
      headerName: "CATEGORY_ID",
    },
    {
      field: "categories_name",
      headerName: "CATEGORY NAME",
      flex: 1.2,
    },
    {
      field: "title",
      headerName: "PRODUCT NAME",
      flex: 1,
    },
    {
      field: "price",
      headerName: "PRICE",
      flex: 1,
    },
    {
      field: "subtitle",
      headerName: "SHORT DESCRIPTION",
      flex: 1.3,
    },
    {
      field: "state",
      headerName: "STATE",
      flex: 1,
    },
    {
      field: "city",
      headerName: "CITY",
      flex: 1,
    },
    // {
    //   field: "country",
    //   headerName: "COUNTRY",
    // },
    // {
    //   field: "pcode",
    //   headerName: "PINCODE",
    // },
    {
      field: "img1",
      headerName: "IMAGEURL1",
      flex: 1,
    },
    {
      field: "img2",
      headerName: "IMAGEURL2",
      flex: 1,
    },
    {
      field: "img3",
      headerName: "IMAGEURL3",
      flex: 1,
    },
    {
      field: "img4",
      headerName: "IMAGEURL4",
      flex: 1,
    },
  ];

  return (
    <Box m="20px">
      <Header title="PRODUCTS INFORMATION" subtitle="List of Products" />
      <Box
        m="40px 0 0 0"
        height="75vh"
        sx={{
          "& .MuiDataGrid-root": {
            border: "none",
          },
          "& .MuiDataGrid-cell": {
            borderBottom: "none",
          },
          "& .name-column--cell": {
            color: colors.greenAccent[300],
          },
          "& .MuiDataGrid-columnHeaders": {
            backgroundColor: colors.blueAccent[700],
            borderBottom: "none",
          },
          "& .MuiDataGrid-virtualScroller": {
            backgroundColor: colors.primary[400],
          },
          "& .MuiDataGrid-footerContainer": {
            borderTop: "none",
            backgroundColor: colors.blueAccent[700],
          },
          "& .MuiCheckbox-root": {
            color: `${colors.greenAccent[200]} !important`,
          },
          "& .MuiDataGrid-toolbarContainer .MuiButton-text": {
            color: `${colors.grey[100]} !important`,
          },
        }}
      >
        {loading ? (
          <Loader />
        ) : (
          <DataGrid
            rows={products}
            columns={columns}
            components={{ Toolbar: GridToolbar }}
          />
        )}
      </Box>
    </Box>
  );
};

export default Products;
