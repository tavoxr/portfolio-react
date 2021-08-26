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
import { useMediaQuery } from 'react-responsive'
import { mobile, tablet, desktop } from '../../breakpoints';
import electronLogo from '../../static/images/electronLogo.png'


const useStyles = makeStyles(theme => ({

        languageTitle: {
                fontSize: '24px',
        },
        frameworkCard: {
                background: 'linear-gradient(bottom, #e0f2f1, #fff)',

                boxShadow: '2px 2px 3px grey',
                [mobile]: {
                        boxShadow: '1px 1px 4px grey',
                },
                [tablet]: {
                        boxShadow: '1px 1px 4px grey',
                },
                [desktop]: {
                        height: '170px'
                }
        }
}))


function Languages() {
        const classes = useStyles()

        const isMobile = useMediaQuery({ query: '(max-width:1000px)' })
        // const isTablet = useMediaQuery({ query: '(min-device-width: 768px)' })
        const isDesktop = useMediaQuery({ query: '(min-device-width: 1001px)' })

        return (
                <div className="container mt-4">
                        {isMobile && <div className="d-flex flex-column align-items-center justify-content-center text-center ">
                                
                                {/* -------------------------------------LANGUAGES-CARD--------------------------------- */}
                                <div className={`card card-body w-100 mt-3 ${classes.frameworkCard}`}>
                                        <h5 className={` ${classes.languageTitle}`}>Languages</h5>
                                        <div className="row mt-3">
                                                <div className="col">
                                                        <img src={javascriptLogo}
                                                                width="60"
                                                                className={classes.imgLogo}
                                                                alt="javascript"
                                                        />
                                                </div>

                                                <div className="col">
                                                        <img src={pythonLogo} width="60" className={classes.imgLogo} alt="python-logo" />
                                                </div>
                                                <div className="col">
                                                        <img src={javaLogo} width="80" className={classes.imgLogo} alt="java-logo"/>
                                                </div>
                                                <div className="col">
                                                        <img src={phpLogo} width="70" className={`mt-3 ${classes.imgLogo}`} alt="php-logo" />
                                                </div>
                                        </div>
                                </div>
                                {/* ----------------------------------END-LANGUAGES-CARD--------------------------------- */}
                
                                {/* -------------------------------------FRONTEND-CARD--------------------------------- */}
                                <div className={`card card-body w-100 mt-3 ${classes.frameworkCard}`}>
                                        <h5 className={classes.languageTitle}>
                                                Frontend
                                        </h5>
                                        <div className="row">
                                                <div className="col">
                                                        <img src={reactLogo} width="85" className={` mt-3 ${classes.imgLogo}`} alt="react-logo" />

                                                </div>
                                                <div className="col">
                                                        <img src={angularLogo} width="72" className={classes.imgLogo} alt="angular-logo" />

                                                </div>

                                                <div className="col">
                                                        <img src={vueLogo} width="60" className={` mt-2 ${classes.imgLogo}`}  alt="vue-logo" />
                                                </div>
                                        </div>
                                </div>
                                {/* ----------------------------------END-FRONTEND-CARD--------------------------------- */}
                
                                {/* -------------------------------------BACKEND-CARD--------------------------------- */}
                                <div className={`card card-body w-100 mt-3 ${classes.frameworkCard}`}>
                                        <h5 className={classes.languageTitle}>
                                                Backend
                                        </h5>
                                        <div className="row">
                                                <div className="col">

                                                        <img src={djangoLogo} width="100" className={classes.imgLogo} alt="django-logo"/>
                                                </div>
                                                <div className="col">
                                                        <img src={nodeLogo} width="100" className={classes.imgLogo}  alt="node-logo"/>
                                                </div>
                                        </div>
                                        <div className="row">
                                                <div className="col">
                                                        <img src={laravelLogo} width="110" className={classes.imgLogo}  alt="laravel-logo"/>
                                                </div>
                                        </div>
                                </div>

                                {/* ----------------------------------END-BACKEND-CARD--------------------------------- */}
                
                                {/* -------------------------------------DATABASES-CARD--------------------------------- */}
                                <div className={`card card-body  w-100 mt-3 ${classes.frameworkCard}`}>
                                        <h5 className={classes.languageTitle}>
                                                Databases
                                        </h5>
                                        <div className="row">
                                                <div className="col">
                                                        <img src={postgresqlLogo} width="70" className={classes.imgLogo} alt="postgresql-logo"/>
                                                </div>
                                                <div className="col">
                                                        <img src={mysqlLogo} width="90" className={classes.imgLogo} alt="mysql-logo"/>
                                                </div>
                                                <div className="col">
                                                        <img src={mongodbLogo} className={classes.imgLogo} width="70" alt="mongodb-logo"/>
                                                </div>
                                        </div>

                                </div>
                                {/* ----------------------------------END-DATABASES-CARD--------------------------------- */}
                
                                {/* -------------------------------------MOBILE-CARD--------------------------------- */}
                                <div className={`card card-body  w-100 mt-3 ${classes.frameworkCard}`}>
                                        <h5 className={classes.languageTitle}>
                                                Mobile
                                        </h5>
                                        <div className="row">
                                                <div className="col">
                                                        <img src={nativeLogo} width="150"  className={`m-3 ${classes.imgLogo}`} alt="react-native-logo" />
                                                </div>
                                        </div>
                                </div>
                                {/* ----------------------------------END-MOBILE-CARD--------------------------------- */}
                
                                {/* -------------------------------------DESKTOP-CARD--------------------------------- */}
                                <div className={`card card-body  w-100 mt-3 ${classes.frameworkCard}`}>
                                        <h5 className={classes.languageTitle}>
                                                Desktop
                                        </h5>
                                        <div className="row">
                                                <div className="col">
                                                        <img src={electronLogo} width="100" className={`m-3 ${classes.imgLogo}`} alt="electron-logo" />
                                                </div>
                                        </div>
                                </div>
                        </div>}

                
                        {/*================================================DESKTOP=======================================================*/}

                        {isDesktop && <div className="d-flex flex-column align-items-center justify-content-center text-center ">
                                <div className="row d-flex flex-row align-items-center justify-content-center text-center ">
                                        <div className="col-6">
                
                                {/* -------------------------------------LANGUAGES-CARD--------------------------------- */}
                                                <div className={`card card-body w-100 mt-3 ${classes.frameworkCard}`}>
                                                        <h5 className={` ${classes.languageTitle}`}>Languages</h5>

                                                        <div className="row mt-3">
                                                                <div className="col">
                                                                        <img src={javascriptLogo}
                                                                                width="60"
                                                                                className={classes.imgLogo}
                                                                                alt="javascript-logo"
                                                                        />
                                                                </div>

                                                                <div className="col">
                                                                        <img src={pythonLogo} width="60" className={classes.imgLogo} alt="python-logo" />
                                                                </div>
                                                                <div className="col">
                                                                        <img src={javaLogo} width="80" className={classes.imgLogo} alt="java-logo"/>
                                                                </div>
                                                                <div className="col">
                                                                        <img src={phpLogo} width="70" className={`mt-3 ${classes.imgLogo}`} alt="php-logo"  />
                                                                </div>
                                                        </div>


                                                </div>

                                        </div>
                                        {/* ----------------------------------END-LANGUAGES-CARD--------------------------------- */}
                
                                        {/* -------------------------------------BACKEND-CARD--------------------------------- */}

                                        <div className="col-6">

                                                <div className={`card card-body w-100 mt-3  ${classes.frameworkCard}`}>
                                                        <h5 className={classes.languageTitle}>
                                                                Backend
                                                        </h5>
                                                        <div className="row">
                                                                <div className="col">

                                                                        <img src={djangoLogo} width="100" className={classes.imgLogo} alt="django-logo"/>
                                                                </div>
                                                                <div className="col">
                                                                        <img src={nodeLogo} width="100" className={classes.imgLogo} alt="node-logo"/>
                                                                </div>
                                                        </div>
                                                        <div className="row">
                                                                <div className="col">
                                                                        <img src={laravelLogo} width="110" className={classes.imgLogo} alt="laravel-logo" />
                                                                </div>
                                                        </div>
                                                </div>

                                        </div> {/* end col */}
                                        {/* ----------------------------------END-BACKEND-CARD--------------------------------- */}
                
                                        {/* -------------------------------------FRONTEND-CARD--------------------------------- */}
                                        <div className="col-6">
                                                <div className={`card card-body w-100 mt-3 ${classes.frameworkCard}`}>
                                                        <h5 className={classes.languageTitle}>
                                                                Frontend
                                                        </h5>
                                                        <div className="row">
                                                                <div className="col">
                                                                        <img src={reactLogo} width="85" className={` mt-3 ${classes.imgLogo}`} alt="react-logo" />

                                                                </div>
                                                                <div className="col">
                                                                        <img src={angularLogo} width="72" className={classes.imgLogo} alt="angular-logo"/>

                                                                </div>

                                                                <div className="col">
                                                                        <img src={vueLogo} width="60" className={` mt-2 ${classes.imgLogo}`} alt="vue-logo"/>
                                                                </div>


                                                        </div>
                                                </div>

                                        </div>
                                        {/* ----------------------------------END-FRONTEND-CARD--------------------------------- */}
                
                                        {/* -------------------------------------DATABASES-CARD--------------------------------- */}
                                        <div className="col-6">
                                                <div className={`card card-body  w-100 mt-3 ${classes.frameworkCard}`}>
                                                        <h5 className={classes.languageTitle}>
                                                                Databases
                                                        </h5>
                                                        <div className="row">
                                                                <div className="col">
                                                                        <img src={postgresqlLogo} width="70" className={classes.imgLogo} alt="postgres-logo"/>
                                                                </div>
                                                                <div className="col">
                                                                        <img src={mysqlLogo} width="90" className={classes.imgLogo} alt="mysql-logo"/>
                                                                </div>
                                                                <div className="col">
                                                                        <img src={mongodbLogo} className={classes.imgLogo} width="70" alt="mongodb-logo"/>
                                                                </div>
                                                        </div>

                                                </div>
                                        </div> {/* end col */}
                                        {/* ----------------------------------END-DATABASES-CARD--------------------------------- */}
                
                                        {/* -------------------------------------MOBILE-CARD--------------------------------- */}

                                        <div className="col-6">
                                                <div className={`card card-body  w-100 mt-3 ${classes.frameworkCard}`}>
                                                        <h5 className={classes.languageTitle}>
                                                                Mobile
                                                        </h5>
                                                        <div className="row">
                                                                <div className="col">
                                                                        <img src={nativeLogo} width="150" className={`mt-4 ${classes.imgLogo}`}  alt="react-native-logo"/>
                                                                </div>
                                                        </div>
                                                </div>
                                        </div> {/* end col */}

                                        {/* ----------------------------------END-MOBILE-CARD--------------------------------- */}
                
                                        {/* -------------------------------------DESKTOP-CARD--------------------------------- */}
                                        <div className="col-6">
                                                <div className={`card card-body  w-100 mt-3 ${classes.frameworkCard}`}>
                                                        <h5 className={classes.languageTitle}>
                                                                Desktop
                                                        </h5>
                                                        <div className="row">
                                                                <div className="col">
                                                                        <img src={electronLogo} width="100" className={`mt-3 ${classes.imgLogo}`} alt="electron-logo" />
                                                                </div>
                                                        </div>
                                                </div>
                                        </div> {/* end col */}
                                        {/* ----------------------------------END-DESKTOP-CARD--------------------------------- */}
                

                                </div> {/*row end */}

                         </div>
                        } {/*  END DESKTOP */}
                </div>
        )
}



export default Languages