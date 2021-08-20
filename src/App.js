import React from 'react'
import {makeStyles, ThemeProvider} from '@material-ui/core'
import  theme from './themeConfig'
import { grey } from '@material-ui/core/colors'
import Header from './components/Header'
import About from './components/About'
import Job from './components/About/Job'
import Projects from './components/Projects'
import Contact from './components/Contact'
import { BrowserRouter as Router,
          Switch,
          Route,
          Link,
          BrowserRouter

} from 'react-router-dom'
const useStyles = makeStyles(theme =>({
 


}))
function App() {
  const classes = useStyles()

  return (
    
    <ThemeProvider theme={theme}  >
    
<BrowserRouter>
      <Router>
        <Switch>
          <Route exact path="/">
              <Header/>

          </Route>
          <Route exact path="/about">
            <About/> 
          
          </Route>
         <Route exact path="/projects">
          <Projects/>
          </Route>
          <Route exact path="/contact">
          <Contact/>
          </Route>
        </Switch>

      </Router>
    </BrowserRouter>
        
          

    </ThemeProvider>
  );
}

export default App;
