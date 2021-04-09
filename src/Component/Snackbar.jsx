import React from 'react';
import Snackbar from '@material-ui/core/Snackbar';
import Alert from '@material-ui/lab/Alert';

export default function CustomizedSnackbars(prop) {
    const [open, setOpen] = React.useState(true);  
    const vertical = 'top';
    const horizontal = 'center';
    
    const handleClose = () => {
      setOpen(false);
      prop.CallBack();
    };
  return (
    <Snackbar 
        anchorOrigin={{ vertical, horizontal }}
        open={open} 
        autoHideDuration={1200} 
        onClose={handleClose}
    >
        <Alert variant="filled" color="success">
           Bạn đã thêm vào giỏ hàng thành công
        </Alert>
    </Snackbar>
  );
}
