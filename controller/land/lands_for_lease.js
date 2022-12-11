const connection = require('..//../db')

module.exports.lands_for_lease = async (req, res) => {
    try {
        query = `select * from lease where isleased=false`;
        connection.query(query, function(error,data) {
            return res.status(200).json({
                success: true,
                message: "Lands for lease",
                lands: data,
            });
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Internal server error",
            data: null,
        });
    }
}
