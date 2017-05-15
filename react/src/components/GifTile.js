import React from 'react';

const GifTile = (props) => {

  return(
    <li className="gif_tile">
      <a href={ "/gifs/" + props.gif_id}>
        <img src={props.gif_src} width='100' height='100'/>
      </a>
    </li>
  )
}
export default GifTile;
