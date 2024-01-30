import Fuse from 'fuse.js'
import type { RecipesData, IRecipe } from '~/models/recipes.model'

export const useSearchStore = defineStore('search', () => {
  const { find } = useStrapi4()

  const { data: recipes, pending, error } = useAsyncData('recipes',
      () => find<RecipesData>('recipes', {populate: '*'})
  )

  const query = ref('')
  // TODO: Replace any with your Recipe type and change elements
  const elements = reactive<IRecipe[]>(recipes.value?.data || [])
  const keys = ['title', 'ingredients', 'tags']

  const fuse = computed(() => new Fuse(Array.from(elements), {
    keys,
    threshold: 0.2,
  }))

  const results = computed(() => {
    if (!query.value)
      return Array.from(elements)
    return [...fuse.value.search(query.value).map(r => r.item)]
  })

  return { query, results, elements, pending }
})
