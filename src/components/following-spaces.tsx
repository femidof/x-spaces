export const fetchFollowingSpaces = async (userId: string) => {
  try {
    const response = await fetch(`/api/twitter/spaces/${userId}`, {
      method: "GET",
    });

    if (!response.ok) {
      throw new Error("Failed to fetch following spaces");
    }

    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error(error);
  }
};
