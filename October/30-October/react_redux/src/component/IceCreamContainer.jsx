import React from 'react'
import { connect } from 'react-redux'
import { buyIceCream } from '../redux1'

function IceCreamContainer(props) {
  return (
    <div>
        <h1>Number Of Ice-Creams {props.numberOfIceCreams}</h1>
        <button onClick={props.buyIceCream}>Buy IceCream</button>
    </div>
  )
}

const mapStateToProps= state=>{
    return{
        numberOfIceCreams: state.iceCream.numberOfIceCreams,
    }
}
const mapDispatchToProps = dispatch =>{
    return {
        buyIceCream:()=>dispatch(buyIceCream())
    }
}

export default connect(mapStateToProps ,mapDispatchToProps)(IceCreamContainer)