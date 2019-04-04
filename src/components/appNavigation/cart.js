import React, { Component } from 'react';
import '../../components/css design/homepageLayout.css';

class Cart extends Component {


  render() {
    
    return (
      <div>
        {
          this.props.cartInfo.items.map((x) => {
            const imgsrc = "../Images/" + x.Images;
            return (
              <div key={x.ProductName}>
                {x.flag ?
                  <div className="container-fluid wrapper"  >
                    <div className="col-sm-3 basecol">
                      <img className="img-responsive" src={imgsrc} alt=" Not Found" width="70%" />
                    </div>
                    <div className="col-sm-4 basecol">
                      <div className="row pname"><h6>{x.ProductName}</h6></div> <br /><br />
                      <div className="row"><h6>Price : </h6> &nbsp; &#x20a8; {x.Price * x.quantity}</div>
                    </div>
                    <div className="col-sm-3 basecol">
                      QTY &nbsp;&nbsp;
                        <input type="number" name="quantity" min="0" style={{ flex: '2', width: '35px', height: '25px' }}
                        value={x.quantity} onChange={(e) => this.props.onQuantityChange(x, e.target.value)} />
                    </div>
                    <div className="col-sm-2 basecol">
                      <button className=" btn-xs button " onClick={ (e) => this.props.handleClick(x) }> Remove</button>
                    </div>
                  </div> : <div />
                }

              </div>
            )
          })

        }
      </div>
    )
  }
  
}
export default Cart;