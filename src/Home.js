import React, { Component } from "react";

class Home extends Component {
  render() {
    return (
      <div>
        <p>
          Hi, I'm <a href="">Melanie Berkley</a>.
        </p>

        <p> 
          <a href="">This is my blog</a>. You can reach me on <a href="https://twitter.com/eislz">Twitter</a>, 
          or send me an <a href="mailto:hello@berkley.io">Email</a>. 
          There's also <a href="http://www.linkedin.com/in/melanieberkley">LinkedIn</a> and 
          my projects on <a href="http://www.github.com/her">GitHub</a>. 
        </p>

      </div>
    );
  }
}

export default Home;
