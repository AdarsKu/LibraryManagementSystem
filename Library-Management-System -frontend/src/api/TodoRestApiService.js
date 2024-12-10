import apiClient from "./ApiClient"


///////////////// for retriving all the books of the specific user 
export const retriveBooks = (category) => apiClient.get(`books/${category}`)

