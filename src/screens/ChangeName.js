import React , {useRef, useState} from 'react'
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    TextInput
} from 'react-native'

import { useNavigation } from '@react-navigation/native'

import Icon from 'react-native-vector-icons/Ionicons'
import PrimaryButton from '../components/PrimaryButton'

const ChangeName = ({props}) => {

    const navigation = useNavigation();

    const [isFocused, setIsFocused] = useState(false);
    const [isActive, setActive] = useState(false)

    const handleSave = ()=>{
        navigation.goBack();
    }

    return (
        <View style={styles.container}>
            <View style={styles.header}>

                <TouchableOpacity
                    onPress={() => navigation.goBack()}
                >

                    <Icon name='chevron-back-outline' size={24} color='#40BFFF' />

                </TouchableOpacity>

                <Text style={styles.heading}>
                    Name
                </Text>
            </View>

            <View style={styles.commonView}>

                <Text style={styles.commonText}>
                    First Name
                </Text>

                <TextInput
                    placeholder='John'
                    placeholderTextColor={'#9098b1'}
                    style={{...styles.input, borderColor: isFocused ? '#40BFFF': '#EBF0FF'}}
                    onBlur={()=> setIsFocused(false)}
                    onFocus={()=> setIsFocused(true)}
                />

            </View>

            <View style={styles.commonView}>

                <Text style={styles.commonText}>
                    Last Name
                </Text>

                <TextInput
                    placeholder='Doe'
                    placeholderTextColor={'#9098b1'}
                    style={{...styles.input, borderColor: isActive ? '#40BFFF': '#EBF0FF'}}
                    onBlur={()=> setActive(false)}
                    onFocus={()=> setActive(true)}
                />

            </View>

            <View style={styles.btn}>

                <PrimaryButton
                    buttonName={'Save'}
                    onPress={handleSave}
                />

            </View>

        </View>
    )
}

export default ChangeName

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff'
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 21,
        paddingHorizontal: 16,
        paddingVertical: 28,
        borderBottomWidth: 1,
        borderBottomColor: '#EBF0FF'
    },
    heading: {
        fontSize: 16,
        letterSpacing: 0.5,
        fontFamily: 'Poppins-Bold',
        color: '#223263'
    },
    commonView: {
        padding: 16
    },
    commonText: {
        fontSize: 14,
        fontFamily: 'Poppins-Bold',
        color: '#223263',
        letterSpacing: 0.5
    },
    input: {
        borderWidth: 1,
        marginVertical: 4,
        borderColor: '#ebf0ff',
        borderRadius: 5,
        fontSize: 14,
        fontFamily: 'Poppins-Regular',
        color: '#9098b1'
    },
    btn: {
        padding: 16,
        position: 'absolute',
        bottom: 16,
        width: '100%'
    }

})