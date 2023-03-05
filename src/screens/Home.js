import { Button, Grid, Stack, Typography, useMediaQuery } from "@mui/material";
import Footer from "../comp/Footer";
import Nav from "../comp/Nav";

const Home = () => {
    const matches = useMediaQuery('(min-width:1000px)');
    return (
        <>
            <Stack sx={{ minHeight: '90vh', position: 'relative' }}>
                <Stack sx={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)', textAlign: 'center', alignItems: 'center', gap: { xs: '10px', md: "20px" }, minWidth: { xs: '80%', md: '75%' } }}>
                    <Typography sx={{ fontWeight: 'bold', fontSize: { xs: "1.5rem", md: "2.75rem" } }}>Online Photo Watermarking App</Typography>
                    <Typography sx={{ fontSize: { xs: "1rem", md: "1.75rem" }, color: 'gray' }}>Watermark photos in 3 easy steps Fully secure, your photos are edited inside your computer Batch watermark multiple photos at a time</Typography>
                    <Button sx={{ backgroundColor: "rgba(45, 85, 255,1)", color: 'white', fontSize: { xs: "1rem", md: "1.25rem" }, fontWeight: 'bold', '&:hover': { backgroundColor: 'rgba(45, 85, 255,0.8)' }, textTransform: 'capitalize' }}>Open App</Button>
                </Stack>
            </Stack>
            <Stack sx={{ backgroundColor: 'rgba(182, 214, 247, 0.5) !important', paddingBottom: { xs: '20px', md: '100px' } }}>
                <Stack sx={{ padding: { xs: "20px", md: "100px" }, gap: { xs: "10px", md: '20px' } }}>
                    <Typography sx={{ fontWeight: 'bold', fontSize: { xs: "1.5rem", md: "2.5rem", textAlign: 'center' } }}>Watermark Photos in 3 easy steps</Typography>
                    <Typography sx={{ fontSize: { xs: "1rem", md: "1.5rem" }, color: 'gray', textAlign: 'center' }}>One-stop solution to watermark multiple photos in 3 easy steps.</Typography>
                </Stack>
                <Grid container spacing={5} sx={{ padding: { xs: "0px 20px", md: '0px 50px', lg: '0px 120px' } }}>
                    <Grid item xs={12} sm={6} md={4}>
                        <Stack >
                            <img src="img/drag-drop1.png" alt="" />
                            <Stack sx={{ padding: '20px', backgroundColor: 'white', gap: '10px' }}>
                                <Typography sx={{ fontWeight: 'bold', fontSize: { xs: "1.2rem", md: "1.5rem", textAlign: 'center' } }}>Drag & Drop photos</Typography>
                                <Typography sx={{ fontSize: { xs: "1rem", md: "1rem" }, color: 'gray', textAlign: 'center' }}>Select photos from your device and drag-drop them into our web editor for watermarking.</Typography>
                                <Button sx={{ backgroundColor: '#FFD700', '&:hover': { backgroundColor: '#FFD700' }, textTransform: 'capitalize', color: 'black', marginTop: '20px' }}>Open App</Button>
                            </Stack>
                        </Stack>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4}>
                        <Stack>
                            <img src="img/drag-drop2.png" alt="" />
                            <Stack sx={{ padding: '20px', backgroundColor: 'white', gap: '10px' }}>
                                <Typography sx={{ fontWeight: 'bold', fontSize: { xs: "1.2rem", md: "1.5rem", textAlign: 'center' } }}>Add Text/Logo watermarks</Typography>
                                <Typography sx={{ fontSize: { xs: "1rem", md: "1rem" }, color: 'gray', textAlign: 'center' }}>Apply our web editor tool to watermark your files by adding the text or logo best suited for your data.</Typography>
                                <Button sx={{ backgroundColor: '#FFD700', '&:hover': { backgroundColor: '#FFD700' }, textTransform: 'capitalize', color: 'black', marginTop: '20px' }}>Open App</Button>
                            </Stack>
                        </Stack>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4}>
                        <Stack>
                            <img src="img/drag-drop3.png" alt="" />
                            <Stack sx={{ padding: '20px', backgroundColor: 'white', gap: '10px' }}>
                                <Typography sx={{ fontWeight: 'bold', fontSize: { xs: "1.2rem", md: "1.5rem", textAlign: 'center' } }}>Position and download</Typography>
                                <Typography sx={{ fontSize: { xs: "1rem", md: "1rem" }, color: 'gray', textAlign: 'center' }}>Position the watermark according to your choice and download the ready-to-use watermarked product to your device.</Typography>
                                <Button sx={{ backgroundColor: '#FFD700', '&:hover': { backgroundColor: '#FFD700' }, textTransform: 'capitalize', color: 'black', marginTop: '20px' }}>Open App</Button>
                            </Stack>
                        </Stack>
                    </Grid>
                </Grid>

            </Stack>
            <Stack>
                <Stack sx={{ padding: { xs: "20px", md: "100px" }, gap: { xs: "10px", md: '20px' } }}>
                    <Typography sx={{ fontWeight: 'bold', fontSize: { xs: "1.5rem", md: "2.5rem", textAlign: 'center' } }}>Features</Typography>
                    <Typography sx={{ fontSize: { xs: "1rem", md: "1.5rem" }, color: 'gray', textAlign: 'center' }}>Some of the most important features are only listed below. There are many more features than listed below.</Typography>
                </Stack>
                <Stack sx={{ margin: { xs: '20px 0px', md: '0px' } }}>
                    <Stack direction={matches ? 'row' : 'column-reverse'} sx={{ padding: "0px 20px", alignItems: 'center', gap: { xs: '10px', md: '20px' } }}>
                        <Stack sx={{ flex: 1, justifyContent: 'center' }}><img src="img/1-4.png" alt="" style={{ width: '80%', margin: 'auto' }} /></Stack>
                        <Stack sx={{ gap: '10px', flex: 1,alignItems:'center' }}>
                            <Typography sx={{ fontSize: { xs: "1.25rem", md: "1.6rem", textAlign: 'center' },fontWeight:'600' }}>Multiple Fonts, Icons, Repeat, Shadows</Typography>
                            <Typography sx={{ fontSize: { xs: "0.8rem", md: "1rem" }, color: 'gray', textAlign: 'center',width:{xs:'100%',md:'70%'} }}>You choose from many fonts/choose from multiple icons, repeat text/logo.</Typography>
                        </Stack>
                    </Stack>
                </Stack>
                <Stack sx={{ margin: { xs: '20px 0px', md: '0px' } }}>
                    <Stack direction={matches ? 'row-reverse' : 'column-reverse'} sx={{ padding: "0px 20px", alignItems: 'center', gap: { xs: '10px', md: '20px' } }}>
                        <Stack sx={{ flex: 1, justifyContent: 'center' }}><img src="img/2-4.png" alt="" style={{ width: '80%', margin: 'auto' }} /></Stack>
                        <Stack sx={{ gap: '10px', flex: 1,alignItems:'center' }}>
                            <Typography sx={{ fontSize: { xs: "1.25rem", md: "1.6rem", textAlign: 'center' },fontWeight:'600' }}>Batch Watermarking, Resize</Typography>
                            <Typography sx={{ fontSize: { xs: "0.8rem", md: "1rem" }, color: 'gray', textAlign: 'center',width:{xs:'100%',md:'70%'} }}>You can add multiple photos and watermark all at a time. You can reposition watermark for each photo and also resize your photos to different resolutions.</Typography>
                        </Stack>
                    </Stack>
                </Stack>
                <Stack sx={{ margin: { xs: '20px 0px', md: '0px' } }}>
                    <Stack direction={matches ? 'row' : 'column-reverse'} sx={{ padding: "0px 20px", alignItems: 'center', gap: { xs: '10px', md: '20px' } }}>
                        <Stack sx={{ flex: 1, justifyContent: 'center' }}><img src="img/3-4.png" alt="" style={{ width: '80%', margin: 'auto' }} /></Stack>
                        <Stack sx={{ gap: '10px', flex: 1,alignItems:'center' }}>
                            <Typography sx={{ fontSize: { xs: "1.25rem", md: "1.6rem", textAlign: 'center' },fontWeight:'600' }}>Save your Watermarks</Typography>
                            <Typography sx={{ fontSize: { xs: "0.8rem", md: "1rem" }, color: 'gray', textAlign: 'center',width:{xs:'100%',md:'70%'} }}>You can save your watermarks for future use.</Typography>
                        </Stack>
                    </Stack>
                </Stack>
                <Stack sx={{ margin: { xs: '20px 0px', md: '0px' } }}>
                    <Stack direction={matches ? 'row-reverse' : 'column-reverse'} sx={{ padding: "0px 20px", alignItems: 'center', gap: { xs: '10px', md: '20px' } }}>
                        <Stack sx={{ flex: 1, justifyContent: 'center' }}><img src="img/4-4.svg" alt="" style={{ width: '80%', margin: 'auto' }} /></Stack>
                        <Stack sx={{ gap: '10px', flex: 1,alignItems:'center' }}>
                            <Typography sx={{ fontSize: { xs: "1.25rem", md: "1.6rem"}, textAlign: 'center' ,fontWeight:'600' }}>Fully Secure & Privacy friendly</Typography>
                            <Typography sx={{ fontSize: { xs: "0.8rem", md: "1rem" }, color: 'gray', textAlign: 'center',width:{xs:'100%',md:'70%'} }}>You can add multiple photos and watermark all at a time. You can reposition watermark for each photo and also resize your photos to different resolutions.</Typography>
                        </Stack>
                    </Stack>
                </Stack>
                
            </Stack>
            <Stack direction={matches?"row":'column'} sx={{gap:"10px",padding:{xs:'10px',md:'50px',lg:'75px'},backgroundColor: 'rgba(182, 214, 247, 0.5) !important',alignItems:'center'}}>
                <Stack sx={{flex:4,gap:'10px'}}>
                    <Typography sx={{fontWeight:'600',fontSize: { xs: "1rem", md: "1.6rem"},textAlign:'center'}}>A Simple & Secure Online Photo Watermarking App</Typography>
                    <Typography sx={{fontSize: { xs: "0.85rem", md: "1.6rem"},textAlign:'center'}}>our photos are edited on your computer and never sent to any server.</Typography>
                </Stack>
                <Stack sx={{flex:1}}>
                <Button sx={{ backgroundColor: "rgba(45, 85, 255,1)", color: 'white', fontSize: { xs: "1rem", md: "1.25rem" }, fontWeight: 'bold', '&:hover': { backgroundColor: 'rgba(45, 85, 255,0.8)' }, textTransform: 'capitalize' }}>Open App</Button>
                </Stack>
            </Stack>
            <Footer />

        </>
    );
}

export default Home;