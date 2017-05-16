import React from 'react';

const GifTile = (props) => {

  return(
      <div className="small-12 medium-6 large-4 columns">
    <li className="gif_tile">
      <a href={ "/gifs/" + props.gif_id}>
        <img src={props.gif_src} width='350' height='350'/>
      </a>
    </li>
    </div>
  )
}
export default GifTile;
