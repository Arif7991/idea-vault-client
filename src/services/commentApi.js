const API_URL = "http://localhost:5000";

export const getComments = async (ideaId) => {
  const res = await fetch(`${API_URL}/comments/${ideaId}`);

  if (!res.ok) {
    throw new Error("Failed to fetch comments");
  }

  return res.json();
};

export const addComment = async (commentData) => {
  const token = localStorage.getItem("access-token");

  const res = await fetch(`${API_URL}/comments`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(commentData),
  });

  if (!res.ok) {
    throw new Error("Failed to add comment");
  }

  return res.json();
};

export const updateComment = async (id, comment) => {
  const token = localStorage.getItem("access-token");

  const res = await fetch(`${API_URL}/comments/${id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({ comment }),
  });

  if (!res.ok) {
    throw new Error("Failed to update comment");
  }

  return res.json();
};

export const deleteComment = async (id) => {
  const token = localStorage.getItem("access-token");

  const res = await fetch(`${API_URL}/comments/${id}`, {
    method: "DELETE",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  if (!res.ok) {
    throw new Error("Failed to delete comment");
  }

  return res.json();
};
/// getMyInteractions
export const getMyInteractions = async (email) => {
  const token = localStorage.getItem("access-token");

  const res = await fetch(
    `${API_URL}/my-interactions?email=${email}`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  if (!res.ok) {
    throw new Error("Failed to fetch interactions");
  }

  return res.json();
};