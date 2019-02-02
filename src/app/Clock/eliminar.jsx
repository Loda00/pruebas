import React from 'react'
import { TextField, Button, Dialog, DialogTitle, DialogContent, DialogActions, DialogContentText, Dra } from '@material-ui/core'

class DraggableDialog extends React.Component {
    state = {
      open: false,
    };
  
    handleClickOpen = () => {
      this.setState({ open: true });
    };
  
    handleClose = () => {
      this.setState({ open: false });
    };
  
    render() {
      return (
        <div>
          <Button variant="outlined" color="primary" onClick={this.handleClickOpen}>
            Open form dialog
          </Button>
          <Dialog
            open={this.state.open}
            onClose={this.handleClose}
            // PaperComponent={PaperComponent}
            aria-labelledby="draggable-dialog-title"
          >
            <DialogTitle id="draggable-dialog-title">Subscribe</DialogTitle>
            <DialogContent>
              <DialogContentText>
                To subscribe to this website, please enter your email address here. We will send
                updates occasionally.
              </DialogContentText>
            </DialogContent>
            <DialogActions>
              <Button onClick={this.handleClose} color="primary">
                Cancel
              </Button>
              <Button onClick={this.handleClose} color="primary">
                Subscribe
              </Button>
            </DialogActions>
          </Dialog>
        </div>
      );
    }
  }
  
  export default DraggableDialog;