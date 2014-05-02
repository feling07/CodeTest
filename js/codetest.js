$( "#1" ).click(function() {
	$('#mycheck1').prop('checked', true);
  	$(this).toggleClass( "selected" );
    if ($('#mycheck2').prop("checked")){
	    //Checked
	    $('#mycheck2').prop("checked",false);
	    $("#2").toggleClass( "selected" );
	}else{
	    //Not checked
	    // console.log("2 not checked");
	}
	if ($('#mycheck3').prop("checked")){
	    //Checked
	    // console.log("3 checked");
	    $('#mycheck3').prop("checked",false);
	    $("#3").toggleClass( "selected" );
	}else{
	    //Not checked
	    // console.log("3 not checked")
	}
});

$( "#2" ).click(function() {
	$('#mycheck2').prop('checked', true);
    $(this).toggleClass( "selected" );
    if ($('#mycheck1').prop("checked")){
	    //Checked
	    $('#mycheck1').prop("checked",false);
	    $("#1").toggleClass( "selected" );
	}else{
	    //Not checked
	    // console.log("2 not checked");
	}
	if ($('#mycheck3').prop("checked")){
	    //Checked
	    // console.log("3 checked");
	    $('#mycheck3').prop("checked",false);
	    $("#3").toggleClass( "selected" );
	}else{
	    //Not checked
	    // console.log("3 not checked")
	}
  
});

$( "#3" ).click(function() {
	$('#mycheck3').prop('checked', true);
  	$(this).toggleClass( "selected" );
    if ($('#mycheck2').prop("checked")){
	    //Checked
	    $('#mycheck2').prop("checked",false);
	    $("#2").toggleClass( "selected" );
	}else{
	    //Not checked
	    // console.log("2 not checked");
	}
	if ($('#mycheck1').prop("checked")){
	    //Checked
	    // console.log("1 checked");
	    $('#mycheck1').prop("checked",false);
	    $("#1").toggleClass( "selected" );
	}else{
	    //Not checked
	    // console.log("1 not checked")
	}
});

$('#stake').on('input',function(e){
	// alert($('#stake').val());
	if (($('#mycheck1').prop("checked")==false)&&($('#mycheck2').prop("checked")==false)&&($('#mycheck3').prop("checked")==false)) {
		alert("You Must Bet first!");
	} else{
		var decimal;
		var stake =parseInt($('#stake').val());
		console.log(stake);
		if ($('#mycheck1').prop("checked")) {
			decimal=7.5;
			console.log(decimal);
		}else if ($('#mycheck2').prop("checked")) {
			decimal=4.5;
		}else if ($('#mycheck3').prop("checked")) {
			decimal=0.36;
		};

		var sum =(decimal*stake)+stake;
	    if (sum) {
	    	$('#wins').val("£"+sum);
	    }else{
	    	$('#wins').val(0);
	    };
	};
    
});

$( ".bet" ).click(function() {
	
	var string1;
	if ($('#mycheck1').prop("checked")) {
		string1=1;
	}else if ($('#mycheck2').prop("checked")) {
		string1=2;
	}else if ($('#mycheck3').prop("checked")) {
		string1=3;
	};

	var string2 = $('#stake').val();
	console.log(string2);
	var url = "http://www.example-url.com/?stake="+string2+"&selectionId="+string1;
	console.log(url);
	$.ajax({
	    url: url,
	    type: 'GET',
	    success: function(data){ 
	        alert("success");
	    },
	    error: function(data) {
	        alert('woops! Maybe Access domain problem for request'+url); //or whatever
	    }
	});
});

