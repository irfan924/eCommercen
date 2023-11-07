import React from 'react'
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    Image,
} from 'react-native'

import Icon from 'react-native-vector-icons/Ionicons'

import { useNavigation } from '@react-navigation/native'

const ProfileDetail = () => {

    const navigation = useNavigation();

    return (
        <View style={styles.container}>

            <View style={styles.header}>

                <TouchableOpacity
                    onPress={() => navigation.goBack()}
                >

                    <Icon name='chevron-back-outline' size={24} color='#40BFFF' />

                </TouchableOpacity>

                <Text style={styles.heading}>
                    Profile
                </Text>
            </View>

            <View style={styles.profileData}>

                <View style={styles.imgView}>
                    <Image
                        source={require('../Images/accountLogo.jpg')}
                        style={styles.img}
                        resizeMode='contain'
                    />
                </View>

                <View style={styles.namesView}>
                    <TouchableOpacity
                        onPress={()=> navigation.navigate('ChangeName')}
                    >

                        <Text style={styles.fullName}>
                            Irfan Abbas
                        </Text>

                    </TouchableOpacity>
                    <Text style={styles.userName}>
                        @fanuDev
                    </Text>
                </View>

            </View>

            <View style={styles.content}>

                <TouchableOpacity
                    style={styles.btn}
                    onPress={()=> navigation.navigate('Gender')}
                >

                    <View style={styles.commonView}>
                        <Icon name='female-outline' size={24} color='#40BFFF' />

                        <Text style={styles.commonText}>
                            Gender
                        </Text>
                    </View>

                    <View style={styles.commonView}>
                        <Text style={styles.commonInfoStyle}>
                            Male
                        </Text>

                        <Icon name={'chevron-forward-outline'} size={24} color='#9098b1' />
                    </View>

                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.btn}
                    onPress={()=> navigation.navigate('DOB')}
                >

                    <View style={styles.commonView}>
                        <Icon name='calendar-outline' size={24} color='#40BFFF' />

                        <Text style={styles.commonText}>
                            Date of Birth
                        </Text>
                    </View>

                    <View style={styles.commonView}>
                        <Text style={styles.commonInfoStyle}>
                            05-09-2004
                        </Text>

                        <Icon name={'chevron-forward-outline'} size={24} color='#9098b1' />
                    </View>

                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.btn}
                >

                    <View style={styles.commonView}>
                        <Icon name='mail-outline' size={24} color='#40BFFF' />

                        <Text style={styles.commonText}>
                            Mail
                        </Text>
                    </View>

                    <View style={styles.commonView}>
                        <Text style={styles.commonInfoStyle}>
                            irfanabbas00429@gmail.com
                        </Text>

                        <Icon name={'chevron-forward-outline'} size={24} color='#9098b1' />
                    </View>

                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.btn}
                >

                    <View style={styles.commonView}>
                        <Icon name='phone-portrait-outline' size={24} color='#40BFFF' />

                        <Text style={styles.commonText}>
                            Phone Number
                        </Text>
                    </View>

                    <View style={styles.commonView}>
                        <Text style={styles.commonInfoStyle}>
                            +92 304 7451194
                        </Text>

                        <Icon name={'chevron-forward-outline'} size={24} color='#9098b1' />
                    </View>

                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.btn}
                >

                    <View style={styles.commonView}>
                        <Icon name='lock-closed-outline' size={24} color='#40BFFF' />

                        <Text style={styles.commonText}>
                            Change Password
                        </Text>
                    </View>

                    <View style={styles.commonView}>
                        <Text style={styles.commonInfoStyle}>
                            ********
                        </Text>

                        <Icon name={'chevron-forward-outline'} size={24} color='#9098b1' />
                    </View>

                </TouchableOpacity>

            </View>

        </View>
    )
}

export default ProfileDetail

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
    profileData: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 16,
        paddingHorizontal: 16,
        paddingVertical: 24
    },
    imgView: {
        width: 100,
        height: 100,
        borderWidth: 3,
        borderColor: '#EBF0FF',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 50,
    },
    img: {
        width: 80,
        height: 80,
        borderRadius: 40
    },
    namesView: {
        gap: 4
    },
    fullName: {
        fontSize: 16,
        fontFamily: 'Poppins-Bold',
        letterSpacing: 0.5,
        color: '#223263'
    },
    userName: {
        fontSize: 12,
        letterSpacing: 0.5,
        fontFamily: 'Poppins-Regular',
        fontStyle: 'italic',
        color: '#9098B1',
    },
    content: {
        padding: 16
    },
    btn: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    commonView: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 16
    },
    commonText: {
        color: '#223263',
        fontSize: 12,
        fontFamily: 'Poppins-Bold',
        letterSpacing: 0.5,
        paddingVertical: 18
    },
    commonInfoStyle: {
        fontSize: 12,
        letterSpacing: 0.5,
        fontFamily: 'Poppins-Regular',
        color: '#9098b1'
    }

})