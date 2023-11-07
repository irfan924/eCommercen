import React from 'react'
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity
} from 'react-native'

import Icon from 'react-native-vector-icons/Ionicons'


import SearchInput from '../components/SearchInput'
import Category from '../components/Category'
import SuperFlashSale from '../components/SuperFlashSale'
import FlashSale from '../components/FlashSale'
import MegaSale from '../components/MegaSale'
import RecomendedProducts from '../components/RecomendedProducts'

const Home = () => {
  return (
    <ScrollView style={styles.container}>

      <View style={styles.inputContainer}>

        <SearchInput />

        <TouchableOpacity>

          <Icon name='heart-outline' color='#9098B1' size={28} />

        </TouchableOpacity>

        <TouchableOpacity>

          <Icon name='notifications-outline' color='#9098B1' size={28} />

        </TouchableOpacity>

      </View>

      {/* Super Flash Sale Component */}
      <SuperFlashSale />

      {/* Category Component */}
      <Category />

      {/* Flash Sale Component */}
      <FlashSale />

      {/* Mega Sale Component */}
      <MegaSale />

      {/* Recomended Products */}
      <RecomendedProducts/>

    </ScrollView>
  )
}

export default Home

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
    padding: 8,
    flexDirection: 'column',
    columnGap: 24
  },
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#EBF0FF'
  }
})