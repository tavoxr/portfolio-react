import React from 'react'
import { Drawer, Divider, List,ListItem, ListItemIcon, ListItemText, IconButton } from '@material-ui/core'
import {makeStyles} from '@material-ui/core/styles'
import HomeIcon from '@material-ui/icons/Home';
import ContactMailIcon from '@material-ui/icons/ContactMail';
import CodeIcon from '@material-ui/icons/Code';
import FaceIcon from '@material-ui/icons/Face';
import KeyboardBackspaceIcon from '@material-ui/icons/KeyboardBackspace';
import { useHistory } from 'react-router-dom';

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
    
    },
    icon:{
        color: '#009688',
    }


}))
function NavigationDrawer(props){

    const classes = useStyles()
    const history = useHistory();

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
            
         <List >
            <ListItem button onClick={()=> history.push("/")} >
                <ListItemIcon >
                    <HomeIcon />
                </ListItemIcon>
                <ListItemText className={classes.icon} primary="Home" />
            </ListItem>
            <ListItem button onClick={()=> history.push("/about")}>
                <ListItemIcon >
                    <FaceIcon />
                </ListItemIcon>
                <ListItemText className={classes.icon} primary="About" />
            </ListItem>
            <ListItem button onClick={()=> history.push("/projects")}>
                <ListItemIcon >
                    <CodeIcon />
                </ListItemIcon>
                <ListItemText   className={classes.icon} primary="Projects" />
            </ListItem>
            <ListItem button onClick={()=> history.push("/contact")}>
                <ListItemIcon >
                    <ContactMailIcon />
                </ListItemIcon>
                <ListItemText className={classes.icon}  primary="Contact" />
            </ListItem>
         </List>
      </Drawer>
    )

}


export default NavigationDrawer