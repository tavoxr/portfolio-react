import { Typography } from '@material-ui/core'
import React from 'react'
import { makeStyles } from '@material-ui/core'
import NavbarContainer from './NavbarContainer'
import Hero from './Hero'
import Job from './About/Job'


const useStyles = makeStyles(theme=>({
    root:{
        backgroundColor:  '#fff',
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
           <Job/>
          
        </div>
            
    )
}



export default Header