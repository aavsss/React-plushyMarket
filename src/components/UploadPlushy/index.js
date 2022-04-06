import React from "react";
import {
    Dialog,
    DialogTitle,
    DialogActions,
    DialogContent,
    DialogContentText,
    TextField,
    Button
} from "@mui/material";
// hooks
import useUploadPlushy from "./useUploadPlushy";

const UploadPlushy = ({ open, handleClose }) => {
    const {
        setName,
        setPrice,
        setQuantity,
        setDescription,
        uploadPlushyMutation,
        setImageFile
    } = useUploadPlushy(handleClose);

    return (
        <>
            <Dialog open={open} onClose={handleClose} fullWidth>
                <DialogTitle>Upload Plushy</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Name
                    </DialogContentText>
                    <TextField
                        autoFocus
                        variant="standard"
                        fullWidth
                        onChange={(event) => setName(event.target.value)}
                    />
                    <DialogContentText>
                        Price
                    </DialogContentText>
                    <TextField
                        autoFocus
                        variant="standard"
                        fullWidth
                        onChange={(event) => setPrice(event.target.value)}
                    />
                    <DialogContentText>
                        Quantity
                    </DialogContentText>
                    <TextField
                        autoFocus
                        variant="standard"
                        fullWidth
                        onChange={(event) => setQuantity(event.target.value)}
                    />
                    <DialogContentText>
                        Description
                    </DialogContentText>
                    <TextField
                        autoFocus
                        variant="standard"
                        fullWidth
                        onChange={(event) => setDescription(event.target.value)}
                    />
                    <input type="file" onChange={(event) => { setImageFile(event.target.files[0]) }} />
                    <DialogActions>
                        <Button onClick={() => uploadPlushyMutation.mutate()}>Upload</Button>
                        <Button onClick={handleClose}>Cancel</Button>
                    </DialogActions>
                </DialogContent>
            </Dialog>
        </>
    )
}

export default UploadPlushy;
