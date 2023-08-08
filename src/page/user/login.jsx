import React from "react";
import { Box, Button, TextField } from "@mui/material";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Header from "../../components/Header";
import { IMG_PATH } from "../../constant/path";
import { LoginApi } from "../../services/api/api.Service";

const Login = () => {
  const initialValues = {
    username: "",
    passwd: "",
  };

  const phoneRegExp =
    /^((\+[1-9]{1,4}[ -]?)|(\([0-9]{2,3}\)[ -]?)|([0-9]{2,4})[ -]?)*?[0-9]{3,4}[ -]?[0-9]{3,4}$/;

  const [formValues, setFormValues] = React.useState(initialValues);
  const [formErrors, setFormErrors] = React.useState({});

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

    if (!formValues.username) {
      errors.username = toast("Required");
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formValues.username)
    ) {
      errors.username = toast("Invalid username address");
    }

    if (!formValues.passwd) {
      errors.passwd = toast("Required");
    } else if (!phoneRegExp.test(formValues.passwd)) {
      errors.passwd = toast("Password is not valid");
    }

    setFormErrors(errors);

    // If there are no errors, submit the form
    if (Object.keys(errors).length === 0) {
      console.log(formValues);
      LoginApi(formValues)
        .then((response) => {
          const data = response.data.data;
          console.log("Login Successfully :", data);
          toast.success("Login successfully!");
          return data;
        })
        .then((response) => {
          response.map((e) => {
            const token = e.token;
            localStorage.setItem("Token", token);
            setTimeout(() => {
              window.location.href = "/dashboard";
            }, 1000);
          });
        })
        .catch((error) => {
          console.log("Error Login :", error);
          toast.error("Error Login . Please try again later.");
        });
    }
  };

  const handleInputBlur = (e) => {
    const { name } = e.target;

    // Validate the field on blur
    if (
      name === "username" &&
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formValues[name])
    ) {
      setFormErrors((prevErrors) => ({
        ...prevErrors,
        [name]: "Invalid username ",
      }));
    } else if (name === "passwd" && !phoneRegExp.test(formValues[name])) {
      setFormErrors((prevErrors) => ({
        ...prevErrors,
        [name]: "Password is not valid",
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
        <Header subtitle="Welcome to login page" />
      </Box>
      <form onSubmit={handleFormSubmit}>
        <Box mb={2}>
          <TextField
            fullWidth
            variant="filled"
            type="email"
            label="Username"
            value={formValues.username}
            name="username"
            error={!!formErrors.username}
            helperText={formErrors.username}
            onBlur={handleInputBlur}
            onChange={handleInputChange}
          />
        </Box>
        <Box mb={2}>
          <TextField
            fullWidth
            variant="filled"
            type="password"
            label="Password"
            value={formValues.passwd}
            name="passwd"
            error={!!formErrors.passwd}
            helperText={formErrors.passwd}
            onBlur={handleInputBlur}
            onChange={handleInputChange}
          />
        </Box>
        <Button type="submit" color="secondary" variant="contained">
          LogIn
        </Button>
        <label>
          <a
            href="/signup"
            style={{
              marginLeft: "18px",
              // textDecoration: "none",
              color: "white",
              fontSize: "16px",
            }}
          >
            Create New User
          </a>
        </label>
      </form>
    </Box>
  );
};

export default Login;
