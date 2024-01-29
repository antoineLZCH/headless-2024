export function adaptRecipes(recipes: any) {
  return recipes.map((recipe: any) => ({
    id: recipe.id,
    title: recipe.title,
    description: recipe.description,
    tags: adaptRecipeTags(recipe.tags),
    ingredients: adaptRecipeIngredients(recipe.ingredients),
    instructions: recipe.instructions
  }))
}

export function adaptRecipeTags(tags: any) {
  return tags.map(tag => {
    return {
      id: tag.id,
      name: tag.name,
      slug: tag.slug
    }
  })
}

export function adaptRecipeIngredients(ingredients: any) {
  return ingredients.map(ingredient => ingredient.name)
}
