<script lang="ts" setup>
import RecipeCard from '~/components/RecipeCard.vue'
import type { ITag } from '~/models/recipes.model'

const { find } = useStrapi4()
const search = useSearchStore()

const { data: tags } = useAsyncData(
  'tags',
  () => find<{ data: ITag[] }>('tags'),
)

function addTag(tag: string) {
  if (!search.queryTags.includes(tag))
    search.queryTags.push(tag)
  else search.queryTags = search.queryTags.filter(t => t !== tag)
}
</script>

<template>
  <div class="container">
    <div v-if="!search.pending && search.sortedByTags" class="flex flex-col gap-y-4">
      <h1 class="mb-0">
        Recettes animales
      </h1>
      <div class="flex flex-col lg:flex-row gap-4">
        <aside class="flex flex-col gap-4 lg:w-1/4">
          <h2>Filtres de recherche :</h2>
          <div class="form-group flex flex-col gap-2" role="search">
            <label for="search">Chercher une recette :</label>
            <input
              id="search" v-model="search.query"
              class="px-4 py-2 border-2 rounded-lg border-gray-500 drop-shadow-none"
              type="search"
            >
          </div>
          <div class="form-group flex flex-col items-start">
            <p>Filtrer par tag :</p>
            <div class="flex flex-wrap items-start gap-2" role="group">
              <button
                v-for="tag in tags?.data" :key="tag.id"
                :class="{ 'bg-gray-900 text-white': search.queryTags.includes(tag.slug) }"
                :title="tag.name"
                class="py-1 px-2 bg-gray-200 text-gray-900 border-none cursor-pointer"
                @click="addTag(tag.slug)"
              >
                {{ tag.name }}
              </button>
            </div>
            <button
              class="mt-4 appearance-none border-none bg-transparent p-0 underline cursor-pointer"
              @click="search.resetTags"
            >
              Réinitialiser les tags sélectionnés
            </button>
          </div>
        </aside>
        <client-only>
          <div class="lg:w-3/4">
            <h2>Résultats de recherche : </h2>
            <ul
              v-if="search.sortedByTags.length"
              class="list-none p-0 grid grid-cols-1 sm:grid-cols-2 gap-4"
            >
              <RecipeCard
                v-for="recipe in search.sortedByTags"
                :key="recipe.id"
                :recipe="recipe"
              />
            </ul>
            <p v-else>
              Aucun résultat pour cette recherche
            </p>
          </div>
        </client-only>
      </div>
    </div>
  </div>
</template>
