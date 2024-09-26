import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const GrowBusinessScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.p1} />
      <View style={styles.circle_p2} />
      <Text style={styles.title_p3}>Đỗ Tiến Lượng</Text>
      <Text style={styles.subtitle_p4}>
        Chúng ta sẽ học React Native một cách nghiêm túc nhé.
      </Text>
      <View style={styles.buttonContainer_p5}>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>LOGIN</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>SIGN UP</Text>
        </TouchableOpacity>
      </View>   
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#87CEEB',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  p1: {
    flex: 2,
  },
  circle_p2: {
    width: 150,
    height: 150,
    borderRadius: 75,
    borderWidth: 10,
    borderColor: 'black',
    marginBottom: 50,
  },
  title_p3: {
    flex: 2,
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
    marginBottom: 10,
  },
  subtitle_p4: {
    flex: 2,
    fontSize: 18,
    color: 'white',
    textAlign: 'center',
    marginBottom: 30,
  },
  buttonContainer_p5: {
    flexDirection: 'row',
  },
  button: {
    backgroundColor: 'yellow',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginHorizontal: 10,
    marginBottom: 30
  },
  buttonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black',
  },
});

export default GrowBusinessScreen;