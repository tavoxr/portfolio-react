import { Typography } from '@material-ui/core'
import React from 'react'
import { makeStyles } from '@material-ui/core'
import NavbarContainer from './NavbarContainer'
import Hero from './Hero'
import Job from './About/Job'
import useScrollToTop from '../hook/scrollTop'


const useStyles = makeStyles(theme=>({
    root:{
        backgroundColor:  '#fff',
        minHeight: '100vh',
    
      },
    toolbar: theme.mixins.toolbar,



}))

function Header(){
const classes = useStyles()


useScrollToTop()
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