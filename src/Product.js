import React, { Component } from 'react'
const Product =(props) =>{


  //  constructor() {
    //    super();
      //  this.state={
        //    price:1990,
         //   title:' chutiya phone',
        //    qty:1,
         //   img:''


            //this.testing()
        //}
        //this.testing ();
    

      //  this.increaseQuantity=this.increaseQuantity.bind(this);
    //}
    //testing(){
      //  const promise = new Promise((resolve,reject) =>{
        //    setTimeout(() =>{
          //      resolve('done');
           // },1000);
       // })
       // promise.then(()=>{
         //   this.setState({qty:0});
           // console.log('state',this.state);

     //   });
  //  }
    
  //  increaseQuantity =() => {

      //  console.log('test')
   // console.log('this',this.state)
    //setState form 1
    //this.setState({
      //  qty:this.state.qty+1,
    
        
    //})
//}
 //   decreaseQuantity=() => {
       // const {qty} =this.state
     //   if(qty==0){
        //    return;
      //  }
      //  this.setState({
      //      qty:this.state.qty-1,
            
    //    })
  //  }
  //  deleteQuantity=()=>{
       
    //    this.setState({
        //  qty:this.state.qty==0,
      //  })
    //}
    
      //  console.log('this.props',this.props);
      const {price,title,qty} = props.item;  
      const {item,
        onIncreaseQuantity,
        onDecreaseQuantity,
        onDeleteItem}=props;
        return (
            <div>
                <h1>CART</h1>
        
            
            <div className="cart-item">
                <div className ="left-block">
                    <img style={styles.image} src={item.img} />
                </div>
                <div className="right-block">
                    <div style={{fontsize:50,color:'#777'}}>Rs:{price}</div>
                    <div style={{fontsize:25,color:'#777'}}>Product:{title}</div>
                    <div style={{fontsize:20,color:'#777'}}>qty:{qty}</div>
                    
                    <hr/>
                    <div className="cart-item-action">
                        {/*buttons "FLATE ICONE.COM*/}
                        <img  style={{width:20,height:20}}  alt="increase" src= "https://www.flaticon.com/premium-icon/icons/svg/2719/2719161.svg"  value=" " onClick={( )=>onIncreaseQuantity(item)} />
                        <img style={{width:20,height:20}} alt="decrease" src= "https://www.flaticon.com/svg/static/icons/svg/66/66889.svg"  value=" "  onClick={( )=> onDecreaseQuantity(item)}/>
                        <img style={{width:20,height:20}} alt="delete" src= "https://www.flaticon.com/svg/static/icons/svg/3096/3096673.svg"  value=" "  
                        onClick={( )=> onDeleteItem(item.id)}/>
                  <hr/>
                    </div>

                </div>

            </div>
            </div>
            

        );
    }


const styles={
    image:{
        width:50,
        height:50,
        backgroundcolor:"red",
        padding:5,

    }
}
export default Product;