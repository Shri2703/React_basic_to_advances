import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'

//props 

const Carditem = ({ head, des }) => {
  return (
    <div className='col md-6'>
      <div className='card ' >
        <div className='card-body'>
          <h5 className='card-title'>{head}</h5>
          <p className='card-text'>{des}</p>
          <a href='#' className='btn btn-primary'>
            Go somewhere
          </a>
        </div>
      </div>

      
    </div>
  )
}

export default Carditem
