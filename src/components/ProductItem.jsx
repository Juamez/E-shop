import React from 'react'
import '@styles/ProductItem.scss'
import addToCartImage from '@icons/bt_add_to_cart.svg'

export default const ProductItem = () => {
  return (
    <div className="ProductItem">
			<img src={product.images[0]} alt={product.title} />
			<div className="product-info">
				<div>
					<p>${product.price}</p>
					<p>{product.title}</p>
				</div>
				<figure >
					<img src={addToCartImage} alt="" />
				</figure>
			</div>
		</div>
  )
}
