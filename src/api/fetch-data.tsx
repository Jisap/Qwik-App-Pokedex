


export const apiService = async( id?:string ) => {
    const baseApi ='https://rickandmortyapi.com/api/character';
    const endPoint = id ? `${baseApi}/${id}`: baseApi

    try {
        const data = await fetch(endPoint, {
            method: 'GET',
        })
        return data.json()
    } catch (error) {
        console.log(error)
    }

}