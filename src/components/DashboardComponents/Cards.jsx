import { ArchiveTwoTone, ArrowUpward, FileCopyTwoTone, GetAppTwoTone, MoreHoriz, Notifications, PendingActionsOutlined, PictureAsPdfTwoTone } from '@mui/icons-material'
import { Avatar, Box, Card, Grid, Menu, MenuItem, Typography } from '@mui/material'
import React, { useState } from 'react'
import "../../assets/styles/Dashboard.css"

const Cards = () => {

    const [anchorEl, setAnchorEl] = useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

  return (
    <Card className='topCards' border={false} content={false}>
          <Box sx={{ p: 2.25 }}>
            <Grid container direction="column">
              <Grid item>
                <Grid container justifyContent="space-between">
                  <Grid item>
                    Heyy
                  </Grid>
                </Grid>
              </Grid>
              <Grid item>
                <Grid container alignItems="center">
                  <Grid item>
                    <Typography sx={{ fontSize: '2.125rem', fontWeight: 500, mr: 1, mt: 1.75, mb: 0.75 }}><PendingActionsOutlined/></Typography>
                  </Grid>
                  <Grid item>
                    <Typography sx={{ fontSize: '2.125rem', fontWeight: 500, mr: 1, mt: 1.75, mb: 0.75 }}>|</Typography>
                  </Grid>
                  <Grid item>
                    <Typography sx={{ fontSize: '2.125rem', fontWeight: 500, mr: 1, mt: 1.75, mb: 0.75 }}>Pending Tasks</Typography>
                  </Grid>
                  <Grid item>
                    {/* <Avatar
                      sx={{
                        cursor: 'pointer',
                      }}
                    >
                      <ArrowUpward fontSize="inherit" sx={{ transform: 'rotate3d(1, 1, 1, 45deg)' }} />
                    </Avatar> */}
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
                  This is a card
                </Typography>
              </Grid>
            </Grid>
          </Box>
        </Card>
  )
}

export default Cards