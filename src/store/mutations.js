export function SET_SEARCH_MEALS_BY_NAME(state, meals) {
  state.searchedMeals = meals || [];
};

export function SET_SEARCH_MEALS_BY_LETTER(state, meals) {
  state.mealsByLetter = meals || [];
};

export function SET_SEARCH_MEALS_BY_INGREDIENT(state, meals) {
  state.mealsByIngredient = meals || [];
};

export function SET_INGREDIENT(state, ingredient) {
  state.ingredient = ingredient;
};
