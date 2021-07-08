import React from 'react'
import { makeStyles } from '@material-ui/core'

const useStyles  = makeStyles(theme =>({


        imgContainer:{
                width: '250px',
                
                backgroundColor: '#000',
        },
photoBio:{
        width: '100%',
        borderRadius: '50%'
}

}))
function Bio(){
const classes = useStyles()


    return(
        <React.Fragment>
                <div className="d-flex ">
        <h1>

        </h1>
        <div className={classes.imgContainer} >
                <img className={classes.photoBio}  src="https://scontent.fgua9-1.fna.fbcdn.net/v/t1.6435-9/82942322_103057337907296_1140940809298771968_n.jpg?_nc_cat=108&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=5382yvZD5V0AX_8iG0M&_nc_ht=scontent.fgua9-1.fna&oh=f55a54f6538f94ef897231bfac0395db&oe=60EBEF51" />
        </div>
        <p>
        Hello my name is Gustavo, I'm a software developer from Guatemala and everything I've learned about web development has been on my own by online courses and a scholarship obtained in 2019 by Platzi and Facebook Developer Circles, as a specialized web developer in React.
       
        if you want to know more about me, I invite you to visit my social networks.
        </p>

        <p>
        At this moment I'm studing software development at Galileo University and I've been working with programming languages such as JavaScript, Python, PHP and JAVA and databases with MySql and MongoDB.
        </p>
        <p>
         And frameworks like:
        </p>
        <h6>click to check my projects</h6>
                </div>
        </React.Fragment>
    )
}



export default Bio