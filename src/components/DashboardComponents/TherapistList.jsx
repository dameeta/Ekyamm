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
              <Stack direction="row" spacing={5} >
                <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" sx={{ width: 65, height: 65 }}/>
                <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" sx={{ width: 65, height: 65 }}/>
                <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" sx={{ width: 65, height: 65 }}/>
                <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" sx={{ width: 65, height: 65 }}/>
              </Stack>
              <Stack direction="row" spacing={5} margin={5} >
                <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" sx={{ width: 65, height: 65 }}/>
                <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" sx={{ width: 65, height: 65 }}/>
                <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" sx={{ width: 65, height: 65 }}/>
                <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" sx={{ width: 65, height: 65 }}/>
              </Stack>
            </Grid>
          </Box>
        </Card>
  )
}

export default TherapistList