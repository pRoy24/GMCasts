
export default async function handler(req, res) {
  const playerId = req.query.id
  
  
  res.status(200).json({ message: 'Hello from the server!' })
}


