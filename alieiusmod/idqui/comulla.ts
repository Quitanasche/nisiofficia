
const {PubSub} = require('@google-cloud/pubsub');
const pubsub = new PubSub();

const topic = pubsub.topic('my-topic');
const subscription = topic.subscription('my-subscription');

const messageHandler = message => {
  // "Ack" (acknowledge receipt of) the message.
  message.ack();

  // Do something with the message.
  const currentUser = message.attributes.currentUser;
  current_data.remove(currentUser);
};

subscription.on('message', messageHandler);

