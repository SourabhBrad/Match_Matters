import React, { useEffect, useState } from "react";
import { StyleSheet, View, Image } from "react-native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createDrawerNavigator } from "@react-navigation/drawer";
import SplashScreenView from "./SplashScreenView";
import Login from "./Screens/Login";
import SignNumber from "./Screens/SignNumber";
import OtpScreen from "./Screens/OtpScreen";
import SignEmail from "./Screens/SignEmail";
import NamePage from "./Screens/NamePage";
import AgeScreen from "./Screens/AgeScreen";
import ProfilePicScreen from "./Screens/ProfilePicScreen";
import PreferenceScreen from "./Screens/PreferenceScreen";
import FeedScreen from "./TabScreens/FeedScreen";
import Profile from "./TabScreens/Profile";
import LikedYou from "./TabScreens/LikedYou";
import Chat from "./TabScreens/Chat";
import MostHappening from "./HomeScreens/MostHappening";
import ForYou from "./HomeScreens/ForYou";
import LastScreen from "./Screens/LastScreen";
import StartScreen from "./Screens/StartScreen";
import DrawerContent from "./drawer/DrawerContent"; // Import the new DrawerContent file
import TicketSales from "./HomeScreens/TicketSales";
import Radius from "./HomeScreens/Radius";
import EditProfileScreen from "./HomeScreens/EditProfileScreen";
import VerifyAccountScreen from "./HomeScreens/VerifyAccountScreen";
import MyEventsScreen from "./drawer/MyEventsScreen";
import NotificationsScreen from "./HomeScreens/NotificationsScreen";
import AllEvents from "./drawer/AllEvents";
import MyBookingsScreen from "./drawer/MyBookingsScreen";
import HelpScreen from "./policy/HelpScreen";
import PrivacyCenterScreen from "./policy/PrivacyCenterScreen";
import ContactUsScreen from "./policy/ContactUsScreen";
import FAQScreen from "./policy/FAQScreen";
import CreateEventScreen from "./TabScreens/CreateEventScreen";
import CityEventsScreen from "./HomeScreens/CityEventsScreen";
import EventDetailsScreen from "./HomeScreens/EventDetailsScreen";
import SignPassword from "./Screens/SignPassword";
import ChatRoomScreen from "./TabScreens/ChatRoomScreen";

// Import custom icons
import Connection from "./assets/Connection.png";
import Prefrances from "./assets/Prefrances.png";
import schedule from "./assets/schedule.png";
import Connections from "./assets/Connections.png";
import ProfileImage from "./assets/ProfileImage.png";
import homeicon from "./assets/homeicon.png";
import EmailLogin from "./Screens/LoginScreens/EmailLogin";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

const App = () => {
  const [isShowSplash, setIsShowSplash] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsShowSplash(false);
    }, 2000);
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator>
        {isShowSplash ? (
          <Stack.Screen
            name="SplashScreen"
            component={SplashScreenView}
            options={{ headerShown: false }}
          />
        ) : (
          <>
            <Stack.Screen
              name="StartScreen"
              component={StartScreen}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Login"
              component={Login}
              options={{ headerShown: false }}
            />
          </>
        )}
        <Stack.Screen
          name="SignNumber"
          component={SignNumber}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="OtpScreen"
          component={OtpScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="SignEmail"
          component={SignEmail}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="SignPassword"
          component={SignPassword}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="NamePage"
          component={NamePage}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="AgeScreen"
          component={AgeScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="ProfilePicScreen"
          component={ProfilePicScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="PreferenceScreen"
          component={PreferenceScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="LastScreen"
          component={LastScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="HomeScreen"
          component={DrawerNavigator}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="MostHappening"
          component={MostHappening}
          options={{
            title: "MostHappening",
            headerShown: true,
            headerTitleAlign: "center", // Align title to center
            // tabBarIcon: ({ focused }) => (
            //   <MaterialCommunityIcons
            //     name="home"
            //     size={30}
            //     color={focused ? "#BF1013" : "#FF5A5F"}
            //   />
            // ),
          }}
        />
        <Stack.Screen
          name="ForYou"
          component={ForYou}
          options={{
            title: "For You",
            headerShown: true,
            headerTitleAlign: "center", // Align title to center
          }}
        />
        <Stack.Screen
          name="TicketSales"
          component={TicketSales}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Radius"
          component={Radius}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="EditProfileScreen"
          component={EditProfileScreen}
          options={{
            title: "Edit Profile",
            headerShown: true,
            headerTitleAlign: "center",
          }}
        />
        <Stack.Screen
          name="VerifyAccountScreen"
          component={VerifyAccountScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="MyEvents"
          component={MyEventsScreen}
          options={{
            title: "Create Event",
            headerShown: true,
            headerTitleAlign: "center", // Align title to center
          }}
        />
        <Stack.Screen
          name="CreateEventScreen"
          component={CreateEventScreen}
          options={{
            title: "Create Event",
            headerShown: true,
            headerTitleAlign: "center", // Align title to center
          }}
        />
        <Stack.Screen
          name="CityEventsScreen"
          component={CityEventsScreen}
          options={{
            title: "Create Event",
            headerShown: true,
            headerTitleAlign: "center", // Align title to center
          }}
        />
        <Stack.Screen
          name="EventDetailsScreen"
          component={EventDetailsScreen}
          options={{
            title: "Event Details",
            headerShown: true,
            headerTitleAlign: "center", // Align title to center
          }}
        />
        <Stack.Screen
          name="EmailLogin"
          component={EmailLogin}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="ChatRoomScreen"
          component={ChatRoomScreen}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const TabNavigator = () => {
  return (
    // <Tab.Navigator
    //   initialRouteName="FeedScreen"
    //   screenOptions={({ route }) => ({
    //     tabBarShowLabel: true,
    //     headerShown: false,
    //     tabBarStyle: {
    //       position: "absolute",
    //       bottom: 0,
    //       right: 0,
    //       left: 0,
    //       elevation: 0,
    //       height: 100,
    //       // backgroundColor: route.name === "Home" ? "transparent" : "#fff",
    //       borderTopWidth: 0,
    //     },
    //     tabBarLabelStyle: {
    //       fontSize: 12,
    //       marginBottom: 10,
    //       color: "#000",
    //     },
    //     tabBarIconStyle: {
    //       marginTop: 10,
    //     },
    //   })}
    // >
    //   <Tab.Screen
    //     name="FeedScreen"
    //     component={FeedScreen}
    //     options={{
    //       title: "Home",
    //       tabBarIcon: ({ focused, color }) => (
    //         <MaterialCommunityIcons
    //           name="home"
    //           size={30}
    //           color={focused ? "#BF1013" : "#FF5A5F"}
    //         />
    //       ),
    //     }}
    //   />

    //   <Tab.Screen
    //     name="Liked"
    //     component={LikedYou}
    //     options={{
    //       title: "Liked",
    //       tabBarIcon: ({ focused, color }) => (
    //         <MaterialCommunityIcons
    //           name="heart"
    //           size={30}
    //           color={focused ? "#BF1013" : "#FF5A5F"}
    //         />
    //       ),
    //     }}
    //   />
    //   <Tab.Screen
    //     name="Chat"
    //     component={Chat}
    //     options={{
    //       title: "Chat",
    //       tabBarIcon: ({ focused, color }) => (
    //         <MaterialCommunityIcons
    //           name="chat"
    //           size={30}
    //           color={focused ? "#BF1013" : "#FF5A5F"}
    //         />
    //       ),
    //     }}
    //   />
    //   <Tab.Screen
    //     name="ForYou"
    //     component={ForYou}
    //     options={{
    //       title: "For You",
    //       tabBarIcon: ({ focused, color }) => (
    //         <MaterialCommunityIcons
    //           name="star"
    //           size={30}
    //           color={focused ? "#BF1013" : "#FF5A5F"}
    //         />
    //       ),
    //     }}
    //   />
    //   <Tab.Screen
    //     name="Profile"
    //     component={Profile}
    //     options={{
    //       title: "Profile",
    //       tabBarIcon: ({ focused, color }) => (
    //         <MaterialCommunityIcons
    //           name="account"
    //           size={30}
    //           color={focused ? "#BF1013" : "#FF5A5F"}
    //         />
    //       ),
    //     }}
    //   />
    // </Tab.Navigator>

    <Tab.Navigator
      initialRouteName="FeedScreen"
      screenOptions={({ route }) => ({
        tabBarShowLabel: true,
        tabBarStyle: {
          position: "absolute",
          bottom: 0,
          right: 0,
          left: 0,
          elevation: 0,
          height: 100,
          borderTopWidth: 0,
        },
        tabBarLabelStyle: {
          fontSize: 12,
          marginBottom: 10,
          color: "#000",
        },
        tabBarIconStyle: {
          marginTop: 10,
        },
      })}
    >
      <Tab.Screen
        name="FeedScreen"
        component={FeedScreen}
        options={{
          title: "Home",
          headerShown: true,
          headerTitleAlign: "center",
          headerTitle: () => (
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                backgroundColor: "transparent",
              }}
            >
              <Image
                source={require("./assets/Match matters logo (1).png")}
                style={{ width: 150, height: 40 }}
                resizeMode="cover"
              />
            </View>
          ),
          tabBarIcon: ({ focused }) => (
            <MaterialCommunityIcons
              name="home"
              size={30}
              color={focused ? "#BF1013" : "#FF5A5F"}
            />
          ),
        }}
      />

      <Tab.Screen
        name="Liked"
        component={LikedYou}
        options={{
          title: "Liked",
          headerShown: true,
          headerTitleAlign: "center", // Align title to center
          tabBarIcon: ({ focused }) => (
            <MaterialCommunityIcons
              name="heart"
              size={30}
              color={focused ? "#BF1013" : "#FF5A5F"}
            />
          ),
        }}
      />

      <Tab.Screen
        name="CreateEventScreen"
        component={CreateEventScreen}
        options={{
          title: "Events",
          headerShown: true,
          headerTitleAlign: "center", // Align title to center
          tabBarIcon: ({ focused }) => (
            <MaterialCommunityIcons
              name="plus"
              size={30}
              color={focused ? "#BF1013" : "#FF5A5F"}
            />
          ),
        }}
      />

      <Tab.Screen
        name="Chat"
        component={Chat}
        options={{
          title: "Chat",
          headerShown: true,
          headerTitleAlign: "center", // Align title to center
          tabBarIcon: ({ focused }) => (
            <MaterialCommunityIcons
              name="chat"
              size={30}
              color={focused ? "#BF1013" : "#FF5A5F"}
            />
          ),
        }}
      />

      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          title: "Profile",
          headerShown: true,
          headerTitleAlign: "center", // Align title to center
          tabBarIcon: ({ focused }) => (
            <MaterialCommunityIcons
              name="account"
              size={30}
              color={focused ? "#BF1013" : "#FF5A5F"}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator
      initialRouteName="Home"
      drawerPosition="left"
      screenOptions={{ headerShown: false }}
      drawerContent={(props) => <DrawerContent {...props} />}
    >
      <Drawer.Screen name="Home" component={TabNavigator} />
      <Drawer.Screen name="Profile" component={Profile} />
      <Drawer.Screen name="LikedYou" component={LikedYou} />
      <Drawer.Screen name="Chat" component={Chat} />
      {/* <Drawer.Screen name="ForYou" component={ForYou} /> */}
      {/* <Drawer.Screen name="MyEvents" component={MyEventsScreen} /> */}
      <Drawer.Screen name="Notifications" component={NotificationsScreen} />
      <Drawer.Screen
        name="AllEvents"
        component={AllEvents}
        options={{
          title: "AllEvents",
          headerShown: true,
          headerTitleAlign: "center", // Align title to center
        }}
      />
      <Drawer.Screen
        name="MyBookings"
        component={MyBookingsScreen}
        options={{
          title: "My Bookings",
          headerShown: true,
          headerTitleAlign: "center", // Align title to center
        }}
      />
      <Drawer.Screen name="Help" component={HelpScreen} />
      <Drawer.Screen name="PrivacyCenter" component={PrivacyCenterScreen} />
      <Drawer.Screen name="ContactUs" component={ContactUsScreen} />
      <Drawer.Screen
        name="FAQs"
        component={FAQScreen}
        options={{
          title: "FAQ",
          headerShown: true,
          headerTitleAlign: "center",
        }}
      />
    </Drawer.Navigator>
  );
};

export default App;
