export default async function handler(req, res) {
  if (req.method !== "GET") {
    return res.status(405).json({ error: "Method not allowed." });
  }

  const apiKey = process.env.OPENWEATHER_API_KEY;

  if (!apiKey) {
    return res.status(500).json({ error: "Weather service is not configured." });
  }

  const { lat, lon } = req.query;
  const latitude = Number(lat);
  const longitude = Number(lon);

  if (
    !Number.isFinite(latitude) ||
    !Number.isFinite(longitude) ||
    latitude < -90 ||
    latitude > 90 ||
    longitude < -180 ||
    longitude > 180
  ) {
    return res.status(400).json({ error: "Valid latitude and longitude are required." });
  }

  try {
    const url = new URL("https://api.openweathermap.org/data/2.5/weather");
    url.searchParams.set("lat", String(latitude));
    url.searchParams.set("lon", String(longitude));
    url.searchParams.set("appid", apiKey);
    url.searchParams.set("units", "metric");

    const response = await fetch(url);
    const data = await response.json();

    if (!response.ok) {
      return res.status(response.status).json({
        error: data?.message || "Unable to fetch weather data.",
      });
    }

    return res.status(200).json(data);
  } catch {
    return res.status(502).json({ error: "Weather service is temporarily unavailable." });
  }
}
