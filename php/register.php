<?php

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
echo("database connected");
//-------------------------------------------------connect database

$newusername = $_POST['postname'];
$newschool = $_POST['postschool'];
$newemail = $_POST['postemail'];
$newpassword = $_POST['postpassword1'];
$repeatpassword = $_POST['postpassword2'];
$newusertype = $_POST['postusertype'];

	echo ("checking password");
	if($newpassword !== $repeatpassword)
	{
		echo("The passwords you entered do not match");
	}
	elseif($newusername&&$newpassword&&$newemail)
	{
		//encrypt password
		//$password = md5($password);
		
		//check the length of the input
		if(strlen($newusername)>25||strlen($newemail)>25)
		{
			echo("max limit for username/email are 24 characters");
		}
		else
		{
			//---------check if user exist	
			$insertQuery = mysqli_query($link, 
			"Insert into user (username, password, email, usertype) values ('$newusername','$newpassword','$newemail','$newusertype')");
			die("your have been registered!");
			
		}
		//---connect database---------------------
	}
	else
	{
		echo("please fill all fields");
	}

mysqli_close($link)
?>

<html>

</html>