var World{
	
	markerList[],
	
	loadPoisFromJsonData: function loadPoisFromJsonDataFn(allPois){
		
		AR.context.destroyAll();
		
		document.getElementById("statusElement").innerHTML = 'Loading JSON objects';
		for (var i = 0; i < allPois.length; i++){
			
			var nextPoi = {
				"id": allPois[i].id,
				"latitude": parseFloat(allPois[i].latitude),
				"longitude": parseFloat(allPois[i].longitude),
				"altitude": parseFloat(allPois[i].altitude),
				"title": allPois[i].name,
				"description": allPois[i].description
			};
			
			World.markerList.push(new Worldposts(nextPoi));
			
		}
		
		document.getElementById("statusElement").innerHTML = 'JSON objects loaded properly';

	},
	
	userLocation: null,

	// location updates
	locationChanged: function locationChangedFn(lat, lon, alt, acc) {
		World.userLocation = {
			'latitude': lat,
			'longitude': lon,
			'altitude': alt,
			'accuracy': acc
		};
	},

	onMarkerSelected: function onMarkerSelectedFn(marker) {
		// notify native environment
		document.location = "architectsdk://markerselected?id=" + marker.poiData.id;
	},
	
	markerAtLocation(tit, des){
	
		var otherPoi{
			"id": World.markerList.length+1,
			"latitude": World.userLocation.latitude,
			"longitude": World.userLocation.longitude,
			"altitude": World.userLocation.altitude,
			"title": tit,
			"description": des
		};
		
		World.markerList.push(new Worldposts(otherPoi));
	
	}

};

/* forward locationChanges to custom function */
AR.context.onLocationChanged = World.locationChanged;