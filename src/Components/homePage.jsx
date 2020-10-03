import React, { Component } from 'react';
import NewsBlock from './newsBlock';
import axios from "axios";
import NavBar from './navbar';


class HomePage extends Component {
    state = { 
        blogName: "News-Land",
        newsItems: this.props.newsItems,
     }

     componentDidUpdate(prevProps) {
        if(this.props.newsItems !== prevProps.newsItems) {
            this.setState({newsItems: this.props.newsItems});
        }
      }

      handleClick(source) {
        this.props.onChangeSource(source);
      }
    
    render() {  
        return (
            <React.Fragment>

                <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                    <div className="navbar-brand clickable mr-4" onClick={() => this.handleClick('abc-news')}>ABC News</div>
                    <div className="navbar-brand clickable mr-4" onClick={() => this.handleClick('bbc-news')}>BBC News</div>
                    <div className="navbar-brand clickable mr-4" onClick={() => this.handleClick('al-jazeera-english')}>Al Jazeera English</div>  
                </nav>
                {this.state.newsItems.map( (newsItem, idx) => (
                    <NewsBlock key={idx} newsItem={newsItem} id={idx}/>
                ))}
            </React.Fragment>
        
        );
    }
}
export default HomePage;