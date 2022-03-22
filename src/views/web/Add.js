import React from 'react'
import '../../style.css'
import CartNotify from './CartNotify'
function Add(props) {
  return (
      
    <div>
    <div className="text-wrapper item">
            <span>
                        Apple
                    </span>
                    <span>
                        Price: Rs.50
                    </span>
                </div>
                <div className="btn-wrapper item">
    <button 
    onClick={
        ()=>{props.addToCartHandler({pice:50,name:'apple'})}
        }>
        Add To Cart</button>
</div>
</div>
      
  )
}

export default Add