import React, { useState } from 'react';
import { Image, Modal, Text, TouchableOpacity, useWindowDimensions, View } from 'react-native';
import { styles } from '../../../theme/appTheme';
import { Product } from '../HomeScreen';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { PRIMARY_COLOR } from '../../../commons/constants';

//interface - props
interface Props {
    product: Product;
    isVisible: boolean;
    setShowModal: () => void;
}

export const ModalProduct = ({ isVisible, setShowModal, product }: Props) => {
    //hook useWindowDimension(): tomar el tamaño de la pantalla
    const { width } = useWindowDimensions();

    //hook useState: manipular la cantidad de productos
    const [quantity, setQuantity] = useState<number>(1);

    return (
        <Modal visible={isVisible} animationType='fade' transparent={true}>
            <View style={styles.contentPrincipal}>
                <View style={{
                    ...styles.contentModal,
                    width: width * 0.80
                }}>
                    <View style={styles.headModal}>
                        <Text style={styles.titleModal}>{product.name}  -  ${product.price.toFixed(2)}</Text>
                        <View style={styles.iconCard}>
                            <Icon
                                name='cancel'
                                size={27}
                                color={PRIMARY_COLOR}
                                onPress={setShowModal} />
                        </View>
                    </View>
                    <View style={styles.contentBodyModal}>
                        <Image
                            source={{
                                uri: product.pathImage
                            }}
                            style={styles.imageModal} />
                        <View style={styles.contentQuantity}>
                            <TouchableOpacity
                                style={styles.buttonQuantity}>
                                <Text style={styles.textButtonQuantity}>+</Text>
                            </TouchableOpacity>
                            <Text style={styles.textQuantity}>{quantity}</Text>
                            <TouchableOpacity
                                style={styles.buttonQuantity}>
                                <Text style={styles.textButtonQuantity}>-</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </View>
        </Modal>
    )
}
