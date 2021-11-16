import React from 'react';

function Card(props){
    console.log(props);
    return (
      <>  
        <span className="card_category">{props.title}</span>
        <div class="cards-list">
            <div class="card 1">
                <div class="card_image"> <img src={props.imgsrc} /> </div>
                <div class="card_title title-white">
                <h3 className="card_title">{props.name}</h3>
                <a href={props.link} target="_blank">
                <button>Watch Now</button>
                </a>
                </div>
            </div>
        </div>
      </>
    );
  }

export default Card;