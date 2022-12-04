const { Activity } = require("../../db")

const deleteActivity = async (id) => {
    try {
        await Activity.destroy({ where: { id: id } });
    } catch (error) {
        throw Error(error.message)
    }
}

module.exports = deleteActivity;