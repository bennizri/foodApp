import { Text, FlatList, View, StyleSheet } from "react-native";
import { CATEGORIES } from "../data/dummy-data";
import CategoryGridTitle from "../components/CategoryGridTitle";
const CategoryScreen = ({ navigation }) => {
  const renderCategoryItem = (itemData) => {
    const pressHandler = () => {
      navigation.navigate("MealsOverview", {
        categoryId: itemData.item.id,
        categortColor: itemData.item.color,
        categortTitle: itemData.item.title,
      });
    };
    return (
      <CategoryGridTitle
        onPress={pressHandler}
        title={itemData.item.title}
        color={itemData.item.color}
      />
    );
  };
  return (
    <FlatList
      data={CATEGORIES}
      keyExtractor={(item) => item.id}
      renderItem={renderCategoryItem}
      numColumns={2}
    />
  );
};
export default CategoryScreen;

const styles = StyleSheet.create({});
