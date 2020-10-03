import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import NavBar from './navbar';
import HomePage from './homePage';
import NewsDetails from './newsDetails';
import axios from "axios";


class App extends Component {
    state = { 
        newsItems: null,
        source: 'abc-news'
     }

    async componentDidMount() {
        const { data } = await axios.get("https://newsapi.org/v2/everything?sources="+this.state.source+"&apiKey=5dd442f7c99c47c8a6f9a73db68cd894");
        let articles = data.articles;
        this.setState({ newsItems: articles})
    }

    onChangeSource(src) {
        this.setState({ source: src }, () => {
            this.componentDidMount();
        });
    }


    render() { 
        return this.state.newsItems ? ( 
            <React.Fragment>
                <NavBar/>

                <main className="container"> 
                    <Switch>
                        <Route path="/story/:id" render={ (props) => (<NewsDetails newsItem={this.state.newsItems[parseInt(props.match.params.id)]}/>) } />
                        <Route path="/" render={ (props) => (<HomePage newsItems={this.state.newsItems} onChangeSource={(source) => {this.onChangeSource(source)}} />) } />
                    </Switch>
                </main>

            </React.Fragment>
         ) : null;
    }
}
 
export default App;