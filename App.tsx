import React, {useEffect, useState} from 'react';
import {
  SafeAreaView,
  View,
  FlatList,
  StyleSheet,
  Text,
  StatusBar,
  Image,
  ScrollView,
  Dimensions,
  Button,
  Alert,
  TouchableHighlight,
  TouchableOpacity,
  ActivityIndicator
} from 'react-native';

const { width: windowWidth, height: windowHeight } = Dimensions.get("window");

const slideList = Array.from({ length: 30 }).map((_, i) => {
  return {
    id: i,
    image: `https://test.aforro.in:8000/media/sub_banners/MOM_Makhana_in-app_banner.png`,
    title: `${i + 1}`,
   
  };
});

type Recommended_Prods = {}

const shopBrands =[{key:'1'}, {key:'2'}, {key:'3'}, {key:'5'}, {key:'6'}, {key:'7'}, {key:'8'}, {key:'9'}, ]

const brands = [
  {
    id: 1,
    image:
      'http://test.aforro.in:8000/media/product_variant_images/dummy3.png',
    name: 'Organic Apples',
    price: 3.99,
    title: 'Silk',
    quantity: '1 kg',
    description:
      'Fresh, juicy organic apples perfect for a healthy snack. These apples are packed with vitamins and antioxidants to keep you energized throughout the day.',
  },
  {
    id: 2,
    image:
      'http://test.aforro.in:8000/media/product_variant_images/dummy_image_17_ZzXiCnc.png',
    name: 'Whole Grain Bread',
    price: 2.49,
    title: 'Silk',
    quantity: '1 kg',
    description:
      'Our whole grain bread is baked fresh daily and loaded with fiber and nutrients. Enjoy a delicious, wholesome slice with your favorite spread or as part of a sandwich.',
  },
  {
    id: 3,
    image:
      'http://test.aforro.in:8000/media/product_variant_images/dummy3_aJHlxr1.png',
    name: 'Free-Range Eggs',
    price: 4.99,
    title: 'Silk',
    quantity: '1 kg',
    description:
      'Free-range eggs from hens raised in humane conditions. Rich in flavor and essential nutrients, these eggs are ideal for all your culinary needs.',
  },
  {
    id: 4,
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfQ-EmWYwi0RsFPPxo35mtL5dw4AtIsdid-Q&s',
    name: 'Almond Milk',
    price: 3.49,
    title: 'Silk',
    quantity: '1 kg',
    description:
      'Creamy and smooth almond milk, a perfect dairy-free alternative. Enriched with vitamins and minerals, it’s great for drinking or adding to your favorite recipes.',
  },
  {
    id: 5,
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfQ-EmWYwi0RsFPPxo35mtL5dw4AtIsdid-Q&s',
    name: 'Almond Milk',
    price: 3.49,
    title: 'Silk',
    quantity: '1 kg',
    description:
      'Creamy and smooth almond milk, a perfect dairy-free alternative. Enriched with vitamins and minerals, it’s great for drinking or adding to your favorite recipes.',
  },
  {
    id: 6,
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfQ-EmWYwi0RsFPPxo35mtL5dw4AtIsdid-Q&s',
    name: 'Almond Milk',
    price: 3.49,
    title: 'Silk',
    quantity: '1 kg',
    description:
      'Creamy and smooth almond milk, a perfect dairy-free alternative. Enriched with vitamins and minerals, it’s great for drinking or adding to your favorite recipes.',
  },
];

type ItemProps = {title: string};

const Item = ({title}: ItemProps) => (
  <View style={styles.item}>
    <Image source={require('./assets/images/discount.png')} 
    style={{ width: 30,
      height: 30,}}
    />
    <Image source={{uri:"http://test.aforro.in:8000/media/product_variant_images/dummy3_Ufvrluk.png"
}} 
    style={{ width: 130,
      height: 130,}}
    />
    <Text style={{ fontSize: 16,
    color:'grey'}}>{title}</Text>
    <Text style={styles.title}>{title}</Text>

    <Text style={{
    fontSize: 20,
    color:'grey',
    marginTop:20

  }}> 1 kg</Text>
  <View style={{flexDirection:'row'}}>
  <Text style={styles.title}>₹44</Text>
  <Text style={{textDecorationLine: 'line-through', textDecorationStyle: 'solid',  fontSize: 22,
    color:'grey'}}>
  ₹444
</Text>
  </View>
      <TouchableOpacity onPress={() => Alert.alert('Added to Cart')} style={styles.buttonStyle}>
      <Text style={styles.buttonTextStyle}>
      Add
      </Text>
    </TouchableOpacity>
  </View>
);

const Item1 = ({title}: ItemProps) => (
  <View style={styles.item}>
     <Image source={require('./assets/images/discount.png')} 
    style={{ width: 30,
      height: 30,}}
    />
    <Image source={{uri:"http://test.aforro.in:8000/media/product_variant_images/dummy_image_17_ZzXiCnc.png"
}} 
style={{ width: 130,
  height: 130,}}
    />
     <Text style={styles.title}>{title}</Text>
     <Text style={{
    fontSize: 20,
    color:'grey'
  }}> 1 kg</Text>
     <View style={{flexDirection:'row'}}>
  <Text style={styles.title}>₹445</Text>
  <Text style={{textDecorationLine: 'line-through', textDecorationStyle: 'solid', fontSize: 22,
    color:'grey'}}>
  ₹777
</Text>
  </View>
     
     <Button
        title="Add"
        color="#1dab32"
        onPress={() => Alert.alert('Added to Cart')}
      />
  </View>
);

const Item2 = ({title}: ItemProps) => (
  <View style={styles.item}>
     <Image source={require('./assets/images/discount.png')} 
    style={{ width: 30,
      height: 30,}}
    />
    <Image source={{uri:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfQ-EmWYwi0RsFPPxo35mtL5dw4AtIsdid-Q&s"}} 
    style={{ width: 200,
      height: 80,}}
    />
     <Text style={styles.title}>{title}</Text>
     <Text style={{
    fontSize: 20,
    color:'grey'
  }}> 1 kg</Text>
    <View style={{flexDirection:'row'}}>
  <Text style={styles.title}>₹109</Text>
  <Text style={{textDecorationLine: 'line-through', textDecorationStyle: 'solid', fontSize: 22,
    color:'grey'}}>
  ₹484
</Text>
  </View>
    
     <Button
        title="Add"
        color="#1dab32"
        onPress={() => Alert.alert('Added to Cart')}
      />
  </View>
);

const Item3 = ({title}: ItemProps) => (
  <View style={styles.item}>
     <Image source={require('./assets/images/discount.png')} 
    style={{ width: 30,
      height: 30,}}
    />
    <Image source={{uri:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfQ-EmWYwi0RsFPPxo35mtL5dw4AtIsdid-Q&s"}} 
    style={{ width: 200,
      height: 80,}}
    />
     <Text style={styles.title}>{title}</Text>
     <Text style={{
    fontSize: 20,
    color:'grey'
  }}> 1 kg</Text>
    <View style={{flexDirection:'row'}}>
  <Text style={styles.title}>₹89</Text>
  <Text style={{textDecorationLine: 'line-through', textDecorationStyle: 'solid', fontSize: 22,
    color:'grey'}}>
  ₹380
</Text>
  </View>
     
     <Button
        title="Add"
        color="#1dab32"
        onPress={() => Alert.alert('Added to Cart')}
      />
  </View>
);

function Slide({ data }) {
  return (
    <View
      style={{
        height: windowHeight*0.3,
        width: windowWidth,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Image
        source={{ uri: data.image }}
        style={{ width: windowWidth * 0.9, height: windowHeight * 0.3 }}
      ></Image>
      <Text style={{ fontSize: 24 }}>{data.title}</Text>
      <Text style={{ fontSize: 18 }}>{data.subtitle}</Text>
    </View>
  );
}

const _renderShopByBrands = ({item,index}) => {

}

const App = () => {
  const width = Dimensions.get('window').width;
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState<Recommended_Prods[]>([]);

  const getMovies = async () => {
    try {
      const response = await fetch('https://test.aforro.in:8000/inventory/homepage/get/');
      const json = await response.json();
      setData(json.data.recommended_products.response);
      console.error(json.data.recommended_products.response[0].variants.images[0].image);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

 

  useEffect(() => {
    getMovies();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
      <View style={{flexDirection:'row'}}>
      <Image source={require('./assets/images/Icon.png')} 
    style={{ width: 60,
      height: 60,}}
    />
    <View style={{flexDirection:'column'}}>
    <Text style={{ fontSize: 18 }}>Deliver To <Text style={{fontWeight:'bold'}}>Home</Text></Text>
    <Text style={{ fontSize: 16 }}>Plot No.10, Khasra no. 873</Text>
    
    </View>
    <Image source={require('./assets/images/Rectangle.png')} 
    style={{ width: 50,
      height: 50,
    marginLeft:90}}
    />
    </View>
      <Text style={styles.title1}>Recommended products for you</Text>
  
      {isLoading ? (
        <ActivityIndicator />
      ) : (
      <FlatList
        data={brands}
        renderItem={({item}) => <Item title={item.title} />}
        keyExtractor={item => item.id}
        scrollEnabled
        horizontal={true}
      /> )}

       <FlatList
      data={slideList}
      style={{ flex: 1 }}
      renderItem={({ item }) => {
        return <Slide data={item} />;
      }}
      pagingEnabled
      horizontal
      showsHorizontalScrollIndicator={false}
    />
    
      <View style={{width: 400, height: 150, padding:10}}>
      <Image source={require('./assets/images/fixed_banner.png')} 
    style={{  flex:1,width: undefined,
      height: undefined,
      marginLeft:7
      }}
    />
      </View>
      

<Text style={styles.title2}>Trending in your areas</Text>
       <FlatList
        data={brands}
        renderItem={({item}) => <Item2 title={item.title} />}
        keyExtractor={item => item.id}
        scrollEnabled
        horizontal={true}
      />
       <FlatList
        data={brands}
        renderItem={({item}) => <Item3 title={item.title} />}
        keyExtractor={item => item.id}
        scrollEnabled
        horizontal={true}
      />
      <Text style={styles.title2}>Popular Categories</Text>
       <FlatList
        data={brands}
        renderItem={({item}) => <Item title={item.title} />}
        keyExtractor={item => item.id}
        scrollEnabled
        horizontal={true}
      />
       <FlatList
        data={brands}
        renderItem={({item}) => <Item1 title={item.title} />}
        keyExtractor={item => item.id}
        scrollEnabled
        horizontal={true}
      />
       <Text style={styles.title2}>----Shop By Brands----</Text>
       <FlatList
        data={shopBrands}
        renderItem={this._renderShopByBrands}
        keyExtractor={(item,index) => item.toString()}
        scrollEnabled
        horizontal={true}
      />
       <FlatList
        data={brands}
        renderItem={({item}) => <Item3 title={item.title} />}
        keyExtractor={item => item.id}
        scrollEnabled
        horizontal={true}
      />
       <FlatList
        data={brands}
        renderItem={({item}) => <Item title={item.title} />}
        keyExtractor={item => item.id}
        scrollEnabled
        horizontal={true}
      />
          </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection:'row',
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    backgroundColor: '#FFFFFFFF',
    padding: 2,
    marginVertical: 3,
    marginHorizontal: 5,
  },
  title: {
    fontSize: 22,
    color:'black'
  },
  title1:{
    fontSize: 22,
    fontFamily:'bold',
    fontWeight:'bold',
    margin:5,
    color:'black'

  },
  buttonStyle: {
    flex: 1,
    backgroundColor: 'green',
    marginLeft: 5,
    marginRight: 5,
    borderRadius: 10,
    height:30
},
buttonTextStyle:{
  fontSize: 18,
  fontFamily:'bold',
  fontWeight:'bold',
  margin:2,
  marginLeft:40,
  justifyContent:'center',
  color:'white',
  marginHorizontal:10
},
  title2:{
    fontSize: 25,
    fontFamily:'bold',
    fontWeight:'bold',
    margin:5,
    color:'black',
    marginHorizontal:70
  },
  submit: {
    marginRight: 40,
    marginLeft: 40,
    marginTop: 10,
    paddingTop: 20,
    paddingBottom: 20,
    backgroundColor: '#26ed44',
    borderRadius: 30,
    borderWidth: 1,
    borderColor: '#fff',
  },
});

export default App;