export const orderAsc = (state) => {
    const asc = state.allCountries.sort((a, b) => a.name.localeCompare(b.name));
    return asc
}
export const orderDesc = (state) => {
    const desc = state.allCountries.sort((a, b) => b.name.localeCompare(a.name));
    return desc
}
export const orderRand = (state) => {
    const rand = state.allCountries.sort((a, b) => b.img.localeCompare(a.img[Math.floor(Math.random()*(15))]+a.img.slice(4,7)))
    return rand
}

export const sortAscBNumberOfInhabitants = (state) => {
 const order = state.allCountries.sort((a, b) => b.population - a.population);
 return order
}

export const sortDescBNumberOfInhabitants = (state) => {
    const order = state.allCountries.sort((a, b) => a.population - b.population);
 return order
}