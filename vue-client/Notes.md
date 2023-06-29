# Vue Frontend

- Tech used
    - Vue
    - Vuex
    - Vue-router
    - Axios
    - TailwindCSS

- 3rd Party API
    - https://www.themealdb.com/api.php

- endpoints available for the free api

Search meal by name
    www.themealdb.com/api/json/v1/1/search.php?s=Arrabiata
List all meals by first letter
    www.themealdb.com/api/json/v1/1/search.php?f=a
Lookup full meal details by id
    www.themealdb.com/api/json/v1/1/lookup.php?i=52772
Lookup a single random meal
    www.themealdb.com/api/json/v1/1/random.php
List all meal categories
    www.themealdb.com/api/json/v1/1/categories.php
List all Categories, Area, Ingredients
    www.themealdb.com/api/json/v1/1/list.php?c=list
    www.themealdb.com/api/json/v1/1/list.php?a=list
    www.themealdb.com/api/json/v1/1/list.php?i=list
Filter by main ingredient
    www.themealdb.com/api/json/v1/1/filter.php?i=chicken_breast
Filter by Category
    www.themealdb.com/api/json/v1/1/filter.php?c=Seafood
Filter by Area
    www.themealdb.com/api/json/v1/1/filter.php?a=Canadian

- branch: vuie-ui/Home-page
    - this has the hookup to the Recipes api and the respective MongoDB collection
    - this is being set aside for now as a PoC and for future reference in integrating my Recipes API. I will have to expand the API and change how the data is stored in the DB
    - I plan to use the Meals API as a reference to structure the Recipes API and DB in the future.

## Steps

1. Create the Frontend UI skeleton
    - Home page with search bar
    - add Navbar 
    - add remaining components
2. make usre it all works, routing, api calls, etc.
3. Flesh out the first component
    - MealsByName
    - implement a search function that makes the api call and stores the returned data in the store (to save on unnecessary api calls)
4. Once we are receiving the data we want from the api it is time to render on the page and to style the results
    - select data elements taht we want to display
    - style them so that it look nice