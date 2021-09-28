import React, { useEffect, useState } from 'react';
import Amount from './Amount';
import CartItem from './CartItem';

import { ContainerCart } from './Styles';
import { useTranslation } from 'react-i18next';

const Cart = (props) => {
    //Exibir carrinho de compras ou mensagem quando não houver itens no carrinho de compras
    const [cart, setCart] = useState(props.cart);
    const { t: i18n } = useTranslation();
    useEffect(() => {
        if (props.cart !== undefined) {
            setCart(props.cart);
        }
    }, [props.cart])

    return (
        <ContainerCart>
            {cart && cart.length > 0
                ?
                <>
                    {cart.map((cart, index) => (
                        <CartItem key={index} cart={cart} />
                    ))}
                    <Amount cart={cart} />
                </>
                :
                <div>{i18n('messages.noProductCart')}</div>
            }
        </ContainerCart>
    )
}

export default Cart
