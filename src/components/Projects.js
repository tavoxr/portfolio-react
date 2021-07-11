import React from 'react'
import { makeStyles } from '@material-ui/core'
import ProjectCard from './projects/ProjectCard'
import '../static/css/projects.css'

const useStyles = makeStyles(theme=>({
    root:{
        minHeight: '100vh',
        backgroundColor: '#000',
        color: '#fff',
        fontFamily: '"Source Code Pro" , monospace',

    },
    toolbar: theme.mixins.toolbar,
    glitchTitle:{
        textTransform: 'uppercase',
        fontFamily: '"Source Code Pro" , monospace',
        textShadow: '0.05em 0 0 rgba(255 ,0 ,0 , 0.75), -0.025em -0.05em 0 rgba(0, 255, 0, 0.75), 0.025em 0.05em 0 rgba(0, 0, 255, 0.75 )',
        animation: "$glitch 750ms infinite",
        position: 'relative',
        fontSize: '2rem',
        "& span":{
            position: 'absolute',
            top: 0,
            left: 0,
            fontFamily: '"Source Code Pro" , monospace',
        },
        "& span:first-child":{
            animation: '$glitch 650ms infinite',
            
            zIndex: 1,
            clipPath: 'polygon(0 0, 100% 0, 100% 45%, 0 45%)',
            transform: 'translate(-0.025em, -0.0125em)',
            opacity:0.8
        },
        "& span:last-child":{
            animation: "$glitch 375ms infinite",
            zIndex: 1 ,
            
            clipPath: 'polygon(0 80%, 100% 20%, 100% 100%, 0 100%)',
            transform: 'translate(0.03em, 0.025em)',
            opacity: 0.8
        }
    },
    
    
    "@keyframes glitch":{
        "0%":{
            textShadow: '0.05em 0 0 rgba(26, 188, 156, 0.75), -0.025em -0.05em 0 rgba(0, 255, 0, 0.75), 0.025em 0.05em 0 rgba(0, 0, 255, 0.75 )'
        },
        "14%":{
            textShadow: '0.05em 0 0 rgba(26, 188, 156, 0.75), -0.025em -0.05em 0 rgba(0, 255, 0, 0.75), 0.025em 0.05em 0 rgba(0, 0, 255, 0.75 )'
        },
        "15%":{
            textShadow: '-0.05em -0.025em 0 rgba(26, 188, 156, 0.75), 0.025em 0.025em 0 rgba(0, 255, 0, 0.75), -0.05em -0.05em 0 rgba(0, 0, 255, 0.75 )'
        },
        "49%":{
            textShadow: '-0.05em -0.025em 0 rgba(26, 188, 156, 0.75), 0.025em 0.025em 0 rgba(0, 255, 0, 0.75), -0.05em -0.05em 0 rgba(0, 0, 255, 0.75 )'
        },
        "50%":{
            textShadow: '0.025em 0.05em 0 rgba(26, 188, 156, 0.75), 0.05em 0 0 rgba(0, 255, 0, 0.75), 0 -0.05em 0 rgba(0, 0, 255, 0.75 )'
        },
        "99%":{
            textShadow: '0.025em 0.05em 0 rgba(26, 188, 156, 0.75), 0.05em 0 0 rgba(0, 255, 0, 0.75), 0 -0.05em 0 rgba(0, 0, 255, 0.75 )'
        },
        "100%":{
            textShadow: '-0.025em 0 0 rgba(26, 188, 156, 0.75), -0.025em -0.025em 0 rgba(0, 255, 0, 0.75), -0.025em -0.05em 0 rgba(0, 0, 255, 0.75 )'
        }
    },




}))
function Projects(){
    const classes = useStyles()

    return(
        <div className={classes.root} id="projects">
            <div className={classes.toolbar}></div>
            <div className="container">
                <div className="d-flex flex-column justify-content-center align-items-center text-center">
                <h2 className={classes.glitchTitle} id="glitchTitle" ><span  aria-hidden="true">Projects</span>Projects<span  aria-hidden="true">Projects</span></h2>
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

