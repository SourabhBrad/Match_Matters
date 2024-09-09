import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import axios from "axios";
import { API_URL } from "@env";
import { saveToken } from "../../backend/token";

export default function EmailLogin({ navigation }) {
  const [emailId, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    if (!emailId || !password) {
      alert("Please enter both email and password.");
      return;
    }

    try {
      const response = await axios.post(`${API_URL}/user/login`, {
        emailId: emailId,
        password: password,
      });

      if (response.data.success) {
        const { token } = response.data; // Assuming the token is in response.data
        if (token) {
          await saveToken(token); // Save the token
          console.log("JWT token saved successfully!");
          navigation.navigate("HomeScreen");
        } else {
          alert("No token received from the server.");
        }
      } else {
        alert("Login failed. Please check your email or password.");
      }
    } catch (error) {
      console.error("Error logging in:", error);
      alert("An error occurred. Please try again later.");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>
      <TextInput
        style={styles.input}
        placeholder="Email ID"
        value={emailId}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry={true}
      />
      <TouchableOpacity onPress={handleLogin} style={styles.button}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  input: {
    width: "80%",
    height: 50,
    borderColor: "#ddd",
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 10,
    marginBottom: 20,
  },
  button: {
    width: "80%",
    height: 50,
    backgroundColor: "#BF1013",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 8,
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
  },
});