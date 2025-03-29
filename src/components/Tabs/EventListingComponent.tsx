import { View, Text, FlatList } from "react-native";
import React, { useEffect, useState } from "react";
import EventListItemComponent from "../EventListItem/EventListItemComponent";
import { eventListing } from "@/src/utils/dummyData";
import { postRequest } from "@/src/api/apiHelper";
import { api } from "@/src/api/api";
import CustomLoadingComponent from "../LoadingComponent/CustomLoadingComponent";
import { state } from "@/src/valtio/store";
import { useSnapshot } from "valtio";

const EventListingComponent = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const snap = useSnapshot(state);

  const fetchData = async () => {
    setIsLoading(true);
    const res = await postRequest({ url: api.eventListing, data: {} });
    if (res) {
      if (res.data?.success && res.data?.data?.events?.length > 0) {
        state.eventListing = res.data.data.events;
      }
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (isLoading) {
    return <CustomLoadingComponent />;
  }

  if (state.eventListing.length === 0) {
    return (
      <View className="bg-blue-100/50 flex-1 items-center justify-center">
        <Text className="capitalize font-semibold text-lg">
          no events found.
        </Text>
      </View>
    );
  }

  return (
    <View className="bg-blue-100/50 flex-1 px-3 pt-5">
      <FlatList
        data={[...state.eventListing]}
        showsVerticalScrollIndicator={false}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item, index }) => {
          return <EventListItemComponent data={item} />;
        }}
      />
    </View>
  );
};

export default EventListingComponent;
