import React, { Component, Fragment } from "react";
import "../../fontawesome";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './comment.css'

export default class Comment extends Component {
    handleVote = () => {
        this.props.upvoteHandler(this.props.comment.id);
    };
    render() {
        return (
            <Fragment>
        <span className=" ptr" onClick={this.handleVote}>
          <FontAwesomeIcon icon={["fas", "thumbs-up"]} size="2x" />
            {` ${this.props.comment.upvotes}`}
        </span>
                <span className="commentitem">
          {`${this.props.comment.comment} (by ${this.props.comment.author})`}
        </span>
                <p></p>
            </Fragment>
        );
    }
}