module.exports = {
    get: function(con, callback) {
        con.query("SELECT * FROM services_block", callback)
    }
}