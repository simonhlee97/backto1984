import React, { Component } from 'react';
import '../styles/App.css';
import Home from './HomeComponent';
import Login from './LoginComponent';
import About from './AboutComponent';
import News from './News';
import Footer from './Footer';
import NoMatch from './NoMatch';
import ContainedButtons from './ContainedButtons';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import TeacherPortal from '../TeacherPort/TeacherPortal';
import GradeBook from '../TeacherPort/GradeBook';
import AllClasses from '../TeacherPort/AllClasses';
import {CSSTransition, TransitionGroup} from 'react-transition-group';

class App extends Component {
    render() {
        return (
            <Router>

                <Route render={({ location }) => console.log(location) || (

                <div className="App">

                    <ContainedButtons />

                    <hr />
                    
                    <div className="container">

                            <TransitionGroup>
                                <CSSTransition
                                    key={location.key}
                                    timeout={300}
                                    classNames='fade'>
                                    <Switch location={location}>
                                        <Route exact path="/" component={Home} />
                                        <Route path="/about" component={About} />
                                        <Route path="/news" component={News} />
                                        <Route path="/login" component={Login} />
                                        <Route path="/teacher" component={TeacherPortal} />
                                        <Route path="/gradebook" component={GradeBook} />
                                        <Route path="/allclasses" component={AllClasses} />
                                        <Route component={NoMatch} />
                                    </Switch>
                                </CSSTransition>
                            </TransitionGroup>

                    </div>
                
                    <Footer />

                </div>
                )} />
            </Router>
        );
    }
}


export default App;