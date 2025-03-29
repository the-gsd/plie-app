import { Text, View } from "react-native";
import "../../global.css";
import TempComponent from "../components/TempComponent";

export default function Index() {
  return (
    <View
      className="bg-purple-500"
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>Edit app/index.tsx to edit this screen.</Text>
      <TempComponent />
    </View>
  );
}
