import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { BrowserRouter, Route  } from 'react-router-dom'
import Index from './view/index'
import About from './view/about'
import Login from './view/login'
import Regist from './view/regist'
import Forget from './view/forget'
import registerServiceWorker from './registerServiceWorker';


ReactDOM.render(
  <BrowserRouter>
    <div>
      <Route exact={true} path="/" component={Index}/>
      <Route path="/login" component={Login}/>
      <Route path="/regist" component={Regist}/>
      <Route path="/forget" component={Forget}/>
      <Route path="/about" component={About}/>
    </div>
  </BrowserRouter>,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
