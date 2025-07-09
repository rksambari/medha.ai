import React from 'react';
import {
  Container,
  Typography,
  Box,
  Grid,
  Card,
  CardContent,
  Button,
  TextField,
  useTheme,
  useMediaQuery
} from '@mui/material';
import {
  WhatsApp as WhatsAppIcon,
  Phone as PhoneIcon,
  Email as EmailIcon,
  LocationOn as LocationIcon,
  Send as SendIcon
} from '@mui/icons-material';
import { motion } from 'framer-motion';
import { colors } from '../theme/colors';

const ContactUs = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const handleWhatsAppClick = () => {
    const phoneNumber = '+919491299727';
    const message = 'Hello! I am interested in learning more about Medha AI Learnings. Could you please provide me with more information?';
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const contactInfo = [
    {
      icon: <PhoneIcon sx={{ fontSize: 40, color: colors.primary.orange }} />,
      title: 'Call Us',
      details: '+91 9491299727',
      description: 'Speak directly with our education experts'
    },
    {
      icon: <EmailIcon sx={{ fontSize: 40, color: colors.primary.orange }} />,
      title: 'Email Us',
      details: 'medhaai@gmail.com',
      description: 'Send us your queries and feedback'
    },
    {
      icon: <LocationIcon sx={{ fontSize: 40, color: colors.primary.orange }} />,
      title: 'Visit Us',
      details: 'Hyderabad, India',
      description: 'Schedule a visit to our learning center'
    }
  ];

  return (
    <Box sx={{ minHeight: '100vh', backgroundColor: colors.neutral.white }}>
      {/* Hero Section Removed */}

      {/* WhatsApp CTA Section */}
      <Container maxWidth="xl" sx={{ py: { xs: 3, md: 6 } }}>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          <Card 
            sx={{ 
              p: { xs: 2, md: 3 },
              backgroundColor: colors.primary.green,
              borderRadius: 3,
              border: `2px solid ${colors.primary.green}`,
              textAlign: 'center',
              boxShadow: colors.shadows.card
            }}
          >
            <Box sx={{ display: 'flex', justifyContent: 'center', mb: 2 }}>
              <WhatsAppIcon sx={{ fontSize: 40, color: colors.neutral.white }} />
            </Box>
            <Typography 
              variant="h5" 
              component="h2"
              sx={{ 
                color: colors.neutral.white,
                fontWeight: 700,
                mb: 1,
                fontSize: { xs: '1.2rem', md: '1.5rem' }
              }}
            >
              Chat with Us on WhatsApp
            </Typography>
            <Typography 
              variant="body1" 
              sx={{ 
                color: colors.neutral.white,
                mb: 3,
                lineHeight: 1.6,
                fontSize: { xs: '0.9rem', md: '1rem' }
              }}
            >
              Get instant responses to all your questions about our AI-powered learning programs
            </Typography>
            <Button
              variant="contained"
              size="medium"
              onClick={handleWhatsAppClick}
              startIcon={<WhatsAppIcon />}
              sx={{
                backgroundColor: colors.neutral.white,
                color: colors.primary.green,
                fontWeight: 700,
                fontSize: { xs: '0.9rem', md: '1rem' },
                px: 3,
                py: 1.5,
                borderRadius: 3,
                textTransform: 'none',
                '&:hover': {
                  backgroundColor: colors.accent.cream,
                  transform: 'translateY(-2px)',
                  boxShadow: colors.shadows.card
                },
                transition: 'all 0.3s ease'
              }}
            >
              Start WhatsApp Chat
            </Button>
            <Typography 
              variant="body2" 
              sx={{ 
                color: colors.neutral.white,
                mt: 1,
                opacity: 0.9,
                fontSize: '0.8rem'
              }}
            >
              Mobile: +91 9491299727
            </Typography>
          </Card>
        </motion.div>
      </Container>

      {/* Contact Information Cards */}
      <Container maxWidth="xl" sx={{ py: { xs: 4, md: 6 } }}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <Typography 
            variant="h4" 
            component="h2"
            sx={{ 
              textAlign: 'center',
              color: colors.text.primary,
              fontWeight: 700,
              mb: { xs: 3, md: 6 },
              fontSize: { xs: '1.8rem', md: '2.5rem' }
            }}
          >
            Multiple Ways to Connect
          </Typography>
          
          <Box sx={{ 
            display: 'flex', 
            justifyContent: 'center',
            alignItems: 'center',
            width: '100%'
          }}>
            <Grid 
              container 
              spacing={{ xs: 2, md: 4 }} 
              sx={{ 
                maxWidth: 'lg',
                justifyContent: 'center',
                margin: '0 auto'
              }}
            >
              {contactInfo.map((info, index) => (
                <Grid item xs={12} sm={6} md={4} key={index}>
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                  >
                    <Card 
                      sx={{ 
                        height: { xs: '180px', md: '220px' },
                        width: '100%',
                        backgroundColor: colors.neutral.white,
                        border: `2px solid ${colors.primary.green}`,
                        borderRadius: 3,
                        transition: 'all 0.3s ease',
                        '&:hover': {
                          transform: 'translateY(-8px)',
                          boxShadow: colors.shadows.card,
                          borderColor: colors.primary.orange
                        }
                      }}
                    >
                      <CardContent sx={{ 
                        textAlign: 'center', 
                        p: { xs: 2, md: 3 },
                        height: '100%',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center'
                      }}>
                        <Box sx={{ mb: 2 }}>
                          {info.icon}
                        </Box>
                        <Typography 
                          variant="h6" 
                          component="h3"
                          sx={{ 
                            color: colors.primary.green,
                            fontWeight: 600,
                            mb: 2,
                            fontSize: { xs: '1rem', md: '1.25rem' }
                          }}
                        >
                          {info.title}
                        </Typography>
                        <Typography 
                          variant="h6" 
                          sx={{ 
                            color: colors.text.primary,
                            fontWeight: 700,
                            mb: 1,
                            fontSize: { xs: '1rem', md: '1.1rem' }
                          }}
                        >
                          {info.details}
                        </Typography>
                        <Typography 
                          variant="body2" 
                          sx={{ 
                            color: colors.text.gray,
                            lineHeight: 1.6,
                            fontSize: { xs: '0.85rem', md: '0.875rem' }
                          }}
                        >
                          {info.description}
                        </Typography>
                      </CardContent>
                    </Card>
                  </motion.div>
                </Grid>
              ))}
            </Grid>
          </Box>
        </motion.div>
      </Container>

      {/* Contact Form */}
      <Container maxWidth="md" sx={{ py: { xs: 4, md: 6 } }}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <Typography 
            variant="h4" 
            component="h2"
            sx={{ 
              textAlign: 'center',
              color: colors.text.primary,
              fontWeight: 700,
              mb: 4,
              fontSize: { xs: '1.8rem', md: '2.5rem' }
            }}
          >
            Send us a Message
          </Typography>
          
          <Box sx={{ 
            width: '100%',
            height: '1400px',
            border: 'none',
            borderRadius: 3,
            overflow: 'hidden'
          }}>
            <iframe
              src="https://docs.google.com/forms/d/e/1FAIpQLSeMHo7JwF5i0OxEQEQzk2BqgGxjRgwh3JB29osTiD-w4t52oA/viewform?embedded=true"
              width="100%"
              height="100%"
              frameBorder="0"
              marginHeight="0"
              marginWidth="0"
              title="Contact Form"
              style={{ border: 'none' }}
            >
              Loading…
            </iframe>
          </Box>
        </motion.div>
      </Container>
    </Box>
  );
};

export default ContactUs; 