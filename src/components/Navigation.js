import React, { useState } from 'react';
import {
  Box,
  Container,
  Button,
  Drawer,
  List,
  ListItem,
  ListItemText,
  IconButton,
  useTheme,
  useMediaQuery,
  AppBar,
  Toolbar
} from '@mui/material';
import { Menu as MenuIcon } from '@mui/icons-material';
import { motion } from 'framer-motion';
import { colors } from '../theme/colors';

const Navigation = ({ currentPage, onPageChange }) => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Contact Us', path: '/contact' }
  ];

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleNavClick = (path) => {
    onPageChange(path);
    if (isMobile) {
      setMobileOpen(false);
    }
  };

  const drawer = (
    <Box sx={{ width: 250, pt: 2, background: colors.neutral.white, height: '100%' }}>
      <List>
        {navItems.map((item) => (
          <ListItem 
            key={item.name} 
            button 
            onClick={() => handleNavClick(item.path)}
            sx={{
              backgroundColor: currentPage === item.path ? colors.accent.cream : 'transparent',
              '&:hover': { backgroundColor: colors.accent.cream }
            }}
          >
            <ListItemText 
              primary={item.name} 
              sx={{ 
                color: currentPage === item.path ? colors.primary.green : colors.text.primary,
                fontWeight: currentPage === item.path ? 700 : 500
              }}
            />
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <>
      {isMobile ? (
        <AppBar 
          position="static" 
          sx={{ 
            backgroundColor: colors.primary.green,
            boxShadow: `0 2px 8px ${colors.shadows.card}`
          }}
        >
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: 2, color: colors.neutral.white }}
            >
              <MenuIcon />
            </IconButton>
          </Toolbar>
        </AppBar>
      ) : (
        <Box 
          sx={{ 
            backgroundColor: colors.primary.green,
            borderBottom: `1px solid ${colors.border.light}`,
            py: 1
          }}
        >
          <Container maxWidth="xl">
            <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2 }}>
              {navItems.map((item, index) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Button
                    onClick={() => handleNavClick(item.path)}
                    sx={{
                      color: currentPage === item.path ? colors.primary.green : colors.neutral.white,
                      backgroundColor: currentPage === item.path ? colors.accent.cream : 'transparent',
                      fontWeight: 700,
                      fontSize: '1.1rem',
                      px: 3,
                      py: 1.5,
                      borderRadius: 2,
                      textTransform: 'none',
                      boxShadow: currentPage === item.path ? colors.shadows.card : 'none',
                      '&:hover': {
                        backgroundColor: colors.accent.cream,
                        color: colors.primary.green,
                        transform: 'translateY(-2px)',
                        boxShadow: colors.shadows.card
                      },
                      transition: 'all 0.3s ease'
                    }}
                  >
                    {item.name}
                  </Button>
                </motion.div>
              ))}
            </Box>
          </Container>
        </Box>
      )}

      <Drawer
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{ keepMounted: true }}
        sx={{
          display: { xs: 'block', md: 'none' },
          '& .MuiDrawer-paper': { 
            boxSizing: 'border-box', 
            width: 250,
            backgroundColor: colors.neutral.white,
            borderRadius: '0 !important',
            borderTopLeftRadius: '0 !important',
            borderTopRightRadius: '0 !important',
            borderBottomLeftRadius: '0 !important',
            borderBottomRightRadius: '0 !important'
          }
        }}
      >
        {drawer}
      </Drawer>
    </>
  );
};

export default Navigation; 