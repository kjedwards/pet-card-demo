const fetchIds = () => {
    fetch('data/petIds.json')
        .then(response => {
            if (!response.ok) {
                throw new Error("HTTP error " + response.status);
            }
            return response.json();
        })
        .then(json => {
            console.log(json);
        })
        .catch(function () {
            cosnsole.log('error');
        })
}

const fetchPet = pet => {
    fetch(`data/${pet.pet_id}.json`)
        .then(response => {
            if (!response.ok) {
                throw new Error("HTTP error " + response.status);
            }
            return response.json();
        })
        .then(json => {
            console.log(json);
        })
        .catch(function () {
            cosnsole.log('error');
        })
}

// Unfortunately I ran into CORS issues with the API. I had only checked in Insomnia before the question window
// was over. So, I copied the insomnia response into JSON files to simulate "calls"
//
// const fetchIds = () => {
//     fetch('https://api.adoptapet.com/search/pet_search?output=json&key=e41b6bf1618d053c31d524d479c14b4y&geo_range=1&city_or_zip=Richmond,%20IN&species=dog')
//     .then( res => {
//         console.log(res)
//     })
//}