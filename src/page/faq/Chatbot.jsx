import React from "react";
import { Box, ThemeProvider } from "@mui/material";
import ChatBot from "react-simple-chatbot";
import { IMG_PATH } from "../../constant/path";

const Chatbot = () => {
  const steps = [
    {
      id: "0",
      message: "Hey Bittu!",
      trigger: 1,
    },
    {
      id: "1",
      message: "Please write your name",
      trigger: 2,
    },
    {
      id: "2",
      user: true,
      trigger: 3,
    },
    {
      id: "3",
      message: "Hey {previousValue}, how can I help you ?",
      trigger: 4,
    },
    {
      id: "4",
      options: [
        { value: 1, label: "View Courses" },
        { value: 2, label: "Read Articles" },
      ],
      end: true,
    },
  ];
  const theme = {
    background: "#C9FF8F",
    headerBgColor: "#197B22",
    headerFontSize: "20px",
    botBubbleColor: "#0F3789",
    headerFontColor: "white",
    botFontColor: "white",
    userBubbleColor: "#FF5733",
    userFontColor: "white",
  };
  const config = {
    botAvatar: `${IMG_PATH}picture.png`,
    floating: true,
  };

  return (
    <Box>
      <ThemeProvider theme={theme}>
        <ChatBot headerTitle="BittuBot" steps={steps} {...config} />
      </ThemeProvider>
    </Box>
  );
};

export default Chatbot;
