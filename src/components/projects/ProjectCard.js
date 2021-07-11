import React from 'react'
import { makeStyles, IconButton } from '@material-ui/core'
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import GitHubIcon from '@material-ui/icons/GitHub';
import VisibilityIcon from '@material-ui/icons/Visibility';

const useStyles = makeStyles(theme=> ({
    root: {
      maxWidth: 545,
      marginTop:'15px',
      backgroundColor: '#1E1F1F',
    },
   










    media: {
      height: 240,
      clipPath: 'polygon(0 0, 100% 0, 100% 85%,0 100%)',
      borderBottomLeftRadius: '5px'
    },
    textCard:{
      fontFamily: '"Source Code Pro" , monospace',
      color: '#fff',
      textShadow: '0 0 0.35em #1ABC9C'
    }
  }));
  
function ProjectCard(){
    const classes = useStyles()

    return(
        <React.Fragment>
    <div className="col-12">


    
    
    

    
    <Card className={classes.root}>
     {/* <span></span>
      <span></span>
      <span></span>
     <span></span> */}
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="https://images4.alphacoders.com/587/thumb-1920-587508.png"
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography  variant="h5" component="h5" className={classes.textCard}>
            Lizard
          </Typography>
          
        </CardContent>
      </CardActionArea>
      <CardActions>
        

       
        <IconButton aria-label="" size="small" >
          <Typography className={classes.textCard}>Github <GitHubIcon   /></Typography>  
        </IconButton>

        <IconButton aria-label="" size="small" >
          <Typography className={classes.textCard}>Watch <VisibilityIcon /></Typography> 
        </IconButton>
        
      </CardActions>
    </Card>
    
    </div>


        </React.Fragment>

    )
}


export default ProjectCard