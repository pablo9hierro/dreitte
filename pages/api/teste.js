export default function handler(req, res) {
  res.status(200).json({ teste: "funcionou", produtos: 3 });
}
