<script lang="ts" setup>
import RecipeCard from '~/components/RecipeCard.vue'

const search = useSearchStore()
</script>

<template>
  <div class="container">
    <div class="flex flex-col gap-y-4">
      <h1 class="my-0">
        Recettes animales
      </h1>
      <div class="form-group flex flex-col gap-2 w-1/2 lg:w-1/3" role="search">
        <label for="search">Chercher une recette</label>
        <input id="search" v-model="search.query" class="px-4 py-2" type="search">
      </div>
      <template v-if="search.sortedResults">
        <ul class="list-none p-0 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <RecipeCard
            v-for="recipe in search.sortedResults"
            :key="recipe.id"
            :recipe="recipe"
          />
        </ul>
      </template>
    </div>
  </div>
</template>
