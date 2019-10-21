const connectREDIS = (req,res) => {
    res.send({ 
        "message": "REDIS is here"
    });
}

module.exports = {
    connectREDIS
}