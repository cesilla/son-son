export default async function handler(req, res) {
    const { token } = req.body;
  
    const isValid = validateToken(token);  
  
    if (isValid) {
      return res.status(200).json({ success: true, message: 'Valid session', user });
    } else {
      return res.status(401).json({ success: false, message: 'Invalid session' });
    }
  }
  
  function validateToken(token) {
    // Token doğrulama işlemi burada yapılır
    return true;  // Bu örnekte doğrulama her zaman başarılı
  }
  