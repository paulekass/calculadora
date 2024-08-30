import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default function App() {
  const [input, setInput] = useState('');
  const [result, setResult] = useState('');

  const handlePress = (value: string) => {
    if (value === '=') {
      calculateResult();
    } else if (value === 'C') {
      clearInput();
    } else {
      setInput(input + value);
    }
  };

  const calculateResult = () => {
    try {
      const evalResult = eval(input); // Avalia a expressão matemática
      setResult(evalResult.toString());
    } catch (e) {
      setResult('Erro');
    }
  };

  const clearInput = () => {
    setInput('');
    setResult('');
  };

  return (
    <View style={styles.container}>
      <View style={styles.resultContainer}>
        <Text style={styles.inputText}>{input || "0"}</Text>
        <Text style={styles.resultText}>{result}</Text>
      </View>
      <View style={styles.buttonsContainer}>
        {['7', '8', '9', '/'].map((value) => (
          <TouchableOpacity key={value} style={styles.button} onPress={() => handlePress(value)}>
            <Text style={styles.buttonText}>{value}</Text>
          </TouchableOpacity>
        ))}
        {['4', '5', '6', '*'].map((value) => (
          <TouchableOpacity key={value} style={styles.button} onPress={() => handlePress(value)}>
            <Text style={styles.buttonText}>{value}</Text>
          </TouchableOpacity>
        ))}
        {['1', '2', '3', '-'].map((value) => (
          <TouchableOpacity key={value} style={styles.button} onPress={() => handlePress(value)}>
            <Text style={styles.buttonText}>{value}</Text>
          </TouchableOpacity>
        ))}
        {['C', '0', '=', '+'].map((value) => (
          <TouchableOpacity key={value} style={[styles.button, value === '=' && styles.equalsButton]} onPress={() => handlePress(value)}>
            <Text style={[styles.buttonText, value === '=' && styles.equalsButtonText]}>{value}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#282c34',
  },
  resultContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    padding: 20,
    backgroundColor: '#1c1c1c',
  },
  inputText: {
    fontSize: 36,
    color: '#f5f5f5',
  },
  resultText: {
    fontSize: 30,
    color: '#a5a5a5',
  },
  buttonsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    backgroundColor: '#3b3b3b',
    borderTopWidth: 1,
    borderTopColor: '#2c2c2c',
  },
  button: {
    flexBasis: '25%',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    borderWidth: 1,
    borderColor: '#444',
    backgroundColor: '#565656',
  },
  buttonText: {
    fontSize: 28,
    color: '#f5f5f5',
  },
  equalsButton: {
    backgroundColor: '#1abc9c',
  },
  equalsButtonText: {
    color: '#fff',
  },
});
