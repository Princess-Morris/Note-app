import { Text, View, StyleSheet, Image } from "react-native";
import PostItImage from '@/assets/images/post-it.png'

const Home = () => {
  return (
    <View
      style={styles.container}
    >
      <Image source={PostItImage} style={styles.image} />
      <Text>Edit app/index.tsx to edit this screen.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    backgroundColor: '#f8f9fa'
  },
  image: {
    width: 100,
    height: 100,
    marginBottom: 20,
    borderRadius: 10
  }
})


export default Home;