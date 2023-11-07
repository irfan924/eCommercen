import React from 'react'
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
} from 'react-native'

const Offers = () => {
  return (
    <View style={styles.container}>

      <Text style={styles.heading}>
        Offer
      </Text>

      <View style={styles.content}>

        <View style={styles.coupon}>

          <Text style={styles.commonText} numberOfLines={2}>
            Use "MEGSL" Coupon For
            Get 90% Off
          </Text>

        </View>

        <TouchableOpacity
          style={styles.btn}
        >

          <Image
            source={require('../Images/banner1.jpg')}
            resizeMode= 'stretch'
            style={styles.img}
          />

        </TouchableOpacity>

        <TouchableOpacity
          style={styles.btn}
        >

          <Image
            source={require('../Images/banner3.jpg')}
            resizeMode= 'stretch'
            style={styles.img}
          />

        </TouchableOpacity>

      </View>

    </View>
  )
}

export default Offers

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  heading: {
    fontSize: 16,
    fontFamily: 'Poppins-Bold',
    letterSpacing: 0.5,
    color: '#223263',
    paddingHorizontal: 16,
    paddingVertical: 28,
    borderBottomColor: '#EBF0FF',
    borderBottomWidth: 1
  },
  content: {
    padding: 16
  },
  coupon: {
    backgroundColor: '#40BFFF',
    padding: 16,
    borderRadius: 4,
  },
  commonText: {
    fontSize: 16,
    fontFamily: 'Poppins-Bold',
    letterSpacing: 0.5,
    maxWidth: 220,
    color: '#fff'
  },
  btn:{
    marginTop: 16
  },
  img: {
    width: '100%',
    height: 250,
    borderRadius: 4,
    borderWidth: 1,
    borderColor: '#40BFFF'
  }
})