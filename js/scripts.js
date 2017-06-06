var jsonObj = [
  {
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#212121"
      }
    ]
  },
  {
    "elementType": "labels.icon",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#757575"
      }
    ]
  },
  {
    "elementType": "labels.text.stroke",
    "stylers": [
      {
        "color": "#212121"
      }
    ]
  },
  {
    "featureType": "administrative",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#757575"
      }
    ]
  },
  {
    "featureType": "administrative.country",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#9e9e9e"
      }
    ]
  },
  {
    "featureType": "administrative.land_parcel",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "administrative.locality",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#bdbdbd"
      }
    ]
  },
  {
    "featureType": "poi",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#757575"
      }
    ]
  },
  {
    "featureType": "poi.park",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#181818"
      }
    ]
  },
  {
    "featureType": "poi.park",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#616161"
      }
    ]
  },
  {
    "featureType": "poi.park",
    "elementType": "labels.text.stroke",
    "stylers": [
      {
        "color": "#1b1b1b"
      }
    ]
  },
  {
    "featureType": "road",
    "elementType": "geometry.fill",
    "stylers": [
      {
        "color": "#2c2c2c"
      }
    ]
  },
  {
    "featureType": "road",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#8a8a8a"
      }
    ]
  },
  {
    "featureType": "road.arterial",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#373737"
      }
    ]
  },
  {
    "featureType": "road.highway",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#3c3c3c"
      }
    ]
  },
  {
    "featureType": "road.highway.controlled_access",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#4e4e4e"
      }
    ]
  },
  {
    "featureType": "road.local",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#616161"
      }
    ]
  },
  {
    "featureType": "transit",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#757575"
      }
    ]
  },
  {
    "featureType": "water",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#000000"
      }
    ]
  },
  {
    "featureType": "water",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#3d3d3d"
      }
    ]
  }
];  

var sectionP = $("section"),
    windowHeight = $(window).outerHeight(true);
var scrollEventCounter = 0;
var lastScrollTop = 0;
var photoGirlImg = $(".photoGirl").children();

// .first().offset().top;


function ShowHideMenuNavigation(x) {
    x.classList.toggle("change");
    $(".navMenuContainer").toggle("hidden");
    if ($(".navMenuContainer").hasClass("hidden")) {
        $(".navMenuContainer").removeClass("hidden");
    }
    else {
       $(".navMenuContainer").addClass("hidden"); 
    }
}

$(document).ready(function() {
  var bookATransferForm = $('.bookATransferForm');
  bookATransferForm.addClass("hide");
  $('.expandable').on('click', function(event) {
    event.preventDefault();
    if (bookATransferForm.hasClass('hide')) {
      bookATransferForm.removeClass('hide');
      $(this).children('div').text('-');
    } else {
      bookATransferForm.addClass("hide");
      $(this).children('div').text('+');
    }
  });;
  

  $("#homeButton").on("click", function() {
    // body...
     $("body, html").animate({ 
      scrollTop: 0 
    }, 1500);
  })
  $('#fullpage').fullpage({
    verticalCentered: false,
    anchors: ['firstPage', 'secondPage','3rdPage','4thpage'],
    menu: '#menu',
    afterLoad: function(anchorLink, index){
      var loadedSection = $(this);

      //using index
      if(index == 2){
         $(".photoGirl").children().addClass("photoAnimation");
         $(".map").removeClass('hide').children().addClass("rotating");
      }

      //using anchorLink
      if(anchorLink == '3rdPage'){
        $(".apartmentOne").addClass("apartAnimation1").css('background-image', 'url(images/homePage/ap1.jpg)');
        $(".apartmentTwo").addClass("apartAnimation2").css('background-image', 'url(images/homePage/ap2.jpg)');
        $(".apartmentThree").addClass("apartAnimation3").css('background-image', 'url(images/homePage/ap3.jpg)');
      }
    }

  });
});

/*'3rdPage', '4thpage', '5thpage','6thpage','7thpage','8thpage','9thpage'*/

var isDownScroll = function(offsetTop) {
  if (offsetTop > lastScrollTop){
    return true;
  } else {    
    return false;
  }
}

var sectionNumber = function (currPosition) {
  if ((currPosition >= 0) && (currPosition < windowHeight)) {
    
    return 1;
  } else if ((currPosition >= windowHeight) && (currPosition <= 2*windowHeight)) {
    return 2;
  }
  else if ((currPosition >= 2*windowHeight) && (currPosition <= 3*windowHeight)) {
    return 3;
  }
  else {
    return 4;
  }
}



$(document).on("scroll", function(e){
  var offsetTop = $(window).scrollTop();
  var sectionNumberNow = sectionNumber(offsetTop);

  if ((isDownScroll(offsetTop)) &&  sectionNumberNow == 1) {
      $(".photoGirl").children().addClass("photoAnimation");
      $(".map").children().addClass("rotating");
  }

   if ((isDownScroll(offsetTop)) &&  sectionNumberNow == 3) {
      $(".apartmentOne").addClass("apartAnimation1");
      $(".apartmentTwo").addClass("apartAnimation2");
      $(".apartmentThree").addClass("apartAnimation3");
     
  }
});

$(".stepIn").on("click", function() {
  var local = window.location.href;
  window.location.href = local + "apartment1.html"
})


function initMap() {
	  	
	    var uluru = {lat: 47.4926021, lng: 19.0632918};
	    var map = new google.maps.Map(document.getElementById('integratedMap'), {
	      zoom: 15,
	      center: uluru,
	      styles: jsonObj
	    });
	    var marker = new google.maps.Marker({
	      position: uluru,
	      map: map
	    });
	  }

  
  
