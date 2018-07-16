import React from 'react';
import './DetailMaster.css';

const DetailMaster = (props) => {
    return (
        <div id="DetailMaster">
        {props.articles &&
            props.articles.map((article, i) => {
                props.renderIndicatorImage(article);
                    return(
                        <div className="article-container" key={i}>
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

export default DetailMaster;
