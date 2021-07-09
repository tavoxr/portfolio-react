import React from 'react'
import { makeStyles } from '@material-ui/core'
import ProjectCard from './projects/ProjectCard'


const useStyles = makeStyles(theme=>({
    root:{
        minHeight: '100vh',
        backgroundColor: 'red',
        color: '#fff',

    },
    toolbar: theme.mixins.toolbar,


}))
function Projects(){
    const classes = useStyles()

    return(
        <div className={classes.root} id="projects">
            <div className={classes.toolbar}></div>
            <div className="container">
                <div className="d-flex flex-column justify-content-center align-items-center text-center">
                <h1>Projects</h1>
                <ProjectCard/>
                </div>
             

            </div>
            

        </div>

    )

}



export default Projects

