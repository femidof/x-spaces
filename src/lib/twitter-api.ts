const TWITTER_API_BASE = "https://api.twitter.com/2";

export async function fetchAllSpaces(accessToken: string) {
  console.log("FETCHING SPACES from functions");
  const response = await fetch(
    // `${TWITTER_API_BASE}/spaces/search?state=live&space.fields=host_ids,created_at,started_at,ended_at,participant_count,title`,
    `${TWITTER_API_BASE}/spaces`,
    {
      headers: {
        Authorization: `Bearer ${accessToken}`,
        "User-Agent": "v2SpacesLookupPython",
      },
      method: "GET",
    }
  );
  console.log("Response:" + JSON.stringify(response.statusText, null, 2));

  if (!response.ok) {
    throw new Error(`Failed to fetch spaces: ${response.statusText}`);
  }

  return response.json();
}

export async function fetchFollowingSpaces(
  accessToken: string,
  userId: string
) {
  const response = await fetch(
    `${TWITTER_API_BASE}/users/${userId}/following/spaces?space.fields=host_ids,created_at,started_at,ended_at,participant_count,title`,
    {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    }
  );

  if (!response.ok) {
    throw new Error(`Failed to fetch following spaces: ${response.statusText}`);
  }

  return response.json();
}

export async function fetchJoinedSpaces(accessToken: string, userId: string) {
  const response = await fetch(
    `${TWITTER_API_BASE}/spaces/${userId}/buyers?space.fields=host_ids,created_at,started_at,ended_at,participant_count,title`,
    {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    }
  );

  if (!response.ok) {
    throw new Error(`Failed to fetch joined spaces: ${response.statusText}`);
  }

  return response.json();
}
