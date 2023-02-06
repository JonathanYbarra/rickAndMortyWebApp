import {
    List,
    ListItem,
    ListItemButton,
    ListItemText,
    Box,
    Divider,
    Drawer
} from '@mui/material';
import { IMobileDrawerProps } from './Appbar.types';
import { BarLogo } from './BarLogo';

import { useNavigate } from "react-router-dom";

const drawerWidth = 240;

export const MobileDrawer = (props: IMobileDrawerProps) => {
    const { window, navItems, mobileOpen, handleDrawerToggle } = props;
    const container = window !== undefined ? () => window().document.body : undefined;

    const navigate = useNavigate();

    const drawer = (
        <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
            <BarLogo />

            <Divider />
            <List>
                {navItems.map((item) => (
                    <ListItem key={item.label} disablePadding>
                        <ListItemButton sx={{ textAlign: 'center' }}>
                            <ListItemText primary={item.label} onClick={() => navigate(item.path)}/>
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </Box>
    );

    return (
        <Box component="nav">
            <Drawer
                container={container}
                variant="temporary"
                open={mobileOpen}
                onClose={handleDrawerToggle}
                ModalProps={{
                    keepMounted: true, // Better open performance on mobile.
                }}
                sx={{
                    display: { xs: 'block', sm: 'none' },
                    '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                }}
            >
                {drawer}
            </Drawer>
        </Box>
    )
}