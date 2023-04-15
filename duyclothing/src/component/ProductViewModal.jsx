import React, { useEffect, useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { remove } from '../redux/product-modal/productModalSlice'

import ProductView from './ProductView';
import productData from '../assets/fake-data/products';
import Button from './Button';


const ProductViewModal = () => {

  const productSlug = useSelector((state) => state.productModal.value)

  const dispath = useDispatch()

  const [product, setProduct] = useState(undefined)


  // const product = productData.getProductSlug("quan-jean-phong-cach-18");

  useEffect(() => {
    setProduct(productData.getProductSlug(productSlug))
  }, [productSlug]);


  return (
    <div className={`product__view__modal ${product === undefined ? '' : 'active'}`}>
      <div className="product__view__modal__content">
          <ProductView product={product} />
          <div className="product__view__modal__content__close">
            <Button
              size="sm"     
              onClick={() => dispath(remove())}
            >
              Đóng
            </Button>
          </div>          
      </div>
    </div>
  )
}

export default ProductViewModal
