import React, { Component } from 'react';
import {
  Text,
  View,
  Container,
  Content,
  H1,
  Item,
  Input,
  Button,
  Spinner
} from 'native-base';

import styles from './user-login.styles';


export default class UserLogin extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: ''
    }
  }

  handleFieldOnChange (field, value) {
    this.setState({
      [field]: value
    });
  }

  render() {

    if(this.props.authenticated){
                 return (
      <Container style={styles.container}>
        <View style={{flex: 1}}>
           {this.props.sendingData ?
             <Spinner />
           :
             <Button warning block style = {{borderRadius: 30}}
               onPress={() => this.props.userLogin(this.state)}
             >
               <Text>SAIR</Text>
             </Button>
           }
         </View>
      </Container>
    );

  }
  else{

    return (

      <Container style={styles.container}>
        <View style={styles.wrapperTitle}>
          <H1 style={styles.title}>ENTRE</H1>
          <Text>Prazer em te receber novamente. Seja bem-vindo!</Text>
        </View>

        <View style={styles.wrapperForm}>
          <Item regular style={styles.formItem}>
            <Input
              placeholder='Seu e-mail'
              onChangeText={(text) => this.handleFieldOnChange('email', text)}
              value={this.state.email}
              />
          </Item>

          <Item regular style={styles.formItem}>
            <Input
              secureTextEntry
              placeholder='Sua senha'
              onChangeText={(text) => this.handleFieldOnChange('password', text)}
              value={this.state.password}
              />
          </Item>
        </View>

        <View style={{flex: 1}}>
           {this.props.sendingData ?
             <Spinner />
           :
             <Button warning block style = {{borderRadius: 30}}
               onPress={() => this.props.userLogin(this.state)}
             >
               <Text>ENTRAR</Text>
             </Button>
           }
         </View>
      </Container>
    );
  }




  }
}
