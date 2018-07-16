import React from 'react';
import './DetailView.css';
import FilterDropdown from './FilterDropdown';


const DetailView = (props) => {
    const dropdownOptions = ['one', 'two', 'three']
        return (
        <div id="DetailMaster">
        <FilterDropdown dropdownHandleChange={props.dropdownHandleChange} dropdownValue={props.dropdownValue}/>
        {props.articles &&
            props.articles.map((article, i) => {
                props.renderIndicatorImage(article);
                    return(
                        <div  onClick={props.detailViewClickToMaster(i)} className="article-container" key={i}>
                            <h1>{article.title}</h1>
                            <span>Importance Level - {article.level[1]}</span>
                            <p>{article.body.substring(0,80) + '...'}</p>
                        </div>
                    )
            })
        }
        </div>
    )
}

export default DetailView;
