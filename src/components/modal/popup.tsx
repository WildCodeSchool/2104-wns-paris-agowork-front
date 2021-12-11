import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";

export default function Popup({ createdCampus }: any) {
  const [open, setOpen] = useState(false);
  const handleClose = () => setOpen(false);
  useEffect(() => {
    return () => {
      setOpen(true);
    };
  }, [createdCampus]);

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            {createdCampus.name}
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            {createdCampus.address}
            {createdCampus.phone}
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}
