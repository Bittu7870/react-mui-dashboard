import React from "react";
import { useState } from "react";
import { Box, Button, TextField } from "@mui/material";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import HorizontalLinearStepper from "./steper";
import { savePostApi } from "../services/api/api.Service";
import Header from "../components/Header";

const SavePost = () => {
  const initialValues = {
    uid: "",
    categoriesName: "",
    pname: "",
    price: "",
    category_id: "",
    short_description: "",
    imageUrl1: "",
    imageUrl2: "",
    imageUrl3: "",
    imageUrl4: "",
    state: "",
    city: "",
    country: "",
    pincode: "",
  };

  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    const errors = {};

    if (!formValues.uid) {
      errors.uid = toast("Required User Id");
    }

    if (!formValues.categoriesName) {
      errors.categoriesName = toast("categoriesName Required");
    }

    if (!formValues.pname) {
      errors.pname = toast("Product Name Required");
    }

    if (!formValues.price) {
      errors.price = toast("Price Required");
    }

    if (!formValues.category_id) {
      errors.category_id = toast("Category_id Required");
    }

    if (!formValues.short_description) {
      errors.short_description = toast("Description Required");
    }

    if (!formValues.state) {
      errors.state = toast("State Required");
    }

    if (!formValues.city) {
      errors.city = toast("City Required");
    }
    if (!formValues.country) {
      errors.country = toast("Country Required");
    }
    if (!formValues.pincode) {
      errors.pincode = toast("Pincide Required");
    }

    setFormErrors(errors);

    // form validation logic is checking if there are no errors in the form submission.
    if (Object.keys(errors).length === 0) {
      console.log(formValues);
      savePostApi(formValues)
        .then((response) => {
          console.log("Data Save Successfully :", response);
          toast.success("Post saved successfully!");
          setFormValues(initialValues);
        })
        .catch((error) => {
          console.log("Error saving post:", error);
          toast.error("Error saving post. Please try again later.");
        });
    }
  };
  return (
    <Box m="20px">
      <Header title="PRODUCT ADD" subtitle="Welcome to product add form" />
      <HorizontalLinearStepper />
      <form onSubmit={handleFormSubmit}>
        <Box
          display="grid"
          gap="30px"
          gridTemplateColumns="repeat(4, minmax(0, 1fr))"
        >
          <TextField
            fullWidth
            variant="filled"
            type="number"
            label="User ID"
            value={formValues.uid}
            name="uid"
            error={!!formErrors.uid}
            helperText={formErrors.uid}
            // onBlur={handleInputBlur}
            onChange={handleInputChange}
            sx={{ gridColumn: "span 1" }}
          />
          <TextField
            fullWidth
            variant="filled"
            type="text"
            label="Categories Name"
            value={formValues.categoriesName}
            name="categoriesName"
            error={!!formErrors.categoriesName}
            helperText={formErrors.categoriesName}
            // onBlur={handleInputBlur}
            onChange={handleInputChange}
            sx={{ gridColumn: "span 3" }}
          />
          <TextField
            fullWidth
            variant="filled"
            type="text"
            label="Product Name"
            value={formValues.pname}
            name="pname"
            error={!!formErrors.pname}
            helperText={formErrors.pname}
            // onBlur={handleInputBlur}
            onChange={handleInputChange}
            sx={{ gridColumn: "span 2" }}
          />
          <TextField
            fullWidth
            variant="filled"
            type="number"
            label="Price"
            value={formValues.price}
            name="price"
            error={!!formErrors.price}
            helperText={formErrors.price}
            // onBlur={handleInputBlur}
            onChange={handleInputChange}
            sx={{ gridColumn: "span 2" }}
          />
          <TextField
            fullWidth
            variant="filled"
            type="text"
            label="Category ID"
            value={formValues.category_id}
            name="category_id"
            error={!!formErrors.category_id}
            helperText={formErrors.category_id}
            // onBlur={handleInputBlur}
            onChange={handleInputChange}
            sx={{ gridColumn: "span 1" }}
          />
          <TextField
            fullWidth
            variant="filled"
            type="textarea"
            label="Short Description"
            value={formValues.short_description}
            name="short_description"
            error={!!formErrors.short_description}
            helperText={formErrors.short_description}
            // onBlur={handleInputBlur}
            onChange={handleInputChange}
            sx={{ gridColumn: "span 3" }}
          />
          <TextField
            fullWidth
            variant="filled"
            type="text"
            label="ImageUrl1"
            value={formValues.imageUrl1}
            name="imageUrl1"
            error={!!formErrors.imageUrl1}
            helperText={formErrors.imageUrl1}
            // onBlur={handleInputBlur}
            onChange={handleInputChange}
            sx={{ gridColumn: "span 1" }}
          />
          <TextField
            fullWidth
            variant="filled"
            type="text"
            label="ImageUrl2"
            value={formValues.imageUrl2}
            name="imageUrl2"
            error={!!formErrors.imageUrl2}
            helperText={formErrors.imageUrl2}
            // onBlur={handleInputBlur}
            onChange={handleInputChange}
            sx={{ gridColumn: "span 1" }}
          />
          <TextField
            fullWidth
            variant="filled"
            type="text"
            label="ImageUrl3"
            value={formValues.imageUrl3}
            name="imageUrl3"
            error={!!formErrors.imageUrl3}
            helperText={formErrors.imageUrl3}
            // onBlur={handleInputBlur}
            onChange={handleInputChange}
            sx={{ gridColumn: "span 1" }}
          />
          <TextField
            fullWidth
            variant="filled"
            type="text"
            label="ImageUrl4"
            value={formValues.imageUrl4}
            name="imageUrl4"
            error={!!formErrors.imageUrl4}
            helperText={formErrors.imageUrl4}
            // onBlur={handleInputBlur}
            onChange={handleInputChange}
            sx={{ gridColumn: "span 1" }}
          />
          <TextField
            fullWidth
            variant="filled"
            type="text"
            label="State"
            value={formValues.state}
            name="state"
            error={!!formErrors.state}
            helperText={formErrors.state}
            // onBlur={handleInputBlur}
            onChange={handleInputChange}
            sx={{ gridColumn: "span 1" }}
          />
          <TextField
            fullWidth
            variant="filled"
            type="text"
            label="City"
            value={formValues.city}
            name="city"
            error={!!formErrors.city}
            helperText={formErrors.city}
            // onBlur={handleInputBlur}
            onChange={handleInputChange}
            sx={{ gridColumn: "span 1" }}
          />
          <TextField
            fullWidth
            variant="filled"
            type="text"
            label="Country"
            value={formValues.country}
            name="country"
            error={!!formErrors.country}
            helperText={formErrors.country}
            // onBlur={handleInputBlur}
            onChange={handleInputChange}
            sx={{ gridColumn: "span 1" }}
          />
          <TextField
            fullWidth
            variant="filled"
            type="number"
            label="Pin Code"
            value={formValues.pincode}
            name="pincode"
            error={!!formErrors.pincode}
            helperText={formErrors.pincode}
            // onBlur={handleInputBlur}
            onChange={handleInputChange}
            sx={{ gridColumn: "span 1" }}
          />

          <ToastContainer />
        </Box>
        <Box display="flex" justifyContent="end" mt="20px">
          <Button type="submit" color="secondary" variant="contained">
            Create New Product
          </Button>
        </Box>
      </form>
    </Box>
  );
};

export default SavePost;
