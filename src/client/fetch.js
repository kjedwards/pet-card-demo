// Unfortunately I ran into CORS issues with the API. I had only checked in Insomnia before the question window
// was over. So, I copied the insomnia response into JSON files to simulate "calls"
function createPetFetcher() {
    console.log('creating pet fetcher...')
    return {
        data: { pets: [] },
        async initialize() {
            this.data = await this.fetchPets()
        },
        async fetchPets() {
            const res = await fetch('data/petIds.json')
            if (!res.ok) {
                throw new Error('ERROR')
            }
            return await res.json()
        }

    }
}


// const fetchPet = pet => {
//     return fetch(`data/${pet.pet_id}.json`)
//         .then(response => {
//             if (!response.ok) {
//                 throw new Error("HTTP error " + response.status);
//             }
//             return response.json()
//         })
//         .then(json => {
//             return json
//         })
//         .catch(function () {
//             console.log('error')
//         })
// }

