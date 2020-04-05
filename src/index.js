const config = require("config");
const { ServiceBroker } = require("moleculer");

const brokerOptions = config.get("BrokerOptions"); // return a deep sealed object
const broker = new ServiceBroker(brokerOptions); // will exits without error message

// workaround
// const broker = new ServiceBroker(JSON.parse(JSON.stringify(brokerOptions)));

broker
  .start()
  .then(() => {
    console.log("moleculer broker success");
  })
  .catch((e) => {
    console.log("moleculer broker failed");
    process.exit(1);
  });
