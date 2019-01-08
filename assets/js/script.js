var winsAnsw = ['RockScissors', 'PaperRock', 'ScissorsPaper'];
var config = {
  apiKey: 'AIzaSyC0HuhvlBOU0wIhZN-EJ0OyrEctsitiGHI',
  authDomain: 'rockpaperscissors-multip-616d3.firebaseapp.com',
  databaseURL: 'https://rockpaperscissors-multip-616d3.firebaseio.com',
  projectId: 'rockpaperscissors-multip-616d3',
  storageBucket: 'rockpaperscissors-multip-616d3.appspot.com',
  messagingSenderId: '43268115825'
};
firebase.initializeApp(config);

var database = firebase.database();
var playerId = '';
var losses1 = 0;
var wins1 = 0;
var losses2 = 0;
var wins2 = 0;
var firstAnsw = '';
var secondAnsw = '';
var turn = 0;

var connectionsRef = database.ref('/connections');

var connectedRef = database.ref('.info/connected');
