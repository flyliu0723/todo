import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { BrowserRouter, Route  } from 'react-router-dom'
import App from './view/app';
import Index from './view/index'
import About from './view/about'
import registerServiceWorker from './registerServiceWorker';


ReactDOM.render(
  <BrowserRouter>
    <div>
      <Route path="/" component={Index}/>
      <Route path="/app" component={App}/>
      <Route path="/about" component={About}/>
    </div>
  </BrowserRouter>,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
