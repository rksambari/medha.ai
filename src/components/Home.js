import React from 'react';
import {
  Container,
  Typography,
  Box,
  Grid,
  Card,
  useTheme,
  useMediaQuery
} from '@mui/material';
import {
  School as SchoolIcon,
  Psychology as PsychologyIcon,
  TrendingUp as TrendingUpIcon,
  Group as GroupIcon,
  Lightbulb as LightbulbIcon,
  AutoAwesome as AutoAwesomeIcon
} from '@mui/icons-material';
import { motion } from 'framer-motion';
import { colors } from '../theme/colors';

const Home = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const features = [
    {
      icon: <PsychologyIcon sx={{ fontSize: 40, color: colors.primary.orange }} />, // All icons orange
      title: 'Personalized Learning',
      description: 'AI-driven adaptive learning paths tailored to each student\'s unique strengths and learning pace.'
    },
    {
      icon: <TrendingUpIcon sx={{ fontSize: 40, color: colors.primary.orange }} />, // All icons orange
      title: 'Performance Analytics',
      description: 'Real-time insights into learning progress with detailed analytics and improvement recommendations.'
    },
    {
      icon: <GroupIcon sx={{ fontSize: 40, color: colors.primary.orange }} />, // All icons orange
      title: 'Collaborative Learning',
      description: 'AI-facilitated group projects and peer learning experiences that enhance social skills.'
    },
    {
      icon: <LightbulbIcon sx={{ fontSize: 40, color: colors.primary.orange }} />, // All icons orange
      title: 'Critical Thinking',
      description: 'AI-powered problem-solving scenarios that develop analytical and creative thinking skills.'
    },
    {
      icon: <AutoAwesomeIcon sx={{ fontSize: 40, color: colors.primary.orange }} />, // All icons orange
      title: 'Future-Ready Skills',
      description: 'Curriculum designed to prepare students for the AI-driven future workplace and society.'
    },
    {
      icon: <SchoolIcon sx={{ fontSize: 40, color: colors.primary.orange }} />, // All icons orange
      title: 'Expert Mentorship',
      description: 'Combination of AI guidance and human expertise for comprehensive learning support.'
    }
  ];

  return (
    <Box sx={{ minHeight: '100vh', background: colors.background.main }}>
      {/* Mission Section */}
      <Container maxWidth="xl" sx={{ py: { xs: 4, md: 8 } }}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Box // Changed from Paper to Box
            sx={{ 
              p: { xs: 2, md: 4 },
              backgroundColor: colors.neutral.white, // White background
              borderRadius: 0, // No border radius
              border: 'none', // No border
              boxShadow: 'none' // No shadow
            }}
          >
            <Typography 
              variant="h3" 
              component="h2"
              sx={{ 
                textAlign: 'center',
                color: colors.text.primary,
                fontWeight: 700,
                mb: { xs: 2, md: 4 },
                fontSize: { xs: '1.8rem', md: '2.5rem' }
              }}
            >
              Our Mission & Vision
            </Typography>
            <Typography 
              variant="h6" 
              sx={{ 
                color: colors.text.primary,
                textAlign: 'center',
                lineHeight: 1.8,
                mb: { xs: 2, md: 3 },
                fontSize: { xs: '1rem', md: '1.25rem' }
              }}
            >
              To democratize quality education by leveraging artificial intelligence to create personalized, 
              adaptive learning experiences that empower every student to reach their full potential.
            </Typography>
            <Typography 
              variant="body1" 
              sx={{ 
                color: colors.text.primary,
                textAlign: 'center',
                fontSize: { xs: '0.9rem', md: '1.1rem' },
                lineHeight: 1.7
              }}
            >
              We envision a world where learning is not constrained by traditional boundaries, 
              where every student has access to world-class education tailored to their individual needs, 
              and where AI serves as a powerful ally in the journey of knowledge acquisition and skill development.
            </Typography>
          </Box>
        </motion.div>
      </Container>

      {/* Features Section */}
      <Container maxWidth="xl" sx={{ py: { xs: 4, md: 8 } }}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <Typography 
            variant="h3" 
            component="h2"
            sx={{ 
              textAlign: 'center',
              color: colors.text.primary,
              fontWeight: 700,
              mb: { xs: 3, md: 6 },
              fontSize: { xs: '1.8rem', md: '2.5rem' }
            }}
          >
            Why Choose Medha AI Learnings?
          </Typography>
          <Grid container spacing={{ xs: 3, md: 4 }} justifyContent="center">
            {features.map((feature, index) => (
              <Grid item xs={6} sm={4} md={3} key={index}>
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                <Card 
                  sx={{ 
                    backgroundColor: colors.neutral.white,
                    border: `2px solid ${colors.primary.green}`,
                    borderRadius: '50%',
                    width: { xs: '120px', sm: '140px', md: '160px' },
                    height: { xs: '120px', sm: '140px', md: '160px' },
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    transition: 'all 0.3s ease',
                    mx: 'auto',
                    '&:hover': {
                      transform: isMobile ? 'scale(1.05)' : 'scale(1.1)',
                      boxShadow: colors.shadows.card,
                      borderColor: colors.primary.orange
                    }
                  }}
                >
                  <Box sx={{ 
                    display: 'flex', 
                    flexDirection: 'column', 
                    alignItems: 'center', 
                    justifyContent: 'center',
                    textAlign: 'center',
                    p: 2
                  }}>
                    <Box sx={{ mb: 1 }}>
                      {React.cloneElement(feature.icon, { 
                        sx: { 
                          fontSize: { xs: 24, sm: 28, md: 32 }, 
                          color: colors.primary.orange 
                        } 
                      })}
                    </Box>
                    <Typography 
                      variant="body2" 
                      component="h3"
                      sx={{ 
                        color: colors.primary.green,
                        fontWeight: 600,
                        fontSize: { xs: '0.7rem', sm: '0.8rem', md: '0.9rem' },
                        lineHeight: 1.2,
                        textAlign: 'center'
                      }}
                    >
                      {feature.title}
                    </Typography>
                  </Box>
                </Card>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </motion.div>
      </Container>
    </Box>
  );
};

export default Home; 