<script lang="ts" setup>
import type { RecipeData } from '~/models/recipes.model'

const { findOne } = useStrapi4()
const route = useRoute()

const { data: recipe, pending } = useAsyncData(
  'recipe',
  () => findOne<RecipeData>(`recipes/${route.params.slug}`),
)
</script>

<template>
  <div class="container">
    <template v-if="pending">
      <p class="text-9xl text-center">
        ÇA CHARGE
      </p>
    </template>
    <template v-else>
      <NuxtImg
        :src="recipe.data.image.url" alt="" aria-hidden="true"
        class="h-[500px] object-contain object-center w-full bg-white"
      />
      <h1>{{ recipe.data.title }}</h1>
      <div class="flex items-center gap-x-2">
        <span v-for="tag in recipe.data.tags" :key="tag.id" class="py-1 px-2 bg-gray-200">
          {{ tag.name }}
        </span>
      </div>
      <p>{{ recipe.data.description }}</p>
      <div class="flex flex-col md:flex-row">
        <div class="flex flex-col w-full md:w-1/4">
          <h2 class="mb-0">
            Ingrédients
          </h2>
          <ul class="list-none gap-2 p-0">
            <li
              v-for="ingredient in recipe.data.ingredients" :key="ingredient.id"
            >
              <p class="font-bold">
                {{ ingredient.name }}
              </p>
              <p>{{ ingredient.quantity }}</p>
            </li>
          </ul>
        </div>
      </div>
    </template>
  </div>
</template>
