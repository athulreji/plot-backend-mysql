const connection = require('..//../db')

module.exports.lease = async (req, res) => {
    const { id } = req.body;
    try {
        query = `select * from lease where id="${id}"`;
        connection.query(query, function(error, data) {
            if(data.length == 0) {
                return res.status(400).json({
                success: false,
                message: "Lease land does not exist",
                data: null,
                });
            }
            else {
                query = `delete from lease where id="${id}"`;
            }
        });
        connection.query(query, function(error, data) {
            return res.status(201).json({
                success: true,
                message: "Lease land has been removed",
                newLease,
            });
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Internal server error",
            data: null,
        });
    }
};
