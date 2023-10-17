import React from 'react'
import { Typography, Stack, Box } from '@mui/material';

const Footer = () => {
  return (
    <Box mt='80px' bgcolor='#fff3f4' width='100%'>
      <Stack gap='40px' alignItems='center' px='40px' >
        <Typography variant="h5" pb='40px' mt='20px'>Made with ❤ by Raphael</Typography>
      </Stack>
    </Box>
  )
}

export default Footer