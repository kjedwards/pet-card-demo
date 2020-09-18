const fetchIds = () => {
    fetch('https://api.adoptapet.com/search/pet_search?output=json&key=e41b6bf1618d053c31d524d479c14b4y&geo_range=1&city_or_zip=Richmond,%20IN&species=dog')
    .then( res => {
        console.log(res)
    })
}