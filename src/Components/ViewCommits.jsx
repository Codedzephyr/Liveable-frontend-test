import React from 'react'
import "./commits.css"
import SearchAndButton from './SearchAndButton'

const ViewCommits = () => {
  return (
    <React.Fragment>
            <div className="navigationContainer1">
                <div className="flexContainer">
                    <div className="leftNavContainer">
                           <h1 className='leftTitle1'>CommitViewer</h1>
                    </div>
                    <div className="rightNavContainer">
                        <SearchAndButton/>
                    </div>
                </div>
            </div>

            <div className="microsoftTextContainer">
                <p className="microsoftText">
                    microsoft/vscode
                </p>
            </div>
    </React.Fragment>
  )
}

export default ViewCommits