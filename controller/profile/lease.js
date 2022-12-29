const connection = require('..//../db')


module.exports.lease_profile = async (req, res) => {
    const { user_id } = req.body;
    try {
        query = `select * from lease where buyer=${user_id}`;
        connection.query(query, function(error,data) {
            return res.status(200).json({
                success: true,
                message: "fetched lease data of user",
                leases: data
            });
        });
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            success: false,
            message: "Internal server error",
            data: null,
        });
    }
}
