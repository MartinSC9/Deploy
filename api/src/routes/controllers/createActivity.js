const { Activity, Country } = require("../../db")

const createActivity = async ({ name, country, going, back }) => {
    try {
        if (country.length > 1) {
            for (let i = 0; i < country.length; i++) {
                const newActivity = await Activity.create({ name, going, back, country: country[i] })
                const pais = await Country.findOne({ where: { name: country[i] } })
                await pais.addActivity(newActivity)
            }
        } else {
            const newActivity = await Activity.create({ name, going, back, country: country[0] })
            const pais = await Country.findOne({ where: { name: country[0] } })
            await pais.addActivity(newActivity)
        }
    } catch (error) {
        throw Error(error.message)
    }
}

module.exports = createActivity;


