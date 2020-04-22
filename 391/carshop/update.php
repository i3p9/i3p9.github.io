<?php
    $conn = mysqli_connect("localhost", "root", "", "carshop");
    $query="SELECT * FROM appointment";
    $result= $conn->query($query);
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
        <h1>Update or Delete appointment</h1>
    </div>
    <div class="wrapper">
    <form action="updateprocess.php" method="post">
    <div class="form-group">
                <label>Choose a mechanic: </label>
    				<select id="mechanic" name="mechanic" required>
    					<option value="">Click Here</option>
			            <option value="Best Mechanic">Best Mechanic</option>
	   	                <option value="Good Mechanic">Good Mechanic</option>
	   	                <option value="Bad Mechanic">Bad Mechanic</option>
	   	                <option value="New Mechanic">New Mechanic</option>
	   	            </select>
    </div>

    <div class="form-group">
                <label>Appointment ID: </label>
                <input type="number" id="apt_id" name="apt_id" class="form-control" required>
    </div>
    <div class="form-group">
                <label>Appointment date: </label>
                <input type="date" name="date" class="form-control">
    </div>
    <div class="form-group">
            <input type="submit" id="btn" name="btn" value="Update"/>
            <input type="submit" id="btn" name="btn" value="Delete"/>
    </div>
    </form>
    </div>
    <?php require "config.php"?>
    </body>
    </html>