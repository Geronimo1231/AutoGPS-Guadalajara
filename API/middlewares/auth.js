import jwt from 'jsonwebtoken';

export const autenticarJWT = (req, res, next) => {
  const authHeader = req.headers.authorization;
  if (!authHeader) return res.status(401).json({ mensaje: 'Token no proporcionado' });

  const token = authHeader.split(' ')[1];
  if (!token) return res.status(401).json({ mensaje: 'Token inválido' });

  jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
    if (err) return res.status(403).json({ mensaje: 'Token no válido' });
    req.usuario = user;  // Aquí guardamos el payload del token en req
    next();
  });
};
