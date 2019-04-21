import React, { Component } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import QRCode from 'react-native-qrcode-svg';

class HomeScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      textCode: '',
      qrCodeValue: '',
    };
    this.qrCodeRef;
  }

  /**
   * Metodo de alterção de texto de TextInput
   * @memberof HomeScreen
   * @param {string} text - Novo texto inserido em TextInput
   */
  onChangeText = text => {
    this.setState({ textCode: text });
  };

  getDataURL = () => {
    this.qrCodeRef.toDataURL(this.callback);
  };

  callback = dataURL => {
    console.log(dataURL);
  };

  getRef = ref => (this.qrCodeRef = ref);

  handleGenerateButton = () => {
    const { textCode } = this.state;
    this.setState({ qrCodeValue: textCode });
  };

  render = () => {
    const { textCode, qrCodeValue } = this.state;
    return (
      <View style={{ flex: 1, justifyContent: 'center', marginHorizontal: 10 }}>
        <View style={{ marginVertical: 10 }}>
          <TextInput
            style={{
              borderColor: '#000',
              borderWidth: 1,
              borderRadius: 20,
              padding: 10,
            }}
            value={textCode}
            multiline
            onChangeText={this.onChangeText}
            placeholder="Conteudo"
            placeholderTextColor="#CCC"
          />
        </View>
        <TouchableOpacity
          style={{
            borderColor: '#000',
            borderWidth: 1,
            borderRadius: 20,
            padding: 10,
          }}
          disabled={textCode === ''}
          onPress={this.handleGenerateButton}
        >
          <Text style={{ alignSelf: 'center' }}>Gerar</Text>
        </TouchableOpacity>

        {qrCodeValue !== '' && (
          <View style={{ alignSelf: 'center' }}>
            <QRCode ref={this.getRef} value={qrCodeValue} size={100} />
          </View>
        )}
      </View>
    );
  };
}

export default HomeScreen;
