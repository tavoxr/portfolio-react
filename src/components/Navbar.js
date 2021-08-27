import { makeStyles, AppBar, Toolbar, Typography, IconButton, Link } from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu';
import { useHistory } from 'react-router';
import { useMediaQuery } from 'react-responsive';

const drawerWidth = 250

const useStyles = makeStyles((theme) => ({
  logo: {
    flexGrow: 1,
    
  },
  appBar: {
    [theme.breakpoints.up('xl')]: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
    },
    backgroundColor: 'transparent',
    borderStyle: 'none',
    boxShadow: 'none',
    borderColor: '#263238'

  },links:{
    margin: '0 25px',
    color: "#424242",
    textDecorationLine: 'None',
    fontSize:'16px',
    "&:hover":{
      textDecorationLine: 'None',
      color: '#009688',
      cursor: 'pointer'
    }
  },

}))

function Navbar(props) {
  const classes = useStyles()
  const history = useHistory()

  const isMobile = useMediaQuery({ query: '(max-width:900px)' })
    // const isTablet = useMediaQuery({ query: '(min-device-width: 768px)' })
    const isDesktop = useMediaQuery({ query: '(min-device-width: 901px)' })

  return (
    <div>


      <AppBar position={`${isDesktop ? "absolute": "fixed" }`} className={classes.appBar}>
        <Toolbar >
          <Typography variant="h5"  className={classes.logo} >
            GH
          </Typography>

        { isDesktop &&  <div >
          <Link variant="button" className={classes.links} onClick={()=> history.push('/')} >
            Home
          </Link>
          <Link variant="button"  className={classes.links} onClick={()=> history.push('/about')} >
            About
          </Link>
          <Link variant="button" className={classes.links}  onClick={()=> history.push('/projects')} >
            Projects
          </Link>
          <Link variant="button" className={classes.links}   onClick={()=> history.push('/contact')} >
            Contact
          </Link>
          </div>
          }

          { isMobile && 
          <IconButton aria-label="" color="primary" onClick={() => props.handleDrawerToggle()} >
            <MenuIcon />
          </IconButton>
        }
        </Toolbar>
      </AppBar>


    </div>

  )
}


export default Navbar