import React from 'react'
import { makeStyles } from '@material-ui/core'
import { IconButton } from '@material-ui/core'
import {useMediaQuery} from 'react-responsive'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import profileImg from '../../static/images/foto.jpeg'
import { BorderRight } from '@material-ui/icons';
const useStyles  = makeStyles(theme =>({
        bioContainer:{
                border: '1px dashed #959595 ',
                borderBottom: ' 5px solid #009688',
/*                background:  'linear-gradient(bottom, #DFF1EE, #009688)',*/
              /*  background:  'linear-gradient(bottom, #e0f2f1, #fff)', */
                
                color: '000',

                boxShadow: '1px 1px 3px grey'

                        

        },
               
        imgContainer:{
                width: '150px',
                marginBottom: '20px',
        
                
        },
        photoBio:{
                width: '100%',
                borderRadius: '50%',
                border: '2px solid  #009688',
                

                
                
        },
        bioText:{
                /*fontFamily: '"Source Code Pro" , monospace', */
                fontFamily: '"Varela", sans-serif',
                textAlign: 'justify',
                padding: ' 0 10px',
                marginTop: '5px',
                fontSize: '1.1em'
},


}))
function Bio(props){
const classes = useStyles()
//const isMobile = useMediaQuery({query: '(max-width:480px)'})
//const isTablet = useMediaQuery({query: '(min-device-width: 481px)'})
//const isLaptop = useMediaQuery({query: '(min-device-width:800px )'})

        const {screen} = props
        const {imgContainerMobile,imgContainerTablet,imgContainerLaptop,
                photoBioMobile,photoBioTablet,photoBioLaptop,
               bioTextMobile, bioTextTablet,bioTextLaptop} = classes
    return(
            
        <React.Fragment>
        
        <div className={classes.imgContainer } >
                <img className={classes.photoBio }  
                     src={profileImg} 
                />
        </div>
        <div className={`card card-body ${classes.bioContainer}`}>

        <p className={classes.bioText}>
        I'm a software developer from Guatemala and everything I've learned about web development has been on my own by online courses and a scholarship by Platzi and Facebook Developer Circles in 2019.

        </p>
        <p className={classes.bioText}>
        At this moment I'm studing software development at Galileo University. I've been working with different technologies such as:
        </p>
        </div>
        
        



        </React.Fragment>
    )
}



export default Bio