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

            //var socket =  this.get('socketService').socketFor('ws://c4370ec7.ngrok.io/socket');
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

            //var socket =  this.get('socketService').socketFor('ws://c4370ec7.ngrok.io/socket');
            var socket = this.get('socketService').socketFor('ws://blooming-sea-8888.herokuapp.com/socket');
            socket.send(obj);       
    },

    retrieve: function () {
            var from = this.get('PhoneNumber');
            var date = this.get('StartDate');
            var msg = this.get('EndDate');
            var driver = this.get('StartCount');
            var name = this.get('MessageCount');
            
            var obj = JSON.stringify({
                        'from': from, 
                        'typ': 'RETRIEVE', 
                        'date': date, 
                        'msg': msg, 
                        'name': name, 
                        'driverphone': driver,
                        'isDone': true });

            //var socket =  this.get('socketService').socketFor('ws://c4370ec7.ngrok.io/socket');
            var socket = this.get('socketService').socketFor('ws://blooming-sea-8888.herokuapp.com/socket');
            socket.send(obj); 
            this.set('PhoneNumber', '');       
    },

    refund: function () {
            var msg = this.get('ChargeMsg');
            var name = 'GetDriver';
            var from = this.get('phonenumber');
            var obj = JSON.stringify({
                        'from': from, 
                        'typ': 'REFUNDCUSTOMER', 
                        'date': 'date', 
                        'msg': msg, 
                        'name': name, 
                        'driverphone': 'driverphone',
                        'isDone': true });

            //var socket =  this.get('socketService').socketFor('ws://c4370ec7.ngrok.io/socket');
            var socket = this.get('socketService').socketFor('ws://blooming-sea-8888.herokuapp.com/socket');
            socket.send(obj); 
            this.set('ChargeMsg', '');       
    }

  }
});