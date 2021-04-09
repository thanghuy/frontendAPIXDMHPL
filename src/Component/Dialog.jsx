import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { useHistory } from "react-router-dom";
export default function AlertDialog(prop) {
  const [open, setOpen] = React.useState(true);
  const history = useHistory();
  const handleClose = () => {
    setOpen(false);
    prop.CallBack();
  };
  const handleRedirect =()=>{
    history.push("/user/login-register");
  }
  
  return (
    <div>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{prop.Content}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            {}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleRedirect}  variant="outlined" color="primary">
            {prop.TitleButton}
          </Button>
          <Button onClick={handleClose} variant="outlined" color="secondary" autoFocus>
            Đóng 
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}