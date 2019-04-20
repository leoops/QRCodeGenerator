import React, { Component } from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import QRCode from "react-native-qrcode-svg";

class HomeScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      textCode: "",
      qrCodeValue: ""
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
    this.setState({ qrCodeValue: textCode });
  };

  render = () => {
    const { textCode, qrCodeValue } = this.state;
    return (
      <View style={{ flex: 1, justifyContent: "center" }}>
        <View style={{ marginHorizontal: 10, marginVertical: 10 }}>
          <TextInput
            value={textCode}
            onChangeText={this.onChangeText}
            placeholder="Conteudo"
          />
        </View>
        <TouchableOpacity
          style={{
            flexDirection: "row",
            marginHorizontal: 10,
            backgroundColor: "#CCC",
            padding: 10,
            alignItems: "center",
            justifyContent: "center",
            borderRadius: 5
          }}
          disabled={textCode === ""}
          onPress={this.handleGenerateButton}
        >
          <Text style={{ alignSelf: "center" }}>Gerar</Text>
        </TouchableOpacity>

        {qrCodeValue !== "" && (
          <View style={{ alignSelf: "center" }}>
            <QRCode
              style={{ alignSelf: "center" }}
              value={qrCodeValue}
              size={100}
            />
          </View>
        )}
      </View>
    );
  };
}

export default HomeScreen;
