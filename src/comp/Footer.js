import { Stack, Typography } from "@mui/material";

const Footer = () => {
    return ( 
    <>
        <Stack sx={{backgroundColor:'rgba(237,242,247,1)',padding:{xs:'5px',md:'20px',position:'static',bottom:'0%',width:'100%'},justifyContent:'space-between'}}>
            <Typography sx={{color:'gray',fontSize:{xs:'0.6rem',md:'1rem',textAlign:'center'}}}>© Copyright 2023 WatermarkAI</Typography>
        </Stack>
    </>
     );
}
 
export default Footer;