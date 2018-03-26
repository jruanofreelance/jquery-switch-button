
var initialMarginBall = "0px",
	imagesMargin,
	buttonClassColor,
	canClick = true,
	classImage = "imageOff";

$(document).ready(function(){

	$("#button").click(function(){

		if(canClick){

			canClick = false;

			if(initialMarginBall === "0px"){
				
				initialMarginBall = "120px";
				imagesMargin = "-76px";
				buttonClassColor = "buttonOn";
				classImage = "imageOn";

			}else{

				initialMarginBall = "0px";
				imagesMargin = "92px";
				buttonClassColor = "buttonOff";
			    classImage = "imageOff";

			}
				
			$("#buttonBall").animate({marginLeft:initialMarginBall}, "slow");
			$("#imagesOnOff").animate({marginLeft:imagesMargin}, "slow",function(){

				$("#imagesOnOff").removeClass().addClass(classImage);
				$("#imagesOnOff").css("margin-left","0px");
				$("#button").removeClass().addClass(buttonClassColor);
				canClick = true;

			});

		}

	});

});