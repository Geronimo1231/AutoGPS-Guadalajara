import jwt from 'jsonwebtoken';

const secret = process.env.JWT_SECRET || 'secret_key';

export const verifyToken = (req, res, next) => {
  const token = req.headers['authorization']?.split(' ')[1];
  if (!token) return res.status(401).json({ message: 'Acceso denegado. Token requerido.' });

  try {
    const decoded = jwt.verify(token, secret);
    req.user = decoded; // id y rol
    next();
  } catch (error) {
    res.status(401).json({ message: 'Token inválido' });
  }
};
