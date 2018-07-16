import React from 'react';
import './DetailView.css';

const DetailView = (props) => {
    console.log("props_______", props)
    return (
        <div id="DetailMaster">
        {props.articles &&
            props.articles.map((article, i) => {
                props.renderIndicatorImage(article);
                    return(
                        <div  onClick={props.detailViewClickToMaster(i)} className="article-container" key={i}>
                            <h1>{article.title}</h1>
                            <span>Importance Level - {article.level}</span>
                            <p>{article.body.substring(0,80) + '...'}</p>
                        </div>
                    )
            })
        }
        </div>
    )
}

export default DetailView;
