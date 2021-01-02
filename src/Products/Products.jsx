import React from 'react'
import {Grid} from '@material-ui/core'
import Product from './Product/Product'

const products =[
    {id:1, name:"Shoes", description:"This is a shoe", price:"Ksh50",image:"https://images.unsplash.com/photo-1494698853255-d0fa521abc6c?ixid=MXwxMjA3fDB8MHxzZWFyY2h8N3x8bWFjYm9va3xlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"},
    {id:2, name:"Macbook", description:"Apple Macbook", price:"Ksh500",image:"https://images.unsplash.com/photo-1460353581641-37baddab0fa2?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8c2hvZXN8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"}
]

const Products = () => {
    return(
        <main>
        <Grid  container justify="center" spacing={4}>
            {
            products.map((product)=>(
                    /*{When ever i am looping through JSX I must always include a key}*/
                    <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
            
                      <Product product={product}/>
            
                    </Grid>
                    
                ))
            }
        </Grid>
    
       </main>
    )
  
}


export default Products
