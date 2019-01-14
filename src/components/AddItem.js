import React, { Component } from 'react'


class AddItem extends Component {
  constructor(props) {
    super(props)
    this.state = {quantity: 1,productID: this.props.products[0].id}
  }

  onSubmit = (e) => {
    e.preventDefault()
    const {quantity, productID} = this.state
    const product = this.props.products.find(product => product.id === productID)
    this.props.addItemtoState({quantity, product})
  }

  onChange = (key) => {
    this.setState({
      ...this.state,
      [key.target.name]: + key.target.value,
    })
  }

  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <div className="form-group">
          <label htmlFor="quantity">Quantity</label>
          <input type="number" className="form-control" id="quantity" value={this.state.quantity} onChange={(e)=> this.setState({quantity: e.target.value})}/>

          <label htmlFor="product">Product</label>
          <select id="product" className="form-control" value={this.state.productId} onChange={(e) => this.setState({productId: e.target.value})}>
            <option>Choose...</option>
            {this.props.products.map(product => <option key={product.id}>{product.name}</option>)}
          </select>

          <button type="submit" className="btn btn-primary">Submit</button>
        </div>
      </form>
    )
  }
}

export default AddItem
