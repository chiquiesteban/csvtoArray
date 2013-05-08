$(document).ready(function() {
    $.ajax({
        type: "GET",
        url: "https://docs.google.com/spreadsheet/pub?key=0AkK7wQrGC5KhdFV6WXk1M3A3TDB1a1l4dmFjSWstYnc&output=csv",
        dataType: "text",
        success: function(data) {processData(data);},
     });   
	 
});

function processData(allText) {
    var allTextLines = allText.split(/\r\n|\n/);
    var headers = allTextLines[0].split(',');
	  var lines = [];
    for (var i=1; i<allTextLines.length; i++) {
        var data = allTextLines[i].split(',');
        if (data.length == headers.length) {

            var tarr = [];
            for (var j=0; j<headers.length; j++) {
                /*tarr.push(headers[j]+":"+data[j]);*/
				tarr.push(data[j]);
            }
            lines.push(tarr);
        }
    }
	
	useCSV(lines);
}

function useCSV(data) {
	console.log("Do whatever you want in this function using the data from the CSV", data, data[1], data[0][1])
}
