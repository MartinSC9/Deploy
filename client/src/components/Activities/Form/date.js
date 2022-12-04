const fecha = () => {
    let caracteres = `${new Date().getFullYear()}-${new Date().getMonth()}-${new Date().getDate()}`.length
    if (caracteres > 9) {
        return caracteres
    }
    return `${new Date().getFullYear()}-${new Date().getMonth()}-0${new Date().getDate()}`
}
export default fecha