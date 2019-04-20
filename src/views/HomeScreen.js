import React, { Component } from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";

class HomeScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      textCode: ""
    };
  }

  /**
   * Metodo de alterção de texto de TextInput
   * @memberof HomeScreen
   * @param {string} text - Novo texto inserido em TextInput
   */
  onChangeText = text => {
    this.setState({ textCode: text });
  };

  handleGenerateButton = () => {
    const { textCode } = this.state;
    console.warn(textCode);
  };

  render = () => {
    const { textCode } = this.state;
    return (
      <View>
        <TextInput
          value={textCode}
          onChangeText={this.onChangeText}
          placeholder="Texto para geração"
        />
        <TouchableOpacity onPress={this.handleGenerateButton}>
          <Text>Gerar</Text>
        </TouchableOpacity>
      </View>
    );
  };
}

export default HomeScreen;
