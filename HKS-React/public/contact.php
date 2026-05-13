<?php
// Allow CORS for requests from the React frontend
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');
header('Content-Type: application/json');

// Handle preflight OPTIONS request
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit();
}

// Only accept POST requests
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['success' => false, 'message' => 'Method not allowed.']);
    exit();
}

// Parse JSON body
$raw  = file_get_contents('php://input');
$data = json_decode($raw, true);

// ── Validate required fields ──
$name      = isset($data['name'])      ? trim(htmlspecialchars($data['name']))      : '';
$email     = isset($data['email'])     ? trim(htmlspecialchars($data['email']))     : '';
$phone     = isset($data['phone'])     ? trim(htmlspecialchars($data['phone']))     : '';
$institute = isset($data['institute']) ? trim(htmlspecialchars($data['institute'])) : '—';
$revenue   = isset($data['revenue'])   ? trim(htmlspecialchars($data['revenue']))   : '—';
$message   = isset($data['message'])   ? trim(htmlspecialchars($data['message']))   : '';

if (empty($name) || empty($email) || empty($phone) || empty($message)) {
    http_response_code(400);
    echo json_encode(['success' => false, 'message' => 'Please fill in all required fields.']);
    exit();
}

if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    http_response_code(400);
    echo json_encode(['success' => false, 'message' => 'Please enter a valid email address.']);
    exit();
}

$timestamp = date('d M Y, h:i A');
$siteUrl   = 'https://hellokiransheth.in';

// ──────────────────────────────────────────────
// 1. Notification email to admins
// ──────────────────────────────────────────────
$adminEmails = [
    'hajarekiran210@gmail.com',
    'devilonearth789@gmail.com',
];

$adminSubject = "📬 New Contact Inquiry from $name";

$adminBody = "
<!DOCTYPE html>
<html>
<head>
  <meta charset='UTF-8'>
  <style>
    body { font-family: Arial, sans-serif; background: #0a0a0a; color: #d1d5db; margin: 0; padding: 0; }
    .container { max-width: 600px; margin: 40px auto; background: #111; border: 1px solid #222; border-radius: 12px; overflow: hidden; }
    .header { background: linear-gradient(135deg, #111, #1a1a1a); border-bottom: 3px solid #cf9d45; padding: 32px 40px; text-align: center; }
    .header h1 { color: #cf9d45; font-size: 1.4rem; margin: 0 0 4px; }
    .header p  { color: #6b7280; font-size: 0.85rem; margin: 0; }
    .body { padding: 32px 40px; }
    .field-label { color: #6b7280; font-size: 0.72rem; text-transform: uppercase; letter-spacing: 0.1em; margin-bottom: 4px; font-weight: 600; }
    .field-value { color: #fff; font-size: 1rem; margin-bottom: 20px; padding: 12px 16px; background: #1a1a1a; border-radius: 8px; border-left: 3px solid #cf9d45; line-height: 1.6; }
    .message-value { white-space: pre-wrap; }
    .footer { background: #0d0d0d; padding: 20px 40px; text-align: center; color: #4b5563; font-size: 0.8rem; }
    .reply-link { display: inline-block; margin-top: 24px; background: #cf9d45; color: #000; font-weight: 800; text-decoration: none; padding: 12px 28px; border-radius: 8px; font-size: 0.9rem; }
  </style>
</head>
<body>
  <div class='container'>
    <div class='header'>
      <img src='$siteUrl/LOGO.png' alt='Kiran Hajare' style='max-width: 180px; height: auto; margin-bottom: 20px;'>
      <h1>📬 New Contact Inquiry</h1>
      <p>Submitted on $timestamp (IST)</p>
    </div>
    <div class='body'>
      <div class='field-label'>Full Name</div>
      <div class='field-value'>$name</div>

      <div class='field-label'>Email Address</div>
      <div class='field-value'>$email</div>

      <div class='field-label'>WhatsApp Number</div>
      <div class='field-value'>$phone</div>

      <div class='field-label'>Institute Name</div>
      <div class='field-value'>$institute</div>

      <div class='field-label'>Current Monthly Revenue</div>
      <div class='field-value'>$revenue</div>

      <div class='field-label'>Message / Goal</div>
      <div class='field-value message-value'>$message</div>

      <a href='mailto:$email' class='reply-link'>Reply to $name →</a>
    </div>
    <div class='footer'>
      hellokiransheth.com &nbsp;·&nbsp; Contact Form Notification
    </div>
  </div>
</body>
</html>
";

$adminHeaders  = "MIME-Version: 1.0\r\n";
$adminHeaders .= "Content-Type: text/html; charset=UTF-8\r\n";
$adminHeaders .= "From: HKS Contact Form <noreply@hellokiransheth.in>\r\n";
$adminHeaders .= "Reply-To: $email\r\n";

$adminSent = true;
foreach ($adminEmails as $adminEmail) {
    if (!mail($adminEmail, $adminSubject, $adminBody, $adminHeaders)) {
        $adminSent = false;
    }
}

// ──────────────────────────────────────────────
// 2. Auto-reply confirmation email to the sender
// ──────────────────────────────────────────────
$replySubject = "✅ We've received your inquiry – Kiran Hajare";

$replyBody = "
<!DOCTYPE html>
<html>
<head>
  <meta charset='UTF-8'>
  <style>
    body { font-family: Arial, sans-serif; background: #0a0a0a; color: #d1d5db; margin: 0; padding: 0; }
    .container { max-width: 560px; margin: 40px auto; background: #111; border: 1px solid #222; border-radius: 12px; overflow: hidden; }
    .header { background: linear-gradient(135deg, #111, #1a1a1a); border-bottom: 3px solid #cf9d45; padding: 40px; text-align: center; }
    .header h1 { color: #fff; font-size: 1.5rem; margin: 0 0 8px; }
    .header p  { color: #cf9d45; font-size: 0.9rem; margin: 0; }
    .body { padding: 32px 40px; }
    .body p { color: #9ca3af; line-height: 1.7; margin-bottom: 16px; }
    .body strong { color: #fff; }
    .highlight { background: #1a1a1a; border-left: 3px solid #cf9d45; border-radius: 8px; padding: 14px 18px; margin: 20px 0; }
    .highlight p { margin: 0; color: #9ca3af; font-size: 0.9rem; }
    .cta { display: block; background: #cf9d45; color: #000; font-weight: 800; text-align: center; text-decoration: none; padding: 14px 32px; border-radius: 8px; margin: 24px auto; max-width: 220px; font-size: 0.95rem; }
    .footer { background: #0d0d0d; padding: 20px 40px; text-align: center; color: #4b5563; font-size: 0.8rem; }
    .footer a { color: #6b7280; }
  </style>
</head>
<body>
  <div class='container'>
    <div class='header'>
      <img src='$siteUrl/LOGO.png' alt='Kiran Hajare' style='max-width: 180px; height: auto; margin-bottom: 20px;'>
      <h1>Message Received! 🎯</h1>
      <p>We'll get back to you within 24 hours</p>
    </div>
    <div class='body'>
      <p>Hi <strong>$name</strong>,</p>
      <p>
        Thank you for reaching out to us! We've received your inquiry and our team will
        review it shortly. You can expect a response within <strong>24 business hours</strong>.
      </p>
      <div class='highlight'>
        <p><strong style='color:#cf9d45;'>📌 Your Submission Summary</strong></p>
        <p>Name: $name</p>
        <p>Email: $email</p>
        <p>WhatsApp: $phone</p>
        <p>Institute: $institute</p>
      </div>
      <p>
        In the meantime, feel free to explore our <strong>latest articles, podcasts,
        and YouTube content</strong> — packed with strategies to start growing your institute today.
      </p>
      <a href='$siteUrl/articles' class='cta'>Read Articles →</a>
      <p style='font-size:0.85rem; color:#6b7280;'>
        If you didn't submit this form, please ignore this email.
      </p>
    </div>
    <div class='footer'>
      © " . date('Y') . " hellokiransheth.com &nbsp;·&nbsp;
      <a href='$siteUrl'>Visit Website</a>
    </div>
  </div>
</body>
</html>
";

$replyHeaders  = "MIME-Version: 1.0\r\n";
$replyHeaders .= "Content-Type: text/html; charset=UTF-8\r\n";
$replyHeaders .= "From: Kiran Hajare <noreply@hellokiransheth.in>\r\n";

mail($email, $replySubject, $replyBody, $replyHeaders);

// ──────────────────────────────────────────────
// 3. Respond to frontend
// ──────────────────────────────────────────────
echo json_encode(['success' => true, 'message' => 'Your inquiry has been sent successfully!']);
?>
