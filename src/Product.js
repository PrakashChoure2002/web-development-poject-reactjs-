import React, { Component } from 'react'
class Product extends Component{
    constructor() {
        super();
        this.state={
            price:1990,
            title:' chutiya phone',
            qty:1,
            img:''


        }
      //  this.increaseQuantity=this.increaseQuantity.bind(this);
    }
    increaseQuantity =() => {

      //  console.log('test')
   // console.log('this',this.state)
    //setState form 1
    this.setState({
        qty:this.state.qty+1,
        
    })
    }
    render(){
      const {price,title,qty} =this.state;  
        return (
            <div>
                <h1>CART</h1>
        
            
            <div className="cart-item">
                <div className ="left-block">
                    <img style={styles.image} />
                </div>
                <div className="right-block">
                    <div style={{fontsize:50,color:'#777'}}>mobile:{title}</div>
                    <div style={{fontsize:25,color:'#777'}}>Rs:{price}</div>
                    <div style={{fontsize:20,color:'#777'}}>qty:{qty}</div>
                    
                    <hr/>
                    <div className="cart-item-action">
                        {/*buttons "FLATE ICONE.COM*/}
                        <img  style={{width:20,height:20}}  alt="increase" src= "https://www.flaticon.com/premium-icon/icons/svg/2719/2719161.svg"  value=" " onClick={this.increaseQuantity} />
                        <img style={{width:20,height:20}} alt="decrease" src= "https://www.flaticon.com/svg/static/icons/svg/66/66889.svg"  value="" />
                        <img style={{width:20,height:20}} alt="delete" src= "https://www.flaticon.com/svg/static/icons/svg/3096/3096673.svg"  value="" />
                  <hr/>
                    </div>

                </div>

            </div>
            </div>
            

        );
    }

}

const styles={
    image:{
        width:20,
        height:50,
       // backgroundcolor:'#777'

    }
}
export default Product;