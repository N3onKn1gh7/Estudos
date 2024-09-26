import React from 'react';
import { View, Text, Image } from 'react-native';

import { styles } from './BatLogoStyles';
import batLogo from '../../../assets/bat-logo.png'

export function BatLogo() {
    return (
        <>
            <Text style={styles.titulo} >
                BAT PASS GENERATOR
            </Text>
            <Image
                source={batLogo}
                style={{
                    resizeMode: 'contain',
                    height: 180
                }}
            />
        </>
    );
}