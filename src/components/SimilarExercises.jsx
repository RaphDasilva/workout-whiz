import React from 'react'
import { Box, Typography, Stack } from '@mui/material'
import HorizontalScrollbar from './HorizontalScrollbar'
import Loader from './Loader'

const SimilarExercises = ({targetExercises, equipmentExercises}) => {
  
  return (
    <Box sx={{mt:{lg:'100px', xs: '0'}}} p='20px'>
      <Typography variant='h3' mb='20px'>
        Exercises with the same target muscle group
      </Typography>
      <Stack direction='row' sx={{p: '2', position: 'relative'}}>
       {
        targetExercises.length ? <HorizontalScrollbar data={targetExercises} /> : <Loader />
       }
      </Stack>

      <Typography variant='h3' mb='20px' mt='200px'>
        Exercises with the same equipment
      </Typography>
      <Stack direction='row' sx={{p: '2', position: 'relative'}}>
       {
        equipmentExercises.length ? <HorizontalScrollbar data={equipmentExercises} /> : <Loader />
       }
      </Stack>
    </Box>
  )
}

export default SimilarExercises