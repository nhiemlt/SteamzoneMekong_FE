import {useState, useRef} from 'react'
import {Link} from 'react-router-dom'

function StatisticalProduct(){


    return(
        <div className="hero bg-base-200 min-h-screen">
  <div className="hero-content flex-col lg:flex-row">
    <img
      src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp"
      className="max-w-sm rounded-lg shadow-2xl" />
    <div>
      <h1 className="text-5xl font-bold">statistical-product</h1>
      <p className="py-6">
        Hello world!!!
      </p>
      <button className="btn btn-primary">Get Started</button>
    </div>
  </div>
</div>
    )
}

export default StatisticalProduct