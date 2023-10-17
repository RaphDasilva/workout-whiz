import React from 'react';
import { Typography, Stack, Button } from '@mui/material';

import BodyPart from '../assets/icons/body-part.png';
import Equipment from '../assets/icons/equipment.png';
import Target from '../assets/icons/target.png';

const Detail = ({exerciseDetail}) => {
    const { name,gifUrl, instructions, bodyPart, equipment, target } = exerciseDetail;

    const extraDetail = [
        {
            icon: BodyPart,
            title: 'Body Part',
            value: bodyPart,
        },
        {
            icon: Equipment,
            title: 'Equipment',
            value: equipment,
        },
        {
            icon: Target,
            title: 'Target',
            value: target,
        },
    ]

  return (
    <Stack 
    gap='60px' 
    sx={{
        flexDirection: {
            lg: 'row',
        },
        p: '20px',
        alignItems: 'center',
    }}>
      <img src={gifUrl} alt={name} className='detail-image' loading='lazy' />
      <Stack sx={{gap:{lg:'35px', xs: '20px'}}}>
        <Typography variant='h3'>
            {name}
        </Typography>
        <Typography variant='h6'>
            {instructions}
        </Typography>
        {
            extraDetail.map((detail, index) => (
                <Stack
                key={index}
                direction='row'
                alignItems='center'
                gap='24px'
                >
                    <Button sx={{background: '#fff2db', borderRadius: '50%', width: '100px', height: '100px' }}>
                    <img src={detail.icon} alt={detail.title} style={{width: '50px', height: '50px'}} />
                    </Button>
                        <Typography variant='h5' textTransform='capitalize'>
                            {detail.title}
                        </Typography>
                </Stack>
            ))
        }
     </Stack>
    </Stack>
  )
}

export default Detail