import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Stack, IconButton, Menu } from '@mui/material';
import LogoIcon from '@mui/icons-material/StickyNote2TwoTone';
import AccountIcon from '@mui/icons-material/AccountCircleTwoTone';
import ProfileIcon from '@mui/icons-material/ManageAccountsTwoTone';
import SettingsIcon from '@mui/icons-material/SettingsApplicationsTwoTone';
import SignOutIcon from '@mui/icons-material/LogoutTwoTone';

import { routes } from '@constants/routes';

import styles from './index.module.scss';

const Navbar: React.FC = () => {
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const navigate = useNavigate();

    const handleCloseMenu = (): void => setAnchorEl(null);

    return (
        <Stack direction="row" justifyContent="space-between" padding={1}>
            <div
                onClick={() => navigate(routes.ROOT)}
                className={styles.logoContainer}
            >
                <LogoIcon />
                <div className={styles.logoText}>Typical Todos</div>
            </div>
            <div>
                <IconButton
                    size="large"
                    onClick={(e) => setAnchorEl(e.currentTarget)}
                    color="inherit"
                    classes={{ root: styles.accountButton }}
                >
                    <AccountIcon fontSize="medium" />
                </IconButton>
                <Menu
                    anchorEl={anchorEl}
                    anchorOrigin={{
                        vertical: 'top',
                        horizontal: 'left',
                    }}
                    keepMounted
                    transformOrigin={{
                        vertical: 'top',
                        horizontal: 'right',
                    }}
                    open={!!anchorEl}
                    onClose={handleCloseMenu}
                >
                    <div className={styles.menuItem} onClick={handleCloseMenu}>
                        <ProfileIcon fontSize="small" />
                        <span>Profile</span>
                    </div>
                    <div className={styles.menuItem} onClick={handleCloseMenu}>
                        <SettingsIcon fontSize="small" />
                        <span>Settings</span>
                    </div>
                    <div className={styles.divider} />
                    <div className={styles.menuItem} onClick={handleCloseMenu}>
                        <SignOutIcon fontSize="small" />
                        <span>Sign Out</span>
                    </div>
                </Menu>
            </div>
        </Stack>
    );
};

export default Navbar;
