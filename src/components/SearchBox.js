/* global chrome */
import React from 'react'
import './SearchBox.css'

// import GoogleLogo from './Images/Google_logo.png'

class SearchBox extends React.Component {
    constructor() {
        super()
        this.state = {
            Google_query: "",
            Amazon_query: "",
            Reddit_query: "",
            Youtube_query: ""
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleClick = this.handleClick.bind(this)
    }

    handleChange(event) {
        const {name, value, type} = event.target
        this.setState({[name]: value})
    }
    handleClick(event){
        const {name} = event.target
        let search_query = this.state[name]
        console.log(search_query)
        switch(name) {
            case "Google_query":
                let newURL = "https://www.google.com/search?q=" + search_query
                chrome.tabs.create({url: newURL})
                break
            case "Amazon_query":
                newURL = "http://www.amazon.com/s/ref=nb_sb_noss_2?url=search-alias%3Daps&field-keywords=" + search_query
                chrome.tabs.create({url: newURL})
                break
            case "Reddit_query":
                newURL = "https://www.reddit.com/search/?q=" + search_query
                chrome.tabs.create({ url: newURL })
                break
            case "Youtube_query":
                newURL = "https://www.youtube.com/results?search_query=" + search_query
                chrome.tabs.create({ url: newURL })
                break
            case "Google_Images_query":
                newURL = "https://www.google.com/search?tbm=isch&q=" + search_query
                chrome.tabs.create({ url: newURL })
                break
        }

    }

    render() {
        return (
            <form>
                <div className="searchBoxContainer">
                    <div className="logo_image">
                        <img src={require(`./Images/${this.props.props.engine}_logo.png`)}
                             alt="{this.props.props.engine} search" style={{height: "30px"}}/>
                    </div>
                    <div className="search_query">Search Query</div>

                    <div className="search_input">
                        <input type="text"
                               className="query"
                               name={`${this.props.props.engine}_query`}
                               id={`${this.props.props.engine}_search_query`}
                               placeholder={this.props.props.engine}
                               value={this.state[`${this.props.props.engine}_query`]}
                               onChange={this.handleChange}
                        />
                    </div>


                    <div className="search_button=">
                        <input type="button"
                               name={`${this.props.props.engine}_query`}
                               value="Search"
                               id={`${this.props.props.engine}_search_button`}
                               onClick={this.handleClick}
                        />
                    </div>
                </div>
            </form>
        )
    }
}


export default SearchBox