<?php

//-----start a session------------
session_start();

//-----connect database
$dbhost = "localhost";	
$dbuser = "root";
$dbpass = "";
$dbname = "unispon";
$link = mysqli_connect($dbhost, $dbuser, $dbpass, $dbname); 

if(mysqli_connect_errno()){
	die("Database connection failed: " .
	mysqli_connect_error().
	 " (" . mysqli_connect_errno() . ")"
	 );
}

$userId = $_SESSION['userId'];
$sql = "select * from organization where UserId = '$userId'";
$resultSQL = mysqli_query($link, $sql);
$result = array();

while($row = mysqli_fetch_array($resultSQL, MYSQL_ASSOC))
	array_push($result, array('clubName' => $row["OrganizationName"],
							  'emailAddress'=> "hhh@gatech.edu",
							  'numberOfMembers' => $row["OrganizationSize"],
							  'schoolName' => $row["School"],
							  'clubDescription' => $row["OrganizationDescription"],
							  'imageLocation' => "http://static2.businessinsider.com/image/51f03f966bb3f73c7700000b/19-fast-food-hacks-that-will-change-the-way-you-order.jpg"));
echo json_encode(array("clubDetails" => $result));

?>