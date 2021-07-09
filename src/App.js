import React from 'react'
import {makeStyles, ThemeProvider} from '@material-ui/core'
import  theme from './themeConfig'
import { grey } from '@material-ui/core/colors'
import Header from './components/Header'
import About from './components/About'
import Projects from './components/Projects'

const useStyles = makeStyles(theme =>({
 


}))
function App() {
  const classes = useStyles()

  return (
    <ThemeProvider theme={theme}  >
      
          <Header/>
          <About/>
          <Projects/>
         

    </ThemeProvider>
  );
}

export default App;
