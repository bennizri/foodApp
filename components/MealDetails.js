import { Text, View, StyleSheet } from "react-native";

const MealDetail = ({
  duration,
  complexity,
  affordability,
  style,
  textStyle,
}) => {
  return (
    <View style={[styles.details, style]}>
      <Text style={[styles.deatilItem, textStyle]}>{duration}m</Text>
      <Text style={[styles.deatilItem, textStyle]}>
        {complexity.toUpperCase()}
      </Text>
      <Text style={[styles.deatilItem, textStyle]}>
        {affordability.toUpperCase()}
      </Text>
    </View>
  );
};
export default MealDetail;
const styles = StyleSheet.create({
  details: {
    flexDirection: "row",
    alignItems: "center",
    padding: 8,
    justifyContent: "center",
  },
  deatilItem: {
    marginHorizontal: 4,
    fontSize: 12,
  },
});
