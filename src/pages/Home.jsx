import { useState } from 'react'
import { Box } from '@mui/material'
import HeroBanner from '../components/HeroBanner'
import SerachExercise from '../components/SerachExercise'
import Exercises from '../components/Exercises'

const Home = () => {
  return (
    <Box>
      <HeroBanner />
      <SerachExercise />
      <Exercises />
    </Box>
  )
}

export default Home