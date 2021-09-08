import React from 'react'
import { makeStyles } from '@material-ui/core'
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
//import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import GitHubIcon from '@material-ui/icons/GitHub';
import VisibilityIcon from '@material-ui/icons/Visibility';
import { mobile, tablet, desktop } from '../../breakpoints';

const useStyles = makeStyles(theme => ({
  root: {
    maxWidth: 545,
    marginTop: '15px',
    marginBottom: '20px',
    backgroundColor: '#212121',
    color: '#fff',
    [mobile]: {

    },
    [tablet]: {
      width: '100%',
      maxWidth: '100%'
    },
    [desktop]: {
      width: '100%',
      maxWidth: '100%'
    }
  },

  media: {
    height: 240,
    clipPath: 'polygon(0 0, 100% 0, 100% 93%,0 100%)',
    borderBottomLeftRadius: '5px'
  },
  textCard: {
    fontFamily: '"Varela" , sans-serif',
    color: '#fff',
    background: '#212121',

  },
  projectTitle: {
    color: '#009688'
  },
  projectTech: {
    fontSize: '16px'
  },
  dash: {
    color: '#009688'

  },
  btnIcon: {
    backgroundColor: '#006064',
    color: '#fff',

  },
  imgCard:{
  
    width: '100%',
    clipPath: 'polygon(0 0, 100% 0, 100% 94%,0 100%)',

  }

}));

function ProjectCard(props) {
  const classes = useStyles()


  return (
    <React.Fragment>
      <div className="col-12">

        <Card className={classes.root}>

          <CardActionArea>
            {/*<CardMedia
              className={classes.media}
              image={props.imageUrl}
              title="Contemplative Reptile"
            />
            */}
            <img  src={props.imageUrl} className={classes.imgCard} alt="project-img"/>
            <CardContent>
              <Typography variant="h5" component="h5" className={classes.textCard}>
                <span className={classes.projectTitle}>{props.title}</span>
              </Typography>
              <Typography variant="body1" component="p" className={classes.projectTech}>
                {props.technologies.map((tech) => {
                  return `- ${tech} `
                })}


              </Typography>

            </CardContent>

          </CardActionArea>

          <CardActions className="d-flex justify-content-between mt-3">
          
            <Button
              variant="contained"
              size="small"
              className={`${classes.btnIcon} me-2`}
              endIcon={<GitHubIcon />}
              href={props.githubUrl}
              target="_blank"

            >
              Github
            </Button>

            <Button
              variant="contained"
              size="small"
              className={classes.btnIcon}
              endIcon={<VisibilityIcon />}
              href={props.projectUrl}
              target="_blank"
            >
              project
            </Button>
          </CardActions>
        </Card>

      </div>


    </React.Fragment>

  )
}


export default ProjectCard