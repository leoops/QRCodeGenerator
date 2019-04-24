import React, { Component } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import QRCode from 'react-native-qrcode-svg';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

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

  callback = dataURL => {
    console.warn(dataURL);
  };

  getRef = ref => (this.qrCodeRef = ref);

  onLayout = ({
    nativeEvent: {
      layout: { width },
    },
  }) => {
    this.setState({ qrCodeSize: width - 80 });
  };

  handleGenerateButton = () => {
    const { textCode } = this.state;
    this.setState({ qrCodeValue: textCode });
  };

  handleExcludeButton = () => {
    this.setState({ qrCodeValue: '' });
  };

  handleSaveButton = () => {
    this.qrCodeRef.toDataURL(this.callback);
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
              paddingTop: 20,
              justifyContent: 'flex-start',
              alignItems: 'center',
            }}
          >
            <View>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  marginTop: 10,
                }}
              >
                {/* Deletar  */}
                <Icon
                  name="delete"
                  size={36}
                  color="red"
                  onPress={this.handleExcludeButton}
                />
                {/* Salvar */}
                <Icon
                  name="check"
                  size={36}
                  color="blue"
                  onPress={this.handleSaveButton}
                />
              </View>
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
