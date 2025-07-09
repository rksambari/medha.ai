// Medha Dashboard-Inspired Color Theme
export const colors = {
  // Primary Colors
  primary: {
    green: '#43A047', // Main green for headers, buttons, icons
    orange: '#FFA726', // Orange for highlights, progress, numbers
  },

  // Accent/Box Colors
  accent: {
    cream: '#FFF9E5', // Mild brown/cream for cards/boxes
    orange: '#FFA726', // Orange for highlights
  },

  // Neutral Colors
  neutral: {
    white: '#FFFFFF',
    lightGray: '#F5F5F5',
    darkText: '#222222',
    grayText: '#757575',
  },

  // Background Colors
  background: {
    main: '#FFFFFF',
    card: '#FFF9E5',
    gray: '#F5F5F5',
  },

  // Text Colors
  text: {
    primary: '#222222',
    secondary: '#43A047',
    orange: '#FFA726',
    gray: '#757575',
    white: '#FFFFFF',
  },

  // Border Colors
  border: {
    light: '#F5F5F5',
    green: '#43A047',
    orange: '#FFA726',
  },

  // Gradients (if needed)
  gradients: {
    green: 'linear-gradient(90deg, #43A047 0%, #66BB6A 100%)',
    orange: 'linear-gradient(90deg, #FFA726 0%, #FFB300 100%)',
  },

  // Shadows
  shadows: {
    card: '0 2px 8px rgba(67, 160, 71, 0.08)',
    box: '0 1px 4px rgba(0,0,0,0.06)',
  },

  // Status
  status: {
    success: '#43A047',
    warning: '#FFA726',
    error: '#E53935',
  },
};

export const commonStyles = {
  card: {
    backgroundColor: colors.background.card,
    borderRadius: 12,
    boxShadow: colors.shadows.card,
    border: `1px solid ${colors.border.light}`,
    p: 2,
  },
  button: {
    primary: {
      backgroundColor: colors.primary.green,
      color: colors.neutral.white,
      fontWeight: 700,
      borderRadius: 8,
      textTransform: 'none',
      '&:hover': {
        backgroundColor: '#388E3C',
      },
    },
    outlined: {
      backgroundColor: colors.neutral.white,
      color: colors.primary.green,
      border: `2px solid ${colors.primary.green}`,
      fontWeight: 700,
      borderRadius: 8,
      textTransform: 'none',
      '&:hover': {
        backgroundColor: colors.accent.cream,
      },
    },
    orange: {
      backgroundColor: colors.primary.orange,
      color: colors.neutral.white,
      fontWeight: 700,
      borderRadius: 8,
      textTransform: 'none',
      '&:hover': {
        backgroundColor: '#FFB300',
      },
    },
  },
  paper: {
    backgroundColor: colors.background.card,
    borderRadius: 12,
    boxShadow: colors.shadows.card,
    border: `1px solid ${colors.border.light}`,
    p: 2,
  },
  typography: {
    heading: {
      color: colors.text.primary,
      fontWeight: 700,
    },
    subheading: {
      color: colors.text.secondary,
      fontWeight: 600,
    },
    orange: {
      color: colors.text.orange,
      fontWeight: 700,
    },
    gray: {
      color: colors.text.gray,
    },
    body: {
      color: colors.text.primary,
    },
    white: {
      color: colors.text.white,
    },
  },
  progressBar: {
    backgroundColor: '#E0E0E0',
    borderRadius: 8,
    height: 8,
    '& .MuiLinearProgress-bar': {
      backgroundColor: colors.primary.green,
    },
  },
};

export default colors; 