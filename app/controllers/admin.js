import Ember from "ember";

export default Ember.ObjectController.extend({

 
 socketService: Ember.inject.service('websockets'),
 
  init: function() {
    this._super.apply(this, arguments);
  },

  actions: {


    refresh: function () {
            var name = 'GetDriver';
            var obj = JSON.stringify({
                        'from': 'from', 
                        'typ': 'REFRESH', 
                        'date': 'date', 
                        'msg': 'msg', 
                        'name': name, 
                        'driverphone': 'driverphone',
                        'isDone': true });

            //var socket =  this.get('socketService').socketFor('ws://3a5f5b95.ngrok.io/socket');
            var socket = this.get('socketService').socketFor('ws://blooming-sea-8888.herokuapp.com/socket');
            socket.send(obj);       
    },


    recall: function () {
            var name = 'GetDriver';
            var obj = JSON.stringify({
                        'from': 'from', 
                        'typ': 'RECALL', 
                        'date': 'date', 
                        'msg': 'msg', 
                        'name': name, 
                        'driverphone': 'driverphone',
                        'isDone': true });

            //var socket =  this.get('socketService').socketFor('ws://3a5f5b95.ngrok.io/socket');
            var socket = this.get('socketService').socketFor('ws://blooming-sea-8888.herokuapp.com/socket');
            socket.send(obj);       
    },

    retrieve: function () {
            var amt = this.get('NumberOfMessages');
            var name = 'GetDriver';
            var obj = JSON.stringify({
                        'from': 'from', 
                        'typ': 'RETRIEVE', 
                        'date': 'date', 
                        'msg': amt, 
                        'name': name, 
                        'driverphone': 'driverphone',
                        'isDone': true });

            //var socket =  this.get('socketService').socketFor('ws://3a5f5b95.ngrok.io/socket');
            var socket = this.get('socketService').socketFor('ws://blooming-sea-8888.herokuapp.com/socket');
            socket.send(obj);       
    }

  }
});