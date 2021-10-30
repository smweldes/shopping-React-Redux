import React from 'react'
import { useSelector } from 'react-redux'

const ProductComponent = () => {
    const products = useSelector((state) => state.allProducts.products);
    // const { id, title} = products[0];
    const renderList = products.map((product) => {
        const {id, title, image, price, category} = product;
         return (<div className="four column wide">
         <div className="ui link cards">
             <div className="cards">
                 <div className="image">
                     <img src={image} alt={title}/>
                 </div>
                     <div className="content">
                         <div className="header">{title}</div>
                         <div className="meta price">${price}</div>
                         <div className="meta">{category}</div>
                     </div>
             </div>
         </div> 
      </div>);
    })
    return <>{renderList}</>
}

export default ProductComponent
