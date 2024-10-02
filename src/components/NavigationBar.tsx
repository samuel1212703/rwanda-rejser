import { useState } from 'react';
import { AppBar, Toolbar, IconButton, Typography, Button, Menu, MenuItem, Box, useTheme, Grid } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import Logo from '../images/logo.png';
import { Link } from 'react-router-dom';
import { PageInfo } from '../types';

export default function NavigationBar(sider: PageInfo[]) {
    const theme = useTheme();
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

    const handleMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
    };

    const mainLinks = sider.filter(side => !side.path.startsWith('offer/'));

    return (
        <AppBar color="primary" position="static">
            <Grid container style={{ height: '32px', backgroundColor: theme.palette.accent.main }}>
                <Grid item sm={6}>
                    <Button
                        color="inherit"
                        href={"tel:" + process.env.REACT_APP_TELEFON_NUMMER}
                        sx={{ display: { xs: 'none', md: 'block' } }}
                    >
                        {process.env.REACT_APP_TELEFON_NUMMER}
                    </Button>
                </Grid>
                <Grid item sm={6}>
                    Gode Oplevelser
                </Grid>
            </Grid>
            <Toolbar sx={{ backgroundColor: theme.palette.secondary.main }}>
                <Box sx={{ display: 'flex', alignItems: 'center', flexGrow: 1 }}>
                    <img src={Logo} alt="logo" style={{ height: '50px', marginRight: '10px' }} />
                </Box>
                <Box sx={{ display: { xs: 'none', md: 'flex' }, flexGrow: 1 }}>
                    {mainLinks.map((side) => (
                        side.path !== "*" && (
                            <Button
                                key={side.path}
                                component={Link}
                                to={"/" + side.path}
                                sx={{ color: 'white' }}
                            >
                                {side.title}
                            </Button>
                        )
                    ))}
                </Box>
                <Box sx={{ display: { xs: 'flex', md: 'none' }, marginLeft: '25px' }}>
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
                        {mainLinks.map((side) => (side.path !== "*" && (
                            <MenuItem
                                key={side.path}
                                component={Link}
                                to={"/" + side.path}
                                onClick={handleMenuClose}
                            >
                                {side.title}
                            </MenuItem>
                        )))}
                    </Menu>
                </Box>
            </Toolbar>
        </AppBar>
    );
}
