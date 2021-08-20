import React from 'react'
import {makeStyles, ThemeProvider} from '@material-ui/core'
import  theme from './themeConfig'
import { grey } from '@material-ui/core/colors'
import Header from './components/Header'
import About from './components/About'
import Job from './components/About/Job'
import Projects from './components/Projects'
import Contact from './components/Contact'

const useStyles = makeStyles(theme =>({
 


}))
function App() {
  const classes = useStyles()

  return (
    
    <ThemeProvider theme={theme}  >
      <div className="container">

      
          <Header/>
          <Job/>
         { /*<About/>*/ }
          <Projects/>
          <Contact/>
          </div>
          

    </ThemeProvider>
  );
}

export default App;
