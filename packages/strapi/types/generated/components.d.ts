import type { Schema, Attribute } from '@strapi/strapi';

export interface RecipesEtapes extends Schema.Component {
  collectionName: 'components_recipes_etapes';
  info: {
    displayName: '\u00C9tapes';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    description: Attribute.RichText & Attribute.Required;
  };
}

export interface RecipesIngredients extends Schema.Component {
  collectionName: 'components_recipes_ingredients';
  info: {
    displayName: 'Ingr\u00E9dients';
    icon: 'bulletList';
  };
  attributes: {
    name: Attribute.String & Attribute.Required;
    quantity: Attribute.String & Attribute.Required;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'recipes.etapes': RecipesEtapes;
      'recipes.ingredients': RecipesIngredients;
    }
  }
}
