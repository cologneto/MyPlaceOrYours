var app = angular.module('app', ["ngAnimate"]);

app.directive("scroll", function ($window) {
    return function(scope, element, attrs) {
    	var ofsetTop = $(".arrow").offset().top - 100;
    		
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
            window.location.pathname='/';
		};

		$scope.numbersArray = [1,2,3,4,5,6,7,8];

		$scope.slider =  new Swiper('.swiper-container', {
        slidesPerView: 1,
        paginationClickable: true,
        autoplay: 2500,
        spaceBetween: 30,
        loop: true
    });
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