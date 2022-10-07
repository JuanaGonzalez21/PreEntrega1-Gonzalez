export const postresBDD = async () => {
    const response = await fetch('../json/postres.json')
    const postres = await response.json()
    return postres
}