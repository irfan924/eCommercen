import React from 'react'
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity
} from 'react-native'


const PrimaryButton = ({ onPress, buttonName }) => {
    return (
        <View >

            <TouchableOpacity
                style={styles.btn}
                onPress={onPress}
            >
                <Text style={styles.text}>
                    {buttonName}
                </Text>

            </TouchableOpacity>

        </View>
    )
}

export default PrimaryButton

const styles = StyleSheet.create({
    btn: {
        backgroundColor: '#40BFFF',
        height: 53,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
    },
    text: {
        color: '#fff',
        fontSize: 14,
        fontFamily: 'Poppins-Bold',
        letterSpacing: 0.5,
    },
})