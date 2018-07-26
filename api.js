import { search, movie } from './mockData'

export const titleLookup = async (title) => {
  const response = await search
  const results = await response.Search

  return results
}

export const movieDetails = async (title) => {
  const response = await movie

  return response
}