import React from 'react';
import { 
  AppBar, 
  Toolbar, 
  Typography, 
  Box, 
  Container,
  IconButton,
  useTheme,
  useMediaQuery
} from '@mui/material';
import { 
  School as SchoolIcon,
  Phone as PhoneIcon,
  Email as EmailIcon
} from '@mui/icons-material';
import { motion } from 'framer-motion';
import { colors } from '../theme/colors';

const Header = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <AppBar 
      position="static" 
      sx={{ 
        backgroundColor: colors.primary.green,
        boxShadow: `0 2px 8px ${colors.shadows.card}`,
        borderBottom: `1px solid ${colors.border.light}`,
        borderRadius: 0 // Ensure no rounded corners
      }}
    >
      <Container maxWidth="xl">
        <Toolbar sx={{ justifyContent: 'space-between', py: 1 }}>
          {/* Logo and Company Name */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
              <IconButton 
                sx={{ 
                  backgroundColor: colors.neutral.white,
                  color: colors.primary.green,
                  '&:hover': { backgroundColor: colors.accent.cream }
                }}
              >
                <SchoolIcon sx={{ fontSize: 32 }} />
              </IconButton>
              <Typography 
                variant="h5" 
                component="h1"
                sx={{ 
                  fontWeight: 700,
                  color: colors.neutral.white,
                  letterSpacing: '1px'
                }}
              >
                Medha.ai
              </Typography>
            </Box>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {!isMobile ? (
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 3 }}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                  <PhoneIcon sx={{ color: colors.neutral.white, fontSize: 20 }} />
                  <Typography 
                    variant="body2" 
                    sx={{ 
                      color: colors.neutral.white,
                      fontWeight: 500,
                      fontSize: '0.9rem'
                    }}
                  >
                    Call Us: +91 9491299727
                  </Typography>
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                  <EmailIcon sx={{ color: colors.neutral.white, fontSize: 20 }} />
                  <Typography 
                    variant="body2" 
                    sx={{ 
                      color: colors.neutral.white,
                      fontWeight: 500,
                      fontSize: '0.9rem'
                    }}
                  >
                    Email: medhaai@gmail.com
                  </Typography>
                </Box>
              </Box>
            ) : (
              <Box sx={{ display: 'flex', gap: 1 }}>
                <IconButton sx={{ color: colors.neutral.white }}>
                  <PhoneIcon />
                </IconButton>
                <IconButton sx={{ color: colors.neutral.white }}>
                  <EmailIcon />
                </IconButton>
              </Box>
            )}
          </motion.div>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header; 