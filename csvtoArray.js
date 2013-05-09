$(document).ready(function() {
    $.ajax({
        type: "GET",
		url: "https://docs.google.com/spreadsheet/pub?key=0AkK7wQrGC5KhdFV6WXk1M3A3TDB1a1l4dmFjSWstYnc&output=csv",
        dataType: "text",
        success: function(data) {CSVToArray(data);},
     });	 
	 
});

function CSVToArray( strData, strDelimiter ){
  strDelimiter = (strDelimiter || ",");
  var objPattern = new RegExp(
    (
      "(\\" + strDelimiter + "|\\r?\\n|\\r|^)" +
      "(?:\"([^\"]*(?:\"\"[^\"]*)*)\"|" +
      "([^\"\\" + strDelimiter + "\\r\\n]*))"
    ),
    "gi"
  );

  var arrData = [[]];
  var arrMatches = null;

  while (arrMatches = objPattern.exec( strData )){

    var strMatchedDelimiter = arrMatches[ 1 ];
    if (
      strMatchedDelimiter.length &&
      (strMatchedDelimiter != strDelimiter)
    ){
      arrData.push( [] );

    }
    if (arrMatches[ 2 ]){
      var strMatchedValue = arrMatches[ 2 ].replace(
        new RegExp( "\"\"", "g" ),
        "\""
      );

    } else {

      var strMatchedValue = arrMatches[ 3 ];

    }
    arrData[ arrData.length - 1 ].push( strMatchedValue );
  }
  
 
	useCSV(arrData);
}

function useCSV(data) {
	for (var i in data) {
	  
	  if (i!=0) {
		  	//PUT YOUR CODE HERE
			console.log("Do whatever you want in this function using the data from the CSV", data[i], data[i][1])
	  }
	  
	}
}
