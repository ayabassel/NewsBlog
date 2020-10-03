import React, { Component } from 'react';

class NewsDetails extends Component {
    state = { 
        newsItem: this.props.newsItem
     }
    componentDidMount() {
        this.setState({ newsItem: this.props.newsItem})
    }
    render() { 

        return ( 
            <React.Fragment>
                <h2 className="p-5">{this.state.newsItem.title}</h2>
                <div>
                 <div className="float-right">{this.state.newsItem.publishedAt}</div>       
                </div>
                <p className="mt-5">{this.state.newsItem.description}</p>

              
            </React.Fragment>

         );
    }
}
 
export default NewsDetails;