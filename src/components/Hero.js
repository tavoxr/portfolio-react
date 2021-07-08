import React from 'react'
import {makeStyles} from '@material-ui/core/styles'
import {useMediaQuery} from 'react-responsive'
import theme from '../themeConfig'
import Typography from '@material-ui/core/Typography'
import { Height, MicNone } from '@material-ui/icons'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import '../static/css/hero.css'
import { IconButton } from '@material-ui/core'




const useStyles = makeStyles(theme=>({
    heroContainer:{
       
            height: `calc(100vh - 56px)`,
            [`${theme.breakpoints.up("xs")} and (orientation: landscape)`]: {
              height: `calc(100vh - 48px)`
            },
            [theme.breakpoints.up("sm")]: {
              height: `calc(100vh - 64px)`
            }
          ,
       
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        color: 'white',
        backgroundColor: '#000',
       
    },
    downBtn:{
      textDecoration: 'none',
      fontSize: '60px',
      '&:hover':{
        color:'white',
      }
    },
    titleDesktop:{
      fontSize: '50px' ,
    }
    
   
   

}))

function Hero(){
    const classes =  useStyles()
    const isMobile = useMediaQuery({query: '(max-width:780px)'})
    const isTablet = useMediaQuery({query: '(min-device-width: 781px)'})

return(
        <div>

        
        <div className={classes.heroContainer}>
          <div className="container d-flex flex-column justify-content-center align-items-center text-center">
            {isMobile && 
            <React.Fragment>
              <h1 id="greeting">Hello,</h1>
            <h1 id="titleMovil"  >My name is</h1>
            <h1 id="titleMovil2"  >Gustavo Herrera </h1>
            <p className="subtitleMovil" >Welcome to my website!</p>
            </React.Fragment>
            
            }
        {isTablet &&    
          <React.Fragment>
          <h1 id="title" className={classes.titleDesktop}  >Hello, My name is Gustavo Herrera.</h1>
          <p className="subtitle" >Welcome to my website!</p>
          </React.Fragment>
        }
        <IconButton aria-label="" id={isMobile? 'downBtnMovil' : 'downBtn'} size="medium" className={classes.downBtn} color="primary" href="#about">
          <ExpandMoreIcon className={classes.downBtn} />
        </IconButton>
          </div>
         

        </div>
        </div>




)
    
}



export default Hero