<?php
 $dbhost = "www.unispon.com";
 $dbuser = "cding9_admin";
 $dbpass = "unisponadmin";
 $dbname = "cding9_dev";
 $connection = mysqli_connect($dbhost, $dbuser, $dbpass, $dbname);
 
 if(mysqli_connect_errno()){
	die("Database connection failed: " .
	     mysqli_connect_error().
		 " (" . mysqli_connect_errno() . ")"
		 );
 }
?>


<html>
 <head>
  <title>PHP Test</title>
 </head>
 <body>
 <?php echo '<p>Hello World</p>'; ?> 
 </body>
</html>