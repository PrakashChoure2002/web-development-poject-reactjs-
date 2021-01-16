import React from 'react';
import Product from './Product';
class Cart extends React.Component{
    constructor() {
        super();
      this.state={
            items:[
                {
            price:99,
          title:'watch',
            qty:0,
            img:'',
            id:1


            
        },
        {
            price:45999,
            title:'laptop',
            qty:0,
            img:'',
            id:2
        },
        {
            price:99,
            title:'toy',
            qty:0,
            img:'',
            id:3
        }
    ]
        }
    }
    handleIncraseQuantity = (item) => {
        console.log('Heyy please increase the qty of',item);
        const {items}=this.state;
        const index=items.indexOf(item);
        items[index].qty +=1; 
        this.setState({
            items
        })
        
    }

    handleDecreaseQuantity = (item) => {
        console.log('Heyy please decrease the qty of',item);
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

    
    render(){
        const{items}=this.state
        
        return(
            <div class="CART">
                
            {items.map((item) =>{
                return(<Product
                     item={item}
                     key={item.id}
                onIncreaseQuantity = {this.handleIncraseQuantity}
                onDecreaseQuantity = {this.handleDecreaseQuantity}
               onDeleteItem = {this.handleDeleteItem}
            />
                )

            })}
           
      
                
            </div>
            
            
        )
    }
}
export default Cart;