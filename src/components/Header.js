import { Typography } from '@material-ui/core'
import React from 'react'
import { makeStyles } from '@material-ui/core'
import NavbarContainer from './NavbarContainer'
import Hero from './Hero'


const useStyles = makeStyles(theme=>({
    root:{
        backgroundColor:  '#000',
        minHeight: '100vh',
    
      },
    toolbar: theme.mixins.toolbar,



}))

function Header(){
const classes = useStyles()

    return(
        
        <div className={classes.root}>
            
            <NavbarContainer/>
          
            <div className={classes.toolbar} ></div>
            
           <Hero/>
          
        </div>
            
    )
}



export default Header