import express from 'express'
import mongoose from 'mongoose'
import { RecipeModel } from "../models/Recipes.js"

const recipeRouter = express.Router();

// get all recipes in db
recipeRouter.get('/', async (req, res) => {
  try {
    let response = await RecipeModel.find({}); 
    res.json(response);
  } catch (error) {
    res.json(error)
  }
})

// add a recipe
recipeRouter.post('/', async (req, res) => {
  let recipe = new RecipeModel(req.body);

  try {
    const response = await recipe.save();
    res.json({
      createdRecipe: {
        name: response.name,
        ingredients: response.ingredients,
        _id: response._id
      }
    });
  } catch (error) {
    res.status(500).json(error)
  }
})

// get recipe by ID
recipeRouter.get('/:recipeId', async (req, res) => {
  try {
    const result = await RecipeModel.findById(req.params.recipeId);
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json(error)
  }
})

// save a recipe
recipeRouter.put('/', async (req, res) => {
  try {
    let recipe = await RecipeModel.findById(req.body.recipeId);
    let user = await UserModel.findById(req.body.userId);

    user.savedRecipes.push(recipe);
    await user.save();

    res.json({ savedRecipes: user.savedRecipes });
  } catch (error) {
    res.json(error)
  }
})

// Get id of saved recipes
recipeRouter.get("/savedRecipes/ids/:userId", async (req, res) => {
  try {
    const user = await UserModel.findById(req.body.userId);
    res.status(201).json({ savedRecipes: user?.savedRecipes });
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
});

// Get saved recipes
recipeRouter.get("/savedRecipes/:userId", async (req, res) => {
  try {
    const user = await UserModel.findById(req.body.userId);
    const savedRecipes = await RecipeModel.find({
      _id: { $in: user.savedRecipes },
    });

    console.log(savedRecipes);
    res.status(201).json({ savedRecipes });
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
});

export { recipeRouter };
