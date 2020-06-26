/* global chrome */
import React from 'react'
import './SearchBox.css'

function ChangeButton() {
    function change_shortcuts() {
        chrome.tabs.create({
            url:'chrome://extensions/configureCommands'
        })
    }
    return(
        <input type="submit" onClick={change_shortcuts} value="Edit Shortcuts" id="submit_button" />
    )
}

export default ChangeButton