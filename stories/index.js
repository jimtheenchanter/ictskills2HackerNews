import React from 'react';
import { storiesOf } from '@storybook/react';
import '../node_modules/bootstrap/dist/css/bootstrap.css';


import NewsForm from '../src/components/newsForm/';
import NewsItem from '../src/components/newsItem';

const post = {
    id: 1 ,
    title : 'Post 1.',
    link : 'http://www.foo.bar',
    author : 'Joe Bloggs',
    comments : [],
    upvotes: 10
};


storiesOf("Hacker App/News Form", module)
    .add("default", () => <NewsForm />);

storiesOf('Hacker App/News Item', module)
    .add('default', () => <NewsItem post= { post }  />
    )
    .add('No hyperlink', () => <NewsItem post= { { ...post, link: ''} }  />
    )
