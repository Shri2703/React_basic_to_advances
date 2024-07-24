import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'



const Carditem = ({ head, des }) => {
  return (
    <div>
      <div class='card' >
        <div class='card-body'>
          <h5 class='card-title'>{head}</h5>
          <p class='card-text'>{des}</p>
          <a href='#' class='btn btn-primary'>
            Go somewhere
          </a>
        </div>
      </div>

      
    </div>
  )
}

export default Carditem
