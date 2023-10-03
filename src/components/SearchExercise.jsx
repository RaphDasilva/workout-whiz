import React, { useEffect, useState } from 'react';
import { Box, Stack, Typography, TextField, Button } from '@mui/material';
import { exerciseOptions, fetchData } from '../utils/fetchData';
import HolizontalScrollbar from './HolizontalScrollbar';

const SearchExercise = ({setExercises, bodyPart, setBodyPart}) => {
  const [search, setSearch] = useState('');
  const [bodyParts, setBodyParts] = useState([]);

  useEffect(() => {
    const fetchExercisesData = async () => {
      const bodyPartsData = await fetchData('https://exercisedb.p.rapidapi.com/exercises/bodyPartList', exerciseOptions);
      setBodyParts(['all', ...bodyPartsData]);
    }
     
    fetchExercisesData();
  }, [])

  const handleSearch = async () => {
    if(search){
      const exercisesData = 
      await fetchData('https://exercisedb.p.rapidapi.com/exercises', exerciseOptions);
      
      const seachedExercises = exercisesData.filter((exercise) => 
        exercise.name.toLowerCase().includes(search)
        || exercise.target.toLowerCase().includes(search)
        || exercise.bodyPart.toLowerCase().includes(search)
        || exercise.equipment.toLowerCase().includes(search)
      );
        setSearch('');
        setExercises(seachedExercises);
    }
  }
  return (
    <Stack alignItems='center' mt='37px' justifyContent='center' p='20px'>
       <Typography fontWeight={700} sx={{fontSize:{lg: '44px', xs: '30px'}}} mb='50px' textAlign='center'>
            Awsome Exercises you <br /> should know 
       </Typography>
       <Box position='relative' mb='72'>
        <TextField 
        sx={{
          input: {
            fontWeight: '700',
            border: 'none',
            borderRadius: '4px'
          },
          width:{lg: '800px', xs: '350px'},
          backgroundColor: '#fff',
          borderRadius: '40px',
        }}
         height='76px'
         value={search}
         onChange={(e) => setSearch(e.target.value.toLowerCase())}
         placeholder='Search for exercises'
         type='text'
        />
        <Button className='search-btn'
         sx={{
          bgcolor: '#ff2526',
          color: '#fff',
          textTransform: 'none',
          width: {lg: '175px', xs: '80px'},
          fontSize: {lg: '20px', xs: '14px'},
          height: '50px',
          position: 'absolute',
          right: '0',
         }}

         onClick={handleSearch}
        >
          Search
        </Button>
       </Box>
       <Box sx={{
        position: 'relative',
        width: '100%',
        p: '20px',
       }}>
          <HolizontalScrollbar data={bodyParts} bodyPart={bodyPart} setBodyPart = {setBodyPart} />
       </Box>
    </Stack>
  )
}

export default SearchExercise