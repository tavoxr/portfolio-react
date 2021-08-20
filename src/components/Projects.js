import React from 'react'
import { makeStyles } from '@material-ui/core'
import ProjectCard from './projects/ProjectCard'
import '../static/css/projects.css'
import NavbarContainer from './NavbarContainer'

const useStyles = makeStyles(theme=>({
    root:{
        minHeight: '100vh',
        
        color: '#fff',
    

    },
    toolbar: theme.mixins.toolbar,
    title:{
        textTransform: 'uppercase',
        color:"#000",
        
        fontSize: '2rem',
    

    },
}))
function Projects(){
    const classes = useStyles()

    return(
        <div className={classes.root} id="projects">
             <NavbarContainer/>
            <div className={classes.toolbar}></div>
            <div className="container">
                <div className="d-flex flex-column justify-content-center align-items-center text-center">
                <h2 className={classes.title}  >Projects</h2>
                <ProjectCard/>
                <ProjectCard/>
                <ProjectCard/>
                <ProjectCard/>
                <ProjectCard/>
                <ProjectCard/>
                </div>
             

            </div>
            

        </div>

    )

}



export default Projects

