import React from 'react';

    
    const Navbar = (props)=>{

    
        
        return (
            <div style={styles.nav}>
                <div style={styles.cartIconContainer}>
                    <img style={styles.cartIcon} src="https://cdn4.iconfinder.com/data/icons/shopping-and-e-commerce-flat-square-shadow-vol-1-2/100/cart__shopping__buy__ecommerce__shop__carticon__shoppingcart-512.png" alt=" "/>
                    <spam style={styles.cartCount}>{props.count}</spam>
                </div>
            </div>
        )
    }



const styles ={
    cartIcon:{
        height:40,
        width:40,
        
        padding:'5px',
    },
    nav:{
        height:'100',
    width:'70',
        background:'RoyalBlue',

    


                display:'flex',
        justifyContent:'flex-end',
        alignItems:'center'
    },
    cartIconContainer :{
        position:'relative',


    },
    cartCount:{
        background:'yellow',
        borderRadius:'50%',
        padding:'4px,5px',
    }

}


export default Navbar;