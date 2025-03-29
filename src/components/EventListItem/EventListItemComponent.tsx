import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import {
  eventListItemPropType,
  singleEventListing,
} from "@/src/types/eventListingTypes";
import { height, width } from "@/src/utils/commonHelper";
import Feather from "@expo/vector-icons/Feather";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { useSnapshot } from "valtio";
import { state } from "@/src/valtio/store";

const EventListItemComponent = (props: eventListItemPropType) => {
  const { data } = props;
  const snap = useSnapshot(state);

  const onFavBtnPress = (event: singleEventListing) => {
    // event.isFavorite === 0 ? (event.isFavorite = 1) : (event.isFavorite = 0);
    event.isFavorite = event.isFavorite === 0 ? 1 : 0;
  };

  // const onFavBtnPress = (event: singleEventListing) => {
  //   const newEvent = state.eventListing.find(
  //     (item) => item.event_id === event.event_id
  //   );
  //   if (newEvent) {
  //     if (event.isFavorite === 0) {
  //       newEvent.isFavorite = 1;
  //     } else {
  //       newEvent.isFavorite = 0;
  //     }
  //   }
  // };

  return (
    <TouchableOpacity
      className="bg-white p-2 rounded-xl my-2 flex-row gap-x-2 items-center"
      activeOpacity={0.6}
    >
      <View className="">
        <Image
          source={{ uri: data.event_profile_img }}
          className="rounded-md"
          style={{
            height: height / 10.5,
            width: width / 5,
          }}
        />
      </View>
      <View className="flex-1">
        <View className="flex-row justify-between items-center">
          <Text
            className="capitalize font-semibold text-lg max-w-[80%]"
            numberOfLines={1}
          >
            {data.event_name}
          </Text>
          <TouchableOpacity>
            <Feather name="arrow-right" size={width / 15} color="black" />
          </TouchableOpacity>
        </View>
        <View className="flex-row justify-between items-center">
          <Text
            className="capitalize font-medium text-md max-w-[50%] text-green-600"
            numberOfLines={1}
          >
            {data.readable_from_date != ""
              ? data.readable_from_date
              : "00.00.00"}{" "}
            - {data.readable_to_date != "" ? data.readable_to_date : "00.00.00"}
          </Text>
          <Text
            className="capitalize text-sm font-medium max-w-[50%] text-gray-600"
            numberOfLines={1}
          >
            {data.city}, {data.country}
          </Text>
        </View>
        <View>
          <Text
            className="capitalize font-md text-sm max-w-[50%] text-gray-600"
            numberOfLines={1}
          >
            €{data.event_price_from} - €{data.event_price_from}
          </Text>
        </View>
        <View className="flex-row justify-between items-center">
          <View className="flex-row gap-x-1 w-[70%]">
            {data.danceStyles.slice(0, 3).map((item, index) => {
              return (
                <Text
                  key={index}
                  className="bg-blue-100 p-1 rounded-full px-2 font-semibold text-[0.8rem]"
                >
                  {item.ds_name}
                </Text>
              );
            })}
          </View>
          <View className="w-[25%] flex-row justify-between gap-x-1">
            <TouchableOpacity className=" p-1 px-2">
              <Feather name="share" size={width / 18} color="black" />
            </TouchableOpacity>
            <TouchableOpacity
              className=" p-1 px-2"
              onPress={() => onFavBtnPress(data)}
            >
              <FontAwesome
                name={data.isFavorite === 0 ? "heart-o" : "heart"}
                size={width / 18}
                color={data.isFavorite === 0 ? "black" : "green"}
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default EventListItemComponent;
