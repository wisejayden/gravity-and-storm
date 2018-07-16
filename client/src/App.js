import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import DetailMaster from './components/DetailMaster';
import './App.css'

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state={};
        this.renderIndicatorImage = this.renderIndicatorImage.bind(this);
    }
    componentWillMount() {
        console.log("clicked");
        axios.get('/hello')
            .then(res => {
                console.log("res", res.data);

                this.setState({
                    allArticles: res.data
                })

            })
            .catch(err => {
                console.log("err", err);
            })
    }
    renderIndicatorImage(article) {
        if(article.level === '0') {
            article.level = <img src="/images/green.png" className="indicator-light" />
        }
        if(article.level === '1') {
            article.level = <img src="/images/yellow.png" className="indicator-light"/>
        }
        if(article.level === '2') {
            article.level = <img src="/images/red.png" className="indicator-light" />
        }

    }
    render() {
        return(
            <div>
                <DetailMaster articles={this.state.allArticles} renderIndicatorImage ={this.renderIndicatorImage}/>
            </div>

        )
    }
}
