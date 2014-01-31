$(document).ready(function(){

	var outerShell = $("<div id='outer_shell' class='outer-shell'></div>");
	var innerShell = $("<div id='inner_shell' class='inner-shell'></div>");
	var leftLabels = $("<div id='left_labels' class='left-labels'><p>PM</p><br><br><br><br><br><br><p>AUTO</p></div>");
	var clockScreen = $("<div id='clock_screen' class='clock-screen'></div>");
	var pmIndicator = $("<div id='pm_indicator' class='dot'>.</div>");
	var autoIndicator = $("<div id='auto_indicator' class='dot' >.</div>");
	var clockText = $("<div id='clock_text' class='clock-text'><span id='hour'></span><span id='colon'>:</span><span id='minute'></span></div>");  
	var bottomLabels = $("<div id='bottom_labels' class='bottom-labels'><p><span>AM</span> 53 60 70 &nbsp;90 110 140 170 &nbsp; <span>KHz</span></p><p><span>FM</span> 88 92 96 &nbsp; 102 106 108 &nbsp; &nbsp;<span>MHz</span></p></div>");                     
                          
	var renderClock = function(){
		$('#main_container').append(outerShell);
		$('#outer_shell').append(innerShell);
		$('#inner_shell').append(leftLabels);
		$('#inner_shell').append(clockScreen);
		$('#inner_shell').append(bottomLabels);
		$('#clock_screen').append(pmIndicator);
		$('#clock_screen').append(autoIndicator);
		$('#clock_screen').append(clockText);
	};                     
                  
	
	var updateClockTime = function(){
		var d = new Date();
		var hours = d.getHours() > 12 ? d.getHours() - 12 : d.getHours();
		var minutes = d.getMinutes() < 10 ? "0" + d.getMinutes() : d.getMinutes();
		$('#hour').text(hours);
		$('#minute').text(minutes);
		if (d.getHours() >= 12) {
			$('#pm_indicator').show();			
		} else {$('#pm_indicator').hide();}
		$('#colon').toggleClass('red');		
	};                   

	renderClock();                      
    updateClockTime();                    
    var startTime = setInterval(function(){updateClockTime();}, 1000);    
	
});