import React, { Component } from 'react';
import NewsList from './components/newsList/';
import Form from './components/newsForm/';
import api from './dataStore/stubAPI';

export default class App extends Component {
  render() {
    let posts =  api.getAll();
    return (
        <div className="jumbotron">
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-6 offset-3">
                <h1><a href="/">Hacker News</a></h1>
              </div>
            </div>
            <div className="row">
              <div className="col-md-4 ">
                <Form />
              </div>
              <div className="col-md-8">
                <NewsList posts={posts} />
              </div>
            </div>
          </div>
        </div>
    );
  }
}