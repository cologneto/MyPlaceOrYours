var app = angular.module('app', ["ngAnimate"]);

app.directive("scroll", function ($window) {
    return function(scope, element, attrs) {
    	var ofsetTop = $(".arrow").offset().top,
    		movingPicsSt = $(".chairAnimationStart").offset().top,
    		movingPicsSt2 = $("#picAndSliderContainer").offset().top,
    		lastScrollTop = 0;
    	var cupboardTop = $(".cupboard"),
    		cupboardTopSP = cupboardTop.css("top");
     		thinLineCupBoard = $("#movingFurnitureContainer .thinVerticalLineCupboard"),
     		thinLineCupBoardSH = thinLineCupBoard.css("height"),
     		barChair1 = $(".barChair1"),
     		barChair2 = $(".barChair2"),
			barChair1SP = barChair1.css("top"),
			barChair2SP = barChair2.css("top"),
			chair = $(".chair"),
			chairSP = chair.css("top"),  
    		thinLineBarChair = $("#movingFurnitureContainer .thinVerticalLineBarChair"),
    		thinLineBarChairSH = thinLineBarChair.css("height"),
    		thinLineChair = $("#movingFurnitureContainer .thinVerticalLineChair3"),
    		thinLineChairSH = thinLineChair.css("height");
        angular.element($window).bind("scroll", function() {
             
        	var st = this.pageYOffset;

        	// SHOW HIDE THE HEADER AND CHANGE CLOSE BUTTON OPACITY
             if (this.pageYOffset >= ofsetTop) {
             	$(".fixsPic1edNavigation").slideDown();
             	$("#close").css("opacity", "0.7");
             } else {
             	$(".fixsPic1edNavigation").slideUp();
             	$("#close").css("opacity", "1")
                 scope.boolChangeClass = false;
             }

             // MOVING FURNITURE
             if ((this.pageYOffset >= movingPicsSt) && (this.pageYOffset <= movingPicsSt2)) {
         		
         		// CHANGING THE TOP POSITIONS OF THE MOVING ELEMENTS AND THIN LINES HEIGHT
     			

			    if (st > lastScrollTop){
			    	cupboardTop.css("top", parseInt(cupboardTop.css("top")) + 5);
		    	  	thinLineCupBoard.css("height", parseInt(thinLineCupBoard.css("height")) + 5);
		    	  	barChair1.css("top", parseInt(barChair1.css("top")) - 5);
		    	  	barChair2.css("top", parseInt(barChair2.css("top")) - 5);
		    	  	thinLineBarChair.css("height", parseInt(thinLineBarChair.css("height")) - 5);
		    	  	chair.css("top", parseInt(chair.css("top")) + 2);

			    }  else{
			        // upscroll cod
			        cupboardTop.css("top", parseInt(cupboardTop.css("top")) - 5);
	    	    	thinLineCupBoard.css("height", parseInt(thinLineCupBoard.css("height")) - 5);
		    	  	thinLineBarChair.css("height", parseInt(thinLineBarChair.css("height")) + 5);
	    	  		barChair1.css("top", parseInt(barChair1.css("top")) + 5);
	    	  		barChair2.css("top", parseInt(barChair2.css("top")) +7);
	    	  		chair.css("top", parseInt(chair.css("top")) - 2);
			    }
             } else {
             	cupboardTop.css("top", cupboardTopSP);
             	thinLineCupBoard.css("height", thinLineCupBoardSH);
             	thinLineBarChair.css("height", thinLineBarChairSH);
    	  		barChair1.css("top", barChair1SP);
    	  		barChair2.css("top", barChair2SP);
    	  		chair.css("top", chairSP);
             }
		    lastScrollTop = st;
        });
    };
});


app.controller('AppartmentController', 
[
	'$scope', 
	function($scope) {
		$scope.toggle = false;

		$scope.toggleTopMenu = function () {
			// body...
			$scope.toggle = !$scope.toggle;
		};

		$scope.numbersArray = [1,2,3,4,5,6,7,8];


		 $scope.$watch('$viewContentLoaded', function(){
		    $scope.numbersArray.forEach( function(element, index) {
		    	setTimeout(function() {
		    		// body...
		    		if (element === 4) {
		    			$("#textContainer").slideDown("slow");
		    		}
		    		$(".pic" + element).slideDown("slow");
		    	}, parseInt(element + "00"));
		    });
		 });

	}
]);