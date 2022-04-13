import React from "react";
import { Dialog, DialogContent } from "@mui/material";

const EditPlushy = ({ open, handleClose }) => {
    return (
        <>
            <Dialog open={open} onClose={handleClose} fullWidth>
                <DialogContent>
                    <h1>Helloooooooooo</h1>
                </DialogContent>
            </Dialog>
        </>
    )
};

export default EditPlushy;