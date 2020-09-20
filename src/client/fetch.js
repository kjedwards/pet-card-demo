// Unfortunately I ran into CORS issues with the API. I had only checked in Insomnia before the question window
// was over. So, I copied the insomnia response into JSON files to simulate "calls"
function createPetFetcher() {
    return {
        data: {
            pets: [],
            petsShow: [],
            filter: {
                selected: "",
                options: [
                    {
                        label: "Act Quickly",
                        value: "act_quickly"
                    },
                    {
                        label: "Special Needs",
                        value: "special_needs"
                    },
                    {
                        label: "Adopted",
                        value: "adopted"
                    },
                ]
            }
        },
        async initialize() {
            // Get all pets
            const allPets = await this.fetchPets()

            // Get each pet and condense the data to be easier to render
            allPets.pets.map(async pet => {
                const petDetails = await this.fetchPet(pet.pet_id)
                this.data.pets.push({
                    order: pet.order,
                    pet_id: pet.pet_id,
                    pet_name: pet.pet_name,
                    large_results_photo_url: pet.large_results_photo_url,
                    city: pet.addr_city,
                    state: pet.addr_state_code,
                    sex: petDetails.pet.sex,
                    primary_breed: petDetails.pet.primary_breed,
                    secondary_breed: petDetails.pet.secondary_breed,
                    age: petDetails.pet.age,
                    special_needs: petDetails.pet.special_needs,
                    act_quickly: petDetails.pet.act_quickly,
                    adopted: petDetails.pet.adopted,
                    showInfo: false
                })
            })

            // Sort (map puts them in an order depending on when async finishes)
            this.data.pets.sort((a, b) => a.order > b.order)
            this.data.petsShow = this.data.pets
        },
        async fetchPets() {
            const res = await fetch('data/petIds.json')
            if (!res.ok) {
                throw new Error('ERROR')
            }
            return await res.json()
        },
        async fetchPet(id) {
            const res = await fetch(`data/${id}.json`)
            if (!res.ok) {
                throw new Error('ERROR')
            }
            return await res.json()
        },
        filterPets() {
            this.data.petsShow = this.data.pets.filter((pet) => {
                return pet[this.data.filter.selected] === 1
            })
        },
        resetFilter() {
            this.data.filter.selected = "";
            this.data.petsShow = this.data.pets;
        }
    }
}
