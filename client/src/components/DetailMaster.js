import React from 'react';

const DetailMaster = (props) => {
    return (
        <div>
        <h1>Hello World</h1>
        {props.articles &&
            props.articles.map((article, i) => {
                    return(
                        <div key={i}>
                            <h1>{article.title}</h1>
                            <span>Importance Level - {article.level}</span>
                            <p>{article.body}</p>
                        </div>
                    )
            })
        }
        </div>
    )
}

export default DetailMaster;
