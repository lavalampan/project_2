<?php
    if(isset($_POST['email'])) {
         
        // EDIT THE 2 LINES BELOW AS REQUIRED
        $email_to = "support@themestreet.net";
        $email_subject = "Mail details from themestreet.net";
         
        
        $ime = $_POST['name']; // required
        $email_from = $_POST['email']; // required
        $phone = $_POST['phone']; // not required
        $text = $_POST['message']; // required
         
        $email_message = "Mail details from themestreet.com \n\n";
         
        function clean_string($string) {
          $bad = array("content-type","bcc:","to:","cc:","href");
          return str_replace($bad,"",$string);
        }
         
        $email_message .= "Name: ".clean_string($ime)."\n";
        $email_message .= "Email: ".clean_string($email_from)."\n";
        $email_message .= "Phone: ".clean_string($phone)."\n";
        $email_message .= "Message: ".clean_string($text)."\n";
         
         
    // create email headers
    $headers = 'From: '.$email_from."\r\n".
    'Reply-To: '.$email_from."\r\n" .
    'X-Mailer: PHP/' . phpversion();
    @mail($email_to, $email_subject, $email_message, $headers); 

}
?>
 

  <?php
    include 'index.html';
  ?>