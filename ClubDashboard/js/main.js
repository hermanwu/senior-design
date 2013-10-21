


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
})


function loadClubPackages() {
	$.getJSON("../php/getPackagesByClub.php", function(data){
    var packageName, packagePrice, clubPackagesSize;
	clubPackagesSize = data.packages.length;
		for (var i = 0; i < clubPackagesSize; i++) {
			packageName =  data.packages[i].packageName;
			packagePrice = data.packages[i].packagePrice;
			$("#packages").append("<li class=\"list-group-item\">"+packageName+"<span>"+packagePrice+"</span></li>");
		}
	});
}



function loadClubDetails() {
	$.getJSON("../php/getClub.php", function(data){
	
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