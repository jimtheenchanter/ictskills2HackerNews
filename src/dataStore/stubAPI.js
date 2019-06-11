import _ from "lodash";

class StubAPI {
    constructor() {
        this.posts = [
            {
                id: 1,
                title: "Why You Can No Longer Get Lost in the Crowd",
                link: "https://www.nytimes.com/2019/04/17/opinion/data-privacy.html",
                author: "Woodrow Hartzog",
                comments: [],
                upvotes: 10
            },
            {
                id: 2,
                title: "Samsung's folding phone breaks for reviewers",
                link: "https://www.bbc.com/news/technology-47970788",
                author: "Dave Lee",
                comments: [],
                upvotes: 14
            },
            {
                id: 3,
                title:
                    "Microsoft turned down facial-recognition sales on human rights concerns",
                link: null,
                author: "Joseph Mennn",
                comments: [],
                upvotes: 12
            },
            {
                id: 4,
                title:
                    "Follow-up: I found two identical packs of Skittles, among 468 packs with a total of 27,740 Skittles",
                link: "https://possiblywrong.wordpress.com/",
                author: "unknown",
                comments: [],
                upvotes: 2
            },
            {
                id: 5,
                title: "THE COMING DESERT",
                link:
                    "https://newleftreview.org/issues/II97/articles/mike-davis-the-coming-desert",
                author: "MIKE DAVIS",
                comments: [],
                upvotes: 8
            },
            {
                id: 6,
                title: "Sleep myths 'damaging your health'",
                link: "https://www.bbc.com/news/health-47937405",
                author: "James Gallagher",
                comments: [],
                upvotes: 10
            },
            {
                id: 7,
                title: "Planet’s ocean-plastics problem detailed in 60-year data set",
                link: "https://www.nature.com/articles/d41586-019-01252-0",
                author: "Matthew Warren",
                comments: [],
                upvotes: 20
            }
        ];
    }

    getAll() {
        return this.posts;
    }

    add(title, author, link) {
        let id = 1;
        let last = _.last(this.posts);
        if (last) {
            id = last.id + 1;
        }
        let len = this.posts.length;
        let newLen = this.posts.push({
            id,
            title,
            author,
            link,
            comments: [],
            upvotes: 0
        });
        return newLen > len;
    }

    upvote(id) {
        let index = _.findIndex(this.posts, post => post.id === id);
        if (index !== -1) {
            this.posts[index].upvotes += 1;
            return true;
        }
        return false;
    }

    getPost(id) {
        let index = _.findIndex(this.posts, post => post.id === id);
        let result = index !== -1 ? this.posts[index] : null;
        return result;
    }

    addComment(postId, c, n) {
        let post = this.getPost(postId);
        let id = 1;
        let last = _.last(post.comments);
        if (last) {
            id = last.id + 1;
        }
        post.comments.push({ id: id, comment: c, author: n, upvotes: 0 });
    }

    upvoteComment(postId, commentId) {
        let post = this.getPost(postId);
        let index = _.findIndex(post.comments, c => c.id === commentId);
        if (index !== -1) {
            post.comments[index].upvotes += 1;
        }
    }
}

export default new StubAPI();