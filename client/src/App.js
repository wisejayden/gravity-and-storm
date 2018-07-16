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
            masterView: '',
            dropdownValue: 'date'
        };
        this.renderIndicatorImage = this.renderIndicatorImage.bind(this);
        this.detailViewClickToMaster = this.detailViewClickToMaster.bind(this);
        this.dropdownHandleChange = this.dropdownHandleChange.bind(this);
        this.sortArticles = this.sortArticles.bind(this);
    }
    componentWillMount() {
        console.log("clicked");
        axios.get('/hello')
            .then(res => {
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
            article.level = [0, <img src="/images/green.png" className="indicator-light" />]
        }
        if(article.level === '1') {
            article.level = [1, <img src="/images/yellow.png" className="indicator-light"/>]
        }
        if(article.level === '2') {
            article.level = [2, <img src="/images/red.png" className="indicator-light" />]
        }

    }
    dropdownHandleChange(e) {
        console.log("handling change!", e.target.value);
        this.setState({
            dropdownValue: e.target.value
        }, () => {
            this.sortArticles();
        } );
    }
    sortArticles() {
        const value = this.state.dropdownValue;
        const articles = this.state.allArticles;
        console.log("Sort Articles function", value);


        if(value === 'date') {
            console.log("articles sorting date", articles);
            articles.sort((a, b) => {
                return b.published_date - a.published_date;
            })
            this.setState({
                allArticles: articles
            })
            console.log("________1", articles);

        }
        if(value === 'importance') {
            console.log("articles sorting importance", articles);
            articles.sort((a, b) => {
                return b.level[0] - a.level[0];
            })
            console.log("________2", articles);
            this.setState({
                allArticles: articles
            })
        }
    }
    render() {
        return(
            <div id="App">
                <DetailView articles={this.state.allArticles} renderIndicatorImage ={this.renderIndicatorImage} detailViewClickToMaster={this.detailViewClickToMaster}
                dropdownHandleChange={this.dropdownHandleChange} dropdownValue={this.state.dropdownValue}/>
                <MasterView currentMasterView={this.state.currentMasterView} renderIndicatorImage={this.renderIndicatorImage}/>

            </div>

        )
    }
}
