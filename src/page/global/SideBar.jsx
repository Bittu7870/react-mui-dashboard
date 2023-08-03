import React from "react";
import { useState } from "react";
import { Sidebar, Menu, MenuItem } from "react-pro-sidebar";
import { Box, IconButton, Typography, useTheme } from "@mui/material";
import { Link } from "react-router-dom";
import { tokens } from "../../theme";
import { IMG_PATH } from "../../constant/path";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";
import ContactsOutlinedIcon from "@mui/icons-material/ContactsOutlined";
import ReceiptOutlinedIcon from "@mui/icons-material/ReceiptOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import BarChartOutlinedIcon from "@mui/icons-material/BarChartOutlined";
import PieChartOutlineOutlinedIcon from "@mui/icons-material/PieChartOutlineOutlined";
import TimelineOutlinedIcon from "@mui/icons-material/TimelineOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import MapOutlinedIcon from "@mui/icons-material/MapOutlined";

const Item = ({ title, to, icon, selected, setSelected }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const handleItemClick = () => {
    setSelected(title);
  };

  return (
    <MenuItem
      selected={selected === title}
      style={{ color: colors.grey[100] }}
      icon={icon}
      onClick={handleItemClick}
    >
      <Link to={to} style={{ textDecoration: "none" }}>
        <Typography>{title}</Typography>
      </Link>
    </MenuItem>
  );
};
const SideBar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const [isCollapsed, setIsCollapsed] = useState(false);
  const [selected, setSelected] = useState("Dashboard");

  return (
    <Box
      sx={{
        "& .pro-sidebar-inner": {
          background: `${colors.primary[400]} !important`,
        },
        "& .pro-icon-wrapper": {
          backgroundColor: "transparent !important",
        },
        "& .pro-inner-item": {
          padding: "5px 35px 5px 20px !important",
        },
        "& .pro-inner-item:hover": {
          color: "#868dfb !important",
        },
        "& .pro-menu-item.active": {
          color: "#6870fa !important",
        },
      }}
    >
      <Sidebar collapsed={isCollapsed}>
        <Menu iconShape="square">
          {/* Logo And Menu Icon */}
          <MenuItem
            onClick={() => setIsCollapsed(!isCollapsed)}
            icon={isCollapsed ? <MenuOutlinedIcon /> : undefined}
          >
            {!isCollapsed && (
              <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                ml="15px"
              >
                <Typography variant="h3" color={colors.grey[100]}>
                  ADMIN
                </Typography>
                <IconButton onClick={() => setIsCollapsed(!isCollapsed)}>
                  <MenuOutlinedIcon />
                </IconButton>
              </Box>
            )}
          </MenuItem>

          {!isCollapsed && (
            <Box mb="25px">
              <Box display="flex" justifyContent="center" alignItems="center">
                <img
                  alt="profile-user"
                  width="100px"
                  height="100px"
                  src={`${IMG_PATH}picture.png`}
                  style={{ cursor: "pointer", borderRadius: "50%" }}
                />
              </Box>
              <Box textAlign="center">
                <Typography
                  variant="h2"
                  color={colors.grey[100]}
                  fontWeight="bold"
                  sx={{ m: "10px 0 0 0" }}
                >
                  Amit Singh
                </Typography>
                <Typography variant="h5" color={colors.greenAccent[500]}>
                  Admin
                </Typography>
              </Box>
            </Box>
          )}
          {/* pages */}
          <Box paddingLeft={isCollapsed ? undefined : "10%"}>
            <Item
              title="Dashboard"
              to="/"
              icon={<HomeOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            {/* section */}
            <Typography
              variant="h6"
              color={colors.grey[300]}
              sx={{ m: "15px 0 5px 20px" }}
            >
              Data
            </Typography>

            <Item
              title="Manage Team"
              to="/team"
              icon={<PeopleOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Products Information"
              to="/products"
              icon={<ContactsOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Invoices Balances"
              to="/invoices"
              icon={<ReceiptOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />

            <Typography
              variant="h6"
              color={colors.grey[300]}
              sx={{ m: "15px 0 5px 20px" }}
            >
              Pages
            </Typography>
            <Item
              title="Product Form"
              to="/form"
              icon={<PersonOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Calendar"
              to="/calendar"
              icon={<CalendarTodayOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="FAQ Page"
              to="/faq"
              icon={<HelpOutlineOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />

            <Typography
              variant="h6"
              color={colors.grey[300]}
              sx={{ m: "15px 0 5px 20px" }}
            >
              Charts
            </Typography>
            <Item
              title="Bar Chart"
              to="/bar"
              icon={<BarChartOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Pie Chart"
              to="/pie"
              icon={<PieChartOutlineOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Line Chart"
              to="/line"
              icon={<TimelineOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Geography Chart"
              to="/geography"
              icon={<MapOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
          </Box>
        </Menu>
      </Sidebar>
    </Box>
  );
};
export default SideBar;

// import React from "react";
// import { useState } from "react";
// import { Box, IconButton, Typography, useTheme } from "@mui/material";
// import { Link } from "react-router-dom";
// import { tokens } from "../../theme";
// import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
// import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";
// import ContactsOutlinedIcon from "@mui/icons-material/ContactsOutlined";
// import ReceiptOutlinedIcon from "@mui/icons-material/ReceiptOutlined";
// import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
// import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
// import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
// import BarChartOutlinedIcon from "@mui/icons-material/BarChartOutlined";
// import PieChartOutlineOutlinedIcon from "@mui/icons-material/PieChartOutlineOutlined";
// import TimelineOutlinedIcon from "@mui/icons-material/TimelineOutlined";
// import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
// import MapOutlinedIcon from "@mui/icons-material/MapOutlined";

// const Item = ({ title, to, icon, selected, setSelected }) => {
//   const theme = useTheme();
//   const colors = tokens(theme.palette.mode);

//   const handleItemClick = () => {
//     setSelected(title);
//   };

//   return (
//     <Box
//       display="flex"
//       alignItems="center"
//       mt={1}
//       ml={2}
//       color={selected === title ? colors.primary[400] : colors.grey[100]}
//       fontWeight={selected === title ? "bold" : "regular"}
//       sx={{ cursor: "pointer", "&:hover": { color: "#868dfb" } }}
//       onClick={handleItemClick}
//     >
//       {icon}
//       <Link to={to} style={{ textDecoration: "none", marginLeft: "10px" }}>
//         <Typography>{title}</Typography>
//       </Link>
//     </Box>
//   );
// };

// const Sidebar = () => {
//   const theme = useTheme();
//   const colors = theme.palette;

//   const [isCollapsed, setIsCollapsed] = useState(false);
//   const [selected, setSelected] = useState("Dashboard");

//   return (
//     <Box
//       sx={{
//         backgroundColor: colors.primary[400],
//         transition: "width 0.2s",
//       }}
//     >
//       {/* Logo And Menu Icon */}
//       <Box
//         display="flex"
//         alignItems="center"
//         justifyContent="space-between"
//         p={2}
//       >
//         <Typography
//           variant={isCollapsed ? "h4" : "h3"}
//           color={colors.grey[300]}
//         >
//           ADMIN
//         </Typography>
//         <IconButton onClick={() => setIsCollapsed(!isCollapsed)}>
//           {isCollapsed ? <MenuOutlinedIcon /> : undefined}
//         </IconButton>
//       </Box>

//       {!isCollapsed && (
//         <Box p={2}>
//           <Box display="flex" justifyContent="center" alignItems="center">
//             <img
//               alt="profile-user"
//               width="100px"
//               height="100px"
//               src={`../../assets/picture.png`}
//               style={{ cursor: "pointer", borderRadius: "50%" }}
//             />
//           </Box>
//           <Box textAlign="center" mt={2}>
//             <Typography variant="h2" color={colors.grey[100]}>
//               Amit Singh
//             </Typography>
//             <Typography variant="h5">Admin</Typography>
//           </Box>
//         </Box>
//       )}

//       {/* Pages */}
//       <Box mt={2}>
//         <Item
//           title="Dashboard"
//           to="/"
//           icon={<HomeOutlinedIcon />}
//           selected={selected}
//           setSelected={setSelected}
//         />
//         {/* section */}
//         <Typography
//           variant="h6"
//           color={colors.grey[300]}
//           sx={{ m: "15px 0 5px 20px" }}
//         >
//           Data
//         </Typography>

//         <Item
//           title="Manage Team"
//           to="/team"
//           icon={<PeopleOutlinedIcon />}
//           selected={selected}
//           setSelected={setSelected}
//         />
//         <Item
//           title="Customer Information"
//           to="/contacts"
//           icon={<ContactsOutlinedIcon />}
//           selected={selected}
//           setSelected={setSelected}
//         />
//         <Item
//           title="Invoices Balances"
//           to="/invoices"
//           icon={<ReceiptOutlinedIcon />}
//           selected={selected}
//           setSelected={setSelected}
//         />

//         <Typography
//           variant="h6"
//           color={colors.grey[300]}
//           sx={{ m: "15px 0 5px 20px" }}
//         >
//           Pages
//         </Typography>
//         <Item
//           title="Profile Form"
//           to="/form"
//           icon={<PersonOutlinedIcon />}
//           selected={selected}
//           setSelected={setSelected}
//         />
//         <Item
//           title="Calendar"
//           to="/calendar"
//           icon={<CalendarTodayOutlinedIcon />}
//           selected={selected}
//           setSelected={setSelected}
//         />
//         <Item
//           title="FAQ Page"
//           to="/faq"
//           icon={<HelpOutlineOutlinedIcon />}
//           selected={selected}
//           setSelected={setSelected}
//         />

//         <Typography
//           variant="h6"
//           color={colors.grey[300]}
//           sx={{ m: "15px 0 5px 20px" }}
//         >
//           Charts
//         </Typography>
//         <Item
//           title="Bar Chart"
//           to="/bar"
//           icon={<BarChartOutlinedIcon />}
//           selected={selected}
//           setSelected={setSelected}
//         />
//         <Item
//           title="Pie Chart"
//           to="/pie"
//           icon={<PieChartOutlineOutlinedIcon />}
//           selected={selected}
//           setSelected={setSelected}
//         />
//         <Item
//           title="Line Chart"
//           to="/line"
//           icon={<TimelineOutlinedIcon />}
//           selected={selected}
//           setSelected={setSelected}
//         />
//         <Item
//           title="Geography Chart"
//           to="/geography"
//           icon={<MapOutlinedIcon />}
//           selected={selected}
//           setSelected={setSelected}
//         />
//       </Box>
//     </Box>
//   );
// };

// export default Sidebar;
