function showUploadImage(){
	$("#file").show('slow');
	$("#submit").show('slow');
}

function hideUploadImage(){
	setTimeout(function(){
		$("#file").hide('slow');
		$("#submit").hide('slow');
	}, 2000);	
}



//add a package to database when click the submit button
function submit() {
	var packageName = $('#packageName').val();
	var price = $('#price').val();
	var details = $('#details').val();
	$.post('../php/addPackage.php', { postPackageName: packageName, postPrice: price, postDetails: details },
		function (data) {
		    window.location.reload();
		});
}

//logout from the club page
function logout() {
	var r = confirm("Do you really want to log out?");
	if (r) {
		window.location.href = '../php/logout.php'
	}
}


/*JSON Objects that are used to populate web page*/
/*
var clubPackagesJSONString = '{ "packages" : [' +
'{ "packageName":"Charles Package A" , "packagePrice":"$134134124" },' +
'{ "packageName":"Charles Package B" , "packagePrice":"$134134124" },' +
'{ "packageName":"Charles Package C" , "packagePrice":"$134134124" },' +
'{ "packageName":"Charles Package D" , "packagePrice":"$134134124" },' +
'{ "packageName":"Charles Package E" , "packagePrice":"$134134124" },' +
'{ "packageName":"Charles Package F" , "packagePrice":"$134134124" },' +
'{ "packageName":"Charles Package G" , "packagePrice":"$134134124" }]}';

var clubDetailsJSONString = '{ "clubDetails" : [' +
'{ "clubName":"Japanese Student Association" , "emailAddress":"asdf@gmail.com", "numberOfMembers":"(Over 9000)", "schoolName":"Georgia Institute of Technology", "clubDescription":"This is definitely the best club in the world!. Blafja sidaishdfu ahsidufha suid fhasih udfiausdh fuashdf iuashdfiuas hdfi uasdhf iasudfh iasud hfiaus dhfiu asdhfiu ashfdiu ahdfi uashd uashd uashd uashd uashd uashd uashd uashd uashd uashd uashd uashd uashd uashd uashd  uashd uashd uashd uashd uashd uashd uashd uashduashd uashd uashd uashd uashd uashd uashd fiua shdf iuashd i uf", "imageLocation":"http://static2.businessinsider.com/image/51f03f966bb3f73c7700000b/19-fast-food-hacks-that-will-change-the-way-you-order.jpg" }]}';
*/




/*Global JSON Variables*/

/*
var clubPackages = eval("(" + clubPackagesJSONString + ")");
var clubDetails = eval("(" + clubDetailsJSONString + ")");
var clubPackagesSize = clubPackages.packages.length;
*/



/*Driver*/
$(document).ready(function () {
	loadClubPackages();
	loadClubDetails();

	/** Scrollspy Implemented for Scroll instead of previous nasty code**/

	/**Parralax Functionality**/
	var $window = $(window);
	$('div[data-type="background"]').each(function () {
		var $bgobj = $(this); // assigning the object

		$(window).scroll(function () {
			var yPos = -($window.scrollTop() / $bgobj.data('speed'));

			// Put together our final background position
			var coords = '50% ' + yPos + 'px';

			// Move the background
			$bgobj.css({ backgroundPosition: coords });
		});
	});

	/**HomeScreen/Background Dynamic Visual Settings**/
	/*Global Offsets for Visual Dynamics*/
	var heightOffset; //Offset for HomeText in relation with bottom of screen
	var homeTextHeight; //Object's Height at any given time

	/*Refreshes Home Page to have optimal Visual settings*/
	function refreshHomePageVisuals() {
		//Need to loop through array of those to find highest value of height
		var homeTextHeightArray = document.getElementsByClassName('carousel-caption');
		homeTextHeight = 0;
		for (var i = 0; i < homeTextHeightArray.length; i++) {
			if ($(homeTextHeightArray[i]).height() > homeTextHeight) {
				homeTextHeight = $(homeTextHeightArray[i]).height();
			}
		}

		if ($(window).width() > 768) {
			heightOffset = 80;
		} else {
			heightOffset = 80 + 10;
		}
		$('.carousel .item').css("height", $(window).height() + heightOffset);
		$('.carousel .item  img').css("height", $(window).height() + heightOffset);
		$('.carousel-caption').css("margin-bottom", ($(window).height() - homeTextHeight - 45) / 2); //45px is a minor tweak to center text...Not very noticable (I'm perfectionist)   
		$('#c1').load(function () {
			$('#backgroundImage').css("top", $(window).height());
			$('#backgroundImage').css("height", $(document).height() - $(window).height());
		}).each(function () {
			if (this.complete) {
				$(this).trigger('load');
			}
		});
		$('[data-spy="scroll"]').each(function () {
			var $spy = $(this).scrollspy('refresh')
		});

		/**Mobile Click Functionality**/
		/*OnClick in Mobile, will collapse menu*/
		if ($(window).width() < 861) { //861, because thats when Mobile View kicks in.
			$('#homeBtn').click(function () {
				$('#mobileMenu').click();
			});
			$('#aboutBtn').click(function () {
				$('#mobileMenu').click();
			});
			$('#faqBtn').click(function () {
				$('#mobileMenu').click();
			});
			$('#contactBtn').click(function () {
				$('#mobileMenu').click();
			});
		} else {
			$('#homeBtn').unbind();
			$('#aboutBtn').unbind();
			$('#faqBtn').unbind();
			$('#contactBtn').unbind();
		}
	}
	/*Loads optimal home visuals when User first opens site*/
	refreshHomePageVisuals();

	/*Loads optimal home visuals when User Resize/Zoom*/
	$(window).resize(function () {
		refreshHomePageVisuals();
	});
	var cachceBugFix = setInterval(function () {
		var goalHeight = $(document).height() - $(window).height();
		if ($('#backgroundImage').height() < goalHeight - 5 || $('#backgroundImage').height() > goalHeight + 5) {
			refreshHomePageVisuals();
		}
	}, 250);

	/**Removes Loading Screen***/
	/* Comment: This is essential to get rid of "flickers" on initial load. This
	* guarantees everything is loaded to visual perfection, THEN allows user to see.*/
	//NOT FUCKING WORKING - FIX LATER - THIS PIECE OF SHIT JQUERY's LOAD FCKING BULL SHIT
	// http://mike-donaldson.com/tips-and-tricks/jquery-load-event-not-firing-on-images/
	$('#c1').load(function () {
		$('#loadingScreen').hide();
	}).each(function () {
		if (this.complete) {
			$(this).trigger('load');
		}
	});
	//alert($(window).height());
	//alert($(window).width());
	//alert($(document).height());
	//alert($(document).width());

	// load company information




	function loadClubPackages() {
		$.getJSON("../php/getPackagesByClub.php", function (data) {
			var packageName, packagePrice, clubPackagesSize;
			clubPackagesSize = data.packages.length;
			for (var i = 0; i < clubPackagesSize; i++) {
				packageName = data.packages[i].packageName;
				packagePrice = data.packages[i].packagePrice;
				$("#packages").append("<li class=\"list-group-item\">" + packageName +"<span>" + "$ " + packagePrice + "</span></li>");
			}
		});
	}

	function loadClubDetails() {
		$.getJSON("../php/getClub.php", function (data) {

			var clubName = data.clubDetails[0].clubName;
			var emailAddress = data.clubDetails[0].emailAddress;
			var numberOfMembers = data.clubDetails[0].numberOfMembers;
			var schoolName = data.clubDetails[0].schoolName;
			var clubDescription = data.clubDetails[0].clubDescription;
			var imageLocation = data.clubDetails[0].imageLocation;

			$("#clubName").text(clubName);
			$("#clubMembers").text(numberOfMembers);
			$("#schoolName").text(schoolName);
			$("#clubDetails").text(clubDescription);
			$("#clubPic").attr("src", imageLocation);
			$("#emailAddress").append("<a href=\"mailto:" + emailAddress + "?Subject=Hello%20again\">" + emailAddress + "</a>");

		});
	}

});
