

//Makes the API request and returns the parsed JSON object.
function requestTrack() {
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "/js/steps.json" , false);
    xhr.send();
    var selected = xhr.response;
    var data = $.parseJSON(selected);
    console.log(data);
    return data;
}

//requestTrack();
/*
$.ajax {
  url: "/js/steps.json"
}.then(function(data) {

});
*/

var HelloWorld = React.createClass({
    clicked: function() {
      alert('clicked');  
    },
   render: function() {
       return (
           <h1>
                hello
           </h1>
       );
   } 
});

ReactDOM.render(<HelloWorld onClick={this.clicked()} />, document.getElementById('area'));




$(document).ready(function(){
    $('.tooltipped').tooltip({delay: 50});
  });