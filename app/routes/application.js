import Ember from 'ember';


export default Ember.Route.extend({

 socketService: Ember.inject.service('websockets'),
 
  init: function() {
    this._super.apply(this, arguments);

    //var socket =  this.get('socketService').socketFor('ws://3a5f5b95.ngrok.io/socket');
    var socket = this.get('socketService').socketFor('ws://blooming-sea-8888.herokuapp.com/socket');
    socket.on('open', this.myOpenHandler, this); 
    socket.on('message', this.myMessageHandler, this);
    socket.on('close', function(event) { console.log('closed: ' + event); socket.reconnect(); }, this);
  },


  myOpenHandler: function(event) {
    console.log('On open event has been called: ' + event);
  }, 

  myMessageHandler: function(event) {
    console.log('Message: ' + event.data);
    var obj = JSON.parse(event.data);
      if(obj.typ === "INCOMMING") {

          this.send('myPusher', obj);

      } else if (obj.typ === "REPLY") {

          this.send('myPusher', obj);

      } else if (obj.typ === "TWILIO") {

          this.send('myTwilio', obj);

      } else if (obj.typ === "ACCOUNTS") {

          this.send('myAccounter', obj);

      } else if (obj.typ === "NOTIFICATION")  {

        this.send('myNotifier', obj);
      }
  }, 

  model() {
    return this.store.all('notification').slice(0, 5);
  },

  actions: {

    myPusher: function(obj){
      this.store.push('application', obj);
    },

    myAccounter: function(obj){
      this.store.push('accounts', obj);
    },

    myNotifier: function(obj){
      this.store.push('notification', obj);
    },

    myTwilio: function(obj){
      this.store.push('twilio', obj);
    },
  }
});

