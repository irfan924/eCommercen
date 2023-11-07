import React, { useState } from 'react'
import {
  Alert,
  Modal,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from 'react-native'
import { useNavigation } from '@react-navigation/native'
import Icon from 'react-native-vector-icons/Ionicons'
import ProductInput from '../components/ProductInput'
import PrimaryButton from '../components/PrimaryButton'

import DropDownPicker from 'react-native-dropdown-picker'

const Account = () => {

  const navigation = useNavigation();

  const [showModal, setShowModal] = useState(false);

  const [isOpen, setIsOpen] = useState(false);

  const [categValue, setCategValue] = useState('');

  const handleModal = () => {
    setShowModal(!showModal)
  }

  const CATEG = [
    {
      label: 'Fashion',
      value: 'fashion'
    },
    {
      label: 'Beauty',
      value: 'beauty'
    },
    {
      label: 'Electronics',
      value: 'electronics'
    },
    {
      label: 'Mobiles',
      value: 'mobiles'
    },
  ]

  return (
    <View style={styles.container}>

      <Text style={styles.heading}>
        Account
      </Text>

      <View>

        <TouchableOpacity
          style={styles.detailContainer}
          onPress={()=> navigation.navigate('ProfileDetail')}
        >

          <Icon name='person-outline' size={24} color='#40BFFF' />

          <Text style={styles.primaryHeading}>
            Profile
          </Text>

        </TouchableOpacity>

        <TouchableOpacity style={styles.detailContainer}>

          <Icon name='bag-handle-outline' size={24} color='#40BFFF' />

          <Text style={styles.primaryHeading}>
            Order
          </Text>

        </TouchableOpacity>

        <TouchableOpacity style={styles.detailContainer}>

          <Icon name='location-outline' size={24} color='#40BFFF' />

          <Text style={styles.primaryHeading}>
            Location
          </Text>

        </TouchableOpacity>

        <TouchableOpacity style={styles.detailContainer}>

          <Icon name='card-outline' size={24} color='#40BFFF' />

          <Text style={styles.primaryHeading}>
            Payment
          </Text>

        </TouchableOpacity>

        <TouchableOpacity style={styles.detailContainer} onPress={handleModal}>

          <Icon name='image-outline' size={24} color='#40BFFF' />

          <Text style={styles.primaryHeading}>
            Add Product
          </Text>

        </TouchableOpacity>

      </View>

      <Modal
        visible={showModal}
        animationType='slide'
      >
        <View style={styles.modal}>

          <Text style={{ ...styles.heading }}>
            Add New Product
          </Text>

          <View style={styles.addProduct}>

            <ProductInput
              detail={'Product Name'}
              placeholder={'e.g Mac-Air'}
            />

            <ProductInput
              detail={'Price'}
              placeholder={'e.g 200'}
            />

            <ProductInput
              detail={'Description'}
              placeholder={'write description'}
              numberOfLines={5}
            />

          </View>

          <View style={styles.dropDownView}>

            <DropDownPicker
              items={CATEG}
              open={isOpen}
              setOpen={() => setIsOpen(!isOpen)}
              value={categValue}
              setValue={(val) => setCategValue(val)}
              placeholder='Select Category'
              placeholderStyle={{
                fontFamily: 'Poppins-Bold',
                letterSpacing: 0.5,
                color: '#9098B1',
                borderColor: '#9098B1'
              }}
              selectedItemContainerStyle={{
                backgroundColor: "#40BFFF",
              }}
            />

          </View>

          <PrimaryButton
            onPress={handleModal}
            buttonName={'Upload Product'}
          />

        </View>


      </Modal>

    </View>
  )
}

export default Account

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
    paddingVertical: 28,
    paddingHorizontal: 16,
    borderBottomColor: '#EBF0FF',
    borderBottomWidth: 1
  },
  primaryHeading: {
    fontSize: 12,
    fontFamily: 'Poppins-Bold',
    letterSpacing: 0.5,
    color: '#223263'
  },
  detailContainer: {
    flexDirection: 'row',
    padding: 16,
    gap: 19,
    alignItems: 'center',
  },
  modal: {
    flex: 1,
  },
  addProduct: {
    padding: 16
  },
  dropDownView: {
    margin: 16,
    zIndex: 2,
  },

})