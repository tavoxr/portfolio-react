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
import vueLogo from '../../static/images/vueLogo.png'
import nativeLogo from '../../static/images/reactNativeLogo.png'

const useStyles = makeStyles(theme => ({
        /* root:{
             backgroundColor:'#000',
             minHeight: '100vh',
             color: "#fff",
             fontFamily: '"Source Code Pro" , monospace',
         },*/
        //toolbar: theme.mixins.toolbar,
        imgLogo: {
                 
        
                

        },
        languageTitle: {
                fontSize: '24px',
                fontWeight: 'bolder',
                

        },

        frameworkCard:{
                backgroundColor: '#F6F9FA',
                boxShadow: '2px 2px 3px grey',
                
        }






}))



function Languages() {
        const classes = useStyles()

        return (

                <div className="container mt-4">

                        <div className="d-flex flex-column align-items-center justify-content-center text-center ">

                                <div className={`card card-body w-100 mt-3 ${classes.frameworkCard}`}>
                                        <h5 className={` ${classes.languageTitle}`}>Languages</h5>
                                        
                                        <div className="row mt-3">
                                                <div className="col">
                                                        <img src={javascriptLogo}
                                                                width="70"
                                                                className={classes.imgLogo}
                                                                />
                                                </div>

                                                <div className="col">
                                                        <img src={pythonLogo} width="70" className={classes.imgLogo} />
                                                </div>
                                        </div>
                                        <div className="row mt-1">
                                                <div className="col">
                                                        <img src={javaLogo} width="90"  className={classes.imgLogo}/>
                                                </div>
                                                <div className="col">
                                                        <img src={phpLogo} width="80" className={`mt-3 ${classes.imgLogo}` } />
                                                </div>
                                        </div>

                                </div>

                                <div className={`card card-body w-100 mt-3 ${classes.frameworkCard}`}>
                                        <h5 className={classes.languageTitle}>
                                                Frontend
                                        </h5>
                                        <div className="row">
                                                <div className="col">
                                                        <img src={reactLogo} width="95" className={classes.imgLogo} />
                                                        <img src={angularLogo} width="82" className={classes.imgLogo} />

                                                </div>
                                                <div className="row">
                                                <div className="col">
                                                        <img src={vueLogo} width="70" className={classes.imgLogo} />
                                                </div>
                                        </div>
                                        </div>
                                </div>
                                <div className={`card card-body w-100 mt-3 ${classes.frameworkCard}`}>
                                        <h5 className={classes.languageTitle}>
                                                Backend
                                        </h5>
                                        <div className="row">
                                                <div className="col">

                                                        <img src={djangoLogo} width="100" className={classes.imgLogo}/>
                                                </div>
                                                <div className="col">
                                                        <img src={nodeLogo} width="100" className={classes.imgLogo} />
                                                </div>
                                        </div>
                                        <div className="row">
                                                <div className="col">
                                                        <img src={laravelLogo} width="110"  className={classes.imgLogo} />
                                                </div>
                                        </div>
                                </div>

                                <div className={`card card-body  w-100 mt-3 ${classes.frameworkCard}`}>
                                        <h5 className={classes.languageTitle}>
                                                Databases
                                        </h5>
                                        <div className="row">
                                                <div className="col">
                                                        <img src={postgresqlLogo} width="70" className={classes.imgLogo} />
                                                </div>
                                                <div className="col">
                                                        <img src={mysqlLogo} width="90"  className={classes.imgLogo}/>
                                                </div>
                                        </div>
                                        <div className="row">
                                                <div className="col">
                                                        <img src={mongodbLogo} className={classes.imgLogo} width="70" />
                                                </div>
                                        </div>
                                </div>

                                <div className={`card card-body  w-100 mt-3 ${classes.frameworkCard}`}>
                                <h5 className={classes.languageTitle}>
                                                Mobile
                                        </h5>
                                        <div className="row">
                                                <div className="col">
                                                        <img src={nativeLogo} width="150" className="m-3" className={classes.imgLogo} />
                                                </div>
                                        </div>
                                </div>

                        </div>
                </div>
        )
}



export default Languages