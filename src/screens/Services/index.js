import React from "react";
import { FlatList } from "react-native";
import { Item } from "../../components/Item";

export const Services = ({ services }) => {
  return (
    <FlatList
      data={services}
      keyExtractor={({ id }) => String(id)}
      renderItem={({ item: { name, img, price, description } }) => {
        return (
          <Item name={name} img={img} price={price} description={description} />
        );
      }}
    />
  );
};
