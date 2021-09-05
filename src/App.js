import React, {Component} from 'react'
import Table from './Table'

class App extends Component {
  render() {
    return (
      <div className="App">
          <div class="container">
            <nav class="navbar navbar-expand-lg navbar-light py-lg-0 py-3 px-0">
                <a class="navbar-brand" href="index.html"><img src="/home/gathua/projects/Project/logo.svg" alt="" class="img-fluid" /></a>
                <div class="collapse-navbar" id="navbarSupportedContent">
                    <ul class="navbar-nav"> 
                        <li><a class="navigation-element" href="#home"> Home </a></li>
                        <li><a href="#"> About Us </a></li>
                        <li><a href="#"> Contact </a></li>
                        <li><a href="#third"> FAQ </a></li>
                        <li><a href="#"> Services </a></li>
                        <li><a href="#"> Compare </a></li>
                        <li><a href="#"> Blog </a></li>
                        <li><a href="#"> Sell </a></li>
                    </ul>
                </div>
                <form class="search-form">
                     <button class="search-button" type="submit" onclick="searchCar()">Search</button>
                </form>
            </nav>
        </div>
        <div className="container">
        <Table />
      </div>
      </div>
    )
  }
}

export default App