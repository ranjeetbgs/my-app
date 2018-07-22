import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter ,Route, Link} from 'react-router-dom';
// import configureStore from './store/configureStore';

// import Users from './components/users';

// const store = configureStore();
import Home from './components/home'
import Header from './components/header'
import Menu from './components/menu'

const About =()=>(<h1>About</h1>);
// render(
//     <Provider store={store}>
//         <Users />
//     </Provider>,
//     document.getElementById('root')
// );

const App = () =>(
<BrowserRouter>
<div>
    <ul>
        <li><Link className="btn " to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        </ul>
    <Route exact path="/" component={Home} />
    <Route path="/about" component={About} />
    </div>
</BrowserRouter>

);
render(<App />,document.getElementById('root'));
render(<Header />,document.getElementById('header'));
render(<Menu />,document.getElementById('menu'));
