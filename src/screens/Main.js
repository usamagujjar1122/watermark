import { Button, IconButton, Input, Paper, Stack, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import React, { useCallback } from 'react'
import { useDropzone } from 'react-dropzone'
import DeleteIcon from '@mui/icons-material/Delete';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import FilerobotImageEditor, { TABS, TOOLS } from 'react-filerobot-image-editor';
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
    outline: 'none',
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
    flexDirection: 'column',
    borderRadius: '5px',
};


const Main = () => {
    const [isImgEditorShown, setIsImgEditorShown] = useState(false);
    const [img,setImg] = useState()
    const openImgEditor = (item) => {
        setImg(item)
        setIsImgEditorShown(true);
    };

    const closeImgEditor = () => {
        setIsImgEditorShown(false);
    };

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const array = [
        "Add photos", "Add watermark", "Download"
    ]
    const [list, setlist] = useState([])
    const [active, setactive] = useState(0)
    const handleNext = () => {
        if (list.length > 0) {
            setactive(prev => prev + 1)
        } else {
            setOpen(true)
        }
    }
    const handlePrev = () => {
        setactive(prev => prev - 1)
    }
    const onDrop = (acceptedFiles => {
        setlist(prev => prev.concat(acceptedFiles))

    })
    const split = (i) => {
        const f = list.slice(0, i)
        const s = list.slice(i + 1, list.length)
        setlist(f.concat(s))
    }
    const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop })
    return (
        <>
            <Paper sx={{ borderRadius: '5px', padding: { xs: '5px', md: '20px' } }}>
                <Stack direction="row" sx={{ justifyContent: 'space-between', alignItems: 'center', '& button': { fontSize: { xs: '0.5rem', md: '1rem' } } }}>
                    <Button variant="contained" color="primary" sx={{ opacity: active === 0 ? '0' : '1', display: 'flex', alignItems: "center", minWidth: { xs: '12px !important', md: '64px !important' }, padding: { xs: '2px', md: '6px 16px' } }} disabled={active === 0} onClick={handlePrev}><NavigateBeforeIcon sx={{ color: 'white' }} /> <Typography sx={{ display: { xs: 'none', md: 'flex' } }}> Previous </Typography></Button>
                    {array.map((item, index) => (
                        <Stack sx={{ alignItems: 'center', gap: '10px' }} key={index}>
                            <Button variant="contained" sx={{ minWidth: { xs: '12px !important', md: '26px !important' }, padding: { xs: '3px 12px', md: '4px 16px' }, backgroundColor: index <= active ? '#0000FF' : 'silver', color: 'white', '&:hover': { backgroundColor: index <= active ? '#0000FF' : 'silver' }, borderRadius: '50px', aspectRatio: '1', }} disabled={active < index} onClick={() => setactive(index)}> <Typography sx={{ fontSize: { xs: '0.6rem', md: '1rem', color: 'white' } }}> {index + 1} </Typography></Button>
                            <Typography sx={{ color: index <= active ? '#0000FF' : 'gray', fontWeight: 'bold', fontSize: { xs: '0.6rem', md: "1rem" }, textAlign: 'center' }}>{item}</Typography>
                        </Stack>
                    ))}
                    <Button variant="contained" color="primary" sx={{ opacity: active === 2 ? '0' : '1', display: 'flex', alignItems: "center", minWidth: { xs: '12px !important', md: '64px !important' }, padding: { xs: '2px', md: '6px 16px' } }} disabled={active === 2} onClick={handleNext}><Typography sx={{ display: { xs: 'none', md: 'flex' } }}> Next </Typography> <NavigateNextIcon sx={{ color: 'white' }} /> </Button>
                </Stack>

            </Paper>


            {active === 0 &&
                <>
                    <Paper sx={{ padding: '20px', border: '1px dashed gray', margin: '50px auto', width: 'fit-content', cursor: isDragActive ? 'cell' : 'pointer' }} {...getRootProps()}>
                        <input
                            {...getInputProps()}
                        />
                        <Stack sx={{ alignItems: 'center', gap: '20px' }}>
                            <Typography sx={{ fontWeight: 'bold' }}>Drag and drop photos here</Typography>
                            <Typography>or</Typography>
                            <Button sx={{ backgroundColor: '#FFD700', '&:hover': { backgroundColor: '#FFD700' }, textTransform: 'capitalize', color: 'black !important' }} disabled>Add Photos</Button>
                        </Stack>
                    </Paper>
                    <Stack direction="row" sx={{ gap: '20px', margin: '0px 20px', flexWrap: 'wrap', justifyContent: 'center' }} >
                        {list.length > 0 && list.map((item, index) => {
                            return (
                                <>
                                    <Stack>
                                        <Stack key={index} sx={{ width: '120px', aspectRatio: '4/3 !important', position: 'relative !important', overflow: 'hidden', background: 'silver', borderRadius: '10px' }}><img src={URL.createObjectURL(item)} alt="" style={{ borderRadius: '10px', height: '100%', position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)' }} /><DeleteIcon sx={{ padding: '2px', fontSize: '1.25rem', color: 'white', position: 'absolute', cursor: 'pointer', right: '2%', top: '2%', backgroundColor: 'red', borderRadius: '25px' }} onClick={() => { split(index) }} /> </Stack>
                                        <Typography sx={{ textAlign: 'center', cursor: 'pointer', '&:hover': { color: 'blue', textDecoration: 'underline' } }} onClick={()=>{openImgEditor(URL.createObjectURL(item))}}>Edit</Typography>
                                    </Stack>
                                </>
                            )
                        })}
                    </Stack>
                </>
            }
            {active===1 && 
            <Stack sx={{width:"75vw",margin:'20px auto',height:'70vh'}}>
            <FilerobotImageEditor
                source={URL.createObjectURL(list[0])}
                onSave={(editedImageObject, designState) => console.log( designState.annotations.watermark)}
                onClose={closeImgEditor}
                disableZooming={true}
                onModify={(state)=>console.log(state)}
                annotationsCommon={{
                    fill: '#ff0000'
                }}
                Text={{ text: 'Filerobot...' }}
                Rotate={{ angle: 90, componentType: 'slider' }}
                tabsIds={[TABS.ADJUST, TABS.ANNOTATE, TABS.WATERMARK]} // or {['Adjust', 'Annotate', 'Watermark']}
                defaultTabId={TABS.ANNOTATE} // or 'Annotate'
                defaultToolId={TOOLS.TEXT} // or 'Text'
                
            />
            </Stack>
            }
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        Please add an image to proceed
                    </Typography>
                    <Button variant="contained" color="primary" onClick={handleClose}>Ok</Button>

                </Box>
            </Modal>
            
                

        </>
    );
}

export default Main;