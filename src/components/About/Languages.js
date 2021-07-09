import React from 'react'
import { makeStyles } from '@material-ui/core'
import javaLogo from '../../static/images/javaLogo.png'
import javascriptLogo from '../../static/images/JavaScript-logo.png'
import phpLogo from '../../static/images/phpLogo.png'
import pythonLogo from '../../static/images/pythonLogo.png'
import djangoLogo from '../../static/images/Django-Logo.png'
import laravelLogo from '../../static/images/laravelLogo.png'
import nodeLogo from '../../static/images/nodeLogo.png'
import reactLogo from '../../static/images/reactLogo.png'
import angularLogo from '../../static/images/angularLogo.png'
import postgresqlLogo from '../../static/images/postgresqlLogo.png'
import mysqlLogo from '../../static/images/mysqlLogo.png'
import mongodbLogo from '../../static/images/mongodb.png'



const useStyles = makeStyles(theme=>({
   /* root:{
        backgroundColor:'#000',
        minHeight: '100vh',
        color: "#fff",
        fontFamily: '"Source Code Pro" , monospace',
    },*/
    //toolbar: theme.mixins.toolbar,
    imgLogo:{
            width:"50px",

    }


    



}))



function Languages(){
const classes = useStyles()

    return(
            

        
       
                <div className="container">
               
                
             <div className="d-flex flex-column align-items-center justify-content-center text-center ">
                <div>
                   
             <h6 className="mt-4">Languages</h6>   
             <div className="row mt-3">
                <div className="col">
                        <img src={javascriptLogo} 
                        className={classes.imgLogo}
                        
                         />
                </div>
               
                <div className="col">
                        <img src={pythonLogo} width="50" />
                </div>
              
                </div>
                <div className="row mt-1">

                <div className="col">
                <img src={javaLogo} width="80" />
  
  
                </div>
                <div className="col">
                        <img src={phpLogo} width="70" className="mt-3" />
                </div>
               

        </div>
  

        <h6 className="mt-4">
         Frontend Frameworks
        </h6>
        <div className="row">
                <div className="col">
                        <img src={reactLogo} width="70" />
                        <img src={angularLogo} width="70" />
                </div>

        </div>
        <h6 className="mt-4">
         Backend Frameworks
        </h6>
        <div className="row">
                <div className="col">
                
                        <img src={djangoLogo} width="90" />
                        </div>
                        <div className="col">
                        <img src={laravelLogo} width="90" />
                        </div>
                        

        </div>
        <div className="row">
        <div className="col">
                        <img src={nodeLogo} width="90" />
                        </div>
        </div>
        
       
        <h6 className="mt-4">
         Databases:
        </h6>
        <div className="row">
                <div className="col">
                        <img src={postgresqlLogo} width="50" />
                        </div>
                <div className="col">
                        <img src={mysqlLogo} width="80" />
                        </div>
                </div>
                <div className="row">
                <div className="col">
                        <img src={mongodbLogo} width="50" />
                        </div>
                </div>

        

       


            </div>
             </div>
        </div> 
    )
}



export default Languages