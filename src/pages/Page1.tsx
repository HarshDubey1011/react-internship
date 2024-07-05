import { useState } from 'react';
import { Button, TextField, Dialog, DialogActions, DialogContent, DialogTitle, Box, Typography } from '@mui/material';

const Page1 = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [open, setOpen] = useState(false);

  const handleSubmit = () => {
    if (!name || !phone || !email) {
      setOpen(true);
    } else {
      localStorage.setItem('userDetails', JSON.stringify({ name, phone, email }));
      window.location.href = '/page2';
    }
  };

  const handleDialogClose = () => {
    setOpen(false);
  };

  return (
    <div>
     <Typography variant='h3'>Page 1</Typography>
      <Box
        display="flex"
        justifyContent="center"
        height="100vh"
        padding={4}
      >
        
        <Box maxWidth={400} width="100%">
          <form>
            <TextField
              label="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              margin="normal"
            />
            <TextField
              label="Phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              margin="normal"
            />
            <TextField
              label="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              margin="normal"
            />
            <br />
            <Button
              variant="contained"
              size="large"
              onClick={handleSubmit}
              sx={{ marginTop: 2 }}
            >
              Submit
            </Button>
          </form>
        </Box>
      </Box>
      {open && (
        <Dialog open={open} onClose={handleDialogClose}>
          <DialogTitle>Please fill details!</DialogTitle>
          <DialogContent>
            <Typography>You must enter your details before accessing the next page.</Typography>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleDialogClose}>Close</Button>
          </DialogActions>
        </Dialog>
      )}
    </div>
  );
};

export default Page1;