import { WordResponse } from "./types"

const getWord = (word: string): Promise<WordResponse> => {
  return fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`)
    .then(res => {if (res.ok) {
      return res
    } else {
      throw new Error
    }})
    .then(res => res.json())
}

export { getWord }