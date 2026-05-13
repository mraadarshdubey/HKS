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

// Get and validate the email
$raw = file_get_contents('php://input');
$data = json_decode($raw, true);
$subscriberEmail = isset($data['email']) ? trim($data['email']) : '';

if (empty($subscriberEmail) || !filter_var($subscriberEmail, FILTER_VALIDATE_EMAIL)) {
    http_response_code(400);
    echo json_encode(['success' => false, 'message' => 'Invalid or missing email address.']);
    exit();
}

$subscriberEmail = htmlspecialchars($subscriberEmail);
$timestamp       = date('d M Y, h:i A');
$siteUrl         = 'https://hellokiransheth.in';

// ──────────────────────────────────────────────
// 1. Notification email to the admins
// ──────────────────────────────────────────────
$adminEmails = [
    'hajarekiran210@gmail.com',
    'devilonearth789@gmail.com',
];

$adminSubject = "📩 New Article Subscriber – $subscriberEmail";

$adminBody = "
<!DOCTYPE html>
<html>
<head>
  <meta charset='UTF-8'>
  <style>
    body { font-family: Arial, sans-serif; background: #0a0a0a; color: #d1d5db; margin: 0; padding: 0; }
    .container { max-width: 560px; margin: 40px auto; background: #111; border: 1px solid #222; border-radius: 12px; overflow: hidden; }
    .header { background: linear-gradient(135deg, #111, #1a1a1a); border-bottom: 3px solid #cf9d45; padding: 32px 40px; text-align: center; }
    .header h1 { color: #cf9d45; font-size: 1.4rem; margin: 0; }
    .body { padding: 32px 40px; }
    .label { color: #6b7280; font-size: 0.75rem; text-transform: uppercase; letter-spacing: 0.1em; margin-bottom: 4px; }
    .value { color: #fff; font-size: 1rem; font-weight: 700; margin-bottom: 20px; padding: 10px 16px; background: #1a1a1a; border-radius: 6px; border-left: 3px solid #cf9d45; }
    .footer { background: #0d0d0d; padding: 20px 40px; text-align: center; color: #4b5563; font-size: 0.8rem; }
  </style>
</head>
<body>
  <div class='container'>
    <div class='header'>
      <img src='$siteUrl/LOGO.png' alt='Kiran Hajare' style='max-width: 180px; height: auto; margin-bottom: 20px;'>
      <h1>🎉 New Article Subscriber!</h1>
    </div>
    <div class='body'>
      <p style='color:#9ca3af; margin-bottom:24px;'>Someone just subscribed to articles on your website.</p>
      <div class='label'>Subscriber Email</div>
      <div class='value'>$subscriberEmail</div>
      <div class='label'>Date & Time</div>
      <div class='value'>$timestamp (IST)</div>
      <div class='label'>Source</div>
      <div class='value'>$siteUrl/articles</div>
    </div>
    <div class='footer'>
      hellokiransheth.in · Article Newsletter Notification
    </div>
  </div>
</body>
</html>
";

$adminHeaders  = "MIME-Version: 1.0\r\n";
$adminHeaders .= "Content-Type: text/html; charset=UTF-8\r\n";
$adminHeaders .= "From: HKS Website <noreply@hellokiransheth.in>\r\n";
$adminHeaders .= "Reply-To: $subscriberEmail\r\n";

$adminSent = true;
foreach ($adminEmails as $adminEmail) {
    if (!mail($adminEmail, $adminSubject, $adminBody, $adminHeaders)) {
        $adminSent = false;
    }
}

// ──────────────────────────────────────────────
// 2. Welcome confirmation email to the subscriber
// ──────────────────────────────────────────────
$welcomeSubject = "✅ You're subscribed to Kiran Hajare's Articles!";

$welcomeBody = "
<!DOCTYPE html>
<html>
<head>
  <meta charset='UTF-8'>
  <style>
    body { font-family: Arial, sans-serif; background: #0a0a0a; color: #d1d5db; margin: 0; padding: 0; }
    .container { max-width: 560px; margin: 40px auto; background: #111; border: 1px solid #222; border-radius: 12px; overflow: hidden; }
    .header { background: linear-gradient(135deg, #111, #1a1a1a); border-bottom: 3px solid #cf9d45; padding: 40px; text-align: center; }
    .header h1 { color: #fff; font-size: 1.5rem; margin: 0 0 8px; }
    .header p { color: #cf9d45; font-size: 0.9rem; margin: 0; }
    .body { padding: 32px 40px; }
    .body p { color: #9ca3af; line-height: 1.7; margin-bottom: 16px; }
    .body strong { color: #fff; }
    .cta { display: block; background: #cf9d45; color: #000; font-weight: 800; text-align: center; text-decoration: none; padding: 14px 32px; border-radius: 8px; margin: 24px auto; max-width: 200px; font-size: 0.95rem; }
    .footer { background: #0d0d0d; padding: 20px 40px; text-align: center; color: #4b5563; font-size: 0.8rem; }
    .footer a { color: #6b7280; }
  </style>
</head>
<body>
  <div class='container'>
    <div class='header'>
      <img src='$siteUrl/LOGO.png' alt='Kiran Hajare' style='max-width: 180px; height: auto; margin-bottom: 20px;'>
      <h1>Welcome to the Inner Circle 🎯</h1>
      <p>You're now subscribed to Kiran Hajare's Article Newsletter</p>
    </div>
    <div class='body'>
      <p>Hey there! 👋</p>
      <p>
        Thank you for subscribing to <strong>Kiran Hajare's weekly articles</strong>.
        Every Friday, you'll receive <strong>high-signal, no-fluff insights</strong>
        on Meta Ads, admission growth systems, and digital marketing strategies
        that actually work.
      </p>
      <p>
        You'll be among <strong>5,000+ coaching institute owners</strong> who are
        growing smarter with every issue.
      </p>
      <a href='$siteUrl/articles' class='cta'>Read Articles →</a>
      <p style='font-size:0.85rem; color:#6b7280;'>
        If you didn't subscribe to this newsletter, simply ignore this email.
      </p>
    </div>
    <div class='footer'>
      © " . date('Y') . " hellokiransheth.in &nbsp;·&nbsp;
      <a href='$siteUrl'>Visit Website</a>
    </div>
  </div>
</body>
</html>
";

$welcomeHeaders  = "MIME-Version: 1.0\r\n";
$welcomeHeaders .= "Content-Type: text/html; charset=UTF-8\r\n";
$welcomeHeaders .= "From: Kiran Hajare <noreply@hellokiransheth.in>\r\n";

mail($subscriberEmail, $welcomeSubject, $welcomeBody, $welcomeHeaders);

// ──────────────────────────────────────────────
// 3. Respond back to the React frontend
// ──────────────────────────────────────────────
if ($adminSent) {
    echo json_encode(['success' => true, 'message' => 'Subscribed successfully!']);
} else {
    // Still respond positively — the welcome email may have gone through
    echo json_encode(['success' => true, 'message' => 'Subscribed successfully!']);
}
?>
