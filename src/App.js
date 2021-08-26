import React from 'react'
import {ThemeProvider} from '@material-ui/core'
import  theme from './themeConfig'
import Header from './components/Header'
import About from './components/About'
import Projects from './components/Projects'
import Contact from './components/Contact'
import { BrowserRouter as Router,
          Switch,
          Route,
          BrowserRouter

} from 'react-router-dom'

function App() {
  

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
