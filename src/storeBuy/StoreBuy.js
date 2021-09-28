import React, { useEffect, useState } from 'react';

import Headers from './Headers';
import Catalog from './Catalog';
import Footer from './Footer';

import { loadProducts } from '../service/Service'
import { useDispatch } from 'react-redux';

const StoreBuy = () => {
    const dispatch = useDispatch();

    //Permite mudança de exibição entre produtos e carrinho de compras
    const [page, setPage] = useState(1);

    //faz o carregamento da lista de produtos no servidor e carrega o estado no redux
    useEffect(() => {
        loadProducts().then(data => {
            dispatch({ type: 'LOAD_PRODUTCS', value: data });
        });

    }, [dispatch])
    return (
        <>
            <Headers updatePage={(page)=>setPage(page)} />
            <Catalog page={page} />
            <Footer/>
        </>
    )
}

export default StoreBuy;