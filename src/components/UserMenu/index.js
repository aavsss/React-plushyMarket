import { Menu, MenuItem } from "@mui/material";
import useUserMenu from "./useUserMenu";


const UserMenu = () => {
    const {
        anchorEl,
        open,
        handleClick,
        handleClose,
        logout,
        navigateToMyMarket
    } = useUserMenu();

    return (
        <>
            <h2
                id="basic-button"
                aria-controls={open ? 'basic-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}
                style={{ cursor: "pointer" }}
            >Settings</h2>
            <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                    'aria-labelledby': 'basic-button',
                }}
            >
                <MenuItem onClick={navigateToMyMarket}>My Market</MenuItem>
                <MenuItem onClick={logout}>Logout</MenuItem>
            </Menu>
        </>
    )
};

export default UserMenu;