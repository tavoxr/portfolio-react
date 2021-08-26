import React from 'react'
import { makeStyles } from '@material-ui/core'
import NavbarContainer from './NavbarContainer'
import Hero from './Header/Hero'
import Job from './Header/Job'
import useScrollToTop from '../hook/scrollTop'
import Footer from './Footer'

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
           <Footer/>
           
        </div>
            
    )
}



export default Header