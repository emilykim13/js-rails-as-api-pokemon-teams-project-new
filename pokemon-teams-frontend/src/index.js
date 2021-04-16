const BASE_URL = "http://localhost:3000"
const TRAINERS_URL = `${BASE_URL}/trainers`
const POKEMONS_URL = `${BASE_URL}/pokemons`

document.addEventListener("DOMContentLoaded", () => {
    getTrainers()
})
const main = document.querySelector("main")

const getTrainers = () => {
    fetch("http://localhost:3000/api/v1/trainers")
    .then(res => res.json())
    // .then(trainers => trainers.forEach(renderTrainer))
    .then(trainers => renderTrainer(trainers))
}

const renderTrainer = (trainers) => {
        // const main = document.querySelector("main")
    trainers.forEach(trainer => {
        const trainerCard = document.createElement("div")
        trainerCard.className = "card"
        trainerCard.innerHTML = `<p>${trainer.name}</p>`


        const addPokemonBtn = document.createElement("button")
        addPokemonBtn.innerText = "Add Pokemon"

        const ul = document.createElement("ul")

        console.log(trainer.pokemons)

        trainerCard.append(addPokemonBtn, ul)

        trainer.pokemons.forEach(pokemon => {

            const li = document.createElement("li")
            li.innerText = pokemon.nickname

            const releaseBtn = document.createElement("button")
            releaseBtn.innerText = "Release"
            releaseBtn.className = "release"
            releaseBtn.addEventListener("click", () => {
                console.log(pokemon.id)
                fetch(`${POKEMONS_URL}/${pokemon.id}`, {
                    method: "DELETE"
                })
                li.remove()
            })

            li.append(releaseBtn)
            ul.append(li)
        })
        main.append(trainerCard)
    })
}
