import React, { Component } from "react";
import "./Form.css";
import Button from "@material-ui/core/Button";
import AddIcon from '@material-ui/icons/Add';
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import { geolocated } from 'react-geolocated';

class Form extends React.Component {
  state = {
    open: false
  };

  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  render() {
    console.log('get coordinates >>> ',this.props.coords)
    return (
      <div className="contactButton">
        <Button
          variant="fab"
          color="primary"
          aria-label="Add"
          onClick={this.handleClickOpen}
        >
          <AddIcon />
        </Button>
        <Dialog
          open={this.state.open}
          onClose={this.handleClose}
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle id="form-dialog-title">
          </DialogTitle>
          <DialogContent>
            <DialogContentText>Text</DialogContentText>
            <TextField
              autoFocus
              margin="dense"
              id="email"
              label="Email Address"
              type="email"
              fullWidth
            />
            <TextField margin="dense" id="message" label="Message" fullWidth />
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleClose} color="primary">
              Cancel
            </Button>
            <Button onClick={this.handleClose} color="primary">
              Send
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}

export default geolocated({
  positionOptions: {
    enableHighAccuracy: true,
  },
  userDecisionTimeout: null,
  watchPosition: true
})(Form);