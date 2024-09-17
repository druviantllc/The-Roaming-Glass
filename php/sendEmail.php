<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Collect form data
    $name = $_POST['name'];
    $email = $_POST['email'];
    $phone = $_POST['phone'];
    $event_type = $_POST['event-type'];
    $guests = $_POST['guests'];
    $hours = $_POST['hours'];
    $date = $_POST['date'];
    $location = $_POST['location'];
    $notes = $_POST['notes'];

    // Prepare email
    $to = "your-email@example.com";  // Replace with your email
    $subject = "New Estimate Request from The Roaming Glass";
    $body = "Name: $name\nEmail: $email\nPhone: $phone\nEvent Type: $event_type\nGuests: $guests\nEvent Duration: $hours hours\nEvent Date: $date\nLocation: $location\n\nAdditional Notes:\n$notes";

    // Send email
    if (mail($to, $subject, $body)) {
        // Redirect to thank-you page if successful
        header("Location: thankyou.html");
        exit();
    } else {
        echo "Sorry, there was an error sending your request. Please try again.";
    }
}
?>
