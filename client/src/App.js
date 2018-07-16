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
    //Before mounting, retrieve data from API Call.
    componentWillMount() {
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
    //On clicking on an article take that index, indentifying the number in the initial array of articles and pass that info to the MasterView component.
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
    //Change the data to display both the level integer and an image represting the importance.
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
    //In reference to the drop down filter in the MasterView.
    dropdownHandleChange(e) {
        this.setState({
            dropdownValue: e.target.value
        }, () => {
            this.sortArticles();
        } );
    }
    //Depending on the current value, sort articles by either published date OR by importance.
    sortArticles() {
        const value = this.state.dropdownValue;
        const articles = this.state.allArticles;
        if(value === 'date') {
            articles.sort((a, b) => {
                return b.published_date - a.published_date;
            })
            this.setState({
                allArticles: articles
            })
        }
        if(value === 'importance') {
            articles.sort((a, b) => {
                return b.level[0] - a.level[0];
            })
            this.setState({
                allArticles: articles
            })
        }
    }

    render() {
        return(
            <div id="App">
                <MasterView articles={this.state.allArticles} renderIndicatorImage ={this.renderIndicatorImage} detailViewClickToMaster={this.detailViewClickToMaster}
                dropdownHandleChange={this.dropdownHandleChange} dropdownValue={this.state.dropdownValue} masterArticleStyle={this.state.masterArticleStyle}/>
                <DetailView currentMasterView={this.state.currentMasterView} renderIndicatorImage={this.renderIndicatorImage}/>
            </div>
        )
    }
}
