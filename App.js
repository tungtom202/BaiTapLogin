import React from "react";
import { SafeAreaView, StyleSheet, TextInput, View, Text,Button, onPressLearnMore, Alert } from "react-native";

const UselessTextInput = () => {
  const [text, onChangeText] = React.useState(null);
  const [number, onChangeNumber] = React.useState(null);

  return (
    <View style={styles.container}>
    
    <SafeAreaView style={styles.wrap}>
      <Text style={styles.wrap_text}>Login Here</Text>
      <View style={styles.compo_input}>
      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        placeholder="Email..."
        value={text}
      />
      <TextInput
        style={styles.input}
        onChangeText={onChangeNumber}
        value={number}
        placeholder="Password"
        keyboardType="numeric"
      />
      </View>
      <View style={styles.wrap_button1}>
      <View style={styles.wrap_button}>
      <Button
     style={styles.button} 
     onPress={onPressLearnMore}
     title="Đăng nhập "
     color="#00b6ed"
     accessibilityLabel="Learn more about this purple button" 
     />
      </View>

      </View>
     <Text style={styles.forgot_pass}
      onPress={()=> Alert.alert("Đỗ Đăng Tùng ")}>
      Forgot your password?
     </Text>
     <Text style={styles.forgot_pass}
      onPress={()=> Alert.alert("hello ")}>
      Register
     </Text>
    </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  container:{
    flex: 1,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor: '#ddd'
  },
  input: {
    height: 42,
    margin: 12,
    padding: 12,
    borderRadius: 28,
    backgroundColor: '#fff'
  },
  wrap:{
    width: 300,
    height: 500,
  
  },
  compo_input:{
    marginTop: 20
  },
  wrap_text:{
    textAlign: 'center',
    fontSize: 20,
    color: '#999',
    paddingVertical: 15,
    marginBottom: 15
  },
  wrap_button1:{
    width: 300,
    height: 50,
    marginTop: 20
  },

  wrap_button:{

    width: 288,
    paddingLeft: 10
  },
  
  forgot_pass:{
    textAlign:'center', 
    paddingVertical: 20,
    
  }

});

export default UselessTextInput;