import React, { Component } from 'react';
import '../../components/css design/homepageLayout.css';


// export default function ItemLayout(props) {
export default class ItemLayout extends Component {
  
    render() {
    return (
        <div style={{margin:'10'}}>
            {Object.values(this.props.ProductInfo).map((ItemData, index) => {
                return (
                    ItemData.map((value) => {
                        const imgsrc = "../Images/" + value.Images;
                        return (
                            <div className="container-fluid wrapper" key={value.ProductId } style={{height:"90%"}}>
                                <div className="col-sm-3 basecol">
                                    <img className="img-responsive" src={imgsrc} alt="P001" height="90px" width="170px" />
                                </div>
                                <div className="col-sm-4 basecol">
                                    <div className="row pname"><h5><b>{value.ProductName}</b></h5></div> <br /><br />
                                    <div className="row"><h6>Price : </h6> &nbsp; &#x20a8; {value.Price}</div>
                                </div>
                                <div className="col-sm-3 basecol">
                                    QTY &nbsp;&nbsp;
                                        <input type="number" name="quantity" min="0" style={{ flex: '2', width: '35px', height: '25px' }}
                                       value={value.quantity || ''} onChange={(e) => this.props.onQuantityChange(value, e.target.value)} />
                                </div>
                                <div className="col-sm-2 basecol">
                                    <button className=" btn-xs button " onClick={ (e) => this.props.handleClick(value) }>{(!value.flag) ? <h6> Add to Cart</h6> :<h6>&nbsp; Remove &nbsp; &nbsp;</h6>}</button>
                                </div>
                            </div>
                        )
                    })
                )
            })}
            <div className="cartHead"> 
                <h4>Welcome to Cart</h4>
            </div>
            
        </div>
    )
}}

