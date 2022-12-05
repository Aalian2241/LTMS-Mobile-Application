import React, { useState } from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import Signature from "react-native-signature-canvas";
import { useDispatch } from "react-redux";
import { setInvoiceSig } from "../../slices/navSlice";
import tw from 'twrnc';

const Signature_ = ({route,navigation}) => {
  const [signature, setSign] = useState(null);
  const dispatch = useDispatch();
  const handleOK = (signature) => {
    setSign(signature);
    dispatch(setInvoiceSig(signature));
    navigation.navigate("MapScreen")
  };

  const handleEmpty = () => {
    console.log("Empty");
  };

  const style = `.m-signature-pad--footer
    .button {
      background-color: green;
      color: #FFF;
    }`;
  return (
    <View style={tw`flex-1`}>
      <View style={styles.preview}>
        {signature ? (
          <Image
            resizeMode={"contain"}
            style={{ width: 335, height: 114 }}
            source={{ uri: signature }}
          />
        ) : null}
      </View>
      <Signature
        onOK={handleOK}
        onEmpty={handleEmpty}
        descriptionText=""
        clearText="Clear"
        confirmText="Save"
        webStyle={style}
      />
    </View>
  );
};

export default Signature_

const styles = StyleSheet.create({
  preview: {
    width: 335,
    height: 114,
    backgroundColor: "#F8F8F8",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 15,
  },
  previewText: {
    color: "#FFF",
    fontSize: 14,
    height: 40,
    lineHeight: 40,
    paddingLeft: 10,
    paddingRight: 10,
    backgroundColor: "#69B2FF",
    width: 120,
    textAlign: "center",
    marginTop: 10,
  },
});