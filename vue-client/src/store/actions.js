export function searchMealsByName ({ commit }, keyword) {
  axiosClient.get(`/search.php?s=${keyword.value}`)
    .then(({ data }) => {
      debugger;
      commit('SET_SEARCH_MEALS_BY_NAME', data)
    })
};
