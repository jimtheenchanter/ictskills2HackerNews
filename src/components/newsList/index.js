import React, { Component, Fragment } from 'react';
import NewsItem from '../newsItem/';
import './newsList.css';


export default class NewsList extends Component {
    render() {
        const newsCards = this.props.posts.map(post => (
        <NewsItem key={post.id}
                  post={post}
                  upvoteHandler={this.props.upvoteHandler}  />
    ));



        return (
        <Fragment>{newsCards}</Fragment>
        );
    }
}