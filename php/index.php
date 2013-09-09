<?php
 $dbhost = "localhost";
 $dbuser = "cding9_hw";
 $dbpass = "cding9";
 $dbname = "cding9_unispon";
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