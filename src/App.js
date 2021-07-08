import React from 'react'
import {makeStyles, ThemeProvider} from '@material-ui/core'
import  theme from './themeConfig'
import { grey } from '@material-ui/core/colors'
import Header from './components/Header'
import About from './components/About'

const useStyles = makeStyles(theme =>({
 


}))
function App() {
  const classes = useStyles()

  return (
    <ThemeProvider theme={theme}  >
      
          <Header/>
          <About/>
      

    </ThemeProvider>
  );
}

export default App;
