import { useState } from 'react';
import { AppBar, Toolbar, IconButton, Typography, Button, Menu, MenuItem, Box } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import Logo from '../images/logo.png';
import { Link } from 'react-router-dom';
import LanguageSwitcher from '../components/LanguageSwitcher';
import { SideInfo } from '../types';

export default function NavigationsBar(sider: SideInfo[]) {
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

    const handleMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
    };

    const mainLinks = sider.filter(side => !side.sti.startsWith('tilbud/'));

    return (
        <AppBar position="static" sx={{ backgroundColor: '#2c3e50' }}>
            <Toolbar>
                <Box sx={{ display: 'flex', alignItems: 'center', flexGrow: 1 }}>
                    <img src={Logo} alt="logo" style={{ height: '50px', marginRight: '10px' }} />
                    <Button
                        color="inherit"
                        href={"tel:" + process.env.REACT_APP_TELEFON_NUMMER}
                        sx={{ display: { xs: 'none', md: 'block' } }}
                    >
                        {process.env.REACT_APP_TELEFON_NUMMER}
                    </Button>
                </Box>
                <Box sx={{ display: { xs: 'none', md: 'flex' }, flexGrow: 1 }}>
                    {mainLinks.map((side) => (
                        side.sti !== "*" && (
                            <Button
                                key={side.sti}
                                component={Link}
                                to={"/" + side.sti}
                                sx={{ color: 'white' }}
                            >
                                {side.titel}
                            </Button>
                        )
                    ))}
                    <LanguageSwitcher />
                </Box>
                <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
                    <LanguageSwitcher />
                    <IconButton
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        onClick={handleMenuOpen}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Menu
                        anchorEl={anchorEl}
                        open={Boolean(anchorEl)}
                        onClose={handleMenuClose}
                        sx={{ display: { xs: 'block', md: 'none' } }}
                    >
                        {mainLinks.map((side) => (
                            side.sti !== "*" && (
                                <MenuItem
                                    key={side.sti}
                                    component={Link}
                                    to={"/" + side.sti}
                                    onClick={handleMenuClose}
                                >
                                    {side.titel}
                                </MenuItem>
                            )
                        ))}
                    </Menu>
                </Box>
            </Toolbar>
        </AppBar>
    );
}
