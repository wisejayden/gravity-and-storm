import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import DetailView from './components/DetailView';
import MasterView from './components/MasterView';
import './App.css'

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state={
            masterView: ''
        };
        this.renderIndicatorImage = this.renderIndicatorImage.bind(this);
        this.detailViewClickToMaster = this.detailViewClickToMaster.bind(this);
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
    detailViewClickToMaster(index) {
        const self = this;
        return function() {
            const currentMasterView = self.state.allArticles[index];
            self.renderIndicatorImage(currentMasterView);
            self.setState({
                currentMasterView
            })
        }


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
            <div id="App">
                <DetailView articles={this.state.allArticles} renderIndicatorImage ={this.renderIndicatorImage} detailViewClickToMaster={this.detailViewClickToMaster}/>
                <MasterView currentMasterView={this.state.currentMasterView} renderIndicatorImage={this.renderIndicatorImage}/>

            </div>

        )
    }
}
