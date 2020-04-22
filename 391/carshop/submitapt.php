<?php
$conn = mysqli_connect("localhost", "root", "", "carshop");
 
$name = $_POST["name"];
$address = $_POST["address"];
$phone = $_POST["phone"];
$carl = $_POST["carl"];
$care = $_POST["care"];
$mechanic = $_POST["mechanic"];
$date = $_POST["date"];
$date= date("yy-m-d", strtotime($date));
  
$count=0;
$usercount=0;

$query="SELECT * FROM appointment WHERE date='$date' AND mechanic='$mechanic';";
$result=$conn->query($query);
while($rows=$result->fetch_assoc()){
    $count=$count+1;
}
$query="SELECT * FROM appointment WHERE date='$date' AND name='$name';";
$result=$conn->query($query);
while($rows=$result->fetch_assoc()){
    $usercount=$usercount+1;
}

if($count>=4) {
    echo "Mechanic is busy.";
  } else if($usercount==1){
    echo "You already have an appointment that day";
  }else{
    $sql = "INSERT INTO appointment (name, address, phone, carl, care, date, mechanic)VALUES ('$name', '$address', '$phone','$carl','$care','$date','$mechanic');";
    mysqli_query($conn,$sql);
    if($sql)
      echo"Appointment added";
      header("location: aptaddedS.php");
  }
?>