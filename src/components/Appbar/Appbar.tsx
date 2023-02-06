import { useState } from 'react';
import { useNavigate } from "react-router-dom";

import {
    List,
    Container,
    ListItem,
    ListItemButton,
    ListItemText,
    AppBar,
    Box,
    Toolbar,
    IconButton,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

import { MobileDrawer } from './MobileDrawer';
import { navItems } from './navItemList';
import { BarLogo } from './BarLogo';

export const Navbar = () => {
    const navigate = useNavigate();
    const [mobileOpen, setMobileOpen] = useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen((prevState) => !prevState);
    };

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar component="nav" position="static">
                <Container maxWidth="xl">
                    <Toolbar>
                        <Box sx={{ flexGrow: 1 }}>
                            <BarLogo />
                        </Box>

                        <IconButton
                            color="inherit"
                            aria-label="open drawer"
                            edge="start"
                            onClick={handleDrawerToggle}
                            sx={{ display: { sm: 'none' } }}
                        >
                            <MenuIcon />
                        </IconButton>

                        <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
                            <List sx={{ display: 'flex', alignItems: 'center' }}>
                                {navItems.map((item) => (
                                    <ListItem key={item.label} disablePadding>
                                        <ListItemButton sx={{ textAlign: 'center' }}>
                                            <ListItemText primary={item.label} onClick={() => navigate(item.path)} />
                                        </ListItemButton>
                                    </ListItem>
                                ))}
                            </List>
                        </Box>
                    </Toolbar>
                </Container>
            </AppBar>
            <MobileDrawer
                navItems={navItems}
                mobileOpen={mobileOpen}
                handleDrawerToggle={handleDrawerToggle}
            />
        </Box>
    );
}
