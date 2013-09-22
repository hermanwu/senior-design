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
//-------------------------------------------------connect database

$username = $_POST['username'];
$password = $_POST['password'];

if($username&&$password)
{
	
//---------check if user exist	
	if($result = mysqli_query($link, "select * from user where username = '$username'")){
		$row = mysqli_fetch_row($result);	
	}
	else{
		printf('user does not exist');
	}
//--------check if password is correct
	if($row[2] == $password){
		printf('welcome to unispon');
	}
	else{
		printf('sorry the password is wrong');
	}
	mysqli_free_result($result);
}
else
{
	printf('please type password or username');
}
mysqli_close($link)
?>