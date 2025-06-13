import { Text, View, StyleSheet, Image } from "react-native";
import PostItImage from '@/assets/images/post-it.png'

const Home = () => {
  return (
    <View
      style={styles.container}
    >
      <Image source={PostItImage} />
      <Text>Edit app/index.tsx to edit this screen.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  }
})


export default Home;