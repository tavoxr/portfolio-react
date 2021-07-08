import {createMuiTheme} from '@material-ui/core/styles'
import teal from '@material-ui/core/colors/teal'


const theme = createMuiTheme({
    palette:{
        primary:{
            light: teal[50],
            main: teal[400],
            dark: teal[700],
            contrastText: '#fff'
        },
    text:{
        secondary: '#fff'
    }
    }
})


export default theme