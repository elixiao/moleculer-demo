const config = require("config");
const { ServiceBroker } = require("moleculer");

const brokerOptions = config.get("BrokerOptions"); // return a deep sealed object
const broker = new ServiceBroker(brokerOptions);

broker
  .start()
  .then(() => {
    console.log("moleculer broker success");
  })
  .catch((e) => {
    console.log("moleculer broker failed");
    process.exit(1);
  });
