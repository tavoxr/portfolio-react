import React from 'react';
import { makeStyles } from '@material-ui/core';
import profileImg from '../../static/images/foto.jpeg'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import { IconButton } from '@material-ui/core'
import theme from '../../themeConfig';

const useStyles = makeStyles(theme => ({
    root: {
        minHeight: '100vh'
    },
    toolbar: theme.mixins.toolbar,

    imgContainer: {
        width: '150px',
        marginBottom: '20px',


    },
    photoBio: {
        width: '100%',
        borderRadius: '50%',
        border: '2px solid  #009688',


    },
    greetingColor:{
        /* color: '#00bfa5', */
         color: '#009688'
       },
       title1:{
        
       },
    title4:{
        fontSize: '35px',
        

    },
    paragraph:{
        textAlign: 'justify'
    },
    checkOut:{
          /*  transform: 'translateY(3rem)', */
          /*  opacity: 0, */
            marginTop: '20px', 
            textAlign: 'center',
            fontSize: '20px',
          /*  animation: 'fadeInUp 2s ease 5s forwards' */
            
        },

        "@keyframes fadeInUp":{
            to: {
                opacity: 1,
                transform: 'translateY(0)',
            }
    }
     
}))

const Job = (props) => {

    const classes = useStyles();

    
    return (
        <div className={classes.root} id="job">

            <div className="container">
            <div className={classes.toolbar} ></div>


            <div className="d-flex flex-column align-items-center justify-content-center  ">

            <div className={classes.imgContainer} >
                <img className={classes.photoBio}
                    src={profileImg}
                />
            </div>
            <div>
            <h1 className={classes.title1}>I'm a</h1>
            <h1 className={classes.title2}><span className={classes.greetingColor} >Software</span></h1>
            <h1 className={classes.title3}>Developer</h1>
            <h1 className={classes.title4}>from<span className={classes.greetingColor} > Guatemala</span> </h1>
            <h4 className={classes.paragraph}>I've worked in different web and mobile apps with many languajes and frameworks.</h4>
            <p className={classes.checkOut}  >Checkout my projects!</p>


            </div>
            <IconButton aria-label="" size="medium"  color="primary" href="#projects" >
          <ExpandMoreIcon  />
        </IconButton>


            </div>
            </div>

        </div>

    );
}


export default Job;