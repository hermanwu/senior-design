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

$searchValue = $_POST['postsearch'];
$searchSQL = "SELECT * FROM Organization WHERE OrganizationName LIKE '$searchValue'";
$searchResultSQL = mysqli_query($link, $searchSQL);

$result = array(); 
while($rowSearch = mysqli_fetch_array($searchResultSQL, MYSQL_ASSOC)) {
	$orgId = $rowSearch["OrganizationId"];
	$sql = "SELECT * FROM package WHERE OrganizationId LIKE '$orgId'";
	$resultSQL = mysqli_query($link, $sql);
	while($row = mysqli_fetch_array($resultSQL, MYSQL_ASSOC)){
		array_push($result, array('Package Name' => $row["PackageName"],
								  'Detail'=> $row["Details"],
								  'Price' => $row["Price"]));
	}
}
echo json_encode(array("result" => $result));



?>