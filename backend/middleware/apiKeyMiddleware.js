const apiKeyMiddleware = (req, res, next) => {
  const apiKey = req.headers["x-api-key"];

  if (!apiKey || apiKey !== process.env.API_KEY) {
    console.log(process.env.API_KEY);
    return res.status(403).json({ error: "Unauthorized: Invalid API Key" });
  }

  next();
};

export default apiKeyMiddleware;


