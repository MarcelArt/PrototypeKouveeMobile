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

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    headerShown: false,
  };

  constructor(props) {
    super(props);
    this.state = {
      activePage: 'Katalog',
      username: '',
      password: '',
      modalVisible: false,
    };

    this.products = [
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
    ];

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
  }

  componentDidMount() {}

  onPress() {
    const {navigation} = this.props;
    const {username, password} = this.state;
    let getUser = this.users.find(
      user => user.username === username && user.password === password,
    );

    this.setState({username: '', password: ''});
    Keyboard.dismiss();

    if (getUser) {
      if (getUser.role === 'owner') {
        console.log('go to owner screen');
        navigation.navigate('Owner', {currentUser: getUser});
      } else if (getUser.role === 'cs') {
        console.log('go to cs screen');
      }
    } else {
      //   Toast.show({
      //     text: 'Wrong username or password!',
      //     textStyle: {color: 'red'},
      //     buttonText: 'Okay',
      //     duration: 3000
      //   });

      Alert.alert('Wrong username or password!');

      console.log('not found');
    }
  }

  renderFooter = () => {
    if (this.state.activePage == 'Katalog') {
      return (
        <FooterTab style={Styles.backGround1}>
          <Button
            vertical
            active
            onPress={() => this.setState({activePage: 'Katalog'})}>
            <Icon active name="shopping-bag" type="Feather" />
            <Text>Shop</Text>
          </Button>
          <Button
            vertical
            onPress={() => this.setState({activePage: 'Layanan'})}>
            <Icon name="md-paw" type="Ionicons" />
            <Text>Layanan</Text>
          </Button>
          <Button vertical onPress={() => this.setState({activePage: 'Login'})}>
            <Icon name="person" />
            <Text>Account</Text>
          </Button>
        </FooterTab>
      );
    } else if (this.state.activePage == 'Login') {
      return (
        <FooterTab style={Styles.backGround1}>
          <Button
            vertical
            onPress={() => this.setState({activePage: 'Katalog'})}>
            <Icon name="shopping-bag" type="Feather" />
            <Text>Shop</Text>
          </Button>
          <Button
            vertical
            onPress={() => this.setState({activePage: 'Layanan'})}>
            <Icon name="md-paw" type="Ionicons" />
            <Text>Layanan</Text>
          </Button>
          <Button
            vertical
            active
            onPress={() => this.setState({activePage: 'Login'})}>
            <Icon active name="person" />
            <Text>Account</Text>
          </Button>
        </FooterTab>
      );
    } else if (this.state.activePage == 'Layanan') {
      return (
        <FooterTab style={Styles.backGround1}>
          <Button
            vertical
            onPress={() => this.setState({activePage: 'Katalog'})}>
            <Icon name="shopping-bag" type="Feather" />
            <Text>Shop</Text>
          </Button>
          <Button
            vertical
            active
            onPress={() => this.setState({activePage: 'Layanan'})}>
            <Icon active name="md-paw" type="Ionicons" />
            <Text>Layanan</Text>
          </Button>
          <Button vertical onPress={() => this.setState({activePage: 'Login'})}>
            <Icon name="person" />
            <Text>Account</Text>
          </Button>
        </FooterTab>
      );
    }
  };

  renderContent = () => {
    let {activePage, username, password} = this.state;
    if (activePage == 'Katalog') {
      return (
        <Card>
          <FlatList
            data={this.products}
            renderItem={({item}) => this.renderKatalog(item)}
          />
        </Card>
      );
    } else if (activePage == 'Login') {
      return (
        <Form style={{margin: 10}}>
          <Item stackedLabel style={styles.textbox}>
            <Label>Username</Label>
            <Input
              value={username}
              onChangeText={username => this.setState({username})}
            />
          </Item>
          <Item style={styles.textbox} stackedLabel>
            <Label>Password</Label>
            <Input
              secureTextEntry={true}
              value={password}
              onChangeText={password => this.setState({password})}
            />
          </Item>
          <Button block onPress={() => this.onPress()}>
            <Text>Login</Text>
          </Button>
        </Form>
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
    return (
      <View style={{margin: 10, borderWidth: 2, borderRadius: 10}}>
        <CardItem style={{margin: 5}}>
          <H1>{item.nama}</H1>
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
  };

  renderLayanan = item => {
    return (
      <View style={{margin: 10, borderWidth: 2, borderRadius: 10}}>
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
    let {activePage, username, password} = this.state;
    // console.log('username', username);
    // console.log('password', password);
    return (
      <Container>
        <Header style={Styles.backGround1}>
          <Body>
            <Title>Kouvee Pet Shop</Title>
            <Subtitle>{activePage}</Subtitle>
          </Body>
          <Right>
            <Button
              transparent
              onPress={() => this.setState({modalVisible: true})}>
              <Icon name="info" type="Feather" />
            </Button>
          </Right>
        </Header>
        <Content>
          {this.renderContent()}
          {/* <Modal
            animationType="slide"
            transparent={false}
            visible={this.state.modalVisible}
            onRequestClose={() => {
              Alert.alert('Modal has been closed.');
            }}>
            <View style={{marginTop: 22}}>
              <View>
                <Text>Hello World!</Text>

                <TouchableHighlight
                  onPress={() => {
                    this.setState({modalVisible: false});
                  }}>
                  <Text>Hide Modal</Text>
                </TouchableHighlight>
              </View>
            </View>
          </Modal> */}
        </Content>
        <Footer style={Styles.backGround1}>{this.renderFooter()}</Footer>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  textbox: {
    borderRadius: 5,
    marginBottom: 10,
    width: '100%',
  },
});
