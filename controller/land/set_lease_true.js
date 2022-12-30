const connection = require('..//../db')

module.exports.set_lease_true = async (req, res) => {
    const { id, buyer_id } = req.body;
    try {
        query = `select * from lease where id =${id}`;
        connection.query(query, function(error, data) {
            if(data.length == 0) {
                return res.status(400).json({
                    success: false,
                    message: "lease land not found",
                    data: null,
               });
            }
            else {
                query = `update lease set isleased=true, buyer=${buyer_id} where id=${id}`;
                connection.query(query, function(error,data) {
                    return res.status(200).json({
                        success: true,
                        message: "land is leased"
                    });
                });
            }
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            success: false,
            message: "Internal server error",
            data: null,
        });
    }
}
