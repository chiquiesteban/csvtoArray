
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
  
  var finalArray =[]
  for (var i in arrData) {
	  if (i!=0) {
	  finalArray.push(arrData)
	  }
  }
 	
	useCSV(finalArray);
}

function useCSV(data) {
	console.log("Do whatever you want in this function using the data from the CSV", data, data[0], data[0][1])
}
