import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import theme from '../themeConfig'
import Typography from '@material-ui/core/Typography'
import { Height, MicNone } from '@material-ui/icons'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import '../static/css/hero.css'
import { IconButton } from '@material-ui/core'
import { mobile, tablet, desktop } from '../breakpoints'


const useStyles = makeStyles(theme => ({

  heroContainer: {

    height: `calc(100vh - 56px)`,
    [`${theme.breakpoints.up("xs")} and (orientation: landscape)`]: {
      height: `calc(100vh - 48px)`
    },
    [theme.breakpoints.up("sm")]: {
      height: `calc(100vh - 64px)`
    },

    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    color: '#000',
    /* backgroundColor: '#F9F6F4',*/
    /* backgroundColor: '#FCFBF9'*/
    backgroundColor: 'transparent',

  },
  downBtn: {
    textDecoration: 'none',
    fontSize: '60px',
    '&:hover': {
      color: 'white',
    }
  },

  greetingColor: {
    /* color: '#00bfa5', */
    color: '#009688'
  },
  title: {
    [mobile]: {
      fontSize: '40px'
    },
    [tablet]: {
      fontSize: '50px'
    },
    [desktop]: {
      fontSize: '72px'
    }
  },

  subtitle: {
    [mobile]: {
      fontSize: '20px'
    },
    [tablet]: {
      fontSize: '25px'
    },
    [desktop]: {
      fontSize: '28px'
    }
  },

}))

function Hero() {
  const classes = useStyles()

  return (
    <div >
      <div className={classes.heroContainer} id="home">
        <div className="container d-flex flex-column justify-content-center align-items-center text-center">

          <React.Fragment>
            <h1 id="greeting"><span className={`${classes.greetingColor} ${classes.title}`} >Hello</span>,</h1>
            <h1 id="titleMovil" className={classes.title}  >My name is</h1>
            <h1 id="titleMovil2" className={classes.title} >Gustavo <span className={classes.greetingColor} >Herrera</span> </h1>
            <p className={`subtitleMovil ${classes.subtitle}`} >Welcome to my website!</p>
          </React.Fragment>

          <IconButton aria-label="" id="downBtnMovil" size="medium" className={classes.downBtn} color="primary" href="#job">
            <ExpandMoreIcon className={classes.downBtn} />
          </IconButton>
        </div>

      </div>
    </div>
  )
}

export default Hero