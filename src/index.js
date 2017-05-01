import React from 'react';
import ReactDOM from 'react-dom';
import HackerApp from './App';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import { Router, Link, Route, IndexRoute, browserHistory } from 'react-router';


		var App = React.createClass({
		  render : function() {
		    return (
                <div className="container">
                   <div className="row">
                      <div className="col-md-6 col-md-offset-3">
                         <div className="page-header">
                            <h1><Link to="/" activeClassName="active">Hacker News</Link></h1>
                               {this.props.children}
                         </div>
                       </div>
                    </div>
                  </div>
		    )
		  }
		});

     ReactDOM.render(
         (
          <Router history={browserHistory} >
            <Route path="/" component={App}>
               <IndexRoute component={HackerApp}/>
               <Route path="posts/:postId" component={CommentView} />
            </Route>
          </Router>
        ),
          document.getElementById('root')
      );
