import React from "react";
import {
    Dialog,
    DialogContent,
    DialogContentText,
    TextField,
    Button,
    DialogTitle,
    DialogActions
} from "@mui/material";
// hooks
import useEditPlushy from "./useEditPlushy";
// styles
import useStyles from './EditPlushy.styles';


const EditPlushy = ({ item, open, handleClose }) => {
    const {
        setName,
        setPrice,
        setQuantity,
        setDescription,
        uploadPlushyMutation,
        setImageFile,
        imageFile,
        preview
    } = useEditPlushy(item, handleClose);

    const classes = useStyles();

    return (
        <Dialog open={open} onClose={handleClose} fullWidth >
            <div className={classes.wrapper}>
                {preview ? <img src={preview} className={classes.image} /> : null}
                <div className={classes.content}>
                    <DialogTitle>Edit Plushy</DialogTitle>
                    <DialogContent>
                        <DialogContentText>
                            Name
                        </DialogContentText>
                        <TextField
                            autoFocus
                            variant="standard"
                            fullWidth
                            onChange={(event) => setName(event.target.value)}
                            defaultValue={item ? item.name : ""}
                        />
                        <DialogContentText>
                            Price
                        </DialogContentText>
                        <TextField
                            autoFocus
                            variant="standard"
                            fullWidth
                            onChange={(event) => setPrice(event.target.value)}
                            defaultValue={item ? item.price : ""}
                        />
                        <DialogContentText>
                            Quantity
                        </DialogContentText>
                        <TextField
                            autoFocus
                            variant="standard"
                            fullWidth
                            onChange={(event) => setQuantity(event.target.value)}
                            defaultValue={item ? item.quantity : ""}
                        />
                        <DialogContentText>
                            Description
                        </DialogContentText>
                        <TextField
                            autoFocus
                            variant="standard"
                            fullWidth
                            onChange={(event) => setDescription(event.target.value)}
                            defaultValue={item ? item.description : ""}
                        />
                        <input type="file" onChange={(event) => { setImageFile(event.target.files[0]) }} />
                        <DialogActions>
                            <Button onClick={() => uploadPlushyMutation.mutate()}>Upload</Button>
                            <Button onClick={handleClose}>Cancel</Button>
                        </DialogActions>
                    </DialogContent>
                </div>
            </div>


        </Dialog>

    )
};

export default EditPlushy;