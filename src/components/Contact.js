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
        backgroundColor: 'transparent',
        color: '#000',
        fontFamily: '"Source Code Pro" , monospace',
    },
    toolbar: theme.mixins.toolbar,
    glitchTitle:{
        textTransform: 'uppercase',
        fontFamily: '"Varela" , sans-serif',
        fontSize: '2rem',
        fontWeight:'normal',
        marginBottom: '30px',
    
    },
    formCard:{
        backgroundColor: '#1E1F1F',
    },
    iconsContainer:{
        
    },
    socialIcons:{
        color: '#009688',
        textShadow: '0 0 0.35em #1ABC9C',
        fontSize: '50px',
    },
    subtitles:{
        textAlign: 'center',
        color: '#000',
        fontWeight: 'bolder',
        
        marginBottom: '20px'
    },
    submit:{
        backgroundColor:'#26a69a',
        color: '#fff',
        fontSize: '18px'

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
                <h1 className={classes.glitchTitle}>Contact</h1>
                
                <div className={`d-flex flex-column justify-content-center align-items-center ${classes.iconsContainer}`}>
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
                    
                 </div>
                    <div className="card card-body col-12 mt-4" id="cardForm">
                    <h3 className={classes.subtitles}>Are are interested in my job?<br/><br/>  Send me an email</h3>
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
                        <button type="submit" className={`form-control btn ${classes.submit} `} id="submit" name="submitBtn">Send</button>

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