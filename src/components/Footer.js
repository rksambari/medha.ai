import React from 'react';
import {
  Box,
  Container,
  Grid,
  Typography,
  Link,
  IconButton,
  Divider,
  useTheme,
  useMediaQuery
} from '@mui/material';
import {
  Facebook as FacebookIcon,
  Twitter as TwitterIcon,
  LinkedIn as LinkedInIcon,
  Instagram as InstagramIcon,
  YouTube as YouTubeIcon,
  School as SchoolIcon,
  Work as WorkIcon,
  Book as BookIcon,
  TrendingUp as TrendingUpIcon
} from '@mui/icons-material';
import { motion } from 'framer-motion';

const Footer = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const footerSections = [
    {
      title: 'Curriculum',
      items: [
        { name: 'AI Fundamentals', link: '#' },
        { name: 'Machine Learning', link: '#' },
        { name: 'Data Science', link: '#' },
        { name: 'Programming', link: '#' },
        { name: 'Robotics', link: '#' },
        { name: 'Digital Literacy', link: '#' }
      ]
    },
    {
      title: 'Training',
      items: [
        { name: 'Online Courses', link: '#' },
        { name: 'Workshops', link: '#' },
        { name: 'Certification', link: '#' },
        { name: 'Corporate Training', link: '#' },
        { name: 'Teacher Training', link: '#' },
        { name: 'Summer Camps', link: '#' }
      ]
    },
    {
      title: 'Subjects',
      items: [
        { name: 'Mathematics', link: '#' },
        { name: 'Science', link: '#' },
        { name: 'Computer Science', link: '#' },
        { name: 'Languages', link: '#' },
        { name: 'Arts & Creativity', link: '#' },
        { name: 'Life Skills', link: '#' }
      ]
    },
    {
      title: 'Careers',
      items: [
        { name: 'Join Our Team', link: '#' },
        { name: 'Teaching Positions', link: '#' },
        { name: 'Technology Roles', link: '#' },
        { name: 'Internships', link: '#' },
        { name: 'Partnerships', link: '#' },
        { name: 'Volunteer', link: '#' }
      ]
    }
  ];

  const socialLinks = [
    { icon: <FacebookIcon />, link: '#', color: '#1877F2' },
    { icon: <TwitterIcon />, link: '#', color: '#1DA1F2' },
    { icon: <LinkedInIcon />, link: '#', color: '#0077B5' },
    { icon: <InstagramIcon />, link: '#', color: '#E4405F' },
    { icon: <YouTubeIcon />, link: '#', color: '#FF0000' }
  ];

  return (
    <Box 
      sx={{ 
        backgroundColor: '#333333',
        color: '#FFFFFF',
        pt: 6,
        pb: 3
      }}
    >
      <Container maxWidth="xl">
        {/* Main Footer Content */}
        <Grid container spacing={4} sx={{ mb: 4 }}>
          {/* Company Info */}
          <Grid item xs={12} md={4}>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                <SchoolIcon sx={{ fontSize: 40, color: '#4FC3F7', mr: 2 }} />
                <Typography 
                  variant="h5" 
                  component="h2"
                  sx={{ 
                    fontWeight: 700,
                    color: '#FFFFFF'
                  }}
                >
                  Medha.ai
                </Typography>
              </Box>
              <Typography 
                variant="body1" 
                sx={{ 
                  lineHeight: 1.8,
                  mb: 3,
                  color: '#A5D6A7'
                }}
              >
                Revolutionizing education through intelligent learning. We empower students with 
                AI-driven personalized education that adapts to their unique learning journey.
              </Typography>
              <Box sx={{ display: 'flex', gap: 1 }}>
                {socialLinks.map((social, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <IconButton
                      component={Link}
                      href={social.link}
                      sx={{
                        backgroundColor: social.color,
                        color: '#FFFFFF',
                        '&:hover': {
                          backgroundColor: social.color,
                          transform: 'translateY(-2px)',
                          boxShadow: '0 4px 12px rgba(0,0,0,0.3)'
                        },
                        transition: 'all 0.3s ease'
                      }}
                    >
                      {social.icon}
                    </IconButton>
                  </motion.div>
                ))}
              </Box>
            </motion.div>
          </Grid>

          {/* Footer Sections */}
          {footerSections.map((section, sectionIndex) => (
            <Grid item xs={12} sm={6} md={2} key={sectionIndex}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: sectionIndex * 0.1 }}
              >
                <Typography 
                  variant="h6" 
                  component="h3"
                  sx={{ 
                    fontWeight: 600,
                    color: '#4FC3F7',
                    mb: 3,
                    borderBottom: '2px solid #03A9F4',
                    pb: 1
                  }}
                >
                  {section.title}
                </Typography>
                <Box component="ul" sx={{ listStyle: 'none', p: 0, m: 0 }}>
                  {section.items.map((item, itemIndex) => (
                    <Box component="li" key={itemIndex} sx={{ mb: 1 }}>
                      <Link
                        href={item.link}
                        sx={{
                          color: '#A5D6A7',
                          textDecoration: 'none',
                          fontSize: '0.9rem',
                          transition: 'all 0.3s ease',
                          '&:hover': {
                            color: '#FFFFFF',
                            paddingLeft: '8px'
                          }
                        }}
                      >
                        {item.name}
                      </Link>
                    </Box>
                  ))}
                </Box>
              </motion.div>
            </Grid>
          ))}
        </Grid>

        <Divider sx={{ borderColor: '#03A9F4', mb: 4 }} />

        {/* Quick Stats */}
        <Grid container spacing={3} sx={{ mb: 4 }}>
          <Grid item xs={6} sm={3}>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
            >
              <Box sx={{ textAlign: 'center' }}>
                <Typography 
                  variant="h4" 
                  sx={{ 
                    fontWeight: 700,
                    color: '#4FC3F7',
                    mb: 1
                  }}
                >
                  10K+
                </Typography>
                <Typography 
                  variant="body2" 
                  sx={{ 
                    color: '#A5D6A7',
                    fontWeight: 500
                  }}
                >
                  Students Enrolled
                </Typography>
              </Box>
            </motion.div>
          </Grid>
          <Grid item xs={6} sm={3}>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <Box sx={{ textAlign: 'center' }}>
                <Typography 
                  variant="h4" 
                  sx={{ 
                    fontWeight: 700,
                    color: '#03A9F4',
                    mb: 1
                  }}
                >
                  50+
                </Typography>
                <Typography 
                  variant="body2" 
                  sx={{ 
                    color: '#A5D6A7',
                    fontWeight: 500
                  }}
                >
                  Expert Teachers
                </Typography>
              </Box>
            </motion.div>
          </Grid>
          <Grid item xs={6} sm={3}>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Box sx={{ textAlign: 'center' }}>
                <Typography 
                  variant="h4" 
                  sx={{ 
                    fontWeight: 700,
                    color: '#4FC3F7',
                    mb: 1
                  }}
                >
                  100+
                </Typography>
                <Typography 
                  variant="body2" 
                  sx={{ 
                    color: '#A5D6A7',
                    fontWeight: 500
                  }}
                >
                  AI Courses
                </Typography>
              </Box>
            </motion.div>
          </Grid>
          <Grid item xs={6} sm={3}>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <Box sx={{ textAlign: 'center' }}>
                <Typography 
                  variant="h4" 
                  sx={{ 
                    fontWeight: 700,
                    color: '#03A9F4',
                    mb: 1
                  }}
                >
                  95%
                </Typography>
                <Typography 
                  variant="body2" 
                  sx={{ 
                    color: '#A5D6A7',
                    fontWeight: 500
                  }}
                >
                  Success Rate
                </Typography>
              </Box>
            </motion.div>
          </Grid>
        </Grid>

        <Divider sx={{ borderColor: '#03A9F4', mb: 4 }} />

        {/* Bottom Footer */}
        <Grid container spacing={2} alignItems="center">
          <Grid item xs={12} md={6}>
            <Typography 
              variant="body2" 
              sx={{ 
                color: '#A5D6A7',
                textAlign: isMobile ? 'center' : 'left'
              }}
            >
              © 2024 Medha AI Learnings. All rights reserved.
            </Typography>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box 
              sx={{ 
                display: 'flex', 
                gap: 3,
                justifyContent: isMobile ? 'center' : 'flex-end',
                flexWrap: 'wrap'
              }}
            >
              <Link
                href="#"
                sx={{
                  color: '#A5D6A7',
                  textDecoration: 'none',
                  fontSize: '0.9rem',
                  '&:hover': { color: '#FFFFFF' }
                }}
              >
                Privacy Policy
              </Link>
              <Link
                href="#"
                sx={{
                  color: '#A5D6A7',
                  textDecoration: 'none',
                  fontSize: '0.9rem',
                  '&:hover': { color: '#FFFFFF' }
                }}
              >
                Terms of Service
              </Link>
              <Link
                href="#"
                sx={{
                  color: '#A5D6A7',
                  textDecoration: 'none',
                  fontSize: '0.9rem',
                  '&:hover': { color: '#FFFFFF' }
                }}
              >
                Cookie Policy
              </Link>
              <Link
                href="#"
                sx={{
                  color: '#A5D6A7',
                  textDecoration: 'none',
                  fontSize: '0.9rem',
                  '&:hover': { color: '#FFFFFF' }
                }}
              >
                Accessibility
              </Link>
            </Box>
          </Grid>
        </Grid>

        {/* Newsletter Signup */}
        <Box 
          sx={{ 
            mt: 4,
            p: 3,
            backgroundColor: 'rgba(79, 195, 247, 0.1)',
            borderRadius: 2,
            border: '1px solid #03A9F4'
          }}
        >
          <Typography 
            variant="h6" 
            sx={{ 
              textAlign: 'center',
              color: '#4FC3F7',
              fontWeight: 600,
              mb: 2
            }}
          >
            Stay Updated with AI Education Trends
          </Typography>
          <Typography 
            variant="body2" 
            sx={{ 
              textAlign: 'center',
              color: '#A5D6A7',
              mb: 3
            }}
          >
            Subscribe to our newsletter for the latest insights on AI-powered learning and educational technology.
          </Typography>
          <Box sx={{ textAlign: 'center' }}>
            <Link
              href="#"
              sx={{
                color: '#4FC3F7',
                textDecoration: 'none',
                fontWeight: 600,
                fontSize: '1rem',
                '&:hover': { 
                  color: '#FFFFFF',
                  textDecoration: 'underline'
                }
              }}
            >
              Subscribe Now →
            </Link>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer; 