export const SELECT_ALIMENTO = 'SELECT_ALIMENTO'
export const FILTERED_ALIMENTO = 'FILTERED_ALIMENTO'

export const selectAlimento = (id) => ({
    type: SELECT_ALIMENTO,
    alimentoID:id
})
export const filteredAlimento = (id) => ({
    type:FILTERED_ALIMENTO,
    categoryId:id
})