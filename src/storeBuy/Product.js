import React from 'react';

import { ContainerProduct } from './Styles';
import { useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';

const Product = (props) => {
    const dispatch = useDispatch();
    const { t: i18n } = useTranslation();

    function handleAddCart(product) {
        //dispatch para atulização do redux
        dispatch({ type: 'ADD_PRODUTC_CART', value: product });
        //Disparo de mensagem informando que a ação foi realizada
        alert(i18n('messages.productAdd'))
    }

    return (
        <ContainerProduct>
            <div ><img src={props.product.image} alt={props.product.name} /></div>
            <div className='name'>{props.product.name}</div>
            <div className='stock'><i>{i18n('label.stock')}: {props.product.stock}</i></div>
            <div className='created'><i>{i18n('label.created')}: {props.product.createdAt ? new Date(props.product.createdAt).toLocaleString() : ''}</i></div>
            <div><b>R$ {props.product.price?.replace('.', ',')}</b></div>
            <div><button onClick={() => handleAddCart(props.product)}>{i18n('label.buy')}</button></div>
        </ContainerProduct>
    )
}

export default Product
