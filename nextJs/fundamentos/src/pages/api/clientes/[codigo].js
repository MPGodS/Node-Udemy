export default function handler(req, res) {
  const cod = req.query.codigo;
  res.status(200).json({
    id: req.query.codigo,
    nome: `Maria ${cod}`,
    email: `marairamra${cod}@dsad.dsacom`,
  });
}
