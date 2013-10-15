<?php
//-----start a session------------
	session_start();

//---connect database---------------------
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
//-------------------------------------------------connect database
$username = $_POST['postname'];
$password = $_POST['postpassword'];

if($username&&$password)
{
	
//---------check if user exist	
	if($result = mysqli_query($link, "select * from user where username = '$username'")){
		$row = mysqli_fetch_array($result, MYSQL_ASSOC);	
	}
	else{
		echo('user does not exist');
	}
//--------check if password is correct
	if($row["Password"] == $password){
		$userId = $row["UserId"];
//--------check if userId belongs to company table or club table
		$result_organization = mysqli_query($link, "select * from organization where UserId = '$userId'");
		$_SESSION['userId'] = $userId;
		//$detailRow = mysqli_fetch_array($detailResult, MYSQL_ASSOC);
		//$organizationName = $detailRow["OrganizationName"];
		if(mysqli_num_rows($result_organization) == 0){
			echo('company');
		}
		else{
			echo('organization');
		}
		//echo('true');
	}
	else{
		echo('sorry the password is wrong');
	}
	mysqli_free_result($result);
}
else
{
	echo('please type password or username');
}
mysqli_close($link)
?>