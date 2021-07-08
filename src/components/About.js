import React from 'react'
import { makeStyles } from '@material-ui/core'
import Bio from './About/Bio'
import {useMediaQuery} from 'react-responsive'

const useStyles = makeStyles(theme=>({
    root:{
        backgroundColor:'red',
        minHeight: '100vh',
    },
    toolbar: theme.mixins.toolbar,

}))


function About(){
    const classes =  useStyles()
    const isMobile = useMediaQuery({query: '(max-width:480px)'})
    const isTablet = useMediaQuery({query: '(min-device-width: 481px)'})
    const isLaptop = useMediaQuery({query: '(min-device-width:800px )'})


    return(
        <React.Fragment>
            <div className={classes.root} id="about">
                <div className="container">
                    <div className={classes.toolbar} ></div>
                    { isMobile && 
                        <div className="row">
                            <div className="col-12">
                                <Bio/>
                            </div>


                        </div>

                    }
                
                </div>
            </div>

        </React.Fragment>

    )
}

export default About