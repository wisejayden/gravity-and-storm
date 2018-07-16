import React from 'react';
import './DetailView.css';

const DetailView = (props) => {
    const currentMasterView = props.currentMasterView;
    return (
        <div id="MasterView">
            {!currentMasterView &&
                <p id="no-selection">Select an article from the left</p>
            }
            {currentMasterView &&
                <div className="master-container">
                    <h1>{currentMasterView.title}</h1>
                    <div id="action-link-container">
                        {currentMasterView.url_action.map((action, i) => {
                            return(
                                <a className="action-link"key={i} href={action.url} target="_blank">{action.title}</a>
                            )
                        })}
                    </div>
                    {currentMasterView.level[1]}
                    <div className="body-container">
                        <p>{currentMasterView.body}</p>
                    </div>

                    <div id="explanation-link-container">
                        <span>Supporting Documentation: </span>
                        {currentMasterView.url_explanation.map((explanation, i) => {
                            return(
                                <a className="explanation-link" key={i} href={explanation.url} target="_blank">{explanation.title}</a>
                            )
                        })}
                    </div>
                </div>
            }
        </div>
    )
}

export default DetailView;
