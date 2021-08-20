import React from 'react'
import { makeStyles, AppBar, Toolbar, Typography, IconButton } from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu';
import theme from '../themeConfig';

const drawerWidth = 250

const useStyles = makeStyles((theme)=>({
    logo:{
        flexGrow: 1,
        color: "#000"
    },
    appBar:{
        [theme.breakpoints.up('xl')]:{
            width: `calc(100% - ${drawerWidth}px)`,
            marginLeft: drawerWidth,
        },
        backgroundColor: 'transparent',
        borderStyle: 'none',
        boxShadow: 'none',
        borderColor: '#263238'
        
    },
    
    


}))

function Navbar(props){
const classes = useStyles()

    return(
        <div>

        
        <AppBar position="fixed"  className={classes.appBar}>
          <Toolbar>
            <Typography variant="h5" className={classes.logo} >
              GH
            </Typography>
            <IconButton aria-label="" color="primary" onClick={()=> props.handleDrawerToggle()} >
              <MenuIcon />
            </IconButton>
          </Toolbar>
        </AppBar>

       



        </div>

    )
}


export default Navbar