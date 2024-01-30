<script lang="ts" setup>
import type { IRecipe } from '../models/recipes.model'

defineProps({
  recipe: {
    type: Object as PropType<IRecipe>,
    required: true,
  },
})
</script>

<template>
  <li class="flex flex-col gap-y-4 p-4 border-2 border-black border-solid">
    <NuxtImg :src="recipe.image.url" alt="" class="h-[400px] object-cover" />
    <h3 class="my-0">
      {{ recipe.title }}
    </h3>
    <p class="my-0">
      {{ recipe.description }}
    </p>
    <NuxtLink :to="`/recettes/${recipe.slug}`">
      Voir la recette
    </NuxtLink>
  </li>
</template>
