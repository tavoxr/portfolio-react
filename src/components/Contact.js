import React from 'react'
import { makeStyles, IconButton } from '@material-ui/core'
import  emailjs from 'emailjs-com' 
import '../static/css/cardForm.css'
import swal from 'sweetalert'
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import FacebookIcon from '@material-ui/icons/Facebook';
import NavbarContainer from './NavbarContainer'
import useScrollToTop from '../hook/scrollTop'
import { useMediaQuery } from 'react-responsive'
import { mobile, tablet, desktop } from '../breakpoints';
import Footer from './Footer'

const useStyles = makeStyles(theme=>({
    root:{
        minHeight: '100vh',
        backgroundColor: 'transparent',
        color: '#000',
        
    },
    toolbar: theme.mixins.toolbar,
    glitchTitle:{
        
        fontFamily: '"Varela" , sans-serif',
        
        fontWeight:'normal',
        marginBottom: '30px',
        [mobile]:{
            fontSize: '42px'

        },[tablet]:{
            fontSize: '48px'
        },
        [desktop]: {
            fontSize: '62px'
        }
    
    },
    formCard:{
        backgroundColor: '#1E1F1F',
        border: 'None',
      
    },
    iconsContainer:{
        
    },
    socialIcons:{
        color: '#009688',
        textShadow: '0 0 0.35em #1ABC9C',
        fontSize: '50px',
        [mobile]: {
            fontSize: '54px',
            marginBottom: '10px',
            marginTop: '10px'
        },
        [tablet]: {
            fontSize: '55px',
            marginTop: '18px'
        },
        [desktop]: {
            fontSize: '55px'
        }
    },
    subtitles:{
        textAlign: 'center',
        color: '#000',
        marginBottom: '20px',
        [mobile]: {
            fontSize: '27px',
            marginTop: '18px'
        },
        [tablet]: {
            fontSize: '34px',
            marginTop: '18px'
        },
        [desktop]: {
            fontSize: '38px'
        }
        
    },subtitlesForm:{
        textAlign: 'center',
        color: '#000',
        marginBottom: '20px',
        [mobile]: {
            fontSize: '27px',
            
        },
        [tablet]: {
            fontSize: '34px',
            marginTop: '18px'
        },
        [desktop]: {
            fontSize: '36px'
        }
    },
    submit:{
        backgroundColor:'#009688',
        color: '#fff',
        fontSize: '18px'

    },
    cardForm:{
        marginBottom: '20px',
       


    }
    


}))

function Contact(){
    const classes = useStyles()
    useScrollToTop()

    //const isMobile = useMediaQuery({ query: '(max-width:900px)' })
    // const isTablet = useMediaQuery({ query: '(min-device-width: 768px)' })
    const isDesktop = useMediaQuery({ query: '(min-device-width: 901px)' })

    
    function sendEmail(e) {
        e.preventDefault();
    
        emailjs.sendForm('service_s15cnxd', 'template_juftbjv', e.target, 'user_vo8oTKksnUIf1DA7Aws7k')
          .then((result) => {
              console.log(result.text);
              swal({
                title:"Your message has been successfully sent",
                icon:"success"
              })
          }, (error) => {
              console.log(error.text);
          });
          e.target.reset()
      }
    
    return(
        <React.Fragment>
            <div className={classes.root} id="contact">
             <NavbarContainer/>

                <div className={classes.toolbar}></div>
                <div className={`container ${isDesktop? "mt-4": ""}  `}>
                <div className={`d-flex ${isDesktop? "flex-row ": "flex-column"} justify-content-center align-items-center`}>
                {/*isMobile && <h1 className={classes.glitchTitle}>Contact</h1> */}
                
                <div className={`d-flex flex-column  ${isDesktop? "col-6": "" } justify-content-center align-items-center`}>
                <h3 className={classes.subtitles}>My social networks</h3>

                   

                    <div className={`d-flex ${isDesktop? "flex-row col-6": "flex-column"} justify-content-center align-items-center ${classes.iconsContainer}`}>   
                    <IconButton aria-label="" href="https://github.com/tavoxr" target="_blank" >
                        <GitHubIcon className={classes.socialIcons}/>
                    </IconButton>
                    <IconButton aria-label="" href="https://www.linkedin.com/in/gustavo-men%C3%A9ndez-herrera-desarrollador-web-64a0b2199/" target="_blank" >
                        <LinkedInIcon className={classes.socialIcons}/>
                    </IconButton>
                    <IconButton aria-label="" href="https://www.facebook.com/Gustavo-Herrera-103056204574076" target="_blank" >
                        <FacebookIcon className={classes.socialIcons}/>
                    </IconButton>
                    </div>
                    
                 </div>
                    <div className={`card card-body ${isDesktop? "col-5": "col-12"} mt-4 ${classes.cardForm}`} id="cardForm">
                    <h3 className={classes.subtitlesForm}>  Send me an email</h3>
                    <form className={classes.form} onSubmit={sendEmail}>
                        <div className="mb-3">
                        <label className="form-label" htmlFor="name"  >Name:</label>
                        <input type="text" className="form-control" id="name" name="name" required />

                        </div>
                        <div className="mb-3">
                        <label className="form-label" htmlFor="email"  >Email:</label>
                        <input type="email" className="form-control" id="email" name="email" required />

                        </div>
                        <div className="mb-3">
                        <label className="form-label" htmlFor="message"  >Message:</label>
                        <textarea type="" className="form-control" id="message" name="message" rows="7" />

                        </div>
                        <div className="mb-3">
                        <button type="submit" className={`form-control btn ${classes.submit} `} id="submit" name="submitBtn">Send</button>

                        </div>
                    </form>
                    </div>
                   
                    </div>
                    
                
               
        </div>
            </div>
            <Footer/>

        </React.Fragment>
    )
}

export default Contact