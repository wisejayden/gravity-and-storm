import React from 'react';
import './MasterView.css';

const MasterView = (props) => {
    const currentMasterView = props.currentMasterView;
    console.log("currentMasterView", currentMasterView);
    return (
        <div id="MasterView">
            {currentMasterView &&
                <div className="master-container">
                    <h1>{currentMasterView.title}</h1>
                    {currentMasterView.level}
                    <p>{currentMasterView.body}</p>
                    {currentMasterView.url_action.map((action, i) => {
                        return(
                            <a key={i} href={action.url}>{action.title}</a>
                        )
                    })}
                    {currentMasterView.url_explanation.map((explanation, i) => {
                        return(
                            <a key={i} href={explanation.url}>{explanation.title}</a>
                        )
                    })}


                </div>

            }
        </div>
    )
}

export default MasterView;
