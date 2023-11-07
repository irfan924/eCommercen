import React from 'react'
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity
} from 'react-native'


import Icon from 'react-native-vector-icons/FontAwesome6'


const BackButton = ({onPress}) => {
    return (
        <View style={styles.mainView}>

            <TouchableOpacity
                style={styles.btn}
                onPress={onPress}
            >

                <Icon name='angle-left' size={30} color='#fff'  />

            </TouchableOpacity>
        </View>
    )
}

export default BackButton

const styles = StyleSheet.create({
    mainView: {
        position: 'absolute',
        top: 5,
        left: 5,
        zIndex: 50
    },
    btn: {
        backgroundColor: '#40BFFF',
        width: 40,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 20,
    }
})