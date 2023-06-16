import { ArchiveTwoTone, ArrowUpward, FileCopyTwoTone, GetAppTwoTone, MoreHoriz, Notifications, PictureAsPdfTwoTone } from '@mui/icons-material'
import { Avatar, Box, Card, Grid, Menu, MenuItem, Stack, Typography } from '@mui/material'
import React, { useState } from 'react'
import "../../assets/styles/Dashboard.css"

const Chats = () => {

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
                <Typography sx={{ fontSize: '1.5rem', fontWeight: 500, mr: 1, mt: 0.5, mb: 5, textAlign: 'left' }}>Unread Chats</Typography>
                <Typography sx={{ fontSize: '1.5rem', fontWeight: 500, mr: 1, mt: 0.5, mb: 5, textAlign: 'left' }}>Critical Chats</Typography>
                <Typography sx={{ fontSize: '1rem', fontWeight: 100, mr: 1, mt: 1, mb: 5, textAlign: 'right' }}>View All</Typography>
              </Grid>
            </Grid>
          </Box>
        </Card>
  )
}

export default Chats