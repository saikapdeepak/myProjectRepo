import React, { Component } from 'react';
const API ='http://localhost:8500/Discount';

export default class billdetails extends Component {
    constructor(props){
        super(props);
        this.state={
            pcode:"",
            validCode:{},
            discount:0
        }
        // this.onChange=this.onChange.bind(this)
    }

    componentDidMount() {
        fetch(API)
        .then(response => response.json()).then(data => {
        this.setState({validCode:data})
  }
  ); 
    }

    CodeChange = (code) => {
        this.setState({pcode:code});
    }

    handleClick = () => {
        this.state.validCode.map((x) => {
            return (
                (x.DiscountCode === this.state.pcode) ? this.setState({discount:x.PercentageDiscount}): 0
            )
        })
    }
  render() {
    
    var subTotal=0;
    this.props.billAmount.items.map((x) =>{return x.flag ? subTotal= subTotal+(x.quantity * x.Price)  : subTotal})
    var disCount = (parseInt(this.state.discount)> 0) ? (parseInt(this.state.discount)/100) * subTotal : 0
    return (

       

        <div className='ItemContainer'>
        <div className="row" style={{ padding: '25px 0px ' }}>
            <div className="col-sm-3">
                <h6>Need help or have questions?</h6><br /><br />
                <h6>Call Customer Service at 1-800-555-5555</h6><br /><br />
                <h6>Chat with one of our stylist </h6><br /><br />
            </div>
            <div className="col-sm-9">
                <div className="row">
                    <div className="col-sm-12" style={{ borderBottom: 'groove', borderBottomWidth: '5px', paddingBottom: '13px', width: '100%' }}>

                        {/* <form onSubmit style={{ display: 'flex' }}> */}

                            <div className="col-sm-4"style={{ float: 'left'}}>
                                <label>
                                    <h6>ENTER PROMOTION CODE</h6>

                                </label>
                            </div>

                            <div className="col-sm-5" style={{ float: 'left' }}>
                                <input
                                    type="text"
                                    name="pcode"
                                    style={{ flex: '30', padding: '3px' }}
                                    placeholder="PROMO CODE"
                                    // value={this.state.pcode}
                                    onChange={(e) => this.CodeChange(e.target.value)}
                                    
                                />
                            </div>
                            <div className="col-sm-3" style={{ float: 'left' }}>
                                 <button className=" btn-xs button " onClick={ (e) => this.handleClick() }> APPLY</button>
                            </div>
                        {/* </form> */}
                    </div>
                </div><br />

                <div className="row">
                    <div className="col-sm-6">
                        <h5>SUBTOTAL</h5>
                    </div>
                    <div className="col-sm-1">
                        <h5>&#x20a8;</h5>
                    </div>
                    <div className="col-sm-2">
                        {subTotal}
                    </div><br />
                </div>

                <div className="row" style={{ borderBottom: 'groove', innerHeight: '50px', paddingBottom: '10px' }}>
                    <div className="col-sm-6">
                        <h6>PROMOTION CODE APPLIED</h6>
                    </div>
                    <div className="col-sm-1">
                        <h6>&#x20a8;</h6>
                    </div>
                    <div className="col-sm-2">
                         {- disCount}
                    </div>
                </div>
                <div className="row" style={{ borderBottom: 'groove', innerHeight: '50px', padding: '10px 0px' }}>
                    <div className="col-sm-6">
                        <h6>ESTIMATED TOTAL</h6>
                    </div><br />
                    <div className="col-sm-1">
                        <h6>&#x20a8;</h6>
                    </div><br />
                    <div className="col-sm-2">
                        {subTotal-disCount}
                    </div>
                </div>
                <div style={{paddingTop:'15px', float:'right'}}>
                    <button className=" btn-xs button" onClick={ () => this.props.handlecheckout() } > Check Out</button>
                </div>
            </div>
        </div>
    </div>
    )
  }
}
