import React from "react";
import { FlatList, StyleSheet } from "react-native";
import { listItems } from "@/data";
import { CustomView } from "@/components/customView";
import { CustomText } from "@/components/customText";
import { CustomTouchableOpacity } from "@/components/customTouchableOpacity";
import { AuthGuard } from "../../middewares/authGuard";

export default function ListScreen() {
  const renderItem = ({ item }: any) => (
    <CustomTouchableOpacity type="container">
      <CustomText style={styles.itemName}>{item.name}</CustomText>
      <CustomText style={styles.itemDescription}>{item.description}</CustomText>
    </CustomTouchableOpacity>
  );

  return (
    <AuthGuard>
      <CustomView style={styles.container}>
        <CustomText style={styles.title}>Home</CustomText>
        <FlatList
          data={listItems}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          style={styles.list}
          contentContainerStyle={styles.listContent}
        />
      </CustomView>
    </AuthGuard>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 15,
    marginLeft: 15,
  },
  list: {
    flex: 1,
  },
  listContent: {
    paddingHorizontal: 15,
    paddingBottom: 20,
  },
  itemName: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 5,
  },
  itemDescription: {
    fontSize: 14,
  },
});
