import React from 'react';
import { ContainerCartItem } from './Styles';
import { useTranslation } from 'react-i18next';

const Amount = (props) => {
    const { t: i18n } = useTranslation();

    //Exibir uma soma simples de todos os produtos por quantidades
    function amountValue() {
        let amount = 0;
        props.cart?.forEach(c => {
            amount += c.qtd * c.price;
        });
        return amount.toString();
    }

    return (
        <ContainerCartItem>
            <div style={{ display: 'flex' }} >
                {i18n('label.total')}: <b> R$ {amountValue()},00</b>
            </div>
            <div>
                <button onClick={() => alert(i18n('messages.finishBuy'))}>{i18n('label.finish')}</button>
            </div>
        </ContainerCartItem>
    )
}

export default Amount
