import React, { Component } from 'react'
import './App.css';
import Cart from './Cart'
import Navbar from './Navbar'
import Product from './Product'
import firebase from 'firebase'



class App extends Component {

  constructor() {
    super();
  this.state={
        items:[

          
          /*(directly taking product from firebase)
          {
        price:99,
      title:'watch',
        qty:0,
        img:'https://n4.sdlcdn.com/imgs/i/z/i/HMTe-HM-9072-Metal-Analog-SDL494827480-1-db8fc.jpg',
        id:1


        
    },
    {
        price:45999,
        title:'laptop',
        qty:0,
        img:'https://m.media-amazon.com/images/I/51RAtPetDkL._AC_SS350_.jpg',
        id:2
    },
    {
        price:99,
        title:'toy',
        qty:0,
        img:'https://media.istockphoto.com/photos/brown-teddy-bear-isolated-in-front-of-a-white-background-picture-id909772478?k=6&m=909772478&s=612x612&w=0&h=X55jzpsKboa_jUjbEN8eqAn0gjt696ldbeJMEqmNrcU=',
        id:3
    }*/
] ,

loading:true
    }
}

componentDidMount(){
 /* firebase
  .firestore()
  .collection('items')
  .get()
  .then((snapshot)=>{
    console.log(snapshot)
   snapshot.docs.map((doc)=>{
      console.log(doc.data())

    })
    const items = snapshot.docs.map((doc)=>{
      const data =doc.data()
      data ['id'] =doc.id
      
      return data;
    })
    this.setState({
      items,
      loading:false

    })


  })
  [INSTEAD OF get() FUNCTION  WE WILL USE SNAPSHOT FUNCTION]
  */
  firebase
  .firestore()
  .collection('items')
  .onSnapshot((snapshot)=>{
    console.log(snapshot)
   snapshot.docs.map((doc)=>{
      console.log(doc.data())

    })
    const items = snapshot.docs.map((doc)=>{
      const data =doc.data()
      data ['id'] =doc.id
      
      return data;
    })
    this.setState({
      items,
      loading:false

    })


  })
  

}


handleIncreaseQuantity = (item) => {
    console.log('Hey please increase the qty of',item);
    const {items}=this.state;
    const index=items.indexOf(item);
    items[index].qty +=1; 
    this.setState({
        items
    })
    
}



handleDecreaseQuantity = (item) => {
    console.log('Hey please decrease the qty of',item);
  //should not be written here
    //  if (items [index].qty===0){
    //    return;
    //}
    const {items}=this.state;
    const index=items.indexOf(item);
    if (items [index].qty===0){
        return;
    }
    items[index].qty -=1; 
    this.setState({
        items
    })

    
}
handleDeleteItem =(id) =>{
    const {items} =this.state;
    const keys =items.filter((key) => key.id !==id);
    this.setState({
        items:keys
    })
}
getCartCount =() =>{
  const {items} =this.state

  let count=0

  items.forEach((item) =>{
  
    count += item.qty
  })
  return count;
}
getCartTotal =()=>{
  const {items}=this.state;
  let cartTotal = 0
  items.map((item)=>{
    cartTotal = cartTotal + item.price * item.qty
  })
  
  return cartTotal;

}


  render() {
    const {items,loading} =this.state;
    return (
      <div className="App">
      
         <Navbar
           count={this.getCartCount()}
         />
         <Cart
         items={items}
                     
           onIncreaseQuantity = {this.handleIncreaseQuantity}
                onDecreaseQuantity = {this.handleDecreaseQuantity}
               onDeleteItem = {this.handleDeleteItem}
            
         />
         {loading && <h1>Loading Items ...</h1>}
         <div style={{padding:5,fontsize:10 }}>
           TOTAL:{this.getCartTotal()}
         </div>
        
      </div>
    );
  }
}

export default App;