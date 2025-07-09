import React from 'react';
import { Box, Typography, Button, Card, CardContent } from '@mui/material';
import { colors, commonStyles } from '../theme/colors';

// Example component showing how to use the centralized theme
const ThemeExample = () => {
  return (
    <Box sx={{ p: 4, ...commonStyles.container.primary }}>
      <Typography variant="h4" sx={commonStyles.typography.heading}>
        Centralized Theme Example
      </Typography>
      
      <Typography variant="body1" sx={commonStyles.typography.body}>
        This component demonstrates how to use the centralized color theme system.
      </Typography>

      {/* Example Card */}
      <Card sx={commonStyles.card}>
        <CardContent>
          <Typography variant="h6" sx={commonStyles.typography.heading}>
            Card with Centralized Styles
          </Typography>
          <Typography variant="body2" sx={commonStyles.typography.body}>
            This card uses the commonStyles.card object for consistent styling.
          </Typography>
        </CardContent>
      </Card>

      {/* Example Buttons */}
      <Box sx={{ mt: 2, display: 'flex', gap: 2 }}>
        <Button sx={commonStyles.button.primary}>
          Primary Button
        </Button>
        <Button sx={commonStyles.button.secondary}>
          Secondary Button
        </Button>
      </Box>

      {/* Example Paper */}
      <Box sx={{ mt: 2 }}>
        <Box sx={{ p: 3, ...commonStyles.paper.primary }}>
          <Typography variant="h6" sx={commonStyles.typography.heading}>
            Paper with Centralized Styles
          </Typography>
          <Typography variant="body2" sx={commonStyles.typography.body}>
            This paper uses the commonStyles.paper.primary object.
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default ThemeExample; 