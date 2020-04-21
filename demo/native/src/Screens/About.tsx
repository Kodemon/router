import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import { router, Route } from "router";

const About: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text>You are now on the about screen!</Text>
      <Button
        onPress={() => {
          router.goTo("/");
        }}
        title="Go to Home"
        color="#841584"
        accessibilityLabel="Learn more about this purple button"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});

router.register([
  new Route(About, {
    id: "about",
    path: "/about"
  })
]);
