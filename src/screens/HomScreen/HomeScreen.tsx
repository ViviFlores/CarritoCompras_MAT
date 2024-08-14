import React, { useState } from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import { TitleComponent } from '../../components/TitleComponent';
import { BodyComponent } from '../../components/BodyComponent';
import { CardProduct } from './components/CardProduct';


//interface - producto
export interface Product {
    id: number;
    name: string;
    price: number;
    stock: number;
    pathImage: string;
}

export const HomeScreen = () => {
    //arreglo de productos
    const products: Product[] = [
        { id: 1, name: 'Funda de arroz', price: 1.80, stock: 5, pathImage: 'https://www.megaprimavera.com/wp-content/uploads/arroz-blanco-gustadina-2-kg.png' },
        { id: 2, name: 'Funda de azucar', price: 1.30, stock: 0, pathImage: 'https://tienda.propieta.ec/wp-content/uploads/2021/03/azucar-blanca.jpg' },
        { id: 3, name: 'Funda de papas', price: 2.00, stock: 6, pathImage: 'https://www.supermercadosantamaria.com/documents/10180/10504/65700_G.jpg' },
        { id: 4, name: 'Funda de fideos', price: 0.80, stock: 7, pathImage: 'https://www.supermercadosantamaria.com/documents/10180/10504/133101593_M.jpg' },
        { id: 5, name: 'Funda de sal', price: 0.60, stock: 3, pathImage: 'https://www.supermercadosantamaria.com/documents/10180/10504/87990_M.jpg' },
        { id: 6, name: 'Funda de papas', price: 2.00, stock: 6, pathImage: 'https://www.supermercadosantamaria.com/documents/10180/10504/65700_G.jpg' },
        { id: 7, name: 'Funda de fideos', price: 0.80, stock: 7, pathImage: 'https://www.supermercadosantamaria.com/documents/10180/10504/133101593_M.jpg' },
        { id: 8, name: 'Funda de sal', price: 0.60, stock: 3, pathImage: 'https://www.supermercadosantamaria.com/documents/10180/10504/87990_M.jpg' },
    ];

    //hook useState: manipular el estado del arreglo de productos
    const [productsState, setProductsState] = useState(products);

    //función para actualizar el stock de productos
    const changeStockProduct = (idProduct: number, quantity: number) => {
        //generar un nuevo arreglo con las actualizaciones del stock
        const updateStock = productsState.map(product => product.id === idProduct
            ? { ...product, stock: product.stock - quantity }
            : product);
        //Actualizar el productsState
        setProductsState(updateStock);
    }


    return (
        <View>
            <TitleComponent title='Productos' />
            <BodyComponent>
                <FlatList
                    data={productsState}
                    renderItem={({ item }) => <CardProduct product={item} changeStockProduct={changeStockProduct}/>}
                    keyExtractor={item => item.id.toString()} />
            </BodyComponent>
        </View>
    )
}