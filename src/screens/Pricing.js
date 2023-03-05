import { Button, Grid, Paper, Stack, Typography, useMediaQuery } from "@mui/material";

const Pricing = () => {
    const matches = useMediaQuery('(min-width:1000px)');
    return (
        <>
            <Stack sx={{ alignItems: 'center', padding: { xs: '10px', md: '50px' },gap:{xs:'10px',md:'20px'} }}>
                <Typography sx={{ fontSize: { xs: "1.25rem", md: "2rem" }, fontWeight: 'bold' }}>Pricing</Typography>
                <Grid container spacing={5} sx={{ padding: { xs: "0px 20px", md: '0px 50px', lg: '0px 120px' } }}>
                    <Grid item xs={12} sm={6} md={4} >
                        <Paper sx={{borderRadius:'5px',padding:'20px',minHeight:"85%"}}>
                            <Stack sx={{alignItems:'center',gap:'20px'}}>
                                <Typography sx={{fontWeight:'bold',fontSize:{xs:"1.25rem",md:'1.75rem'}}}>Free Plan</Typography>
                                <Stack sx={{'& p':{fontSize:{xs:'0.9rem'}} }}>
                                    <ul>
                                        <li>
                                            <Typography>Low resolution images</Typography>
                                        </li>
                                        <li>
                                            <Typography>Low resolution images</Typography>
                                        </li>
                                    </ul>
                                </Stack>
                            </Stack>
                        </Paper>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4}>
                    <Paper sx={{borderRadius:'5px',padding:'20px',backgroundColor:'rgba(17,24,39)','& p':{color:'white'}}}>
                            <Stack sx={{alignItems:'center',gap:'20px'}}>
                                <Typography sx={{fontWeight:'bold',fontSize:{xs:"1.25rem",md:'1.75rem'}}}>Monthly $4</Typography>
                                <Stack sx={{'& p':{fontSize:'0.9rem'},'& li':{position:'relative','&:before':{content:'"•"',position:'absolute',color:'white',display:'inline-block',width:'1rem',marginLeft:'-1rem'}},padding:"10px" } }>
                                    <ul style={{listStyle:'none'}}>
                                        <li>
                                            <Typography>Access to unlimited fonts</Typography>
                                        </li>
                                        <li>
                                            <Typography>Save Watermarks for future</Typography>
                                        </li>
                                        <li>
                                            <Typography>Better performance</Typography>
                                        </li>
                                        <li>
                                            <Typography>High resolution watermarked photos</Typography>
                                        </li>
                                    </ul>
                                </Stack>
                                <Button sx={{ backgroundColor: '#FFD700', '&:hover': { backgroundColor: '#FFD700' }, textTransform: 'capitalize', color: 'black', marginTop: '20px',fontWeight:'bold' }}>Open App</Button>
                            </Stack>
                        </Paper>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4}>
                    <Paper sx={{borderRadius:'5px',padding:'20px',backgroundColor:'rgba(17,24,39)','& p':{color:'white'}}}>
                            <Stack sx={{alignItems:'center',gap:'20px'}}>
                                <Typography sx={{fontWeight:'bold',fontSize:{xs:"1.25rem",md:'1.75rem'}}}>Yearly $35</Typography>
                                <Stack sx={{'& p':{fontSize:'0.9rem'},'& li':{position:'relative','&:before':{content:'"•"',position:'absolute',color:'white',display:'inline-block',width:'1rem',marginLeft:'-1rem'}},padding:"10px" } }>
                                    <ul style={{listStyle:'none'}}>
                                        <li>
                                            <Typography>Access to unlimited fonts</Typography>
                                        </li>
                                        <li>
                                            <Typography>Save Watermarks for future</Typography>
                                        </li>
                                        <li>
                                            <Typography>Better performance</Typography>
                                        </li>
                                        <li>
                                            <Typography>High resolution watermarked photos</Typography>
                                        </li>
                                    </ul>
                                </Stack>
                                <Button sx={{ backgroundColor: '#FFD700', '&:hover': { backgroundColor: '#FFD700' }, textTransform: 'capitalize', color: 'black', marginTop: '20px',fontWeight:'bold' }}>Open App</Button>
                            </Stack>
                        </Paper>
                    </Grid>
                </Grid>
            </Stack>
        </>
    );
}

export default Pricing;