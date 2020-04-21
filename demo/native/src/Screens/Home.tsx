import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import { router, Route } from "router";

const Home: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text>You are now on the home screen!</Text>
      <Button
        onPress={() => {
          router.goTo("about");
        }}
        title="Go to About"
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
  new Route(Home, {
    id: "home",
    path: "/"
  })
]);
