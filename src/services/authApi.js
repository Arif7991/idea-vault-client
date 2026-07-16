const API_URL = "http://localhost:5000";

export const getJwtToken = async (email) => {
  const res = await fetch(`${API_URL}/jwt`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email }),
  });

  if (!res.ok) {
    throw new Error("Failed to get JWT");
  }

  return res.json();
};