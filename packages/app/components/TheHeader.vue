<script lang="ts" setup>
const links = [
  {
    id: 1,
    title: 'Documentation',
    url: '/start',
  },
  {
    id: 2,
    title: 'Exemple de recherche',
    url: '/exemple-recherche',
  },
]
</script>

<template>
  <nav class="w-full">
    <div class="container">
      <div class="flex items-center space-between w-full">
        <NuxtLink to="/">
          <NuxtImg alt="" aria-hidden="true" class="h-16" src="/possum.png" />
          <span class="sr-only">Recettes animales</span>
        </NuxtLink>
        <ul class="list-none flex gap-4 my-0 ml-auto">
          <li v-for="link in links" :key="link.id">
            <NuxtLink :to="link.url">
              {{ link.title }}
            </NuxtLink>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>
