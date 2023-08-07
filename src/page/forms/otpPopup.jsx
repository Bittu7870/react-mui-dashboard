import React, { useState } from "react";
import { Dialog, DialogTitle, DialogContent, Button } from "@mui/material";
import OtpInput from "react-otp-input";

const OtpPopup = ({ open, onClose }) => {
  const [otpValue, setOtpValue] = useState("");
  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>OTP Verification</DialogTitle>
      <DialogContent>
        <OtpInput
          value={otpValue}
          onChange={setOtpValue}
          numInputs={4}
          renderSeparator={<span>-</span>}
          renderInput={(props) => <input {...props} />}
          inputStyle={{
            width: "100px",
            height: "100px",
            margin: "0 10px",
            fontSize: "30px",
            borderRadius: "4px",
            border: "1px solid #ced4da",
            outline: "none",
            textAlign: "center",
          }}
        />
      </DialogContent>
      <Button onClick={onClose}>Close</Button>
    </Dialog>
  );
};

export default OtpPopup;
