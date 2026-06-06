export default function handler(req, res) {
  // السماح للطلبات الخارجية والـ Headers المخصصة
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Headers", "X-API-KEY");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS");

  // معالجة طلبات الـ Preflight (OPTIONS)
  if (req.method === "OPTIONS") {
    return res.status(200).end();
  }

  // كلمة المرور الخاصة بتطبيقك
  const appSecretKey = "MySecretAppPassword123";
  
  // استخراج مفتاح الحماية من الـ Header
  const providedKey = req.headers['x-api-key'] || req.headers['X-API-KEY'];

  if (providedKey !== appSecretKey) {
    return res.status(401).json({ error: "Unauthorized access" });
  }

  // إرسال البيانات إلى التطبيق
  return res.status(200).json({
    "supabase_url": "https://qwtkuzuuskevtptetnvb.supabase.co",
    "supabase_key": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InF3dGt1enV1c2tldnRwdGV0bnZiIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Nzk3MDU2NzUsImV4cCI6MjA5NTI4MTY3NX0.FtkcRTFxSIMgZEY0FoJ4nOwAYc0O84zeAT7vji-FHFs",
    "telegram_bot_token": "8466678604:AAFJDmXV5BDRwY8jpBApTANDi5o59rJpUEE",
    "telegram_chat_id": "5377013247",
    "cloudinary_cloud_name": "dtg0zml4l",
    "cloudinary_api_key": "119785914443236",
    "cloudinary_secret_key": "dmkxXgMblFG_u-9XK8w-N4t_nCE",
    "upload_Preset": "device_monitor_preset"
  });
}
