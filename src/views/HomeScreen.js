import React, { Component } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import QRCode from 'react-native-qrcode-svg';

class HomeScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      textCode: '',
      qrCodeValue: '',
      qrCodeSize: 50,
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
    console.warn(dataURL);
  };

  getRef = ref => (this.qrCodeRef = ref);

  onLayout = ({
    nativeEvent: {
      layout: { width },
    },
  }) => {
    this.setState({ qrCodeSize: width - 50 });
  };
  handleGenerateButton = () => {
    const { textCode } = this.state;
    this.setState({ qrCodeValue: textCode });
  };

  render = () => {
    const { textCode, qrCodeValue, qrCodeSize } = this.state;
    return (
      <View style={{ flex: 1, marginHorizontal: 10 }}>
        <View style={{ marginVertical: 10 }}>
          <TextInput
            style={{
              borderColor: '#000',
              borderWidth: 1,
              borderRadius: 20,
              padding: 10,
              paddingLeft: 12,
              paddingTop: 12,
              justifyContent: 'center',
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
          <View
            onLayout={this.onLayout}
            style={{
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <View style={{ borderColor: '#000', borderWidth: 1, padding: 5 }}>
              <QRCode
                getRef={this.getRef}
                value={qrCodeValue}
                size={qrCodeSize}
              />
            </View>
          </View>
        )}
      </View>
    );
  };
}

export default HomeScreen;
