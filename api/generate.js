export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Only POST requests are allowed" });
  }

  try {
    const { prompt, duration } = req.body || {};

    if (!prompt) {
      return res.status(400).json({ error: "Prompt is required" });
    }

    return res.status(200).json({
      success: true,
      message: "Backend connected successfully",
      prompt,
      duration
    });
  } catch (error) {
    return res.status(500).json({ error: "Server error" });
  }
}
