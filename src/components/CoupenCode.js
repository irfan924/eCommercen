import React from 'react'
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    TouchableOpacity
} from 'react-native'

const CoupenCode = () => {
    return (
        <View style={styles.container}>

            <TextInput
                placeholder='Enter Coupon Code'
                placeholderTextColor={'#9098B1'}
                style={styles.textInput}
            />
            <TouchableOpacity
                style={styles.btn}
            >

                <Text style={styles.text}>
                    Apply
                </Text>

            </TouchableOpacity>

        </View>
    )
}

export default CoupenCode

const styles = StyleSheet.create({

    container: {
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#EBF0FF',
        borderRadius: 4
    },

    textInput: {
        fontSize: 12,
        flex: 3,
        fontFamily: 'Poppins-Regular',
        letterSpacing: 0.5,
        color: '#9098B1',
        paddingLeft: 16
    },

    btn: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#40BFFF',
        height: 56,
        borderTopEndRadius: 4,
        borderBottomEndRadius: 4,
    },

    text: {
        fontSize: 16,
        fontFamily: 'Poppins-Bold',
        color: '#fff'
    }

})