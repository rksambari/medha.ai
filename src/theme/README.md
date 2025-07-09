# Centralized Color Theme System

This directory contains the centralized color theme system for the Medha AI Learnings website.

## Structure

### `colors.js`
Contains all color definitions and common style objects.

## How to Use

### 1. Import the Theme
```javascript
import { colors, commonStyles } from '../theme/colors';
```

### 2. Use Colors Directly
```javascript
// Instead of hardcoded colors
backgroundColor: '#4FC3F7'

// Use centralized colors
backgroundColor: colors.primary.skyBlue
```

### 3. Use Common Styles
```javascript
// Instead of repeating styles
sx={{
  backgroundColor: '#FFFFFF',
  border: '2px solid #A5D6A7',
  borderRadius: 3,
  transition: 'all 0.3s ease',
  '&:hover': {
    transform: 'translateY(-8px)',
    boxShadow: '0 8px 25px rgba(79, 195, 247, 0.3)',
    borderColor: '#4FC3F7'
  }
}}

// Use common styles
sx={commonStyles.card}
```

## Available Colors

### Primary Colors
- `colors.primary.skyBlue` - #4FC3F7
- `colors.primary.cerulean` - #03A9F4

### Accent Colors
- `colors.accent.mintGreen` - #A5D6A7
- `colors.accent.softYellow` - #FFF59D

### Neutral Colors
- `colors.neutral.lightGray` - #F5F5F5
- `colors.neutral.white` - #FFFFFF
- `colors.neutral.charcoal` - #333333

### Text Colors
- `colors.text.primary` - #333333
- `colors.text.secondary` - #FFFFFF
- `colors.text.accent` - #A5D6A7
- `colors.text.light` - #F5F5F5

### Background Colors
- `colors.background.primary` - #F5F5F5
- `colors.background.secondary` - #FFFFFF
- `colors.background.dark` - #333333

## Available Common Styles

### Cards
```javascript
sx={commonStyles.card}
```

### Buttons
```javascript
sx={commonStyles.button.primary}
sx={commonStyles.button.secondary}
```

### Papers
```javascript
sx={commonStyles.paper.primary}
sx={commonStyles.paper.secondary}
```

### Typography
```javascript
sx={commonStyles.typography.heading}
sx={commonStyles.typography.headingWhite}
sx={commonStyles.typography.body}
sx={commonStyles.typography.bodyWhite}
sx={commonStyles.typography.accent}
```

### Containers
```javascript
sx={commonStyles.container.primary}
sx={commonStyles.container.secondary}
sx={commonStyles.container.dark}
```

## Benefits

1. **Consistency** - All components use the same colors
2. **Maintainability** - Change colors in one place
3. **Reusability** - Common styles can be reused
4. **Type Safety** - IDE autocomplete for color names
5. **Documentation** - Clear naming conventions

## Example Usage

```javascript
import React from 'react';
import { Box, Typography, Card, CardContent } from '@mui/material';
import { colors, commonStyles } from '../theme/colors';

const MyComponent = () => {
  return (
    <Box sx={{ ...commonStyles.container.primary }}>
      <Typography variant="h4" sx={commonStyles.typography.heading}>
        My Component
      </Typography>
      
      <Card sx={commonStyles.card}>
        <CardContent>
          <Typography variant="body1" sx={commonStyles.typography.body}>
            Content here
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
};
```

## Changing Colors

To change the entire color scheme, simply update the values in `colors.js`:

```javascript
export const colors = {
  primary: {
    skyBlue: '#NEW_COLOR_HERE', // Change this
    cerulean: '#NEW_COLOR_HERE', // And this
  },
  // ... other colors
};
```

All components will automatically use the new colors without any additional changes needed. 