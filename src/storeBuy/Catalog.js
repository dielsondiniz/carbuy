import React from 'react';
import { useSelector } from 'react-redux';

import { ContainerCatalog } from './Styles';
import Products from './Products';
import Cart from './Cart';

const Catalog = (props) => {
    //Pega informações no redux e exibe
    const products = useSelector(state => state.cartReducers.products);
    const cart = useSelector(state => state.cartReducers.cart);

    return (
        props.page === 1 ?
            <ContainerCatalog>
                <Products products={products} />
            </ContainerCatalog>
            :
            <ContainerCatalog>
                <Cart cart={cart} />
            </ContainerCatalog>

    )
}

export default Catalog
