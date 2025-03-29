import { state } from "@/src/valtio/store";
import React from "react";
import { FlatList, Text, View } from "react-native";
import EventListItemComponent from "../EventListItem/EventListItemComponent";
import { useSnapshot } from "valtio";

const FavoriteEventsComponent = () => {
  const snap = useSnapshot(state);
  const favEventsData = state.eventListing.filter(
    (item) => item.isFavorite === 1
  );

  if (favEventsData.length === 0) {
    return (
      <View className="bg-blue-100/50 flex-1 items-center justify-center">
        <Text className="capitalize font-semibold text-lg">
          no favorite events found.
        </Text>
      </View>
    );
  }

  return (
    <View className="bg-blue-100/50 flex-1 px-3 pt-5">
      <FlatList
        data={favEventsData}
        showsVerticalScrollIndicator={false}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item, index }) => {
          return <EventListItemComponent data={item} />;
        }}
      />
    </View>
  );
};

export default FavoriteEventsComponent;
