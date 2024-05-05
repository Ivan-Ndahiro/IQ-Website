<?php
$servername = "iqresultsdb.cxcsaikc44fy.eu-north-1.rds.amazonaws.com";
$username = "admin";
$password = "ThoughtsAllowingPrivacy10";
$dbname = "iqresultsdb";

//Create Connection
$conn = new mysqli($servername, $username, $password, $dbname);

//Check connection
if ($conn->connect_error){
    die("Connection failed: ".$conn->connect_error);
}

$total = filter_input(INPUT_POST, "answerTotal", FILTER_VALIDATE_INT);
$iq = filter_input(INPUT_POST, "iqTotal", FILTER_VALIDATE_INT);
$Q1 = filter_input(INPUT_POST, "Q1", FILTER_VALIDATE_INT);
$Q2 = filter_input(INPUT_POST, "Q2", FILTER_VALIDATE_INT);
$Q3 = filter_input(INPUT_POST, "Q3", FILTER_VALIDATE_INT);
$Q4 = filter_input(INPUT_POST, "Q4", FILTER_VALIDATE_INT);
$Q5 = filter_input(INPUT_POST, "Q5", FILTER_VALIDATE_INT);
$Q6 = filter_input(INPUT_POST, "Q6", FILTER_VALIDATE_INT);
$Q7 = filter_input(INPUT_POST, "Q7", FILTER_VALIDATE_INT);
$Q8 = filter_input(INPUT_POST, "Q8", FILTER_VALIDATE_INT);
$Q9 = filter_input(INPUT_POST, "Q9", FILTER_VALIDATE_INT);
$Q10 = filter_input(INPUT_POST, "Q10", FILTER_VALIDATE_INT);
$Q11 = filter_input(INPUT_POST, "Q11", FILTER_VALIDATE_INT);
$Q12 = filter_input(INPUT_POST, "Q12", FILTER_VALIDATE_INT);
$Q13 = filter_input(INPUT_POST, "Q13", FILTER_VALIDATE_INT);
$Q14 = filter_input(INPUT_POST, "Q14", FILTER_VALIDATE_INT);
$Q15 = filter_input(INPUT_POST, "Q15", FILTER_VALIDATE_INT);
$Q16 = filter_input(INPUT_POST, "Q16", FILTER_VALIDATE_INT);
$Q17 = filter_input(INPUT_POST, "Q17", FILTER_VALIDATE_INT);
$Q18 = filter_input(INPUT_POST, "Q18", FILTER_VALIDATE_INT);
$Q19 = filter_input(INPUT_POST, "Q19", FILTER_VALIDATE_INT);
$Q20 = filter_input(INPUT_POST, "Q20", FILTER_VALIDATE_INT);
$Q21 = filter_input(INPUT_POST, "Q21", FILTER_VALIDATE_INT);
$Q22 = filter_input(INPUT_POST, "Q22", FILTER_VALIDATE_INT);
$Q23 = filter_input(INPUT_POST, "Q23", FILTER_VALIDATE_INT);
$Q24 = filter_input(INPUT_POST, "Q24", FILTER_VALIDATE_INT);
$Q25 = filter_input(INPUT_POST, "Q25", FILTER_VALIDATE_INT);
$Q26 = filter_input(INPUT_POST, "Q26", FILTER_VALIDATE_INT);
$Q27 = filter_input(INPUT_POST, "Q27", FILTER_VALIDATE_INT);
$Q28 = filter_input(INPUT_POST, "Q28", FILTER_VALIDATE_INT);
$Q29 = filter_input(INPUT_POST, "Q29", FILTER_VALIDATE_INT);
$Q30 = filter_input(INPUT_POST, "Q30", FILTER_VALIDATE_INT);

$stmt = $conn->prepare("INSERT INTO score (total, iq, Q1, Q2, Q3, Q4, Q5, Q6, Q7, Q8, Q9, Q10,
Q11, Q12, Q13, Q14, Q15, Q16, Q17, Q18, Q19, Q20
Q21, Q22, Q23, Q24, Q25, Q26, Q27, Q28, Q29, Q30) 
VALUES (?, ?, ?, ?, 
?, ?, ?, ?, 
?, ?, ?, ?, 
?, ?, ?, ?, 
?, ?, ?, ?, 
?, ?, ?, ?, 
?, ?, ?, ?, 
?, ?, ?, ?, )");
$stmt->bind_param("iiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii", 
$total, $iq, $Q1, $Q2, $Q3, $Q4, $Q5, 
$Q6, $Q7, $Q8, $Q9, $Q10, $Q11, $Q12, $Q13, $Q14, $Q15, 
$Q16, $Q17, $Q18, $Q19, $Q20, $Q21, $Q22, $Q23, $Q24, $Q25, 
$Q26, $Q27, $Q28, $Q29, $Q30);

$stmt->execute();
echo "Results recorded!";

if ($conn->query($sql) === TRUE) {
    echo "Results added successfully";
    } else {
    echo "Error: " . $sql . "<br>" . $conn->error;
    }
    
$stmt->close();
$conn->close();