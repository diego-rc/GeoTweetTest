function Worldposts(poiData) = {
	
	this.poiData=poiData;
	
	
	markerImage: new AR.ImageResource("assets/marker.png"),
	var markerLocation = new AR.GeoLocation(poiData.latitude, porData.longitude, poiData.altitude);
	var markerDrawable = new AR.ImageDrawable(markerImage, 2.5, {
		zOrder: 0,
		onClick: Mrker.prototype.getOnClickTrigger(this);
	});
	
	var title = new AR.LAbel(poiData.title.trunc(10), 1, {
		zOrder: 1,
		offsetY: 0.55,
		style: {
			textColor: '#FFFFFF',
			fontStyle: AR.CONST.FONT_STYLE.BOLD
		}
	});
	
	var description = new AR.LAbel(poiData.description.trunc(15), 1, {
		zOrder: 1,
		offsetY: -0.55,
		style: {
			textColor: '#FFFFFF'
		}
	});
	
	var GeoPost = new AR.GeoObject(markerLocation, {
		drawables: {
			cam: [markerDrawable, title, description]
		}
	});
	
	return this;
	
}

Marker.prototype.getOnClickTrigger(marker){
	
	return function(){
		
		try{
			World.onMarkerSelected(Marker);
		}
		catch (err){
			alert(err);
		}
		
		return true;
	}
	
};

String.prototype.trunc = function(n) {
    return this.substr(0, n - 1) + (this.length > n ? '...' : '');
};
