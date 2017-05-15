import React from 'react';
import SearchBar from '../components/SearchBar'
import GifTile from '../components/GifTile'

class IndexContainer extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      query: '',
      gif_objects: []

    }
    this.handleFormChange = this.handleFormChange.bind(this)
    this.handleFormSubmit = this.handleFormSubmit.bind(this)
  }

  handleFormChange(event){
    this.setState({ query: event.target.value })
  }

  handleFormSubmit(event){
    event.preventDefault();
    fetch(`https://api.giphy.com/v1/gifs/search?q=${this.state.query}&limit=24&api_key=dc6zaTOxFJmzC`)
    .then(response => {
      if (response.ok){
        return response;
      } else {
        let errorMessage = `${response.status} (${response.statusText})`
        error  = new Error(errorMessage);
        throw(error);
      }
    })
    .then(response => response.json())
    .then(responseData => {
      this.setState({ gif_objects : responseData.data})
    })
    this.setState({ query: '' })
  }

  render(){
    let gif_render = this.state.gif_objects.map((gif, i) => {
      debugger;
      return(
        <GifTile
        key = {i}
        gif_id={ i + 1 }
        gif_src = { gif.images.original.url }
        />
      )
    })
    return(
      <div>
        <div>
          <SearchBar
            handleFormChange={this.handleFormChange}
            handleFormSubmit={this.handleFormSubmit}
            value={this.state.query}
          />
        </div>
        <div>
          <ul>
            {gif_render}
          </ul>
        </div>
      </div>
    )
  }
}

export default IndexContainer;
