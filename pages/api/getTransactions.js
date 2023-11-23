// pages/api/transactions.js
export default async (req, res) => {
  const { address } = req.query;
  console.log('testing')
  const apiKey = process.env.ETHERSCAN_API_KEY;
  const response = await fetch(`https://api.etherscan.io/api?module=account&action=txlist&address=${address}&startblock=0&endblock=99999999&sort=asc&apikey=${apiKey}`);
  const data = await response.json();
  res.json(data);
};
