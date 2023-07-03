# Recipes App
## Vue Front end and themealdb API

API = 'https://www.themealdb.com/api/json/v1/1'

## Vue Frontend

- Tech used
    - Vue
    - Vuex
    - Vue-router
    - Axios
    - TailwindCSS

- 3rd Party API
    - https://www.themealdb.com/api.php

### endpoints used

Search meal by name
    www.themealdb.com/api/json/v1/1/search.php?s=Arrabiata
List all meals by first letter
    www.themealdb.com/api/json/v1/1/search.php?f=a
Lookup a single random meal
    www.themealdb.com/api/json/v1/1/random.php
List all Ingredients
    www.themealdb.com/api/json/v1/1/list.php?i=list
Filter by main ingredient
    www.themealdb.com/api/json/v1/1/filter.php?i=chicken_breast

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

5. Add and then style the components and vies
6. In the MealsByLetter component
    - after adding the required elements to the store and getting the data to render on the page
    - we need to listen for clicks and for route changes
    - Initial state only render on first letter selection, then it is necessary to reload the page to be able to select another letter and get those recipes.
7. Add a .env file for the baseUrl, this way it won;t be hardcoded into the application and the backend API can be switched out if necessary.

8. MealByIngredient is up next
    - Show the ingredients on the page
    - style the ingredient 'cards'

9. We also need to create a new component and a new route to take us to the Ingredient's page when we click on one of the cards in the MealsByIngredient view.