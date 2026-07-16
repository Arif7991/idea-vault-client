const API_URL = "http://localhost:5000";
export const addIdea = async (ideaData) => {
  const token = localStorage.getItem("access-token");

  const res = await fetch("http://localhost:5000/ideas", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(ideaData),
  });

  if (!res.ok) {
    throw new Error("Failed to add idea");
  }

  return res.json();
};

export const getIdeas = async () => {
  const res = await fetch(`${API_URL}/ideas`);

  if (!res.ok) {
    throw new Error("Failed to fetch ideas");
  }

  return res.json();
};

export const getMyIdeas = async (email) => {
  const token = localStorage.getItem("access-token");

  const res = await fetch(
    `http://localhost:5000/my-ideas?email=${email}`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  if (!res.ok) {
    throw new Error("Failed to fetch ideas");
  }

  return res.json();
};
export const deleteIdea = async (id) => {
  const token = localStorage.getItem("access-token");

  const res = await fetch(`http://localhost:5000/ideas/${id}`, {
    method: "DELETE",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  if (!res.ok) {
    throw new Error("Failed to delete");
  }

  return res.json();
};

export const getIdeaById = async (id) => {
  const token = localStorage.getItem("access-token");

  const res = await fetch(`http://localhost:5000/ideas/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  if (!res.ok) {
    throw new Error("Failed");
  }

  return res.json();
};
export const updateIdea = async (id, data) => {
  const token = localStorage.getItem("access-token");

  const res = await fetch(`http://localhost:5000/ideas/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(data),
  });

  if (!res.ok) {
    throw new Error("Failed");
  }

  return res.json();
};