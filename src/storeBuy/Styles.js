import styled from "styled-components";

export const ContainerHeader = styled.div`
    display: flex;
    justify-content: space-between;

    background: #000758d1;
    margin: -10px;
    color: #ffffff;
    box-shadow: 1px 2px 3px 1px #0000005e;
`;

export const ContainerTitle = styled.div`
    justify-content: center;
    h1 {
        cursor: pointer;
    }
    img {
        margin: 2px;
        cursor: pointer;
    }
`;

export const ContainerIcon = styled.div`
    justify-content: center;
    font-size: 30px;
    margin-right: 30px;
    margin-top: 25px;
    cursor: pointer;
    span{
        color: red;
        font-size: 0.7em;
    }
`;

export const ContainerCatalog = styled.div`
    text-align: center;
`;

export const ContainerFooter = styled.div`
    text-align: center;
    background: #eee;
    padding: 10px;
    margin: -10px;
`;
export const ContainerProducts = styled.section`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    margin: 15px
`;
export const ContainerProduct = styled.div`
    box-shadow: 1px 2px 3px 1px #0000005e;
    margin: 5px;
    padding: 5px;
    img {
        max-width: 200px;
        height: auto;
    }
    .name{
        font-size: 1.2em;
    }
    .stock, .created {
        font-size: 0.8em;
    }
    button {
        background-color: #4CAF50;
        border: none;
        color: white;
        padding: 10px 20px;
        font-size: 16px;
        border-radius: 10px;
        margin-top: 10px;
        margin-bottom: 10px;
        cursor: pointer;
    }
`;
export const ContainerCartItem = styled.div`
    box-shadow: 1px 2px 3px 1px #0000005e;
    margin: 5px;
    padding: 5px;
    display: flex;
    justify-content: space-between;
    text-align: left;
    img {
        max-width: 115px;
        height: auto;
    }
    .name{
        font-size: 1.2em;
    }
    .stock, .created {
        font-size: 0.8em;
    }
    button {
        background-color: #4CAF50;
        border: none;
        color: white;
        padding: 5px 15px;
        font-size: 25px;
        border-radius: 10px;
        margin-top: 10px;
        margin-bottom: 10px;
        cursor: pointer;
    }
    span {
        padding: 10px;
        margin-left: -4px;
    }
    .delete{
        background: transparent;
        color: red;
    }
`;

export const ContainerCart = styled.section`
    margin: 15px
`;