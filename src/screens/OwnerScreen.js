import React from 'react';
import {
  FlatList,
  View,
  Image,
  Keyboard,
  StyleSheet,
  Alert,
  Modal,
  TouchableHighlight,
} from 'react-native';
import {
  Container,
  Header,
  Content,
  Footer,
  FooterTab,
  Button,
  Icon,
  Text,
  Card,
  CardItem,
  Form,
  Item,
  Input,
  Label,
  Title,
  Left,
  Body,
  H1,
  Right,
  Toast,
  Subtitle,
} from 'native-base';

import Styles from '../utils/styles';

import blue from '../assets/blue.jpg';
import canidae from '../assets/canidae.jpg';
import diamond from '../assets/diamond.jpg';
import instinct from '../assets/instinct.jpg';
import logic from '../assets/logic.jpg';
import nulo from '../assets/nulo.jpg';
import orijen from '../assets/orijen.jpg';
import tow from '../assets/tow.jpg';
import wellness from '../assets/wellness.jpg';
import NoImage from '../assets/no-image-available-icon.jpg.png';
import grooming from '../assets/cat_bath.jpg';
import hotel from '../assets/BreakfastTime.jpg';
import klinik from '../assets/petclinic.jpeg';

export default class OwnerScreen extends React.Component {
  static navigationOptions = {
    headerShown: false,
  };

  constructor(props) {
    super(props);
    this.state = {
      activePage: 'Produk',
      addingProduct: false,
      namaProduct: '',
      hargaProduct: 0,
      products: [
        {
          id: 1,
          nama: 'Blue',
          harga: 20000,
          gambar: blue,
        },
        {
          id: 2,
          nama: 'Canidae',
          harga: 60000,
          gambar: canidae,
        },
        {
          id: 3,
          nama: 'Diamond',
          harga: 200000,
          gambar: diamond,
        },
        {
          id: 4,
          nama: 'Instinct',
          harga: 100000,
          gambar: instinct,
        },
        {
          id: 5,
          nama: 'Logic',
          harga: 50000,
          gambar: logic,
        },
        {
          id: 6,
          nama: 'Nulo',
          harga: 50000,
          gambar: nulo,
        },
        {
          id: 7,
          nama: 'Orijen',
          harga: 60000,
          gambar: orijen,
        },
        {
          id: 8,
          nama: 'TOW',
          harga: 100000,
          gambar: tow,
        },
        {
          id: 9,
          nama: 'Wellness',
          harga: 80000,
          gambar: wellness,
        },
      ],
    };

    this.services = [
      {
        id: 1,
        nama: 'Grooming',
        harga: 20000,
        gambar: grooming,
      },
      {
        id: 2,
        nama: 'Penitipan Hewan',
        harga: 60000,
        gambar: hotel,
      },
      {
        id: 3,
        nama: 'Klinik',
        harga: 200000,
        gambar: klinik,
      },
    ];

    this.users = [
      {
        id: 1,
        username: 'owner',
        password: 'owner',
        role: 'owner',
        nama: 'Pak Jose',
      },
      {
        id: 2,
        username: 'customer',
        password: 'service',
        role: 'cs',
        nama: 'Bu Gisel',
      },
    ];
    this.currentUser = props.navigation.getParam('currentUser');
  }

  componentDidMount() {}

  saveProduct() {
    const {products, namaProduct, hargaProduct} = this.state;

    products.push({
      id: Math.floor(Math.random() * 100),
      nama: namaProduct,
      harga: hargaProduct,
      gambar: NoImage,
    });

    this.setState({
      products,
      addingProduct: false,
      namaProduct: '',
      hargaProduct: 0,
    });
  }

  eraseProduct(id) {
    const {products} = this.state;
    console.log('eraseProduct');
    let i = products.findIndex(product => product.id===id);
    console.log('i', i);
    products.splice(i, 1);
    
    this.setState({products});
  }

  renderFooter = () => {
    if (this.state.activePage == 'Produk') {
      return (
        <FooterTab style={Styles.backGround1}>
          <Button
            vertical
            active
            onPress={() => this.setState({activePage: 'Produk'})}>
            <Icon active name="shopping-bag" type="Feather" />
            <Text>Produk</Text>
          </Button>
          <Button
            vertical
            onPress={() => this.setState({activePage: 'Layanan'})}>
            <Icon name="smile" type="Feather" />
            <Text>Layanan</Text>
          </Button>
          <Button vertical onPress={() => this.setState({activePage: 'Hewan'})}>
            <Icon name="md-paw" type="Ionicons" />
            <Text>Hewan</Text>
          </Button>
        </FooterTab>
      );
    } else if (this.state.activePage == 'Hewan') {
      return (
        <FooterTab style={Styles.backGround1}>
          <Button
            vertical
            onPress={() => this.setState({activePage: 'Produk'})}>
            <Icon name="shopping-bag" type="Feather" />
            <Text>Produk</Text>
          </Button>
          <Button
            vertical
            onPress={() => this.setState({activePage: 'Layanan'})}>
            <Icon name="smile" type="Feather" />
            <Text>Layanan</Text>
          </Button>
          <Button
            vertical
            active
            onPress={() => this.setState({activePage: 'Hewan'})}>
            <Icon active name="md-paw" type="Ionicons" />
            <Text>Hewan</Text>
          </Button>
        </FooterTab>
      );
    } else if (this.state.activePage == 'Layanan') {
      return (
        <FooterTab style={Styles.backGround1}>
          <Button
            vertical
            onPress={() => this.setState({activePage: 'Produk'})}>
            <Icon name="shopping-bag" type="Feather" />
            <Text>Produk</Text>
          </Button>
          <Button
            vertical
            active
            onPress={() => this.setState({activePage: 'Layanan'})}>
            <Icon active name="smile" type="Feather" />
            <Text>Layanan</Text>
          </Button>
          <Button vertical onPress={() => this.setState({activePage: 'Hewan'})}>
            <Icon name="md-paw" type="Ionicons" />
            <Text>Hewan</Text>
          </Button>
        </FooterTab>
      );
    }
  };

  renderContent = () => {
    let {activePage, addingProduct} = this.state;
    if (activePage == 'Produk') {
      return (
        <Card>
          <FlatList
            data={this.state.products}
            renderItem={({item}) => this.renderKatalog(item)}
          />
          <View style={{margin: 10, borderWidth: 2, borderRadius: 10}}>
            {addingProduct ? this.renderAddProduct() : null}
            <CardItem style={{margin: 5}}>
              <Body />
              <Right>
                <Button
                  rounded
                  success
                  iconLeft
                  onPress={() => this.setState({addingProduct: true})}>
                  {addingProduct ? (
                    <Button
                      rounded
                      danger
                      iconLeft
                      onPress={() => this.setState({addingProduct: false})}>
                      <Icon name="remove" type="FontAwesome" />
                      <Text>Batal</Text>
                    </Button>
                  ) : (
                    <Button
                      rounded
                      success
                      iconLeft
                      onPress={() => this.setState({addingProduct: true})}>
                      <Icon name="plus" type="FontAwesome5" />
                      <Text>Tambah</Text>
                    </Button>
                  )}
                </Button>
              </Right>
            </CardItem>
          </View>
        </Card>
      );
    } else if (activePage == 'Layanan') {
      return (
        <Card>
          <FlatList
            data={this.services}
            renderItem={({item}) => this.renderLayanan(item)}
          />
        </Card>
      );
    }
  };

  renderKatalog = item => {
    if (item.nama) {
      return (
        <View style={{margin: 10, borderWidth: 2, borderRadius: 10}}>
          <CardItem style={{margin: 5}}>
            <H1>{item.nama}</H1>
            <Body />
            <Right>
              <Button
                danger
                transparent
                onPress={() => this.eraseProduct(item.id)}>
                <Icon name="trash-2" type="Feather" />
              </Button>
            </Right>
          </CardItem>
          <CardItem cardBody>
            <Image
              source={item.gambar}
              style={{width: null, flex: 1, borderRadius: 15}}
            />
          </CardItem>
          <CardItem>
            <Body></Body>
            <Right>
              <Text>Rp.{item.harga}</Text>
            </Right>
          </CardItem>
        </View>
      );
    }
    else {
      return null;
    }
  };

  renderAddProduct = () => {
    const {namaProduct, hargaProduct, products} = this.state;
    return (
      <View>
        <CardItem cardBody>
          <Image
            source={NoImage}
            style={{height: 200, width: null, flex: 1, borderRadius: 15}}
          />
        </CardItem>
        <CardItem>
          <Form style={{width: 300}}>
            <Item stackedLabel>
              <Label>Nama</Label>
              <Input
                value={namaProduct}
                onChangeText={namaProduct => this.setState({namaProduct})}
              />
            </Item>
            <Item stackedLabel>
              <Label>Harga</Label>
              <Input
                keyboardType="numeric"
                value={hargaProduct}
                onChangeText={hargaProduct => this.setState({hargaProduct})}
              />
            </Item>
          </Form>
        </CardItem>
        <CardItem>
          <Body />
          <Right>
            <Button rounded success iconLeft onPress={() => this.saveProduct()}>
              <Icon name="save" type="FontAwesome" />
              <Text>Simpan</Text>
            </Button>
          </Right>
        </CardItem>
      </View>
    );
  };

  renderLayanan = item => {
    return (
      <View style={{margin: 10, borderWidth: 1, borderRadius: 10}}>
        <CardItem style={{margin: 5}}>
          <H1>{item.nama}</H1>
        </CardItem>
        <CardItem cardBody>
          <Image
            source={item.gambar}
            style={{height: 200, width: null, flex: 1, borderRadius: 15}}
          />
        </CardItem>
        <CardItem>
          <Body></Body>
          <Right>
            <Text>Rp.{item.harga}</Text>
          </Right>
        </CardItem>
      </View>
    );
  };

  render() {
    console.log('this.state', this.state);
    return (
      <Container>
        <Header style={Styles.backGround1}>
          <Body>
            <Title>Kouvee Pet Shop Management</Title>
            <Subtitle>Selamat datang {this.currentUser.nama}</Subtitle>
          </Body>
        </Header>
        <Content>{this.renderContent()}</Content>
        <Footer style={Styles.backGround1}>{this.renderFooter()}</Footer>
      </Container>
    );
  }
}
