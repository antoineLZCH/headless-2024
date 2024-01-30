<script lang="ts" setup>
const { find } = useStrapi4()
const search = useSearchStore()

</script>

<template>
  <div class="container">
    <div class="flex flex-col items-center gap-y-4">
      <h1>Démarrage Nuxt Strapi</h1>
      <div class="flex gap-x-4">
        <NuxtLink to="/start">
          Documentation
        </NuxtLink>
        <NuxtLink to="/exemple-recherche">
          Exemple de recherche
        </NuxtLink>
      </div>
      <input v-model="search.query" placeholder="Chercher une recette" type="text">
      <p v-if="search.pending">Chargement...</p>
      <template v-if="!search.pending">
        <ul class="list-none grid grid-cols-3 gap-4">
         <li v-for="recipe in search.results" :key="recipe.id" class="flex flex-col gap-y-4 p-4 border-2 border-black border-solid">
           <NuxtImg :src="recipe.image.url" alt="" />
           <h3 class="my-0">{{ recipe.title }}</h3>
           <p class="my-0">{{ recipe.description }}</p>
           <NuxtLink :to="`/recettes/${recipe.slug}`">Voir la recette</NuxtLink>
         </li>
        </ul>
      </template>
    </div>
  </div>
</template>

