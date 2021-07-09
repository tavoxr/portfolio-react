import React from 'react'
import { makeStyles } from '@material-ui/core'
import Bio from './About/Bio'
import {useMediaQuery} from 'react-responsive'
import Languages from './About/Languages'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { IconButton } from '@material-ui/core'
const useStyles = makeStyles(theme=>({
    root:{
        backgroundColor:'#000',
        minHeight: '100vh',
        color: "#fff",
        fontFamily: '"Source Code Pro" , monospace',
    },
    toolbar: theme.mixins.toolbar,
    downBtn:{
        textDecoration: 'none',
        fontSize: '60px',
        '&:hover':{
          color:'white',
        }
      },

}))


function About(){
    const classes =  useStyles()
    const isLaptop = useMediaQuery({query: '(min-device-width:800px)'})
    const isTablet = useMediaQuery({query: '(min-device-width: 481px)'})
    const isMobile = useMediaQuery({query: '(max-width:480px)'})
    
   


    return(
        <React.Fragment>
            <div className={classes.root} id="about">
                <div className="container">
                    <div className={classes.toolbar} ></div>
                    { isMobile && 
                     <div className="d-flex flex-column align-items-center justify-content-center  ">
                                <Bio screen={"isMobile"} />
                                <Languages/>
                                <IconButton aria-label=""  size="medium" className={classes.downBtn} color="primary" href="#projects">
                                    <ExpandMoreIcon className={classes.downBtn} />
                                </IconButton>
                            </div>
                          
                       
                    }

                    {isTablet && 
                     <div className="d-flex flex-column align-items-center justify-content-center  ">
                     <Bio screen={"isTablet"} />
                     <Languages/>
                     <IconButton aria-label="" id={isMobile? 'downBtnMovil' : 'downBtn'} size="medium" className={classes.downBtn} color="primary" href="#about">
                         <ExpandMoreIcon className={classes.downBtn} />
                     </IconButton>
                 </div>
 
                    }

                {isLaptop && 
                     <div className="d-flex flex-column align-items-center justify-content-center  ">
                     <Bio screen={"isLaptop"} />
                     <Languages/>
                     <IconButton aria-label="" id={isMobile? 'downBtnMovil' : 'downBtn'} size="medium" className={classes.downBtn} color="primary" href="#about">
                         <ExpandMoreIcon className={classes.downBtn} />
                     </IconButton>
                 </div>
 
                    }
                
                </div>
            </div>

        </React.Fragment>

    )
}

export default About