import React, { useState, useEffect } from 'react'
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  FlatList
} from 'react-native'

import Icon from 'react-native-vector-icons/Ionicons'
import { getCartProducts } from '../../utills/web-handler'
import CoupenCode from '../components/CoupenCode'
import PrimaryButton from '../components/PrimaryButton'

const Cart = () => {

  const [cart, setCart] = useState([]);

  const [shipping, setShipping] = useState(120);
  const [charges, setCharges] = useState(50);


  useEffect(() => {
    getCartProducts((res) => {
      setCart(res.data.carts[0])
    })
  }, [])

  return (
    <View style={styles.container}>

      <View style={styles.header}>

        <Text style={styles.heading}>
          Your Cart
        </Text>

      </View>

      <FlatList
        style={{ flex: 2 }}
        data={cart.products}
        renderItem={({ item }) => {
          return (
            <View style={styles.content}>

              <View style={styles.innerContent}>

                <View style={styles.upperContent}>
                  <Text style={styles.title} numberOfLines={2}>
                    {item.title}
                  </Text>
                  <View style={{flexDirection: 'row',gap:8}}>
                    <TouchableOpacity>
                      <Icon name='heart-outline' size={20} color='#9098B1' />
                    </TouchableOpacity>
                    <TouchableOpacity>
                      <Icon name='trash-bin-outline' size={20} color='#9098B1' />
                    </TouchableOpacity>
                  </View>
                </View>

                <View style={styles.bottomContent}>

                  <Text style={styles.price}>
                    $ {item.price}
                  </Text>

                  <Text style={styles.commonText}>
                    Quantity ( {item.quantity} )
                  </Text>

                </View>

              </View>

            </View>
          )
        }}

      />

      <View style={styles.pricingContent}>

        <CoupenCode />

        <View style={styles.contentDetails}>

          <View style={styles.common}>
            <Text style={styles.commonText}>
              Items ({cart.totalQuantity})
            </Text>
            <Text style={styles.commonPrice}>
              $ {cart.total}
            </Text>
          </View>
          <View style={styles.common}>
            <Text style={styles.commonText}>
              Shipping
            </Text>
            <Text style={styles.commonPrice}>
              $ {shipping}
            </Text>
          </View>
          <View style={styles.common}>
            <Text style={styles.commonText}>
              Import Charges
            </Text>
            <Text style={styles.commonPrice}>
              $ {charges}
            </Text>
          </View>

          <View style={{ ...styles.common, marginBottom: 0, marginTop: 12 }}>

            <Text style={{ ...styles.commonPrice }}>
              Total Price
            </Text>

            <Text style={{ ...styles.commonPrice, color: '#40BFFF' }}>
              $ {cart.total + shipping + charges}
            </Text>

          </View>

        </View>

        <PrimaryButton
          buttonName={'Check Out'}
        />

      </View>

    </View>

  )
}

export default Cart

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#EBF0FF',
  },
  heading: {
    fontSize: 16,
    color: '#223263',
    fontFamily: 'Poppins-Bold',
    letterSpacing: 1,
  },
  content: {
    margin: 16,
    borderWidth: 1,
    borderColor: '#EBF0FF',
    borderRadius: 5,
    padding: 16,
    flexDirection: 'row',
    gap: 12,
  },
  img: {
    width: 70,
    height: 70,
    backgroundColor: '#9098B1',
    borderRadius: 5,
  },
  innerContent: {
    justifyContent: 'space-between',
    flex: 1
  },
  upperContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  title: {
    width: 190,
    fontSize: 12,
    fontFamily: 'Poppins-Bold',
    letterSpacing: 0.5,
    color: '#223263'
  },
  price: {
    fontSize: 16,
    color: '#40BFFF',
    fontFamily: 'Poppins-Bold',
    letterSpacing: 0.5,
  },
  bottomContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  pricingContent: {
    flex: 1,
    padding: 16
  },
  contentDetails: {
    padding: 16,
    borderWidth: 1,
    borderColor: '#EBF0FF',
    marginVertical: 16,
    borderRadius: 4,
  },
  common: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 12
  },
  commonText: {
    fontSize: 12,
    letterSpacing: 0.5,
    fontFamily: 'Poppins-Regular',
    color: '#9098B1'
  },
  commonPrice: {
    fontSize: 12,
    letterSpacing: 0.5,
    fontFamily: 'Poppins-Regular',
    color: '#223263'
  }
})