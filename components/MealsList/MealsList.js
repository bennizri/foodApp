import { View, FlatList, StyleSheet } from "react-native";
import MealItem from "./MealItem";

const MealsList = ({ items }) => {
  const renderMealItem = (itemData) => {
    const meaItemProps = {
      id: itemData.item.id,
      title: itemData.item.title,
      imageUrl: itemData.item.imageUrl,
      affordability: itemData.item.affordability,
      duration: itemData.item.duration,
      complexity: itemData.item.complexity,
    };
    return <MealItem {...meaItemProps} />;
  };
  return (
    <View style={styles.container}>
      <FlatList
        data={items}
        renderItem={renderMealItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

export default MealsList;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});
