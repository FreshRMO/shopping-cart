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
          <input type="number" className="form-control" id="quantity" value={this.state.quantity} onChange={this.onChange}/>

          <label htmlFor="product">Product</label>
          <select id="product" className="form-control" name="productID" onChange={this.onChange}>
            <option>Choose...</option>
            {this.props.products.map((product, i) => <option key={i} value={product.id}>{product.name}</option>)}
          </select>

          <button type="submit" className="btn btn-primary">Submit</button>
        </div>
      </form>
    )
  }
}

export default AddItem
