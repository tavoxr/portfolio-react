import React from 'react';
import { Link, makeStyles, Button } from '@material-ui/core';
import profileImg from '../../static/images/foto.jpeg'
import { useHistory } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive'
import { mobile, tablet, desktop } from '../../breakpoints';

const useStyles = makeStyles(theme => ({
    root: {
        minHeight: '100vh'
    },
    toolbar: theme.mixins.toolbar,

    imgContainer: {
        width: '150px',
        marginBottom: '20px',
        [mobile]: {
            marginTop: '15px'


        },
        [tablet]: {
            width: '170px',
            marginTop: '35px',
            marginBottom: '20px'
        },
        [desktop]: {
            width: '230px',
            marginTop: '50px',
            marginBottom: '40px'
            
        }

    },
    photoBio: {
        width: '100%',
        borderRadius: '50%',
        border: '2px solid  #009688',


    },
    greetingColor: {
        /* color: '#00bfa5', */
        color: '#009688'
    },
    title1: {
        [mobile]: {
            fontSize: '32px',

        },
        [tablet]: {
            fontSize: '40px',
            
        },
        [desktop]: {
            fontSize: '50px',
        }
    },
    title3: {
        [mobile]: {
            fontSize: '32px'

        },
        [tablet]: {
            fontSize: '40px'
        },
        [desktop]: {
            fontSize: '50px'
        }



    },
    paragraph: {
        textAlign: 'justify',

        [mobile]: {
            marginTop: '20px'

        },
        [tablet]: {
            marginTop: '15px'

        },
        [desktop]: {
            marginTop: '15px'

        }

    },
    checkOut: {
        /*  transform: 'translateY(3rem)', */
        /*  opacity: 0, */
        marginTop: '20px',
        textAlign: 'center',
        fontSize: '20px',
        /*  animation: 'fadeInUp 2s ease 5s forwards' */
        [desktop]: {
            marginTop: '30px',
            marginBottom: '20px'

        }
    },

    "@keyframes fadeInUp": {
        to: {
            opacity: 1,
            transform: 'translateY(0)',
        }
    },
    link: {
        textDecorationLine: 'None'
    },
    aboutMe: {
        [mobile]: {
            fontSize: '18px',

        },
        [tablet]: {
            fontSize: '20px'
        },
        [desktop]: {
            fontSize: '20px'
        }

    }

}))

const Job = (props) => {

    const classes = useStyles();
    const history = useHistory();
    const isMobile = useMediaQuery({ query: '(max-width:900px)' })
    // const isTablet = useMediaQuery({ query: '(min-device-width: 768px)' })
    const isDesktop = useMediaQuery({ query: '(min-device-width: 901px)' })

    return (
        <div className={classes.root} id="job">

            <div className="container">
                <div className={classes.toolbar} ></div>

                {isMobile && <React.Fragment>
                    <div className="container d-flex flex-column align-items-center justify-content-center  ">

                        <div className={classes.imgContainer} >
                            <img className={classes.photoBio}
                                src={profileImg}
                                alt="personalPhoto"
                                
                            />
                        </div>

                        <div className="text-center">
                            <h1 className={classes.title1}>I'm a</h1>
                            <h1 className={classes.title1}><span className={classes.greetingColor} >Software</span> Developer</h1>
                            <h1 className={classes.title3}>from<span className={classes.greetingColor} > Guatemala</span> </h1>
                            <h4 className={classes.paragraph}>I've worked in  web and mobile apps with frameworks like Django, Express, React, Vue, etc.
                                <Link className={classes.aboutMe} onClick={() => history.push('/about')}> More about me...</Link>
                            </h4>
                            <p className={classes.checkOut}  >Checkout my projects!</p>
                        </div>

                        <Button variant="contained" color="secondary" onClick={() => history.push('/projects')}>Projects</Button>
                    </div>

                </React.Fragment>
                }

                {isDesktop && <React.Fragment>

                    <div className="container">
                        <div className="row ">
                            <div className="col-12 d-flex flex-column justify-content-center align-items-center">
                                <div className={classes.imgContainer} >
                                    <img className={classes.photoBio}
                                        src={profileImg}
                                        alt="personalPhoto"
                                    />
                                </div>
                                <div className="text-center">
                                    <h1 className={classes.title1}>I'm a <span className={classes.greetingColor} >Software</span> Developer from<span className={classes.greetingColor} > Guatemala</span></h1>
                                    <h1 className={classes.title3}> </h1>
                                    <h4 className={classes.paragraph}>I've worked in  web and mobile apps with frameworks like Django, Express, React, Vue, etc.
                                        <Link className={classes.aboutMe} onClick={() => history.push('/about')}> More about me...</Link>
                                    </h4>
                                    <p className={classes.checkOut}  >Checkout my projects!</p>
                                </div>
                                <Button variant="contained" color="secondary" onClick={() => history.push('/projects')}>Projects</Button>

                            </div>
                        </div>
                    </div>

                </React.Fragment>
                }

            </div>

        </div>

    );
}


export default Job;