import {
  View,
  Text,
  Button,
  TouchableOpacity,
  Image,
  ActivityIndicator,
  ScrollView,
} from "react-native";
import React, { useState } from "react";
import { Link, router } from "expo-router";
import CustomTextInput from "../CustomInput/CustomInput";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import { height, width } from "@/src/utils/commonHelper";
import { postRequest } from "@/src/api/apiHelper";
import { api } from "@/src/api/api";

const LoginComponent = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [passwordIsHidden, setPasswordIsHidden] = useState<boolean>(true);
  const [userDetails, setUserDetails] = useState<{
    email: string;
    password: string;
  }>({ email: "", password: "" });
  const [error, setError] = useState<{
    visible: boolean;
    message: string;
  }>({
    visible: false,
    message: "",
  });

  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  const validation = () => {
    if (userDetails.email !== "" && userDetails.password !== "") {
      if (userDetails.password.length < 8) {
        setError({
          visible: true,
          message: "password should be at least 8 characters long.",
        });
        return false;
      }
      if (!emailRegex.test(userDetails.email)) {
        setError({
          visible: true,
          message: "please enter valid email.",
        });
        return false;
      }
      return true;
    } else {
      setError({
        visible: true,
        message: "email and password both are required.",
      });
      return false;
    }
  };

  const signInBtnPress = async () => {
    if (validation()) {
      setIsLoading(true);
      const res = await postRequest({ url: api.login, data: userDetails });
      if (res) {
        setIsLoading(false);
        if (!res.data?.success) {
          setError({
            visible: true,
            message: res.data.message ?? "something went wrong.",
          });
        } else {
          router.navigate("/(tabs)/eventListing");
        }
      }
    }
  };

  return (
    <View className="flex-1 bg-white gap-y-10">
      <View className="bg-gray-400 h-[30%]"></View>
      <View className="h-[70%] px-8 gap-y-2 w-full">
        <>
          <Text className="font-semibold capitalize text-md">email</Text>
          <CustomTextInput
            placeholder="Enter email here"
            placeholderTextColor={"gray"}
            value={userDetails.email}
            onChangeText={(e) => setUserDetails({ ...userDetails, email: e })}
          />
        </>
        <>
          <Text className="font-semibold capitalize text-md">password</Text>
          <CustomTextInput
            placeholder="Enter password here"
            placeholderTextColor={"gray"}
            maxLength={8}
            secureTextEntry={passwordIsHidden}
            value={userDetails.password}
            onChangeText={(e) =>
              setUserDetails({ ...userDetails, password: e })
            }
            rightIcon={
              passwordIsHidden ? (
                <FontAwesome5 name="eye" size={24} color="black" />
              ) : (
                <FontAwesome5 name="eye-slash" size={24} color="black" />
              )
            }
            onRightIconPress={() => setPasswordIsHidden(!passwordIsHidden)}
          />
          <Text className="text-right capitalize text-gray-500 font-medium text-sm">
            forgot password?
          </Text>
        </>
        <View className=" my-2 items-end gap-y-3 mb-2">
          <TouchableOpacity
            className="bg-green-700/80 p-3 px-8 rounded-md min-w-[30%] items-center"
            onPress={signInBtnPress}
            disabled={isLoading}
          >
            {isLoading ? (
              <ActivityIndicator size={"small"} color={"white"} />
            ) : (
              <Text className="text-white capitalize font-medium">sign in</Text>
            )}
          </TouchableOpacity>
          <Text className="text-right capitalize text-black font-medium text-sm">
            not a member? <Text className="underline">sign up here</Text>
          </Text>
          {error.visible && (
            <Text className="text-start w-[100%] capitalize text-red-500 font-medium text-sm">
              {error.message}
            </Text>
          )}
        </View>
        <View className="">
          <View className="flex-row items-center justify-between w-[100%]">
            <View
              className="border-[0.5px] border-black"
              style={{ width: width / 4 }}
            />
            <Text className="text-sm text-black">or Sign In with:</Text>
            <View
              className="border-[0.5px] border-black"
              style={{ width: width / 4 }}
            />
          </View>
          <View className="h-[50%] items-center justify-center flex-row gap-x-5">
            <Image
              source={require("../../../assets/images/googleLogo.png")}
              style={{
                height: height / 15,
                width: width / 9,
                objectFit: "contain",
                backgroundColor: "white",
              }}
              className="shadow-lg"
            />
            <Image
              source={require("../../../assets/images/appleLogo.png")}
              style={{
                height: height / 15,
                width: width / 9,
                objectFit: "contain",
                backgroundColor: "white",
              }}
              className="shadow-lg"
            />
            <Image
              source={require("../../../assets/images/facebookLogo.png")}
              style={{
                height: height / 20,
                width: width / 10,
                backgroundColor: "white",
              }}
              className="shadow-lg"
            />
          </View>
          <View className="items-end">
            <Link
              href={"/(tabs)/eventListing"}
              className="capitalize text-blue-500 underline"
            >
              enter as guest
            </Link>
          </View>
        </View>
      </View>
    </View>
  );
};

export default LoginComponent;
