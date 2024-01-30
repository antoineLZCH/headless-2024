export interface IRecipe {
  id: number
  title: string
  description: string
  slug: string
  publishedAt: string
  tags: ITag[]
  image: Image
}

export interface ITag {
  id: number
  name: string
  slug: string
}

export interface Image {
  id: number
  name: string
  alternativeText: string
  width: number
  height: number
  url: string
}

export interface RecipesData {
  data: IRecipe[]
  meta: {
    pagination: {
      page: number
      pageSize: number
      pageCount: number
      total: number
    }
  }
}

export interface RecipeData {
  data: IRecipe
}
