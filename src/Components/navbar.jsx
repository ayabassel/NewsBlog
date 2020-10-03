import React, {Component} from "react";


class NavBar extends Component {
  state = {  }



  render() { 
    return ( 
      <div className="container">
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <a className="navbar-brand text-info" href="/">Home</a>
        </nav>
      </div>
     );
  }
}
 
export default NavBar;


