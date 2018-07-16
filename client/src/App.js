import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import DetailMaster from './components/DetailMaster';

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state={};
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
    render() {
        return(
            <DetailMaster articles={this.state.allArticles} />

        )
    }
}
