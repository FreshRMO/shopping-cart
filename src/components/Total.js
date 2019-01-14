import React from "react"

const formatValue = (cil) => {
  let total = 0
  cil.forEach((name)=>total+=name.product.priceInCents*name.quantity)
  let arr = total.toString().split("")
  return arr.map((e,i)=>{
    if(i === 0){
      return `$${e}`
    }else if(i === arr.length - 2){
      return `.${e}`
    }else{
      return e
    }
  }).join("")
}

const Total = (props) => {
  return (
    <div className="row">
      <div className="col-2"></div>
      <div className="col-8">
        <span>{`Total Price: ${formatValue(props.items)}`}</span>
      </div>
      <div className = "col-2"></div>
    </div>
  )
}

export default Total
