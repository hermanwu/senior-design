<?php
$submit = $_POST['submit'];
if($submit){
	$newusername = $_POST['newusername'];
	$newpassword = $_POST['newpassword'];
	$repeatpassword = $_POST['newpassword'];
	$newemail = $_POST['newemail'];
	if($newusername&&$newpassword&&$newemail)
	{
		//encrypte password
		//$password = md5($password);
		
		//check the length of the input
		if(strlen($newusername)>25||strlen($newemail)>25)
		{
			echo "max limite for username/email are 24 characters";
		}
		else
		{
			//check password
			if(strlen($newpassword)>25||strlen($newpassword)<6)
			{
				echo"Password must be between 6 and 25 character";
			}
			else{
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
				//---------check if user exist	
				$insertQuery = mysqli_query($link, 
				"Insert into user (username, password, email) values ('$newusername','$newpassword','$newemail')");
				die("your have been registered!");
			}
		}
		//---connect database---------------------
	}
	else{
		echo "please fill all fields";
	}
}
?>

<html>

</html>