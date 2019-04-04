import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from "redux";
import * as productActions from '../Action/ProductAction';
import HomepageLayout from './homepageLayout';
import Cart from './cart';
import BillDetails from './billdetails';

class Homepage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      categoryDetails: []
    }

  }

  componentWillMount() {
    this.props.itemActions.fetchData();

  }

  itemChange = (item, quantity) => {
    let indexItem = this.props.items.items.findIndex(x => x.ProductId === item.ProductId)
    let new_obj = Object.assign({}, this.props.items.items[indexItem], { "quantity": quantity });
    this.props.itemActions.updateItem(new_obj);
    
  }

  addToCart = (cartData) =>{
    let cartItemIndex = this.props.items.items.findIndex(x => x.ProductId === cartData.ProductId);
    if(this.props.items.items[cartItemIndex].flag === false || this.props.items.items[cartItemIndex].flag === undefined){
      if(cartData.quantity>0){
      let new_obj = Object.assign({}, this.props.items.items[cartItemIndex], { "flag":  true});
      this.props.itemActions.updateItem(new_obj);
      alert("Item Added Successfully");
    }else alert("Please enter Quantity");
    }
    else {
      let new_obj = Object.assign({}, this.props.items.items[cartItemIndex], { "flag":  false, "quantity":''});
      this.props.itemActions.updateItem(new_obj);
      alert("Item Removed");
    }
    // console.log(this.props);
  }

  checkout = () => {
    let checkFlag = false;
    this.props.items.items.map( (x,i) => {
        
        if(this.props.items.items[i].flag){
          let new_obj = Object.assign({}, this.props.items.items[i], { "flag":  false}); 
          checkFlag=true;
          this.props.itemActions.updateItem(new_obj);
        }
    })
    if(checkFlag){
      alert("Items checked out successfully")
    }else alert("Cart Empty");
  }

  render() {
    // console.log(this.props);
    return (
      <div>
        <HomepageLayout ProductInfo={this.props.items} onQuantityChange={(item,quantity) => this.itemChange(item, quantity)} handleClick={(id) => this.addToCart(id)} />
        <Cart cartInfo={this.props.items} onQuantityChange={(item,quantity) => this.itemChange(item, quantity)} handleClick={(id) => this.addToCart(id)}/>
        <BillDetails billAmount={this.props.items} handlecheckout={() => this.checkout()}/>
      </div>
    )
  }
}
const mapStateToProps = (state) => ({
  items: state.items
});

const mapDispatchToProps = dispatch => ({
  itemActions: bindActionCreators(productActions, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(Homepage);