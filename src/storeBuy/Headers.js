import React from 'react';
import { useSelector } from 'react-redux';
import { ContainerHeader, ContainerTitle, ContainerIcon } from './Styles';

import { FiShoppingCart } from 'react-icons/fi';
import { useTranslation } from 'react-i18next';

const Headers = (props) => {
    const cart = useSelector(state => state.cartReducers.cart);
    const { i18n } = useTranslation();

    //Permite a alteração de idioma para garantir a internacionalização
    function changeLanguage(lng) {
        i18n.changeLanguage(lng);
    }
    return (
        <ContainerHeader>

            <ContainerTitle>
                <img onClick={() => changeLanguage('en')} src='en-us.png' alt='en' />
                <img onClick={() => changeLanguage("es")} src='es.png' alt='es' />
                <img onClick={() => changeLanguage("pt")} src='pt-br.png' alt='pt' />
            </ContainerTitle>
            {/*Através de função chamada no props permite que seja alterada exibição entre carrinho de compras e listagem de produtos*/}
            <ContainerTitle>
                <h1 onClick={() => props.updatePage(1)}>CarBuy</h1>
            </ContainerTitle>
            <ContainerIcon><FiShoppingCart onClick={() => props.updatePage(2)} /><span>{cart.length}</span></ContainerIcon>
        </ContainerHeader>
    )
}

export default Headers
