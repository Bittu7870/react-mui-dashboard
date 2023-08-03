import React, { useState } from "react";
import { useTheme } from "@mui/material";
import { tokens } from "../../theme";
import { Box } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import Header from "../../components/Header";
import { ProductsApi } from "../../services/api/api.Service";

const Products = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const [products, setProducts] = useState([]);

  const convertUppercase = (data) => {
    const newData = [];
    for (let eachData of data) {
      newData.push(eachData.split(",").join(" ").toUpperCase());
    }
    return newData;
  };

  const keys = products && products.length > 0 ? Object.keys(products[0]) : [];
  //   console.log(convertUppercase(keys));
  const KEYS = convertUppercase(keys);

  ProductsApi()
    .then((response) => {
      //   console.log(response.data.data);
      setProducts(response.data.data);
    })
    .catch((error) => console.log(error));

  const columns = keys.map((keys, index) => ({
    field: keys,
    headerName: KEYS[index],
  }));

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
        <DataGrid
          rows={products}
          columns={columns}
          components={{ Toolbar: GridToolbar }}
        />
      </Box>
    </Box>
  );
};

export default Products;
