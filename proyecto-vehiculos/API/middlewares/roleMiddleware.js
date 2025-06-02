export const esGlobal = (req, res, next) => {
  if (req.usuario.rol === 'global') return next();
  return res.status(403).json({ message: 'Acceso denegado: solo Administrador Global' });
};

export const esAdmin = (req, res, next) => {
  if (req.usuario.rol === 'global' || req.usuario.rol === 'admin') return next();
  return res.status(403).json({ message: 'Acceso denegado: solo Administrador o Global' });
};
