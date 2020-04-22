<?php
    $conn = mysqli_connect("localhost", "root", "", "carshop");
    
    $aptid=$_POST['apt_id'];
  	$mechanic =$_POST['mechanic'];
  	$dates=$_POST['date'];
    $btn=$_POST['btn'];
    if($btn=="Update"){
      $dates= date("yy-m-d", strtotime($dates));
      $query = "UPDATE appointment SET mechanic= '$mechanic', date='$date' WHERE apt_id='$aptid';";
      mysqli_query($conn,$query);
      if($query)
        echo "Appointment Updated Successfully.";
        header("location: updatedS.php");
    } else {
      $query="DELETE FROM appointment WHERE apt_id='$aptid';";
      mysqli_query($conn,$query);
      if($query)
      echo "Appointment added successfully!";
      header("location: deletedS.php");
    }

?>