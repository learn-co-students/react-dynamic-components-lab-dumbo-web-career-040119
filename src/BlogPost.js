import React, { Component } from 'react';
import Comment from './Comment.js'
// are we missing an import?

export default class BlogPost extends Component {
  render() {

    const comments = [
      "Tell my wifi love her",
      "Ken M was here",
      "Did you ever hear the tragedy of Darth Plagueis The Wise? I thought not. It's not a story the Jedi would tell you. It's a Sith legend. Darth Plagueis was a Dark Lord of the Sith, so powerful and so wise he could use the Force to influence the midichlorians to create life… He had such a knowledge of the dark side that he could even keep the ones he cared about from dying. The dark side of the Force is a pathway to many abilities some consider to be unnatural. He became so powerful… the only thing he was afraid of was losing his power, which eventually, of course, he did."
    ]

    return (
      <div id="blog-post" className="wrapper">
        Here's another haiku:<br/>
        When the Summer comes<br/>
        To sweat under a warm Sun<br/>
        Leafs blow in the wind<br/>


        <Comment commentText={comments[0]} />
        <Comment commentText={comments[1]} />
        <Comment commentText={comments[2]}/>

      </div>
    );
  }
}
