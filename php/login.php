<?php
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

$username = $_POST['username'];
$password = $_POST['password'];

if($username&&$password)
{
	
	if($result = mysqli_query($link, "select * from user where username = '$username'")){
		//printf(mysqli_num_rows($result));
		$row = mysqli_fetch_row($result);
		
	};
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