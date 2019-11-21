const redis = require('redis');
const client = redis.createClient(process.env.REDIS_PORT,process.env.REDIS_HOST);

client.on('connect', function() {
	console.log('Redis client connected');
});

client.on('error', function(err) {
	console.log('Error on redis : ' + err);
});

const connectREDIS = async (req,res) => {
	client.set("dbName", "redisDB", function(err,reply) {
	if (err) { console.log(err); }
	console.log(reply);
	});
	client.get("dbName", function(err,reply) {
	if (err) { console.log(err); }
	console.log(reply);
	const redisDBname = reply;
	});
	client.info("clients", function(err, reply) {
	  if (err) { console.log('Error on redis : ' + err); }
          console.log(reply);
	  console.log(typeof(reply));
	  const connectedClients=reply;
	});
	res.json({
        	"status": "OK",
		"dbName": redisDBname,
		"redisConnectedClients": connectedClients
    	});
};

module.exports = {
    connectREDIS
}
