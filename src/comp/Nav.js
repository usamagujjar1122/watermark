import { Paper, Stack, TextField, Typography } from "@mui/material";
import Auth from "./Auth";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import * as React from 'react';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};
const Nav = ({ open, setOpen }) => {
    const handleClose = () => setOpen(false);
    const [value, setValue] = React.useState('1');

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <>
            <Stack direction="row" sx={{ justifyContent: 'space-between', alignItems: 'center', '& p': { fontSize: { xs: '0.8rem', md: '1.25rem' } }, padding: { xs: '16px 10px', md: '20px 50px' } }}>
                <Typography sx={{ fontWeight: 'bold', fontSize: { xs: '1rem !important', md: '2rem !important' } }}> <span style={{ backgroundColor: '#222', color: 'white', padding: '5px 10px' }}> Watermark </span> <span style={{ backgroundColor: '#FFD700', padding: '5px 10px' }}> AI</span></Typography>
                <Stack direction="row" sx={{ gap: { xs: '10px', md: '20px' } }}>
                    <Typography sx={{ fontWeight: '600', cursor: 'pointer', '&:hover': { color: 'gray', } }}>Pricing</Typography>
                    <Typography sx={{ fontWeight: '600', cursor: 'pointer', '&:hover': { color: 'gray', } }}>Help</Typography>
                    <Typography sx={{ fontWeight: '600', cursor: 'pointer', '&:hover': { color: 'gray', } }} onClick={() => setOpen(true)}>Login</Typography>
                </Stack>
            </Stack>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
                sx={{}}
            >
                <Paper sx={{ outline: 'none', padding: '20px', position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)' }}>
                    <Box sx={{ width: '100%', typography: 'body1' }}>
                        <TabContext value={value}>
                            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                                <TabList onChange={handleChange} aria-label="lab API tabs example" sx={{'& .MuiTabs-flexContainer' :{justifyContent:'center !important'} }}>
                                    <Tab label="Login" value="1" />
                                    <Tab label="Sign Up" value="2" />
                                </TabList>
                            </Box>
                            <TabPanel value="1">
                                <Stack sx={{gap:'20px'}}>
                                        <TextField id="outlined-basic" label="Email" variant="outlined" size="small"/>
                                        <TextField id="outlined-basic" label="Password" variant="outlined" size="small"/>
                                        <Stack sx={{gap:'5px'}}>
                                        <Button variant="contained" color="primary">Login</Button>
                                        <Typography sx={{textAlign:'center',cursor:'pointer',fontWeight:'bold',fontSize:'0.8rem'}} color="primary">Fotgot Password?</Typography>
                                        </Stack>
                                        <Typography sx={{textAlign:'center'}}>OR</Typography>
                                </Stack>
                            </TabPanel>
                            <TabPanel value="2">
                            <Stack sx={{gap:'20px'}}>
                                        <TextField id="outlined-basic" label="Email" variant="outlined" size="small"/>
                                        <TextField id="outlined-basic" label="Password" variant="outlined" size="small"/>
                                        <Stack sx={{gap:'5px'}}>
                                        <Button variant="contained" color="primary">Signup</Button>
                                        <Typography sx={{textAlign:'center',cursor:'pointer',fontWeight:'bold',fontSize:'0.8rem'}} color="primary">Fotgot Password?</Typography>
                                        </Stack>
                                        <Typography sx={{textAlign:'center'}}>OR</Typography>
                                        
                                </Stack>
                            </TabPanel>
                        </TabContext>
                    </Box>
                </Paper>
            </Modal>
        </>
    );
}

export default Nav;