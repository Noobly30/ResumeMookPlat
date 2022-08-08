import React from 'react'
import ReactDOM from 'react-dom'
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import Title from './title/index';

function App() {
    return (
        <Router>
            <Switch>
                <Route path="/">
                    <div>可视化简历平台</div>
                    <div>Electron + React</div>
                    <Title text='a'/>
                </Route>
            </Switch>
        </Router>
    )
}

ReactDOM.render(<App />, document.getElementById('root'));