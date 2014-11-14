//Default settings

googleMaps.setPosition(currentCoordinates);
googleMaps.showMap();

// Set first market

googleMaps.setPosition(coordinates);
googleMaps.setTitle('First market');
googleMaps.setContents('<div>content1</div>');
googleMaps.addMarkersToMap();


// Set second market

googleMaps.setPosition(coordinates);
googleMaps.setTitle('Second market');
googleMaps.setContents('<div>content2</div>');
googleMaps.addMarkersToMap();
