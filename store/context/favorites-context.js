import { createContext, useState } from "react";
import { View, Text } from "react-native";

export const FavoritesContext = createContext({
  ids: [],
  addFavorite: (id) => {},
  removeFavorite: (id) => {},
});

const FavoritesContextProvider = ({ children }) => {
  const [favoriteMealIds, setFavoriteMealIds] = useState([]);
  const addFavorite = (id) => {
    setFavoriteMealIds((currntFavId) => [...currntFavId, id]);
  };
  const removeFavorite = (id) => {
    setFavoriteMealIds((currntFavId) =>
      currntFavId.filter((mealId) => mealId !== id)
    );
  };
  const value = {
    ids: favoriteMealIds,
    addFavorite: addFavorite,
    removeFavorite: removeFavorite,
  };

  return (
    <FavoritesContext.Provider value={value}>
      {children}
    </FavoritesContext.Provider>
  );
};

export default FavoritesContextProvider;
