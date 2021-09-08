import React from 'react'
import { makeStyles } from '@material-ui/core'
import ProjectCard from './projects/ProjectCard'
import '../static/css/projects.css'
import NavbarContainer from './NavbarContainer'
import useScrollToTop from '../hook/scrollTop'
import { useMediaQuery } from 'react-responsive'
import { mobile, tablet, desktop } from '../breakpoints'
import Footer from './Footer'
import djEcomm from '../static/images/djangoEcomm.jpg'
import djVueEcomm from '../static/images/drfVueEcom.jpg'
import photoGallery2 from '../static/images/photoGallery2ce.jpg'
import toDo from '../static/images/to-do.jpg'
import weather from '../static/images/weather.jpg'
import imgSearch from '../static/images/imgsearch.jpg'

const useStyles = makeStyles(theme => ({
    root: {
        minHeight: '100vh',
        color: '#fff',
    },
    toolbar: theme.mixins.toolbar,
    title: {
        color: "#000",
        margin: '15px',
        [mobile]: {
            fontSize: '42px'

        }, [tablet]: {
            fontSize: '47px'
        },
        [desktop]: {
            fontSize: '52px'
        }
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
                        <ProjectCard title="Ecommerce Django"
                            technologies={["Django", "Postgres", "Vanilla JS", "AWS"]}
                            imageUrl={djEcomm}
                            projectUrl="https://dj-ecomm.herokuapp.com/"
                            githubUrl="https://github.com/tavoxr/ecommerce_django_postgresql"

                        />

                        <ProjectCard title="Ecommerce Vue-Django"
                            technologies={["Django", "DRF", "Postgres", "Vue", "AWS"]}
                            imageUrl={djVueEcomm}
                            projectUrl="https://vue-ecomm-tavox.netlify.app/"
                            githubUrl="https://github.com/tavoxr/drf-ecommerce-api"
                        />

                        <ProjectCard title="To-Do-List"
                            technologies={["Django", "DRF", "React", "Postgres"]}
                            imageUrl={toDo}
                            projectUrl="https://to-do-react-django.netlify.app/"
                            githubUrl="https://github.com/tavoxr/to-do-django-rest-api"

                        />

                        <ProjectCard title="Photo Gallery"
                            technologies={["Node", "Angular", "MongoDb", "AWS"]}
                            imageUrl={photoGallery2}
                            projectUrl="https://angular-photo-gallery.netlify.app/"
                            githubUrl="https://github.com/tavoxr/photo-gallery-api"

                        />

                        <ProjectCard title="Image Search App"
                            technologies={["React"]}
                            imageUrl={imgSearch}
                            projectUrl="https://pixaimage.netlify.app/"
                            githubUrl="https://github.com/tavoxr/image_search"

                        />

                        <ProjectCard title="Weather App"
                            technologies={["React"]}
                            imageUrl={weather}
                            projectUrl="https://weather-app-with-react.netlify.app/"
                            githubUrl="https://github.com/tavoxr/react-weather-app"

                        />


                    </React.Fragment>
                </div>
                }

                {isDesktop &&
                    <React.Fragment>
                        <h2 className={` mt-5 ${classes.title}`}  >Projects</h2>

                        <div className={`d-flex  flex-column `}>

                            <div className="row d-flex  justify-content-center align-items-center ">
                                <div className="col-6  ">
                                    <ProjectCard title="Ecommerce Django"
                                        technologies={["Django", "Postgres", "Vanilla JS", "AWS"]}
                                        imageUrl={djEcomm}
                                        projectUrl="https://dj-ecomm.herokuapp.com/"
                                        githubUrl="https://github.com/tavoxr/ecommerce_django_postgresql"

                                    />
                                </div>
                                <div className="col-6 ">

                                    <ProjectCard title="Ecommerce Vue-Django"
                                        technologies={["Django", "DRF", "Postgres", "Vue", "AWS"]}
                                        imageUrl={djVueEcomm}
                                        projectUrl="https://vue-ecomm-tavox.netlify.app/"
                                        githubUrl="https://github.com/tavoxr/drf-ecommerce-api"
                                    />
                                </div>
                                <div className="col-6 ">
                                    <ProjectCard title="To-Do-List"
                                        technologies={["Django", "DRF", "React", "Postgres"]}
                                        imageUrl={toDo}
                                        projectUrl="https://to-do-react-django.netlify.app/"
                                        githubUrl="https://github.com/tavoxr/to-do-django-rest-api"

                                    />
                                </div>
                                <div className="col-6 ">
                                    <ProjectCard title="Photo Gallery"
                                        technologies={["Node", "Angular", "MongoDb", "AWS"]}
                                        imageUrl={photoGallery2}
                                        projectUrl="https://angular-photo-gallery.netlify.app/"
                                        githubUrl="https://github.com/tavoxr/photo-gallery-api"

                                    />
                                </div>
                                <div className="col-6 ">
                                    <ProjectCard title="Image Search App"
                                        technologies={["React"]}
                                        imageUrl={imgSearch}
                                        projectUrl="https://pixaimage.netlify.app/"
                                        githubUrl="https://github.com/tavoxr/image_search"

                                    />
                                </div>
                                <div className="col-6 ">
                                    <ProjectCard title="Weather App"
                                        technologies={["React"]}
                                        imageUrl={weather}
                                        projectUrl="https://weather-app-with-react.netlify.app/"
                                        githubUrl="https://github.com/tavoxr/react-weather-app"

                                    />
                                </div>


                            </div>
                        </div>
                    </React.Fragment>
                }
            </div>

            <Footer />
        </div>



    )

}



export default Projects

