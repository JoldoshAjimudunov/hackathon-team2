import React from 'react'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import {Avatar, Grid, Menu, MenuItem, Paper} from '@mui/material'
import ListItemText from '@mui/material/ListItemText'
import Typography from '@mui/material/Typography'
import VideocamOutlinedIcon from '@mui/icons-material/VideocamOutlined'
import CallIcon from '@mui/icons-material/Call'
import MoreVertIcon from '@mui/icons-material/MoreVert'
import Box from '@mui/material/Box'
import AttachFileIcon from '@mui/icons-material/AttachFile'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
import MicIcon from '@mui/icons-material/Mic'
import {styled} from '@mui/material/styles'

const StyledPaper = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(2),
  maxWidth: 400,
  color: theme.palette.text.primary,
}));

const ChatUser = () => {

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box
      component="main"
      sx={{flexGrow: 1, bgcolor: '#938888', p: 3, height: '100vh'}}
    >
      <AppBar sx={{width: '100%', bgcolor: 'white'}}>
        <Toolbar>
          <Avatar/>
          <ListItemText sx={{color: '#141414'}}>
            <Grid container>
              <Grid ml={5} xs={6}>
                <Typography variant={'h6'}>
                  User name
                </Typography>
                <Typography variant={'body2'}>
                  в сети 2 часа назад
                </Typography>
              </Grid>
              <Grid xs={1} textAlign={'center'}>
                <VideocamOutlinedIcon/>
              </Grid>
              <Grid xs={1}>
                <CallIcon/>
              </Grid>
              <Grid xs={1} ml={-5}>
                <MoreVertIcon
                  onClick={handleClick}
                />

                <Menu
                  id="basic-menu"
                  anchorEl={anchorEl}
                  open={open}
                  onClose={handleClose}
                  sx={{marginLeft:-15, marginTop:5}}
                  MenuListProps={{
                    'aria-labelledby': 'basic-button',
                  }}
                >
                  <MenuItem sx={{fontSize:14}} onClick={handleClose}>Поиск</MenuItem>
                  <MenuItem sx={{fontSize:14}} onClick={handleClose}>Удалить чат</MenuItem>
                  <MenuItem sx={{fontSize:14}} onClick={handleClose}>Сохранить контакт</MenuItem>
                  <MenuItem sx={{fontSize:14}} onClick={handleClose}>Заблокировать</MenuItem>
                </Menu>

              </Grid>
            </Grid>
          </ListItemText>
        </Toolbar>
      </AppBar>

      <Box sx={{ flexGrow: 1, overflow: 'hidden', px: 3 }}>
        <StyledPaper
          sx={{
            my: 1,
            mx: 'auto',
            p: 2,
            marginTop:'30%',
            marginLeft: '50%',
            borderRadius: 35
          }}
        >
          <Grid container wrap="nowrap" spacing={2}>
            <Grid item xs zeroMinWidth>
              <Typography noWrap>ccczx</Typography>
            </Grid>
          </Grid>
        </StyledPaper>
        <StyledPaper
          sx={{
            my: 1,
            mx: 'auto',
            p: 2,
            marginLeft: 10,
            borderRadius: 35
          }}
        >
          <Grid container wrap="nowrap" spacing={2}>
            <Grid item xs>
              <Typography noWrap>dssdvsdvsv</Typography>
            </Grid>
          </Grid>
        </StyledPaper>
        <StyledPaper
          sx={{
            my: 1,
            mx: 'auto',
            p: 2,
            marginLeft: "50%",
            borderRadius: 35
          }}
        >
          <Grid container wrap="nowrap" spacing={2}>
            <Grid item xs>
              <Typography>knlihiilu</Typography>
            </Grid>
          </Grid>
        </StyledPaper>
        <StyledPaper
          sx={{
            my: 1,
            mx: 'auto',
            p: 2,
            marginLeft: 10,
            borderRadius: 35
          }}
        >
          <Grid container wrap="nowrap" spacing={2}>
            <Grid item xs>
              <Typography noWrap>dssdvsdvsv</Typography>
            </Grid>
          </Grid>
        </StyledPaper>
      </Box>

      <AppBar position="fixed" color="primary" sx={{top: 'auto', bottom: 0, bgcolor: '#D9D9D9'}}>
        <Toolbar>
          <Grid container>
            <Grid textAlign={'center'} p={1} xs={2}>
              <AttachFileIcon sx={{color: '#292D32', marginLeft: 10}}/>
              <KeyboardArrowDownIcon sx={{color: '#292D32', marginLeft: 5}}/>
            </Grid>
            <Grid xs={6}>
              <input style={{
                width: 630,
                height: 40,
                borderRadius: 35,
                borderColor: '#D9D9D9',
              }}/>
            </Grid>
            <Grid xs={1}>
              <MicIcon sx={{color: '#292D32', margin: 1}}/>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </Box>
  )
}

export default ChatUser
