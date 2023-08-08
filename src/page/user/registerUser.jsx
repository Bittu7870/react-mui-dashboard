import React from "react";
import { Box, Button, TextField } from "@mui/material";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Header from "../../components/Header";
import { IMG_PATH } from "../../constant/path";
import { RegisterApi } from "../../services/api/api.Service";
import OtpPopup from "../forms/otpPopup";

const SignUp = () => {
  const initialValues = {
    firstname: "",
    email: "",
    pwd: "",
    reg_date: "",
    mobile: "",
  };

  const phoneRegExp =
    /^((\+[1-9]{1,4}[ -]?)|(\([0-9]{2,3}\)[ -]?)|([0-9]{2,4})[ -]?)*?[0-9]{3,4}[ -]?[0-9]{3,4}$/;

  const [formValues, setFormValues] = React.useState(initialValues);
  const [formErrors, setFormErrors] = React.useState({});
  const [showOtpPopup, setShowOtpPopup] = React.useState(false);

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
    if (!formValues.firstname) {
      errors.firstname = toast("Full name is Required");
    }
    if (!formValues.email) {
      errors.email = toast("Email is Required");
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formValues.email)
    ) {
      errors.email = toast("Invalid email address");
    }

    if (!formValues.pwd) {
      errors.pwd = toast("Password is Required");
    } else if (!phoneRegExp.test(formValues.pwd)) {
      errors.pwd = toast("Phone number is not valid");
    }
    if (!formValues.reg_date) {
      errors.reg_date = toast("Date is Required");
    }
    if (!formValues.mobile) {
      errors.mobile = toast("Phone Number is Required");
    }

    setFormErrors(errors);

    // If there are no errors, submit the form
    if (Object.keys(errors).length === 0) {
      console.log(formValues);
      RegisterApi(formValues)
        .then((response) => {
          console.log("Register Successfully :", response);
          toast.success("Register successfully!");

          setFormValues(initialValues);
          setShowOtpPopup(true);
        })
        .catch((error) => {
          console.log("Error Register post:", error);
          toast.error("Error Register post. Please try again later.");
        });
    }
  };

  const handleInputBlur = (e) => {
    const { name } = e.target;

    // Validate the field on blur
    if (
      name === "email" &&
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formValues[name])
    ) {
      setFormErrors((prevErrors) => ({
        ...prevErrors,
        [name]: toast("Invalid email address"),
      }));
    } else if (name === "password" && !phoneRegExp.test(formValues[name])) {
      setFormErrors((prevErrors) => ({
        ...prevErrors,
        [name]: toast("Password is not valid"),
      }));
    } else {
      setFormErrors((prevErrors) => ({
        ...prevErrors,
        [name]: "",
      }));
    }
  };

  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      minHeight="90vh"
    >
      <ToastContainer />
      <Box display="flex" justifyContent="center" alignItems="center">
        <img
          alt="profile-user"
          width="100px"
          height="100px"
          src={`${IMG_PATH}picture.png`}
          style={{ borderRadius: "50%" }}
        />
      </Box>
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Header subtitle="Welcome to SignUp page" />
      </Box>
      <form onSubmit={handleFormSubmit}>
        <Box mb={2}>
          <TextField
            fullWidth
            variant="outlined"
            type="text"
            label="Full Name"
            value={formValues.firstname}
            name="firstname"
            error={!!formErrors.firstname}
            helperText={formErrors.firstname}
            onBlur={handleInputBlur}
            onChange={handleInputChange}
          />
        </Box>
        <Box mb={2}>
          <TextField
            fullWidth
            variant="outlined"
            type="email"
            label="Email"
            value={formValues.email}
            name="email"
            error={!!formErrors.email}
            helperText={formErrors.email}
            onBlur={handleInputBlur}
            onChange={handleInputChange}
          />
        </Box>
        <Box mb={2}>
          <TextField
            fullWidth
            variant="outlined"
            type="password"
            label="Password"
            value={formValues.pwd}
            name="pwd"
            error={!!formErrors.pwd}
            helperText={formErrors.pwd}
            onBlur={handleInputBlur}
            onChange={handleInputChange}
          />
        </Box>
        <Box mb={2}>
          <TextField
            fullWidth
            variant="outlined"
            type="date"
            label=""
            value={formValues.reg_date}
            name="reg_date"
            error={!!formErrors.reg_date}
            helperText={formErrors.reg_date}
            onBlur={handleInputBlur}
            onChange={handleInputChange}
          />
        </Box>
        <Box mb={2}>
          <TextField
            fullWidth
            variant="outlined"
            type="number"
            label="Phone"
            value={formValues.mobile}
            name="mobile"
            error={!!formErrors.mobile}
            helperText={formErrors.mobile}
            onBlur={handleInputBlur}
            onChange={handleInputChange}
          />
        </Box>
        <Button type="submit" color="secondary" variant="contained">
          SignUp
        </Button>
        <OtpPopup open={showOtpPopup} onClose={() => setShowOtpPopup(false)} />
        <label>
          <a
            href="/"
            style={{
              marginLeft: "18px",
              marginTop: "15px",
              // textDecoration: "none",
              color: "white",
              fontSize: "17px",
            }}
          >
            Back To login page
          </a>
        </label>
      </form>
    </Box>
  );
};

export default SignUp;
