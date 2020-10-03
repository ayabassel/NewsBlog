import React, { Component } from 'react';

class NewsBlock extends Component {
    state = { 
        id: this.props.id,
        newsItem: this.props.newsItem,
     }

     componentDidUpdate(prevProps) {
        if(this.props.newsItem !== prevProps.newsItem) {
            this.setState({newsItem: this.props.newsItem});
        }
        
        if(this.props.id !== prevProps.id) {
            this.setState({id: this.props.id});
        }
      }

    render() { 
        return (
            <div>

                
                <a className="list-group-item list-group-item-action m-2 p-3 bg-light border border-secondary rounded-pill" href={"/story/" + this.state.id}>
                    {this.state.newsItem.title}
                    {this.state.id}
                    <span className="float-right">{this.state.newsItem.publishedAt}</span>
                </a>
            </div>
        );
    }
}
 
export default NewsBlock;