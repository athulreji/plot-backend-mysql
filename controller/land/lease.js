const Lease = require("..//../model/land/lease");

module.exports.lease = async (req, res) => {
    const { name, area, perimeter, price, location, description, owner } = req.body;
    try {
        query = `select * from user where name="${name}"`;
        connection.query(query, function(error, data) {
        if(data.length == 0) {
            return res.status(400).json({
            success: false,
            message: "User does not exist",
            data: null,
            });
        }
        return res.status(201).json({
            success: true,
            message: "Lease created successfully",
            newLease,
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Internal server error",
            data: null,
        });
    }
};
