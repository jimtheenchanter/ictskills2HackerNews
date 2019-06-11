import React, { Component } from 'react';
import NewsList from './components/newsList';
import Form from './components/newsForm';

export default class App extends Component {
  render() {
    const testPosts = [
      {  id: 1 ,
        title : 'Why You Can No Longer Get Lost in the Crowd',
        link : 'https://www.nytimes.com/2019/04/17/opinion/data-privacy.html',
        author : 'Woodrow Hartzog',
        comments : [],
        upvotes : 10
      },
      {
        id: 2,
        title : "Samsung's folding phone breaks for reviewers",
        link : 'https://www.bbc.com/news/technology-47970788',
        author : 'Dave Lee',
        comments : [],
        upvotes : 12
      },
      {
        id: 3,
        title : 'Microsoft turned down facial-recognition sales on human rights concerns',
        link : null,
        author : 'Joseph Mennn',
        comments : [],
        upvotes : 12
      },
      {
        id: 4,
        title : 'Follow-up: I found two identical packs of Skittles, among 468 packs with a total of 27,740 Skittles',
        link : 'https://possiblywrong.wordpress.com/',
        author : 'unknown',
        comments : [],
        upvotes : 2
      },
      {  id: 5 ,
        title : 'THE COMING DESERT',
        link : 'https://newleftreview.org/issues/II97/articles/mike-davis-the-coming-desert',
        author : 'MIKE DAVIS',
        comments : [],
        upvotes : 10
      },           {  id: 6 ,
        title : "Sleep myths 'damaging your health'",
        link : 'https://www.bbc.com/news/health-47937405',
        author : 'James Gallagher',
        comments : [],
        upvotes : 10
      },           {  id: 7 ,
        title : 'Planet’s ocean-plastics problem detailed in 60-year data set',
        link : 'https://www.nature.com/articles/d41586-019-01252-0',
        author : 'Matthew Warren',
        comments : [],
        upvotes : 10
      }
    ] ;
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
                <NewsList posts={testPosts} />
              </div>
            </div>
          </div>
        </div>
    );
  }
}