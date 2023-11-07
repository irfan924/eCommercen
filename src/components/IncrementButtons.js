import React, { useState } from 'react'
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    Alert
} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome6'


const IncrementButtons = ({increment,decrement}) => {

    const [count, setCount] = useState(1)

    const handleDecrement = () => {
        if (count == 1) {
          Alert.alert('Minimum Quantity Limit Exceded!')
        } else {
          setCount(count - 1)
        }
    
      }
    
      const handleIncrement = () => {
        setCount(count + 1)
      }

    return (
        <View style={styles.container}>

            <TouchableOpacity
                style={styles.btn}
                onPress={decrement}
            >

                <Icon name='minus' color='#fff' size={16} />

            </TouchableOpacity>

            <Text style={styles.quantity}>
                {count}
            </Text>

            <TouchableOpacity
                style={styles.btn}
                onPress={increment}
            >

                <Icon name='plus' color='#fff' size={16} />

            </TouchableOpacity>

        </View>
    )
}

export default IncrementButtons

const styles = StyleSheet.create({
    container: {
        width: 80,
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row'
    },
    btn: {
        backgroundColor: '#40BFFF',
        padding: 5,
        borderRadius: 5
    },
    quantity: {
        textAlign: 'center',
        paddingVertical: 2,
        fontFamily: 'abz',
        fontSize: 16
    }
})