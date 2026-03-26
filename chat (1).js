export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { messages } = req.body;

  if (!messages || !Array.isArray(messages)) {
    return res.status(400).json({ error: "messages array is required" });
  }

  if (!process.env.OPENAI_API_KEY) {
    return res.status(500).json({ error: "OPENAI_API_KEY is not set in Vercel environment variables." });
  }

  try {
    const response = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${process.env.OPENAI_API_KEY}`,
      },
      body: JSON.stringify({
        model: "gpt-4o-mini",
        messages: [
          {
            role: "system",
            content: "You are Limitless AI, a smart and helpful assistant. You give clear, direct, and practical answers. You help with any question — writing, strategy, communication, coding, research, and more.",
          },
          ...messages,
        ],
        max_tokens: 1000,
      }),
    });

    const data = await response.json();

    if (!response.ok) {
      return res.status(response.status).json({ error: data.error?.message || "OpenAI request failed" });
    }

    const content = data.choices?.[0]?.message?.content || "";
    return res.status(200).json({ content });

  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: "Server error: " + err.message });
  }
}
