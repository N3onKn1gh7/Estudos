import React, { useState } from 'react';
import {Text, Pressable } from 'react-native';
import { styles } from './BatButtonStyles';
import { BatTextImput } from '../BatTextImput/BatTextImput';
import generatePass from '../../services/passwordServices';

import * as Clipboard from 'expo-clipboard';

export function BatButton() {
    const [pass, setPass] = useState('')

    function handleGeneratebuttom() {
        let geradorToken = generatePass()
        setPass(geradorToken)
    }

    function handleCopyButton(){
        Clipboard.setStringAsync(pass)
    }
    
    return (
        <>
           <BatTextImput pass={pass}/>
            <Pressable onPress={handleGeneratebuttom}
                style={styles.botao}
            >
                <Text style={styles.text}>💥GENERATE</Text>
            </Pressable>

            <Pressable onPress= {handleCopyButton}
                style={styles.botao}
            >
                <Text style={styles.text}>💥COPY</Text>
            </Pressable>


        </>
    );
}