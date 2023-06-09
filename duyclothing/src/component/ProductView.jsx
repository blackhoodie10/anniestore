import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import { useDispatch } from 'react-redux';

import { addItem } from '../redux/shopping-cart/cartItemSlide';
import { removeItem } from '../redux/shopping-cart/cartItemSlide';

import {withRouter} from 'react-router'

import Button from "./Button" ;


import numberWithCommas from '../utils/numberWithCommas'

const ProductView = props => {

    const dispatch = useDispatch()

    let product = props.product

    if (product === undefined ) product = {
        title: "",
        price: '',
        image01: null,
        image02: null,
        categorySlug: "",
        colors: [],
        slug: "",
        size: [],
        description:""
    }

    const [previewImg, setPreviewImg] = useState(product.image01)

    const [descriptionExpand, setDescrptionExpand] = useState(false)

    const [color, setColor] = useState(undefined)

    const [size, setSize] = useState(undefined)

    const [quantity, setQuantity] = useState(1)

    const check = () => {
        if (color === undefined) {
            alert('Vui lòng chọn màu sắc!')
            return false
        }

        if (size === undefined) {
            alert('Vui lòng chọn size!')
            return false
        }

        return true
    }

    const adToCart = () => {
        if (check()) {
            let newItem = {
                slug: product.slug,
                color: color,
                size: size,
                price: product.price,
                quantity: quantity
            }
            if (dispatch(addItem(newItem))) {
                alert('Thêm vào giỏ hàng thành công')
            } else {
                alert('Fail')
            }
        }
    }

    const gotoCart = () => {
        if (check()) {
            let newItem = {
                slug: product.slug,
                color: color,
                size: size,
                price: product.price,
                quantity: quantity
            }
            if (dispatch(addItem(newItem))) {
                dispatch(removeItem())
                props.history.push('/cart')
            } else {
                alert('Fail')
            }
        }
    }

    const updateQuantity = (type) => {
        if (type === 'plus') {
            setQuantity(quantity + 1)
        } else {
            setQuantity(quantity - 1 < 1 ? 1 : quantity - 1)
        }
    }

    useEffect(() => {
        setPreviewImg(product.image01)
        setQuantity(1)
        setColor(undefined)
        setSize(undefined)
    }, [product])

  return (
    <div className="product">
        <div className="product__image">
            <div className="product__image__list">
                <div className="product__image__list__item" onClick={() => setPreviewImg(
                    product.image01)}>
                    <img src={product.image01} alt="" /> 
                </div> 
                <div className="product__image__list__item" onClick={() => setPreviewImg(
                    product.image02)}>
                    <img src={product.image02} alt="" />
                </div>
            </div>
            <div className="product__image__main">
                <img src={previewImg} alt="" />
            </div>
            <div className={`product__description ${descriptionExpand ? 'expand' : ''}`}>
                <div className="product__description__title ">
                    Chi tiết sản phẩm
                </div>
                <div className="product__description__content" dangerouslySetInnerHTML={{__html:
                    product.description}}>

                </div>
                <div className="product__description__toggle">
                    <Button size="sm" onClick={() => setDescrptionExpand(!descriptionExpand)}>
                        {
                            descriptionExpand ? 'Thu gọn' : 'Xem thêm'
                        }
                    </Button>
                </div>
            </div>
        </div>
        <div className="product__info">
            <h1 className="product__info__title">
                {product.title}
            </h1>
            <div className="product__info__item">
                <span className="product__info__item__price">
                    {numberWithCommas(product.price)}
                </span>
            </div>
            <div className="product__info__item">
                <div className="product__info__item__title">
                    Màu sắc
                </div>
                <div className="product__info__item__list">
                    {
                        product.colors.map((item, i) => (
                            <div key={i} className={`product__info__item__list__item ${color ===
                                item ? 'acitve' : '' }`} onClick={() => setColor(item)}>
                                <div className={`circle bg-${item}`}></div>  
                            </div>
                        ))
                    }
                </div>
            </div>
            <div className="product__info__item">
                <div className="product__info__item__title">
                    Kích cỡ
                </div>
                <div className="product__info__item__list">
                    {
                        product.size.map((item, i) => (
                            <div key={i} className={`product__info__item__list__item ${size ===
                                item ? 'acitve' : '' }`} onClick={() => setSize(item)}>
                                <span className="product__info__item__list__item__size">
                                        {item}
                                </span>
                            </div>
                        ))
                    }
                </div>
            </div>
            <div className="product__info__item">
                <div className="product__info__item__title">
                    Số lượng
                </div>
                <div className="product__info__item__quantity">
                    <div className="product__info__item__quantity__btn" onClick={() => 
                        updateQuantity('minus')}>
                        <i className="bx bx-minus"></i>
                    </div>
                    <div className="product__info__item__quantity__input">
                        {quantity}
                    </div>
                    <div className="product__info__item__quantity__btn" onClick={() => 
                        updateQuantity('plus')}>
                        <i className="bx bx-plus"></i>
                    </div>
                </div>
            </div>
            <div className="product__info__item">
                <Button onClick={() => adToCart()}>Thêm vào giỏ hàng</Button>
                <Button onClick={() => gotoCart()}>Mua ngay</Button>
            </div>
        </div>
        <div className={`product__description mobile ${descriptionExpand ? 'expand' : ''}`}>
                <div className="product__description__title ">
                    Chi tiết sản phẩm
                </div>
                <div className="product__description__content" dangerouslySetInnerHTML={{__html:
                    product.description}}>

                </div>
                <div className="product__description__toggle">
                    <Button size="sm" onClick={() => setDescrptionExpand(!descriptionExpand)}>
                        {
                            descriptionExpand ? 'Thu gọn' : 'Xem thêm'
                        }
                    </Button>
                </div>
            </div>
    </div>
  )
}

ProductView.propTypes = {
    product: PropTypes.object.isRequired
}

export default withRouter(ProductView)
