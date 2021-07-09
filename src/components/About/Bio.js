import React from 'react'
import { makeStyles } from '@material-ui/core'
import { IconButton } from '@material-ui/core'
import {useMediaQuery} from 'react-responsive'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const useStyles  = makeStyles(theme =>({
       


        imgContainerMobile:{
                width: '150px',
                backgroundColor: '#000',
        },
        photoBioMobile:{
                width: '100%',
                borderRadius: '50%'
        },
        bioTextMobile:{
                fontFamily: '"Source Code Pro" , monospace',
                textAlign: 'center',
                marginTop: '20px',
},
imgContainerTablet:{
        width: '250px',
        backgroundColor: '#000',
},
photoBioTablet:{
        width: '100%',
        borderRadius: '50%'
},
bioTextTablet:{
        fontFamily: '"Source Code Pro" , monospace',
        textAlign: 'center',
        marginTop: '20px',
        fontSize: '34px',
},
imgContainerLaptop:{
        width: '650px',
        backgroundColor: '#000',
},
photoBioLaptop:{
        width: '100%',
        borderRadius: '10%'
},
bioTextLaptop:{
        fontFamily: '"Source Code Pro" , monospace',
        textAlign: 'center',
        marginTop: '20px',
        fontSize: '100px',
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
        
        
        <React.Fragment>
        <div className={ screen == "isMobile" ? imgContainerMobile: 
                         screen == "isTablet" ? imgContainerTablet: null  } >
                <img className={screen == "isMobile" ? photoBioMobile:
                                screen == "isTablet" ? photoBioTablet: null }  
                     src="https://scontent.fgua9-1.fna.fbcdn.net/v/t1.6435-9/82942322_103057337907296_1140940809298771968_n.jpg?_nc_cat=108&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=5382yvZD5V0AX_8iG0M&_nc_ht=scontent.fgua9-1.fna&oh=f55a54f6538f94ef897231bfac0395db&oe=60EBEF51" 
                />
        </div>
        <p className={ screen == "isMobile" ? bioTextMobile: 
                       screen == "isTablet" ? bioTextTablet: null 
                     }>
        I'm a software developer from Guatemala and everything I've learned about web development has been on my own by online courses and a scholarship by Platzi and Facebook Developer Circles in 2019.

        </p>
        <p className={ screen == "isMobile" ? bioTextMobile: 
                       screen == "isTablet" ? bioTextTablet: null}>
        At this moment I'm studing software development at Galileo University. I've been working with different technologies such as:
        </p>
       
        </React.Fragment>
        



        </React.Fragment>
    )
}



export default Bio