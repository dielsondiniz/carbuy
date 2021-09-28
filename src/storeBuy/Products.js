import React, { useEffect, useState, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import Product from './Product';
import { ContainerProducts } from './Styles';

const Products = (props) => {
    const { t: i18n } = useTranslation();

    const [products, setProducts] = useState(props.products);
    const [filter, setFilter] = useState('');

    useEffect(() => {
        if (props.products !== undefined && props.products.length > 0) {
            setProducts(props.products);
        }
    }, [props.products])

    //Criação de função para filtrar registros na página
    const productFiltered = useMemo(() => {
        let list = products.length > 0 ? products.filter((product) => { return product.name.toLowerCase().includes((filter || '').toString().toLowerCase()) }) : [];
        list.sort((initialElement, nextElement) => initialElement.name.toLowerCase() < nextElement.name.toLowerCase() ? -1 : initialElement.name.toLowerCase() > nextElement.name.toLowerCase() ? 1 : 0);

        return list;
    }, [products, filter]);

    return (
        <>
        <input type="search" placeholder={i18n('label.search')} onChange={(event) => setFilter(event.target.value)} />
        <ContainerProducts>
            {productFiltered?.map((product, index) => (
                <Product key={index} product={product} />
            ))}
        </ContainerProducts>
        </>
    )
}

export default Products
