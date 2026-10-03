export default async function handler(req, res) {
  if (req.method !== "GET") {
    return res.status(405).json({ error: "Method not allowed." });
  }

  const apiKey = process.env.OPENWEATHER_API_KEY;

  if (!apiKey) {
    return res.status(500).json({ error: "Weather service is not configured." });
  }

  const query = typeof req.query.q === "string" ? req.query.q.trim() : "";

  if (query.length < 3 || query.length > 100) {
    return res.status(400).json({ error: "A city query between 3 and 100 characters is required." });
  }

  try {
    const url = new URL("https://api.openweathermap.org/data/2.5/find");
    url.searchParams.set("q", query);
    url.searchParams.set("appid", apiKey);
    url.searchParams.set("units", "metric");
    url.searchParams.set("type", "like");

    const response = await fetch(url);
    const data = await response.json();

    if (!response.ok) {
      return res.status(response.status).json({
        error: data?.message || "Unable to fetch city suggestions.",
      });
    }

    return res.status(200).json(data);
  } catch {
    return res.status(502).json({ error: "Weather service is temporarily unavailable." });
  }
}
