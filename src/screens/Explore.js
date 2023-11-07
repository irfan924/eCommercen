import React, { useState, useEffect} from 'react'
import axios from 'axios'
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  FlatList
} from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import SearchInput from '../components/SearchInput'


import { useNavigation } from '@react-navigation/native'

const Explore = () => {

  const navigation = useNavigation();

  const [input, setInput] = useState('');

  const [searchedProducts, setSearchedProducts] = useState([])

  const handleSearch = () => {
    axios.get(`https://dummyjson.com/products/search?q=${input}`)
      .then((res) => {
        setSearchedProducts(res.data)
      })
      .catch(e => console.log(e))

    setInput('');

  }

  useEffect(() => {
    handleSearch();
  }, [])

  return (
    <View style={styles.container}>

      <View style={styles.inputContainer}>

        <SearchInput
          onChangeText={(val) => setInput(val)}
          onPress={handleSearch}
          value={input}
        />

        <TouchableOpacity>

          <Icon name='heart-outline' color='#9098B1' size={28} />

        </TouchableOpacity>

        <TouchableOpacity>

          <Icon name='notifications-outline' color='#9098B1' size={28} />

        </TouchableOpacity>

      </View>

      {
        input != null ?
          <FlatList
            data={searchedProducts.products}
            numColumns={2}
            key={1}
            contentContainerStyle={styles.flatList}
            renderItem={({ item }) =>

              <View>
                <TouchableOpacity style={styles.btn}
                  onPress={() => {
                    navigation.navigate('ProductDeatils', { itemId: item.id })
                  }}
                >

                  <Image
                    source={{ uri: item ? item.thumbnail : null }}
                    resizeMode='contain'
                    style={styles.img}
                  />

                  <Text style={styles.Categname} numberOfLines={2}>
                    {item ? item.title : 'loading'}
                  </Text>

                  <Text style={styles.price}>
                    $ {item ? item.price : 'loading'}
                  </Text>

                  <Text style={styles.rating}>
                    {item ? 'Rating (' + item.rating + ')' : 'loading'}
                  </Text>

                  <Text style={styles.discount}>
                    {item ? item.discountPercentage + '% Off' : 'loading'}
                  </Text>

                </TouchableOpacity>
              </View>

            }

          />
          : ''
      }



    </View>
  )
}

export default Explore

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 8
  },
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#EBF0FF'
  },

  // New Style

  rating: {
    fontSize: 12,
    fontFamily: 'Poppins-Bold',
    letterSpacing: 0.5,
    color: '#FFC833',
    marginTop: 4,
  },
  btn: {
    borderWidth: 1,
    borderColor: '#EBF0FF',
    padding: 16,
    borderRadius: 5,
    marginHorizontal: 8,
    flex: 1
  },
  img: {
    backgroundColor: '#EBF0FF',
    width: 140,
    height: 140,
    borderRadius: 5,
    marginBottom: 8,
  },
  Categname: {
    fontSize: 12,
    fontFamily: 'Poppins-Bold',
    letterSpacing: 0.5,
    maxWidth: 140,
    color: '#223263'
  },
  price: {
    fontSize: 12,
    fontFamily: 'Poppins-Bold',
    color: '#40BFFF',
    marginVertical: 16,
  },
  priceView: {
    flexDirection: 'row',
    gap: 8
  },
  discount: {
    fontSize: 10,
    letterSpacing: 0.5,
    fontFamily: 'Poppins-Bold',
    color: '#FB7181'
  },
  flatList: {
    gap: 10,
    alignSelf: 'center',
    paddingVertical: 16
  }
})