import React, {Component} from 'react';
import {Button} from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogActions from "@material-ui/core/DialogActions";
import Input from "@material-ui/core/Input";
import AddCircleIcon from '@material-ui/icons/AddCircle';
import SearchIcon from '@material-ui/icons/Search';
import Grid from "@material-ui/core/Grid";
import ReactVirtualizedTable from "../Tables/ProductsTable";
import UserTable from "../Tables/UserTable";

function FormDialog() {
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div>
            <Button variant="contained" color="secondary" onClick={handleClickOpen} startIcon={<AddCircleIcon/>}>
                ADD STORE MANAGER
            </Button>
            <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title">ADD NEW STORE MANAGER</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Please fill all feilds to add a new store manager
                    </DialogContentText>

                    <TextField
                        autoFocus
                        margin="dense"
                        id="managerUsername"
                        label="Username"
                        type="text"
                        fullWidth
                    />
                    <TextField
                        autoFocus
                        margin="dense"
                        id="managerFirstname"
                        label="Firstname"
                        type="text"
                        fullWidth
                    />
                    <TextField
                        autoFocus
                        margin="dense"
                        id="managerLastname"
                        label="Lastname"
                        type="text"
                        fullWidth
                    />
                    <TextField
                        autoFocus
                        margin="dense"
                        id="managerMobile"
                        label="Mobile"
                        type="number"
                        fullWidth
                    />
                    <TextField
                        autoFocus
                        margin="dense"
                        id="managerEmail"
                        label="Email"
                        type="number"
                        fullWidth
                    />
                    <TextField
                        autoFocus
                        margin="dense"
                        id="managerLoginPassword"
                        label="Login Password"
                        type="text"
                        fullWidth
                    />
                    {/*<TextField*/}
                    {/*    autoFocus*/}
                    {/*    margin="dense"*/}
                    {/*    id="managerType"*/}
                    {/*    label="Type"*/}
                    {/*    type="hidden"*/}
                    {/*    value="manager"*/}
                    {/*    fullWidth*/}
                    {/*/>*/}
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="primary">
                        Cancel
                    </Button>
                    <Button onClick={handleClose} color="primary">
                        Send Invitation & ADD
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}

class UserPanels extends Component {
    render() {
        return (
            <div>
                <h3>USER PANEL</h3>
                <div className="container" >
                    <div  style={{marginBottom: 10}}>
                        <Grid container spacing={3} alignItems="flex-end" className="justify-content-end">
                            <Grid item>
                                <TextField id="input-with-icon-grid" label="Search..." type="search" />
                            </Grid>
                            <Grid item >
                                <FormDialog/>
                            </Grid>
                        </Grid>
                    </div>
                    <UserTable/>
                </div>
            </div>
        );
    }
}

export default UserPanels;
