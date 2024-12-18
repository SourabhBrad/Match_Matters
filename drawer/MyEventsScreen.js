// import React, { useEffect, useState, useContext } from "react";
// import {
//   View,
//   Text,
//   FlatList,
//   TouchableOpacity,
//   StyleSheet,
//   Image,
//   ActivityIndicator,
// } from "react-native";
// import axios from "axios";
// import AsyncStorage from "@react-native-async-storage/async-storage";
// import { getUserId } from "../backend/registrationUtils"; // Adjust the import path
// import { API_URL } from "@env";
// import { UserContext } from "../navigation/UserProvider";
// import LottieView from "lottie-react-native";

// const MyEventsScreen = ({ navigation }) => {
//   const { userId } = useContext(UserContext);
//   const [events, setEvents] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     // Function to fetch created events
//     const fetchCreatedEvents = async () => {
//       try {
//         // const userId = await getUserId(); // Using getUserId to get the user ID
//         if (!userId) {
//           console.error("User ID not found");
//           setLoading(false);
//           return;
//         }

//         const response = await axios.get(`${API_URL}/user/${userId}/events`);
//         if (response.status === 404 || response.data.length === 0) {
//           // If 404 or no events are found
//           setError("No events found"); // Update error state
//           setEvents([]); // Clear events
//         } else {
//           console.log("Fetched created events:", response.data);
//           setEvents(response.data);
//         }
//       } catch (error) {
//         console.error("Failed to fetch created events:", error.message);
//         setError("Failed to fetch created events."); // Set error message
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchCreatedEvents();
//   }, [userId]);

//   const renderEventItem = ({ item }) => {
//     return (
//       <TouchableOpacity
//         style={styles.eventItem}
//         onPress={() =>
//           navigation.navigate("EventDetailsScreen", { eventId: item._id })
//         }
//       >
//         <Image
//           source={{ uri: item.images[0]?.url }} // Assuming images is an array and we get the first image
//           style={styles.eventImage}
//         />
//         <View style={styles.eventInfo}>
//           <Text style={styles.eventTitle}>{item.title}</Text>
//           <Text style={styles.eventDate}>
//             {new Date(item.date).toLocaleDateString()}
//           </Text>
//           <Text style={styles.eventOrganizer}>{item.organizer}</Text>
//           <Text style={styles.eventDetails}>{item.eventDetails}</Text>
//         </View>
//       </TouchableOpacity>
//     );
//   };

//   if (loading) {
//     return <ActivityIndicator size="large" color="#0000ff" />;
//   }

//   if (error) {
//     return <Text style={styles.errorText}>{error}</Text>;
//   }

//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>My Events</Text>
//       <FlatList
//         data={events}
//         keyExtractor={(item) => item._id}
//         renderItem={renderEventItem}
//         ListEmptyComponent={() => (
//           <View style={styles.emptyContainer}>
//             <LottieView
//               source={require("../Onboarding-Screen-2/src/assets/animations/NO_request.json")} // Replace with your own Lottie animation
//               autoPlay
//               loop
//               style={styles.lottieAnimation}
//             />
//             <Text style={styles.emptyText}>No events found</Text>
//           </View>
//         )}
//       />
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 16,
//     backgroundColor: "#fff",
//   },
//   title: {
//     fontSize: 24,
//     fontWeight: "bold",
//     marginBottom: 16,
//     textAlign: "center",
//   },
//   eventItem: {
//     marginVertical: 15,
//     borderRadius: 15,
//     overflow: "hidden",
//     elevation: 5,
//     shadowColor: "#000",
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.3,
//     shadowRadius: 3,
//     backgroundColor: "#000", // Ensure card background blends well
//   },
//   eventImage: {
//     width: "100%",
//     height: 250,
//     resizeMode: "cover",
//   },
//   eventInfo: {
//     position: "absolute",
//     bottom: 0,
//     left: 0,
//     right: 0,
//     backgroundColor: "rgba(0, 0, 0, 0.5)", // Add a semi-transparent overlay
//     padding: 15,
//   },
//   eventTitle: {
//     fontSize: 18,
//     fontWeight: "bold",
//     color: "#fff",
//     marginBottom: 5,
//   },
//   eventDate: {
//     fontSize: 14,
//     color: "#f0f0f0",
//     marginBottom: 5,
//   },
//   eventOrganizer: {
//     fontSize: 14,
//     color: "#d0d0d0",
//     marginBottom: 5,
//   },
//   eventDetails: {
//     fontSize: 12,
//     color: "#c0c0c0",
//   },
//   emptyContainer: {
//     flex: 1,
//     justifyContent: "center",
//     alignItems: "center",
//   },
//   emptyText: {
//     fontSize: 18,
//     color: "#888",
//   },
//   errorText: {
//     color: "red",
//     textAlign: "center",
//     marginTop: 20,
//   },
//   lottieAnimation: {
//     width: 150, // Adjust size of the Lottie animation
//     height: 150,
//     marginBottom: 20,
//   },
// });

// export default MyEventsScreen;

import React, { useEffect, useState, useContext } from "react";
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  Image,
  ActivityIndicator,
} from "react-native";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { getUserId } from "../backend/registrationUtils"; // Adjust the import path
import { API_URL } from "@env";
import { UserContext } from "../navigation/UserProvider";
import LottieView from "lottie-react-native";

const MyEventsScreen = ({ navigation }) => {
  const { userId } = useContext(UserContext);
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Function to fetch created events
    const fetchCreatedEvents = async () => {
      try {
        // const userId = await getUserId(); // Using getUserId to get the user ID
        if (!userId) {
          console.error("User ID not found");
          setLoading(false);
          return;
        }

        const response = await axios.get(`${API_URL}/user/${userId}/events`);

        if (response.status === 404 || response.data.length === 0) {
          // If 404 or no events are found
          setError("No events found"); // Update error state
          setEvents([]); // Clear events
        } else {
          console.log("Fetched created events:", response.data);
          setEvents(response.data);
        }
      } catch (error) {
        console.error("Failed to fetch created events:", error.message);
        setError("Failed to fetch created events."); // Set error message
        setEvents([]); // Clear events
      } finally {
        setLoading(false);
      }
    };

    fetchCreatedEvents();
  }, [userId]);

  const renderEventItem = ({ item }) => {
    return (
      <TouchableOpacity
        style={styles.eventItem}
        onPress={() =>
          navigation.navigate("EventDetailsScreen", { eventId: item._id })
        }
      >
        <Image
          source={{ uri: item.images[0]?.url }} // Assuming images is an array and we get the first image
          style={styles.eventImage}
        />
        <View style={styles.eventInfo}>
          <Text style={styles.eventTitle}>{item.title}</Text>
          <Text style={styles.eventDate}>
            {new Date(item.date).toLocaleDateString()}
          </Text>
          <Text style={styles.eventOrganizer}>{item.organizer}</Text>
          <Text style={styles.eventDetails}>{item.eventDetails}</Text>
        </View>
      </TouchableOpacity>
    );
  };

  if (loading) {
    return <ActivityIndicator size="large" color="#0000ff" />;
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Created Events :</Text>
      <FlatList
        data={events}
        keyExtractor={(item) => item._id}
        renderItem={renderEventItem}
        ListEmptyComponent={() => (
          <View style={styles.emptyContainer}>
            {/* Lottie Animation for No Events */}
            <LottieView
              source={require("../Onboarding-Screen-2/src/assets/animations/NO_request.json")} // Replace with your own Lottie animation
              autoPlay
              loop
              style={styles.lottieAnimation}
            />
            <Text style={styles.emptyText}>No events found</Text>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 16,
    // textAlign: "center",
  },
  eventItem: {
    marginVertical: 15,
    borderRadius: 15,
    overflow: "hidden",
    elevation: 5,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
    backgroundColor: "#000", // Ensure card background blends well
  },
  eventImage: {
    width: "100%",
    height: 250,
    resizeMode: "cover",
  },
  eventInfo: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: "transparent", // Add a semi-transparent overlay
    padding: 15,
  },
  eventTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#fff",
    marginBottom: 5,
  },
  eventDate: {
    fontSize: 14,
    color: "#f0f0f0",
    marginBottom: 5,
  },
  eventOrganizer: {
    fontSize: 14,
    color: "#d0d0d0",
    marginBottom: 5,
  },
  eventDetails: {
    fontSize: 12,
    color: "#c0c0c0",
  },
  emptyContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    justifyContent: "center",
    alignContent: "center",
    top: 120,
  },
  emptyText: {
    fontSize: 18,
    color: "#888",
  },
  errorText: {
    color: "red",
    textAlign: "center",
    marginTop: 20,
  },
  lottieAnimation: {
    width: 200, // Adjust size of the Lottie animation
    height: 200,
    marginBottom: 20,
  },
});

export default MyEventsScreen;
