# Recipes App - MERN

## Step 1

- Create the folders for the React client and Node server
- Add libraries and a basic server 

## Step 2

- Add a MongoDB database
- Atals:
    - Project: Recipes_App 
- Create a Model for the DB
- Routes
    - begin with the userRouter to handle the /auth endpoint
    - /auth/register > to create a new user
    - /auth/login > create a jwt for the user's session
- create the Recipes Model
- then add the recipes routes
- add verifyToken functionality to user routes file

## Step 3 - Begin the Frontend part

- use Vite with Vue for the project
    - use Pinia for State Management
- will also need Vue router
- we'll also need navigation guards
    - if you try to navigate to a protected route you should be sent to the Login/registration page
- we have the following views:
    - Login
    - Register
    - Recipes
    - Saved Recipes for a user
- Login view
    - authenticate user
    - if the user does not have an account link to Register page
- Once user is Logged in
    - automatically navigate to main Recipes page

