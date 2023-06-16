import { ArchiveTwoTone, ArrowUpward, FileCopyTwoTone, GetAppTwoTone, MoreHoriz, Notifications, PictureAsPdfTwoTone } from '@mui/icons-material'
import { Avatar, Box, Card, Grid, Menu, MenuItem, Stack, Typography } from '@mui/material'
import React, { useState } from 'react'
import "../../assets/styles/Dashboard.css"

const TherapistList = () => {

    const [anchorEl, setAnchorEl] = useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

  return (
    <Card className='topCards' border={false} content={false}>
          <Box sx={{ p: 2.25, }}>
            <Grid container direction="column">
              <Grid sx={{display:'flex', justifyContent: 'space-between'}}>
                <Typography sx={{ fontSize: '1.5rem', fontWeight: 500, mr: 1, mt: 0.5, mb: 5, textAlign: 'left' }}>Available Therapist</Typography>
                <Typography sx={{ fontSize: '1rem', fontWeight: 100, mr: 1, mt: 1, mb: 5, textAlign: 'right' }}>View All</Typography>
              </Grid>
              <Stack direction="row" spacing={5} mb={5}>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" sx={{ width: 65, height: 65 }}/>
                <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" sx={{ width: 65, height: 65 }}/>
                <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" sx={{ width: 65, height: 65 }}/>
                <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" sx={{ width: 65, height: 65 }}/>
              </Stack>
              <Stack direction="row" spacing={5} >
                <Avatar alt="Chintan Shah" src="/static/images/avatar/1.jpg" sx={{ width: 65, height: 65 }} />
                <Avatar alt="Meghan" src="/static/images/avatar/2.jpg" sx={{ width: 65, height: 65 }}/>
                <Avatar alt="Demo Person" src="/static/images/avatar/3.jpg" sx={{ width: 65, height: 65 }}/>
                <Avatar alt="Second Demo" src="/static/images/avatar/3.jpg" sx={{ width: 65, height: 65 }}/>
              </Stack>
            </Grid>
          </Box>
        </Card>
  )
}

export default TherapistList