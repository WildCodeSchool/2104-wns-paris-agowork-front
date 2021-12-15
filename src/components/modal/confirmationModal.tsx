import { Report } from "@mui/icons-material";
import { Modal, Typography } from "@mui/material";
import React from "react";
import {
  BorderedButton,
  ColoredButton,
  Popup,
} from "../../assets/styles/global";
import { BoxIcon } from "../../assets/styles/list/userList";

const ConfirmationModal = ({
  handleDelete,
  handleClose,
  open,
}: any): JSX.Element => {
  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-deleteUser-title"
    >
      <Popup>
        <Report />
        <Typography
          id="modal-deleteUser-title"
          variant="h6"
          component="h2"
          sx={{ marginBottom: 2 }}
        >
          Êtes-vous sûr de vouloir supprimer définitivement ?
        </Typography>
        <BoxIcon>
          <BorderedButton sx={{ marginRight: 2 }} onClick={handleClose}>
            Non
          </BorderedButton>
          <ColoredButton onClick={handleDelete}>Oui</ColoredButton>
        </BoxIcon>
      </Popup>
    </Modal>
  );
};

export default ConfirmationModal;
