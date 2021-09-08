import React from 'react'
import { makeStyles } from '@material-ui/core'
import { useMediaQuery } from 'react-responsive'
import profileImg from '../../static/images/foto.jpeg'
import certification from '../../static/images/diploma.jpg'
import galileoLogo from '../../static/images/galileoLogo.png'
import { mobile, tablet, desktop } from '../../breakpoints';

const useStyles = makeStyles(theme => ({
        bioContainer: {
                border: 'None',
                color: '000',
                background: 'linear-gradient(bottom, #e0f2f1, #fff)',
        },
        imgContainer: {
                width: '240px',
                marginBottom: '20px',
                [desktop]: {
                        width: '80%'
                }
        },
        photoBio: {
                width: '100%',
                borderRadius: '50%',
                border: '2px solid  #009688',
                transition: 'transform 2s',
                '&:active': {
                        transform: 'scale(1.5)'
                }
        },
        bioText: {
                fontFamily: '"Varela", sans-serif',
                textAlign: 'justify',
                padding: ' 0 10px',
                marginTop: '5px',
                fontSize: '1.1em',
                [desktop]: {
                        fontSize: '1.4em',              
                }
        },
        certificationContainer: {
                width: '100%',
                marginTop: '10px',
                marginBottom: '20px',
                [desktop]: {
                        width: '75%'
                }
        },
        certification: {
                width: '100%',
                [desktop]: {
                        width: '100%'
                }
        },
        languages: {
                border: 'None'
        },
        greetingColor: {
                color: '#009688'
        },
      title: {
        fontFamily: '"Varela" , sans-serif',
        [mobile]:{
                fontSize: '42px'

        },[tablet]:{
                fontSize: '48px'
        },
        [desktop]: {
          fontSize: '62px'
        }
      },
}))

function Bio(props) {
        const classes = useStyles()
        const isMobile = useMediaQuery({ query: '(max-width:900px)' })
        // const isTablet = useMediaQuery({ query: '(min-device-width: 768px)' })
        const isDesktop = useMediaQuery({ query: '(min-device-width: 901px)' })

       
        return (

                <React.Fragment>
                        {isMobile && <React.Fragment>

                                <div className={classes.imgContainer} >
                                        <img className={classes.photoBio}
                                                src={profileImg}
                                                alt="personalPhoto"
                                        />
                                </div>
                                <h2 className={`m-3 ${classes.title}`}>About<span className={`${classes.greetingColor} ${classes.title}`} > Me</span></h2>

                                <div className={`card card-body ${classes.bioContainer}`}>

                                        <p className={classes.bioText}>
                                                I'm a software developer from Guatemala and most of I know about web development has been by learn on my own in online courses.
                                                In 2020 I obtained a frontend web development scolarship by Platzi and Facebook developers circles
                                        </p>
                                        <div className={classes.certificationContainer} >
                                                <img className={classes.certification}
                                                        src={certification}
                                                        alt="certification"
                                                />

                                        </div>
                                        <p className={classes.bioText}>
                                                At this moment I'm studing software development at Galileo University <img src={galileoLogo} width="75" alt="galileo-logo" /> and I've been working with Django, Express and pure PHP in the backend and Javascript frameworks
                                                in the frontend for web apps.
                                        </p>
                                </div>

                                <div className={`card card-body ${classes.languages}`}>

                                        <p className={classes.bioText}>
                                                Those are the programming languages and frameworks I've been working at:
                                        </p>
                                </div>
                        </React.Fragment>

                        }
                        {isDesktop && <React.Fragment>
                                <div className="row">
                                        <div className="col-5 d-flex flex-column justify-content-around align-items-center">
                                                <h2 className={classes.title}>About<span className={`${classes.greetingColor} ${classes.title}`} > Me</span></h2>
                                                <div className={classes.imgContainer} >
                                                        <img className={classes.photoBio}
                                                                src={profileImg}
                                                                alt="personalPhoto"
                                                        />
                                                </div>
                                        </div>

                                        <div className="col-7 ">
                                               <div className={`card card-body  d-flex flex-column justify-content-center align-items-center ${classes.bioContainer}`}>
                                                        <p className={classes.bioText}>
                                                                I'm a software developer from Guatemala and most of I know about web development has been by learn on my own in online courses.
                                                                In 2020 I obtained a frontend web development scolarship by Platzi and Facebook developers circles
                                                        </p>
                                                        <div className={classes.certificationContainer} >
                                                                <img className={classes.certification}
                                                                        src={certification}
                                                                        alt="certification"
                                                                />
                                                        </div>
                                                        <p className={classes.bioText}>
                                                                At this moment I'm studing software development at Galileo University <img src={galileoLogo} alt="galileo-logo" width="75" /> and I've been working with Django, Express and pure PHP in the backend and Javascript frameworks
                                                                in the frontend for web apps.
                                                        </p>
                                                </div>      
                                        </div>
                                </div>

                        </React.Fragment>
                }


                </React.Fragment>
        )
}



export default Bio