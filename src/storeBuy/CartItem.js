import React from 'react';

import { ContainerCartItem } from './Styles';
import { useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { RiDeleteBin2Line } from 'react-icons/ri';

const CartItem = (props) => {
    const dispatch = useDispatch();
    const { t: i18n } = useTranslation();

    //Chamadas de função no dispach para gerenciar a quantidade de itens dos produtos ou remove-los
    function handleAddCart(product) {
        dispatch({ type: 'ADD_PRODUTC_CART', value: product });
    }

    function handleDecCart(product) {
        dispatch({ type: 'DEC_PRODUTC_CART', value: product });
    }

    function handleRemoveCart(product) {
        dispatch({ type: 'REMOVE_PRODUTC_CART', value: product });
    }

    return (
        <ContainerCartItem>
            <div style={{ display: 'flex' }} >
                <div>
                    <img src={props.cart.image} alt={props.cart.name} />
                </div>
                <div>{props.cart.name}
                    <br /><i>{i18n('label.stock')}: {props.cart.stock}</i>
                    <br /><i>{i18n('label.created')}: {props.cart.createdAt ? new Date(props.cart.createdAt).toLocaleString() : ''}</i>
                    <br />{i18n('label.unitPrice')}: <b>R$ {props.cart.price?.replace('.', ',')}</b>
                    <br />{i18n('label.subTotal')}: <b>R$ {props.cart.price * props.cart.qtd},00</b>
                </div>
            </div>
            <div>
                <button onClick={() => handleDecCart(props.cart)}> - </button>
                <span>{props.cart.qtd}</span>
                <button onClick={() => handleAddCart(props.cart)}>+</button>
                <button onClick={() => handleRemoveCart(props.cart)} className='delete'><RiDeleteBin2Line /></button>
            </div>

        </ContainerCartItem>
    )
}

export default CartItem
