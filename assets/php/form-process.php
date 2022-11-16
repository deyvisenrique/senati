<?php
include('conexion.php'); 
$errorMSG = "";

// NAME
if (empty($_POST["name"])) {
    $errorMSG = "Name is required ";
} else {
    $name = $_POST["name"];
}

// EMAIL
if (empty($_POST["email"])) {
    $errorMSG .= "Email is required ";
} else {
    $email = $_POST["email"];
}

// PHONE
if (isset($_POST["phone_number"])) {
    $phone_number = $_POST["phone_number"];
}

// SUBJECT
if (isset($_POST["select_subject"])) {
    $select_subject = $_POST["select_subject"];
}

// MESSAGE
if (empty($_POST["message"])) {
    $errorMSG .= "Message is required ";
} else {
    $message = $_POST["message"];
}


$EmailTo = "yourmail@domain.com";

$bodySubject = "New Message Received";

// prepare email body text
$Body = "";
$Body .= "Name: ";
$Body .= $name;
$Body .= "\n";
$Body .= "Email: ";
$Body .= $email;
$Body .= "\n";
$Body .= "Phone Number: ";
$Body .= $select_subject;
$Body .= "\n";
$Body .= "Select Requirments: ";
$Body .= $phone_number;
$Body .= "\n";
$Body .= "Message: ";
$Body .= $message;
$Body .= "\n";

// send email
$success = mail($EmailTo, $bodySubject, $Body);

// redirect to success page
if ($success && $errorMSG == ""){
   echo "success";
}else{
    if($errorMSG == ""){
        echo "Something went wrong :(";
    } else {
        echo $errorMSG;
    }
}


?>
<?php
include('conexion.php'); 
$n = $_POST["name"];
$a = $_POST["phone_number"];
$x = $_POST["email"];
$z = $_POST["select_subject"];
$c = $_POST["message"];
if ($z == 1){
    $z = "Website customize";
} elseif ($e == 2){
    $z = "Design";
} elseif ($e == 3){
    $z = "Development";
} elseif ($e == 4){
    $z = "SEO";
};

$instruccionSQL = $db->prepare("INSERT INTO Contacto(name,phone_number,email,select_subject,message) VALUES(?,?,?,?,?)");
$instruccionSQL->execute(array($n,$a,$x,$z,$c));
echo "<h4>". $n ." " .$a ."</h4>";
echo "<h4>". $x ." ".$z . "</h4>";
echo "<h5>" . $c ."</h5>";
echo "Datos registrados" ."<br>";
?>