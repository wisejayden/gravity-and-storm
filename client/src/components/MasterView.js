import React from 'react';
import './MasterView.css';
import FilterDropdown from './FilterDropdown';


const MasterView = (props) => {
        return (
        <div id="DetailMaster">
            <FilterDropdown dropdownHandleChange={props.dropdownHandleChange} dropdownValue={props.dropdownValue}/>
            {props.articles &&
                props.articles.map((article, i) => {
                    props.renderIndicatorImage(article);
                        return(
                            <div  onClick={props.detailViewClickToMaster(i)} className="article-container" key={i} style={props.masterArticleStyle}>
                                <h1>{article.title}</h1>
                                {article.level[1]}
                                <p>{article.body.substring(0,80) + '...'}</p>
                            </div>
                        )
                })
            }
        </div>
    )
}

export default MasterView;
