import React from 'react'
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity
} from 'react-native'
import { height, width } from './Dimensions'

const CategoryButton = ({onPress,catogeryName}) => {
    return (
        <View style={styles.mainView}>
            <TouchableOpacity
                style={styles.btn}
                onPress={onPress}
            >

                <Text style={styles.btnText}>
                    {catogeryName}
                </Text>

            </TouchableOpacity>
        </View>
    )
}

export default CategoryButton

const styles = StyleSheet.create({
    mainView: {
        height: height*0.4,
        paddingVertical: width*0.02,
        marginLeft: width*0.03
    },
    btn: {
        backgroundColor: '#AEC3AE',
        padding: width * 0.03,
        height: width * 0.12,
        borderRadius: width * 0.02,
        width: 'auto'
    },
    btnText: {
        color: '#000',
        fontSize: width * 0.04,
        fontFamily: 'mulish'
    }
})