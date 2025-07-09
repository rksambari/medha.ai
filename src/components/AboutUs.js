import React from 'react';
import {
  Container,
  Typography,
  Box,
  Grid,
  Card,
  CardContent,
  Avatar,
  useTheme,
  useMediaQuery
} from '@mui/material';
import {
  Person as PersonIcon,
  Compare as CompareIcon,
  TrendingUp as TrendingUpIcon,
  Psychology as PsychologyIcon,
  Group as GroupIcon,
  Schedule as ScheduleIcon,
  School as SchoolIcon,
  Lightbulb as LightbulbIcon
} from '@mui/icons-material';
import { motion } from 'framer-motion';
import { colors } from '../theme/colors';

const AboutUs = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const comparisonData = [
    {
      traditional: {
        title: 'One-Size-Fits-All',
        description: 'Fixed curriculum regardless of individual learning pace and style',
        icon: <GroupIcon sx={{ fontSize: 30, color: colors.primary.orange }} />
      },
      ai: {
        title: 'Personalized Learning',
        description: 'Adaptive curriculum that adjusts to each student\'s unique needs',
        icon: <PsychologyIcon sx={{ fontSize: 30, color: colors.primary.green }} />
      }
    },
    {
      traditional: {
        title: 'Limited Feedback',
        description: 'Delayed and generic feedback on assignments and progress',
        icon: <ScheduleIcon sx={{ fontSize: 30, color: colors.primary.orange }} />
      },
      ai: {
        title: 'Real-time Analytics',
        description: 'Instant, detailed feedback with actionable improvement suggestions',
        icon: <TrendingUpIcon sx={{ fontSize: 30, color: colors.primary.green }} />
      }
    },
    {
      traditional: {
        title: 'Passive Learning',
        description: 'Lecture-based approach with limited student engagement',
        icon: <SchoolIcon sx={{ fontSize: 30, color: colors.primary.orange }} />
      },
      ai: {
        title: 'Interactive Engagement',
        description: 'Active learning through AI-powered simulations and gamification',
        icon: <LightbulbIcon sx={{ fontSize: 30, color: colors.primary.green }} />
      }
    }
  ];

  return (
    <Box sx={{ minHeight: '100vh', backgroundColor: colors.neutral.white }}>
      {/* Director Section */}
      <Container maxWidth="xl" sx={{ py: { xs: 4, md: 8 } }}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, gap: 4, alignItems: { xs: 'center', md: 'flex-start' } }}>
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              style={{ flexShrink: 0 }}
            >
              <Box sx={{ 
                display: 'flex', 
                flexDirection: 'column', 
                alignItems: 'center', 
                textAlign: 'center', 
                minWidth: { xs: 'auto', md: '200px' },
                width: { xs: '100%', md: 'auto' }
              }}>
                <Avatar
                  sx={{
                    width: { xs: 120, md: 150 },
                    height: { xs: 120, md: 150 },
                    backgroundColor: colors.accent.cream,
                    border: `3px solid ${colors.primary.green}`,
                    boxShadow: colors.shadows.card,
                    mb: 2
                  }}
                >
                  <PersonIcon sx={{ fontSize: { xs: 50, md: 60 }, color: colors.primary.green }} />
                </Avatar>
                <Typography 
                  variant="h6" 
                  component="h2"
                  sx={{ 
                    color: colors.text.primary,
                    fontWeight: 700,
                    mb: 1,
                    fontSize: { xs: '1rem', md: '1.25rem' }
                  }}
                >
                  Saicharan
                </Typography>
                <Typography 
                  variant="body1" 
                  sx={{ 
                    color: colors.primary.green,
                    fontWeight: 600,
                    fontSize: { xs: '0.8rem', md: '1rem' },
                    textAlign: 'center'
                  }}
                >
                  Director & Visionary Leader
                </Typography>
              </Box>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              style={{ flex: 1 }}
            >
              <Box sx={{ p: { xs: 2, md: 4 } }}>
                <Typography 
                  variant="body1" 
                  sx={{ 
                    color: colors.text.primary,
                    lineHeight: 1.8,
                    fontSize: { xs: '1rem', md: '1.1rem' },
                    mb: 3
                  }}
                >
                  "As the Director of Medha AI Learnings, I am passionate about revolutionizing education through 
                  artificial intelligence. Our journey began with a simple yet powerful vision: to make quality 
                  education accessible to every student, regardless of their background or learning style."
                </Typography>
                <Typography 
                  variant="body1" 
                  sx={{ 
                    color: colors.text.primary,
                    lineHeight: 1.8,
                    fontSize: { xs: '1rem', md: '1.1rem' }
                  }}
                >
                  "We believe that AI is not here to replace teachers, but to amplify their impact. By combining 
                  human expertise with intelligent technology, we create learning experiences that are more engaging, 
                  effective, and personalized than ever before. Our mission is to prepare students not just for today's 
                  challenges, but for the AI-driven future that awaits them."
                </Typography>
              </Box>
            </motion.div>
          </Box>
        </motion.div>
      </Container>

      {/* Our Story Section */}
      <Container maxWidth="xl" sx={{ py: { xs: 4, md: 8 } }}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Box sx={{ p: { xs: 2, md: 4 } }}>
            <Typography 
              variant="h4" 
              component="h2"
              sx={{ 
                color: colors.text.primary,
                fontWeight: 700,
                mb: 3,
                fontSize: { xs: '1.8rem', md: '2.5rem' },
                textAlign: 'center'
              }}
            >
              Our Story
            </Typography>
            <Typography 
              variant="body1" 
              sx={{ 
                color: colors.text.primary,
                fontSize: { xs: '1rem', md: '1.1rem' },
                lineHeight: 1.8,
                mb: 3
              }}
            >
              Medha AI Learnings was founded with a clear understanding of the challenges facing modern education. 
              Traditional learning methods, while valuable, often fail to address the diverse needs of individual students. 
              We recognized that every student learns differently, at different paces, and with different strengths and challenges.
            </Typography>
            <Typography 
              variant="body1" 
              sx={{ 
                color: colors.text.primary,
                fontSize: { xs: '1rem', md: '1.1rem' },
                lineHeight: 1.8,
                mb: 3
              }}
            >
              Our team of educators, technologists, and AI specialists came together to create a platform that leverages 
              the power of artificial intelligence to deliver truly personalized learning experiences. We combine cutting-edge 
              AI algorithms with proven educational methodologies to create an environment where every student can thrive.
            </Typography>
            <Typography 
              variant="body1" 
              sx={{ 
                color: colors.text.primary,
                fontSize: { xs: '1rem', md: '1.1rem' },
                lineHeight: 1.8
              }}
            >
              Today, we serve thousands of students across the country, helping them achieve their full potential through 
              intelligent, adaptive, and engaging learning experiences. Our commitment to innovation and excellence continues 
              to drive us forward as we shape the future of education.
            </Typography>
          </Box>
        </motion.div>
      </Container>

      {/* Traditional vs AI Learning Comparison */}
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
            Traditional Learning vs AI-Based Learning
          </Typography>
          
          <Grid container spacing={{ xs: 2, md: 3 }} justifyContent="center">
            {comparisonData.map((item, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Box sx={{ 
                    display: 'flex', 
                    flexDirection: { xs: 'column', md: 'row' }, 
                    alignItems: 'center', 
                    gap: { xs: 2, md: 3 },
                    p: 2
                  }}>
                    {/* Traditional Learning */}
                    <Box sx={{ 
                      display: 'flex', 
                      flexDirection: 'column', 
                      alignItems: 'center',
                      width: { xs: '100%', md: '45%' }
                    }}>
                      <Typography 
                        variant="h6" 
                        sx={{ 
                          color: colors.primary.orange,
                          fontWeight: 700,
                          mb: 2,
                          fontSize: { xs: '1rem', md: '1.1rem' },
                          textAlign: 'center'
                        }}
                      >
                        Traditional
                      </Typography>
                      <Card 
                        sx={{ 
                          backgroundColor: colors.neutral.white,
                          border: `2px solid ${colors.primary.orange}`,
                          borderRadius: 3,
                          width: '100%',
                          minHeight: { xs: '120px', sm: '140px' },
                          display: 'flex',
                          flexDirection: 'column',
                          transition: 'all 0.3s ease',
                          '&:hover': {
                            transform: 'translateY(-4px)',
                            boxShadow: colors.shadows.card
                          }
                        }}
                      >
                        <CardContent sx={{ 
                          textAlign: 'center', 
                          p: { xs: 2, md: 3 }, 
                          flex: 1, 
                          display: 'flex', 
                          flexDirection: 'column', 
                          justifyContent: 'center' 
                        }}>
                          <Box sx={{ mb: 2 }}>
                            {React.cloneElement(item.traditional.icon, { 
                              sx: { 
                                fontSize: { xs: 28, sm: 32 }, 
                                color: colors.primary.orange 
                              } 
                            })}
                          </Box>
                          <Typography 
                            variant="h6" 
                            component="h3"
                            sx={{ 
                              color: colors.primary.orange,
                              fontWeight: 600,
                              mb: 1,
                              fontSize: { xs: '0.9rem', sm: '1rem' }
                            }}
                          >
                            {item.traditional.title}
                          </Typography>
                          <Typography 
                            variant="body2" 
                            sx={{ 
                              color: colors.text.primary,
                              lineHeight: 1.5,
                              fontSize: { xs: '0.8rem', sm: '0.875rem' }
                            }}
                          >
                            {item.traditional.description}
                          </Typography>
                        </CardContent>
                      </Card>
                    </Box>

                    {/* VS Divider */}
                    <Box sx={{ 
                      display: 'flex', 
                      alignItems: 'center', 
                      justifyContent: 'center',
                      width: { xs: '100%', md: '10%' },
                      my: { xs: 1, md: 0 }
                    }}>
                      <Box sx={{ 
                        width: { xs: '60px', md: '2px' }, 
                        height: { xs: '2px', md: '60px' }, 
                        backgroundColor: colors.primary.green,
                        position: 'relative'
                      }}>
                        <Box sx={{ 
                          position: 'absolute',
                          top: { xs: '-8px', md: '50%' },
                          left: { xs: '50%', md: '50%' },
                          transform: { xs: 'translateX(-50%)', md: 'translate(-50%, -50%)' },
                          backgroundColor: colors.primary.green,
                          color: colors.neutral.white,
                          borderRadius: '50%',
                          width: '20px',
                          height: '20px',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          fontSize: '0.7rem',
                          fontWeight: 700
                        }}>
                          VS
                        </Box>
                      </Box>
                    </Box>

                    {/* AI Learning */}
                    <Box sx={{ 
                      display: 'flex', 
                      flexDirection: 'column', 
                      alignItems: 'center',
                      width: { xs: '100%', md: '45%' }
                    }}>
                      <Typography 
                        variant="h6" 
                        sx={{ 
                          color: colors.primary.green,
                          fontWeight: 700,
                          mb: 2,
                          fontSize: { xs: '1rem', md: '1.1rem' },
                          textAlign: 'center'
                        }}
                      >
                        AI-Based
                      </Typography>
                      <Card 
                        sx={{ 
                          backgroundColor: colors.neutral.white,
                          border: `2px solid ${colors.primary.green}`,
                          borderRadius: 3,
                          width: '100%',
                          minHeight: { xs: '120px', sm: '140px' },
                          display: 'flex',
                          flexDirection: 'column',
                          transition: 'all 0.3s ease',
                          '&:hover': {
                            transform: 'translateY(-4px)',
                            boxShadow: colors.shadows.card
                          }
                        }}
                      >
                        <CardContent sx={{ 
                          textAlign: 'center', 
                          p: { xs: 2, md: 3 }, 
                          flex: 1, 
                          display: 'flex', 
                          flexDirection: 'column', 
                          justifyContent: 'center' 
                        }}>
                          <Box sx={{ mb: 2 }}>
                            {React.cloneElement(item.ai.icon, { 
                              sx: { 
                                fontSize: { xs: 28, sm: 32 }, 
                                color: colors.primary.green 
                              } 
                            })}
                          </Box>
                          <Typography 
                            variant="h6" 
                            component="h3"
                            sx={{ 
                              color: colors.primary.green,
                              fontWeight: 600,
                              mb: 1,
                              fontSize: { xs: '0.9rem', sm: '1rem' }
                            }}
                          >
                            {item.ai.title}
                          </Typography>
                          <Typography 
                            variant="body2" 
                            sx={{ 
                              color: colors.text.primary,
                              lineHeight: 1.5,
                              fontSize: { xs: '0.8rem', sm: '0.875rem' }
                            }}
                          >
                            {item.ai.description}
                          </Typography>
                        </CardContent>
                      </Card>
                    </Box>
                  </Box>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </motion.div>
      </Container>

      {/* Our Approach */}
      <Container maxWidth="xl" sx={{ py: { xs: 4, md: 8 } }}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
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
            Our AI-Based Learning Approach
          </Typography>
          <Typography 
            variant="h6" 
            sx={{ 
              textAlign: 'center',
              color: colors.text.gray,
              lineHeight: 1.6,
              mb: 6,
              fontSize: { xs: '1rem', md: '1.25rem' },
              maxWidth: 800,
              mx: 'auto'
            }}
          >
            We combine the best of human expertise with AI technology to create a comprehensive learning ecosystem
          </Typography>
          
          <Grid container spacing={{ xs: 3, md: 4 }} justifyContent="center">
            <Grid item xs={12} sm={6} md={3}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                <Box sx={{ 
                  textAlign: 'center', 
                  p: 3,
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  <Box sx={{ 
                    width: 80, 
                    height: 80, 
                    backgroundColor: colors.primary.green, 
                    borderRadius: '50%', 
                    display: 'flex', 
                    alignItems: 'center', 
                    justifyContent: 'center',
                    mb: 3,
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      transform: 'scale(1.1)',
                      boxShadow: colors.shadows.card
                    }
                  }}>
                    <TrendingUpIcon sx={{ fontSize: 36, color: colors.neutral.white }} />
                  </Box>
                  <Typography 
                    variant="h6" 
                    sx={{ 
                      fontWeight: 600, 
                      color: colors.text.primary, 
                      mb: 2,
                      fontSize: { xs: '1rem', md: '1.1rem' }
                    }}
                  >
                    Adaptive Learning Paths
                  </Typography>
                  <Typography 
                    variant="body2" 
                    sx={{ 
                      color: colors.text.gray, 
                      lineHeight: 1.6,
                      fontSize: { xs: '0.9rem', md: '1rem' }
                    }}
                  >
                    AI algorithms analyze student performance and adjust content difficulty in real-time
                  </Typography>
                </Box>
              </motion.div>
            </Grid>
            
            <Grid item xs={12} sm={6} md={3}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <Box sx={{ 
                  textAlign: 'center', 
                  p: 3,
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  <Box sx={{ 
                    width: 80, 
                    height: 80, 
                    backgroundColor: colors.primary.green, 
                    borderRadius: '50%', 
                    display: 'flex', 
                    alignItems: 'center', 
                    justifyContent: 'center',
                    mb: 3,
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      transform: 'scale(1.1)',
                      boxShadow: colors.shadows.card
                    }
                  }}>
                    <PsychologyIcon sx={{ fontSize: 36, color: colors.neutral.white }} />
                  </Box>
                  <Typography 
                    variant="h6" 
                    sx={{ 
                      fontWeight: 600, 
                      color: colors.text.primary, 
                      mb: 2,
                      fontSize: { xs: '1rem', md: '1.1rem' }
                    }}
                  >
                    Intelligent Assessment
                  </Typography>
                  <Typography 
                    variant="body2" 
                    sx={{ 
                      color: colors.text.gray, 
                      lineHeight: 1.6,
                      fontSize: { xs: '0.9rem', md: '1rem' }
                    }}
                  >
                    Continuous evaluation with detailed analytics and improvement recommendations
                  </Typography>
                </Box>
              </motion.div>
            </Grid>
            
            <Grid item xs={12} sm={6} md={3}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <Box sx={{ 
                  textAlign: 'center', 
                  p: 3,
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  <Box sx={{ 
                    width: 80, 
                    height: 80, 
                    backgroundColor: colors.primary.green, 
                    borderRadius: '50%', 
                    display: 'flex', 
                    alignItems: 'center', 
                    justifyContent: 'center',
                    mb: 3,
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      transform: 'scale(1.1)',
                      boxShadow: colors.shadows.card
                    }
                  }}>
                    <SchoolIcon sx={{ fontSize: 36, color: colors.neutral.white }} />
                  </Box>
                  <Typography 
                    variant="h6" 
                    sx={{ 
                      fontWeight: 600, 
                      color: colors.text.primary, 
                      mb: 2,
                      fontSize: { xs: '1rem', md: '1.1rem' }
                    }}
                  >
                    Personalized Content
                  </Typography>
                  <Typography 
                    variant="body2" 
                    sx={{ 
                      color: colors.text.gray, 
                      lineHeight: 1.6,
                      fontSize: { xs: '0.9rem', md: '1rem' }
                    }}
                  >
                    Curated learning materials based on individual learning styles and preferences
                  </Typography>
                </Box>
              </motion.div>
            </Grid>
            
            <Grid item xs={12} sm={6} md={3}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <Box sx={{ 
                  textAlign: 'center', 
                  p: 3,
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  <Box sx={{ 
                    width: 80, 
                    height: 80, 
                    backgroundColor: colors.primary.green, 
                    borderRadius: '50%', 
                    display: 'flex', 
                    alignItems: 'center', 
                    justifyContent: 'center',
                    mb: 3,
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      transform: 'scale(1.1)',
                      boxShadow: colors.shadows.card
                    }
                  }}>
                    <GroupIcon sx={{ fontSize: 36, color: colors.neutral.white }} />
                  </Box>
                  <Typography 
                    variant="h6" 
                    sx={{ 
                      fontWeight: 600, 
                      color: colors.text.primary, 
                      mb: 2,
                      fontSize: { xs: '1rem', md: '1.1rem' }
                    }}
                  >
                    Human-AI Collaboration
                  </Typography>
                  <Typography 
                    variant="body2" 
                    sx={{ 
                      color: colors.text.gray, 
                      lineHeight: 1.6,
                      fontSize: { xs: '0.9rem', md: '1rem' }
                    }}
                  >
                    Teachers and AI work together to provide comprehensive support
                  </Typography>
                </Box>
              </motion.div>
            </Grid>
          </Grid>
        </motion.div>
      </Container>
    </Box>
  );
};

export default AboutUs; 