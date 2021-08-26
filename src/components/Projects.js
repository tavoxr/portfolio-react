import React from 'react'
import { makeStyles } from '@material-ui/core'
import ProjectCard from './projects/ProjectCard'
import '../static/css/projects.css'
import NavbarContainer from './NavbarContainer'
import useScrollToTop from '../hook/scrollTop'
import { useMediaQuery } from 'react-responsive'

const useStyles = makeStyles(theme => ({
    root: {
        minHeight: '100vh',
        color: '#fff',
    },
    toolbar: theme.mixins.toolbar,
    title: {
        color: "#000",
        margin: '15px',
        fontSize: '2rem',
    },
}))


function Projects() {
    const classes = useStyles()

    const isMobile = useMediaQuery({ query: '(max-width:900px)' })
    // const isTablet = useMediaQuery({ query: '(min-device-width: 768px)' })
    const isDesktop = useMediaQuery({ query: '(min-device-width: 901px)' })


    useScrollToTop()
    return (
        <div className={classes.root} id="projects">
            <NavbarContainer />
            <div className={classes.toolbar}></div>
            <div className="container">
                {isMobile && <div className={`d-flex  flex-column  justify-content-center align-items-center text-center`}>
                    <h2 className={classes.title}  >Projects</h2>
                    <React.Fragment>
                        <ProjectCard title="Lizard" technologies={["django", "postgres", "ddd", "ffdsfsdf"]} imageUrl="https://images4.alphacoders.com/587/thumb-1920-587508.png" />
                        <ProjectCard title="Lizard" technologies={["django", "postgres", "ddd", "ffdsfsdf"]} imageUrl="https://images4.alphacoders.com/587/thumb-1920-587508.png" />
                        <ProjectCard title="Lizard" technologies={["django", "postgres", "ddd", "ffdsfsdf"]} imageUrl="https://images4.alphacoders.com/587/thumb-1920-587508.png" />
                        <ProjectCard title="Lizard" technologies={["django", "postgres", "ddd", "ffdsfsdf"]} imageUrl="https://images4.alphacoders.com/587/thumb-1920-587508.png" />
                        <ProjectCard title="Lizard" technologies={["django", "postgres", "ddd", "ffdsfsdf"]} imageUrl="https://images4.alphacoders.com/587/thumb-1920-587508.png" />
                        <ProjectCard title="Lizard" technologies={["django", "postgres", "ddd", "ffdsfsdf"]} imageUrl="https://images4.alphacoders.com/587/thumb-1920-587508.png" />
                    </React.Fragment>
                </div>
                }

                {isDesktop &&
                    <React.Fragment>
                        <h2 className={classes.title}  >Projects</h2>

                        <div className={`d-flex  flex-column `}>


                            <div className="row d-flex  justify-content-center align-items-center ">
                                <div className="col-6  ">
                                    <ProjectCard title="Lizard" technologies={["django", "postgres", "ddd", "ffdsfsdf"]} imageUrl="https://images4.alphacoders.com/587/thumb-1920-587508.png" />
                                </div>
                                <div className="col-6 ">
                                    <ProjectCard title="Lizard" technologies={["django", "postgres", "ddd", "ffdsfsdf"]} imageUrl="https://images4.alphacoders.com/587/thumb-1920-587508.png" />
                                </div>
                                <div className="col-6 ">
                                    <ProjectCard title="Lizard" technologies={["django", "postgres", "ddd", "ffdsfsdf"]} imageUrl="https://images4.alphacoders.com/587/thumb-1920-587508.png" />
                                </div>
                                <div className="col-6 ">
                                    <ProjectCard title="Lizard" technologies={["django", "postgres", "ddd", "ffdsfsdf"]} imageUrl="https://images4.alphacoders.com/587/thumb-1920-587508.png" />
                                </div>
                                <div className="col-6 ">
                                    <ProjectCard title="Lizard" technologies={["django", "postgres", "ddd", "ffdsfsdf"]} imageUrl="https://images4.alphacoders.com/587/thumb-1920-587508.png" />
                                </div>
                                <div className="col-6">
                                    <ProjectCard title="Lizard" technologies={["django", "postgres", "ddd", "ffdsfsdf"]} imageUrl="https://images4.alphacoders.com/587/thumb-1920-587508.png" />
                                </div>

                            </div>
                        </div>
                    </React.Fragment>
                }
            </div>


        </div>



    )

}



export default Projects

