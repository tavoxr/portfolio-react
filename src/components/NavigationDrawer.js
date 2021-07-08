import React from 'react'
import { Drawer, Divider, List,ListItem, ListItemIcon, ListItemText, IconButton } from '@material-ui/core'
import {makeStyles} from '@material-ui/core/styles'
import theme from '../themeConfig'
import HomeIcon from '@material-ui/icons/Home';
import ContactMailIcon from '@material-ui/icons/ContactMail';
import CodeIcon from '@material-ui/icons/Code';
import FaceIcon from '@material-ui/icons/Face';
import KeyboardBackspaceIcon from '@material-ui/icons/KeyboardBackspace';


const drawerWidth = 250

const useStyles = makeStyles(theme=>({
    
    drawer:{

        [theme.breakpoints.up('xl')]: {
            width: drawerWidth,
            flexShrink: 0,
        },
        
    },
    toolbar: theme.mixins.toolbar,
    drawerPaper:{
        width: drawerWidth,
       
        
    },
    
    closeDrawerBtn:{
        display: 'flex',
        justifyContent: 'flex-end',
        margin: '8px',
    
    }


}))
function NavigationDrawer(props){

    const classes = useStyles()

    return(
        <Drawer
        variant={props.variant}
        anchor="left"
        open={props.open}
        className={classes.drawer}
        classes={{paper: classes.drawerPaper}}
        onClose={props.onClose ? props.onClose : null}

      >
         <div className={classes.toolbar} >
             <div className={classes.closeDrawerBtn}>
             <IconButton  onClick={props.onClose ? props.onClose : null} >
                <KeyboardBackspaceIcon/>
             </IconButton>
             </div>
             
         </div>
         <Divider/>
         <List component="nav">
            <ListItem button>
                <ListItemIcon >
                    <HomeIcon/>
                </ListItemIcon>
                <ListItemText primary="<Home/>" />
            </ListItem>
            <ListItem button>
                <ListItemIcon >
                    <FaceIcon/>
                </ListItemIcon>
                <ListItemText primary="<About/>" />
            </ListItem>
            <ListItem button>
                <ListItemIcon >
                    <CodeIcon/>
                </ListItemIcon>
                <ListItemText primary="<Projects/>" />
            </ListItem>
            <ListItem button>
                <ListItemIcon >
                    <ContactMailIcon/>
                </ListItemIcon>
                <ListItemText primary="<Contact/>" />
            </ListItem>
         </List>
         


      </Drawer>
    )

}


export default NavigationDrawer