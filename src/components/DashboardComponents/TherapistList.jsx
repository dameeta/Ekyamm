import { ArchiveTwoTone, ArrowUpward, FileCopyTwoTone, GetAppTwoTone, MoreHoriz, Notifications, PictureAsPdfTwoTone } from '@mui/icons-material'
import { Avatar, Box, Card, Grid, Menu, MenuItem, Typography } from '@mui/material'
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
          <Box sx={{ p: 2.25, height:'400px', width: '700px'}}>
            <Grid container direction="column">
              <Grid item>
                <Grid container justifyContent="space-between">
                  <Grid item>
                    {/* <Avatar
                      variant="rounded"
                    >
                      <img src={<Notifications/>} alt="Notification" />
                    </Avatar> */}
                  </Grid>
                  
                </Grid>
              </Grid>
              {/* <Grid item>
                <Grid container alignItems="center">
                  <Grid item>
                    <Typography sx={{ fontSize: '2.125rem', fontWeight: 500, mr: 1, mt: 1.75, mb: 0.75 }}>Photo</Typography>
                  </Grid>
                  <Grid item>
                    <Typography sx={{ fontSize: '2.125rem', fontWeight: 500, mr: 1, mt: 1.75, mb: 0.75 }}>|</Typography>
                  </Grid>
                  <Grid item>
                    <Typography sx={{ fontSize: '2.125rem', fontWeight: 500, mr: 1, mt: 1.75, mb: 0.75 }}>Name</Typography>
                  </Grid>
                  <Grid item>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item sx={{ mb: 1.25 }}>
                <Typography
                  sx={{
                    fontSize: '1rem',
                    fontWeight: 500,
                  }}
                >
                  This is a the List
                </Typography>
              </Grid> */}
            </Grid>
          </Box>
        </Card>
  )
}

export default TherapistList