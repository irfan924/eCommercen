import React from 'react'
import {
    StyleSheet,
    Text,
    ScrollView,
    Image,
    View,
    TouchableOpacity
} from 'react-native'

const SuperFlashSale = () => {
    return (

        <View>

            <ScrollView
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                style={styles.container}
            >

                <Image
                    source={require('../Images/banner1.jpg')}
                    style={styles.img}
                    resizeMode='stretch'
                />

                <Image
                    source={require('../Images/banner2.jpg')}
                    style={styles.img}
                    resizeMode='stretch'
                />

                <Image
                    source={require('../Images/banner3.jpg')}
                    style={styles.img}
                    resizeMode='stretch'
                />

                <Image
                    source={require('../Images/banner4.jpg')}
                    style={styles.img}
                    resizeMode='stretch'
                />

                <Image
                    source={require('../Images/banner5.jpg')}
                    style={styles.img}
                    resizeMode='stretch'
                />

            </ScrollView>

            <View style={styles.btnContainer}>

                <TouchableOpacity>
                    <Text style={styles.btn}></Text>
                </TouchableOpacity>

                <TouchableOpacity>
                    <Text style={styles.btn}></Text>
                </TouchableOpacity>

                <TouchableOpacity>
                    <Text style={{ ...styles.btn, backgroundColor: '#40BFFF' }}>

                    </Text>
                </TouchableOpacity>

                <TouchableOpacity>
                    <Text style={styles.btn}>

                    </Text>
                </TouchableOpacity>

                <TouchableOpacity>
                    <Text style={styles.btn}>

                    </Text>
                </TouchableOpacity>

            </View>

        </View>
    )
}

export default SuperFlashSale

const styles = StyleSheet.create({
    container: {
        marginTop: 24,
    },
    img: {
        width: 360,
        height: 206,
        borderRadius: 16,
        borderColor: '#EBF0FF',
        borderWidth: 1,
        marginRight: 8
    },
    btnContainer: {
        width: 60,
        height: 20,
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        gap: 8,
        flexDirection: 'row',
        marginTop: 8,
    },
    btn: {
        width: 12,
        height: 12,
        backgroundColor: '#EBF0FF',
        borderRadius: 6
    }
})