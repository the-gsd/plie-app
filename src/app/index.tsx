import { Redirect } from "expo-router";
import "../../global.css";

export default function Index() {
  return <Redirect href={"/(auth)/login"} />;
  // return <Redirect href={"/(tabs)/eventListing"} />;
}
