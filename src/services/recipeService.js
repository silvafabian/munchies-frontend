

const BASE_URL = `${process.env.REACT_APP_API_URL}/api/recipes/`

export const getAll = async () => {
  try { 
    const res = await fetch (`${BASE_URL}`, {
      headers: {
        'content-type': 'application/json',
      }
    })
    // console.log(res)
    return await res.json()
  } catch (error) {
    throw error
  }
}