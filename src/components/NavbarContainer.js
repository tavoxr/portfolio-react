import React, {useState} from 'react'
import { Hidden, makeStyles } from '@material-ui/core'
import Navbar from './Navbar'
import NavigationDrawer from './NavigationDrawer'
import theme from '../themeConfig'

const useStyles =  makeStyles(theme=>({
    root:{
        display: 'flex',
    },

}))

function NavbarContainer(){

    const classes = useStyles()
    const [abrir, setAbrir] = useState(false)

    const handleDrawerToggle = ()=>{
        setAbrir(!abrir)
    }

    return(
        <div className={classes.root}>
            <Navbar
                handleDrawerToggle = {handleDrawerToggle}
                
            
            />

            

            
           
            <Hidden only={['xl']}>
                <NavigationDrawer
                    variant="temporary"
                    open={abrir}
                    onClose={handleDrawerToggle}
                
                />
            </Hidden>
          
        </div>
    )
}



export default NavbarContainer