import React from 'react'
import { makeStyles, Button } from '@material-ui/core'
import Bio from './About/Bio'
import { useMediaQuery } from 'react-responsive'
import Languages from './About/Languages'
import NavbarContainer from './NavbarContainer'
import useScrollToTop from '../hook/scrollTop'
import { mobile, tablet, desktop } from '../breakpoints';
import { useHistory } from 'react-router-dom';
import Footer from './Footer'

const useStyles = makeStyles(theme => ({
    root: {
        backgroundColor: 'transparent',
        minHeight: '100vh',
        color: "#000",
        fontFamily: '"Varela" , sans-serif',

    },
    toolbar: theme.mixins.toolbar,
    downBtn: {
        textDecoration: 'none',
        fontSize: '60px',
        '&:hover': {
            color: 'white',
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

    }

}))


function About() {
    const classes = useStyles()

    const isMobile = useMediaQuery({ query: '(max-width:900px)' })
    // const isTablet = useMediaQuery({ query: '(min-device-width: 768px)' })
    const isDesktop = useMediaQuery({ query: '(min-device-width: 901px)' })

    const history = useHistory();
    useScrollToTop()

    return (
        <React.Fragment>
            <div className={classes.root} id="about">
                <NavbarContainer />

                <div className="container">
                    <div className={classes.toolbar} ></div>
                    {/*====================================== MOBILE ======================================================= */}
                    {isMobile &&
                        <div className="d-flex flex-column align-items-center justify-content-center  ">
                            <Bio screen={"isMobile"} />
                            <Languages />
                            <div className="container d-flex flex-column align-items-center justify-content-center">
                               
                                <Button className={`m-4`} variant="contained" color="secondary" onClick={() => history.push('/contact')}>Contact Me</Button>
                            </div>

                        </div>
                    }
                    {/*====================================== END MOBILE ======================================================= */}

                    {/*====================================== DESKTOP ======================================================= */}
                    {isDesktop &&
                        <div className="d-flex flex-column align-items-center justify-content-center  ">
                            <div className="row">
                                <div className="col-12">
                                    <Bio  />
                                </div>
                            </div>
                            <Languages />
                        </div>
                    }
                    {/*====================================== END DESKTOP ======================================================= */}

                </div>
                <Footer/>
            </div>

        </React.Fragment>
    )
}

export default About