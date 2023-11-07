import React, { useState } from 'react'
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity
} from 'react-native'

import { useNavigation } from '@react-navigation/native'

import Icon from 'react-native-vector-icons/Ionicons'

import DropDownPicker from 'react-native-dropdown-picker'
import PrimaryButton from '../components/PrimaryButton'

const Gender = () => {

    const DATA = [
        {
            label: 'Male',
            value: 'male'
        },
        {
            label: 'Female',
            value: 'female'
        },
        {
            label: 'Other',
            value: 'other'
        },
    ]

    const navigation = useNavigation();

    const [isOpen, setOpen] = useState(false)

    const [gender, setGender] = useState('');

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
                    Gender
                </Text>
            </View>

            <View style={styles.dropdown}>

                <Text style={styles.genderStyle}>
                    Choose Gender
                </Text>

                <DropDownPicker

                    items={DATA}
                    open={isOpen}
                    setOpen={() => setOpen(!isOpen)}
                    value={gender}
                    setValue={(val) => setGender(val)}
                    placeholder='Select Gender'
                    placeholderStyle={{
                        fontFamily: 'Poppins-Bold',
                        letterSpacing: 0.5,
                        color: '#9098B1',
                        borderColor: '#9098B1',
                    }}

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

export default Gender

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
    dropdown: {
        padding: 16
    },
    genderStyle: {
        marginBottom: 16,
        fontSize: 14,
        letterSpacing: 0.5,
        fontFamily: 'Poppins-Bold',
        color: '#223263'
    },
    btn: {
        padding: 16,
        position: 'absolute',
        bottom: 16,
        width: '100%'
    }
})