import React from 'react'
import { makeStyles, IconButton } from '@material-ui/core'
import  emailjs from 'emailjs-com' 
import '../static/css/cardForm.css'
import swal from 'sweetalert'
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import FacebookIcon from '@material-ui/icons/Facebook';

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
        textShadow: '0.05em 0 0 rgba(26, 188, 156, 0.75), -0.025em -0.05em 0 rgba(0, 255, 0, 0.75), 0.025em 0.05em 0 rgba(0, 0, 255, 0.75 )',
        animation: "$glitch 750ms infinite",
        position: 'relative',
        fontSize: '2rem',
        marginBottom: '30px',
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
    formCard:{
        backgroundColor: '#1E1F1F'
    },
    socialIcons:{
        color: '#fff',
        textShadow: '0 0 0.35em #1ABC9C',
        fontSize: '50px',
    },
    subtitles:{
        textAlign: 'center',
        color: '#fff',
        textShadow: '0 0 0.35em #1ABC9C',
        fontFamily: '"Source Code Pro" , monospace',
        marginBottom: '20px'
    }
    


}))

function Contact(){
    const classes = useStyles()
    function sendEmail(e) {
        e.preventDefault();
    
        emailjs.sendForm('service_s15cnxd', 'template_juftbjv', e.target, 'user_vo8oTKksnUIf1DA7Aws7k')
          .then((result) => {
              console.log(result.text);
              swal({
                  icon: "success",

              })
          }, (error) => {
              console.log(error.text);
          });
          e.target.reset()
      }
    
    return(
        <React.Fragment>
            <div className={classes.root} id="contact">
                <div className={classes.toolbar}></div>
                <div className="container">
                <div className="d-flex flex-column justify-content-center align-items-center">
                <h1 className={classes.glitchTitle}><span>Contact</span>Contact<span>Contact</span></h1>
                
                <h3 className={classes.subtitles}>My social networks</h3>

                   

                    
                    <IconButton aria-label="" >
                        <GitHubIcon className={classes.socialIcons}/>
                    </IconButton>
                    <IconButton aria-label="" >
                        <LinkedInIcon className={classes.socialIcons}/>
                    </IconButton>
                    <IconButton aria-label="" >
                        <FacebookIcon className={classes.socialIcons}/>
                    </IconButton>
                    
                    
                    <div className="card card-body col-12 mt-4" id="cardForm">
                    <h3 className={classes.subtitles}>Send me a message</h3>
                    <form className={classes.form} onSubmit={sendEmail}>
                        <div className="mb-3">
                        <label className="form-label" for="name"  >Name:</label>
                        <input type="text" className="form-control" id="name" name="name" required />

                        </div>
                        <div className="mb-3">
                        <label className="form-label" for="email"  >Email:</label>
                        <input type="email" className="form-control" id="email" name="email" required />

                        </div>
                        <div className="mb-3">
                        <label className="form-label" for="message"  >Message:</label>
                        <textarea type="" className="form-control" id="message" name="message" rows="7" />

                        </div>
                        <div className="mb-3">
                        <button type="submit" className="form-control btn btn-success" id="submit" name="submitBtn">Send</button>

                        </div>
                    </form>
                    </div>
                    <button onClick={()=> swal({ title:"Message sent successfully",icon:"success"})}>Prueba</button>
                    </div>
                    
                
               
        </div>
            </div>
        </React.Fragment>
    )
}

export default Contact