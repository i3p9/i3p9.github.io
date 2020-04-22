<!DOCTYPE html>
<html lang="en">
<head>
  <title>See all appointments</title>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.0/css/bootstrap.min.css">
  <link rel="stylesheet" href="style.css">
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
  <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.0/js/bootstrap.min.js"></script>
</head>
<body>

<h2>All Appointments</h2>

<div class="bs-docs-example">
    
    <div id="myTabContent" class="tab-content">
        <div class="tab-pane fade in active" id="cse">
            <table class="table table-bordered">
                <thead>
                    <tr>
                        <th>Appointment ID </th>
                        <th>Name</th>
                        <th>Address</th>
                        <th>Phone</th>
                        <th>Car License Number</th>
                        <th>Car Engine Number</th>
                        <th>Appointment Date</th>
                        <th>Assigned Mechanic</th>
                    </tr>
                </thead>
                <tbody>
                <?php
$conn = mysqli_connect("localhost", "root", "", "carshop");
// Check connection
if ($conn->connect_error) {
die("Connection failed: " . $conn->connect_error);
}
$sql = "SELECT apt_id, name, address, phone, carl, care, date, mechanic FROM appointment";
$result = $conn->query($sql);
if ($result->num_rows > 0) {
while($row = mysqli_fetch_array($result)) {
        echo "<tr>";
        echo "<td>" . $row['apt_id'] . "</td>";
        echo "<td>" . $row['name'] . "</td>";
        echo "<td>" . $row['address'] . "</td>"; 
        echo "<td>" . $row['phone'] . "</td>";
        echo "<td>" . $row['carl'] . "</td>";
        echo "<td>" . $row['care'] . "</td>";
        echo "<td>" . $row['date'] . "</td>";
        echo "<td>" . $row['mechanic'] . "</td>"; 
        echo "<tr>";
    }
echo "</table>";
} else { echo "0 results"; }
$conn->close();
?>
                </tbody>
            </table>
            <a href="update.php" class="btn btn-primary">Update/Delete an Appointment</a>
        </div>
        </body>
        </html>