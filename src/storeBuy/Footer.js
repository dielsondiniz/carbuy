

import React from 'react';
import { useTranslation } from 'react-i18next';
import { ContainerFooter } from './Styles';


const Footer = () => {
    const { t: i18n } = useTranslation();

    return (
        <ContainerFooter>
            {i18n('label.footer')}
        </ContainerFooter>
    )
}
export default Footer
