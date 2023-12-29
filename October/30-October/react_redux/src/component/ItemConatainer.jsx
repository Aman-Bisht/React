import React from 'react'
import { connect } from 'react-redux'
import { buyCake, buyIceCream } from '../redux1'


function ItemConatainer(props) {
  return (
    <div>
        <h1>Item {props.item}</h1>
        <button onClick={props.buyItem}>Buy Item</button>
    </div>
  )
}

const mapStateToProps = (state,ownProps)=>{
    const itemState = ownProps.cake?state.cake.numberOfCakes : state.iceCream.numberOfIceCreams
    return {
        item:itemState
    }
}
const mapDispatchToProps = (dispatch,ownProps)=>{
    const dispatchFunction = ownProps.cake
    ?()=>dispatch(buyCake())
    :()=>dispatch(buyIceCream());
    return {
        buyItem:dispatchFunction
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(ItemConatainer)