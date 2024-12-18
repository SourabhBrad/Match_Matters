import React, { useState, useContext, useRef, useEffect } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Animated,
} from "react-native";
import axios from "axios";
import { UserContext } from "../../navigation/UserProvider"; // Adjust the import based on your project structure
import { API_URL } from "@env";

export default function EmailLogin({ navigation }) {
  const { loginUser } = useContext(UserContext); // Get loginUser from context
  const [emailId, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const fadeAnimation = useRef(new Animated.Value(0)).current;

  const handleLogin = async () => {
    console.log("API URL:", API_URL);
    if (!emailId || !password) {
      alert("Please enter both email and password.");
      return;
    }

    try {
      const response = await axios.post(`${API_URL}/user/login`, {
        emailId: emailId,
        password: password,
      });

      console.log("Login Response:", response.data);

      if (response.data.success) {
        const { token, user } = response.data; // Capture token and user data

        if (token && user) {
          // Use the loginUser function from context to save token and user data
          loginUser({ token, user }); // This will save token, user, and userId in the context

          console.log("Login successful!");

          // Redirect to the home screen after successful login
          // navigation.navigate("Feedscreen");
          navigation.navigate("MainTabs", { screen: "FeedScreen" });
          // navigation.navigate("MainDrawer", {
          //   screen: "FeedScreen",
          // });
          // navigation.navigate("AppStack");
        } else {
          alert("No token or user data received from the server.");
        }
      } else {
        alert("Login failed. Please check your email or password.");
      }
    } catch (error) {
      console.error("Error logging in:", error);
      if (error.response) {
        alert(`Error: ${error.response.data.message || error.message}`);
      } else {
        alert("An error occurred. Please try again later.");
      }
    }
  };

  useEffect(() => {
    Animated.timing(fadeAnimation, {
      toValue: 1,
      duration: 1500,
      useNativeDriver: true,
    }).start();
  }, [fadeAnimation]);

  return (
    <Animated.View style={[styles.container, { opacity: fadeAnimation }]}>
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
      <TouchableOpacity
        onPress={() => navigation.navigate("ForgotPasswordScreen")}
        style={{ marginTop: 40 }}
      >
        <Text style={{ color: "#BF1013" }}>Forgot Password?</Text>
      </TouchableOpacity>
    </Animated.View>
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
