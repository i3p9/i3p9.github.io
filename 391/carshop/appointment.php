    <?php

$hostname = "localhost";
$username = "root";
$password = "";
$databaseName = "testsite";

$connect = mysqli_connect($hostname, $username, $password, $databaseName);

$query = "SELECT  uname,fullname FROM info_teacher";

$result = mysqli_query($connect, $query);
$options = "";

while($row = mysqli_fetch_array($result))
{
    $options = $options."<option>$row[0]";
}

?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Make appointment</title>
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.css">
    <link rel="stylesheet" href="style.css">
    <style type="text/css">
        body{ font: 14px sans-serif; text-align: center; }
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.css">
    <style type="text/css">
        body{ font: 14px sans-serif; }
        .wrapper{ width: 350px; padding: 20px; }
    </style>
</head>
<body>
    <div class="page-header">
        <h1>Make an appointment with a mechanic</h1>
    </div>
    <div class="wrapper">
    <form action="submitapt.php" method="post">
    <div class="form-group">
                <label>Mechanic: </label>
    				<select id="mechanic" name="mechanic" required>
    					<option value="">Click Here</option>
			            <option value="Best Mechanic">Best Mechanic</option>
	   	                <option value="Good Mechanic">Good Mechanic</option>
	   	                <option value="Bad Mechanic">Bad Mechanic</option>
	   	                <option value="New Mechanic">New Mechanic</option>
	   	            </select>
    </div>

    <div class="form-group">
                <label>Enter name: </label>
                <input type="text" name="name" class="form-control">
    </div>
    <div class="form-group">
                <label>Address: </label>
                <input type="text" name="address" class="form-control">
    </div>
    <div class="form-group">
                <label>Phone number: </label>
                <input type="text" name="phone" class="form-control">
    </div>
    <div class="form-group">
                <label>Car lisence number: </label>
                <input type="text" name="carl" class="form-control">
    </div>
    <div class="form-group">
                <label>Car Engine number: </label>
                <input type="text" name="care" class="form-control">
    </div>
    <div class="form-group">
                <label>Appointment date: </label>
                <input type="date" name="date" class="form-control">
    </div>
    <div class="form-group">
                <input type="submit" class="btn btn-primary" name="submit">
            </div>
    </form>
    </div>
    <?php require "config.php"?>
    </body>
    </html>