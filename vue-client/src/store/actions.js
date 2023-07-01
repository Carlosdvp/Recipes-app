import axiosClient from '@/axiosClient.js';

export function searchMealsByName ({ commit }, keyword) {
  axiosClient.get(`/search.php?s=${keyword}`)
    .then(({ data }) => {
      commit('SET_SEARCH_MEALS_BY_NAME', data.meals)
    })
};

export function searchMealsByLetter ({ commit }, letter) {
  axiosClient.get(`/search.php?f=${letter}`)
    .then(({ data }) => {
      commit('SET_SEARCH_MEALS_BY_LETTER', data.meals)
    })
};

export function searchMealsByIngredient ({ commit }, ingredient) {
  axiosClient.get(`/search.php?i=${ingredient}`)
    .then(({ data }) => {
      commit('SET_SEARCH_MEALS_BY_INGREDIENT', data.meals)
    })
};
