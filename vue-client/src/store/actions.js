import axiosClient from '@/axiosClient.js';

export function searchMealsByName ({ commit }, keyword) {
  axiosClient.get(`/search.php?s=${keyword}`)
    .then(({ data }) => {
      commit('SET_SEARCH_MEALS_BY_NAME', data.meals)
    })
};
