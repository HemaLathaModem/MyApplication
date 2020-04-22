import React from 'react';
import Header from './components/Header'
import Home from './components/Home'
import News from './components/News'
import Contact from './components/Contact'
import About from './components/About'
import { BrowserRouter as Router,Route,Link} from 'react-router-dom'

class App extends React.Component
{

    render(){
        return(
           <Router>
             <div>
             <Header/>
             <Home/>
             </div>
             </Router>
        )
    }
}




export default App;
