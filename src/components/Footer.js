import React from 'react';
import { makeStyles } from '@material-ui/core';
import { mobile, tablet, desktop } from '../breakpoints';

const useStyles = makeStyles( theme=>({
root:{
    height: '20px',
    background: '#fff',
    color: '#000',
    margin: '10px'

},
footerText:{
    fontSize:'14px',
    [mobile]: {
        marginTop: '40px',
        marginBottom: '7px'
    },
    [tablet]: {
        marginTop: '30px',
        marginBottom: '7px'


    },
    [desktop]: {
        fontSize:'14px',
        marginTop: '50px',
        marginBottom: '7px'


    },
}
}))

const Footer = (props)=>{
    const classes =  useStyles()

    return(

        <div  className={`d-flex justify-content-center align-items-center ${classes.root}`}>
            <small className={classes.footerText} > Gustavo Herrera &copy; 2021</small>
        </div>
    )



}


export default Footer;