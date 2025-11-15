module.exports = (req, res, next) => {
  const apiKey = req.header(process.env.API_KEY); // client sends header: x-api-key
  if (!apiKey || apiKey !== process.env.API_VALUE) {
    return res.status(401).json({ message: 'Unauthorized: Invalid API Key' });
  }
  next(); // key is valid, continue
};
