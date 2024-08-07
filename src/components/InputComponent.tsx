import React from 'react';
import { TextInput } from 'react-native';
import { styles } from '../theme/appTheme';

//interface - props
interface Props {
    placeholder: string;
    handleSetValues: (name: string, value: string) => void; //prop función
    name: string;
}

export const InputComponent = ({ placeholder, handleSetValues, name }: Props) => {
    return (
        <TextInput
            placeholder={placeholder}
            keyboardType='default'
            onChangeText={(value) => handleSetValues(name, value)}
            style={styles.inputText}
        />
    )
}
