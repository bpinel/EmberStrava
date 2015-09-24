import Ember from 'ember';

export default Ember.Route.extend({
	model: function() {	
       let token = "YOUR TOKEN STRAVA";
	  	return Ember.$.ajax({
  			url: "https://www.strava.com/api/v3/athlete?access_token="+token+"&callback=?",
  			dataType: "jsonp", 
  			
  			success: function(data) {console.log(data);},
  			error: function(xhr, status, error) {
        		console.log("Error");
        		console.log(xhr.statusText);
        		console.log(xhr.responseText);
        		console.log(xhr.status);
        		console.log(error);
    		}
  		});

	}
});
