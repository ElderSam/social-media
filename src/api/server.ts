const backendURL = 'https://dev.codeleap.co.uk/careers/';

const headers = { 'Content-Type': 'application/json' };

export async function saveUsername(username: string) {
  localStorage.setItem('username', username);
}

export async function createPost(username: string, title: string, content: string) {
  const response = await fetch(backendURL, {
    method: 'POST',
    headers,
    body: JSON.stringify({
      username,
      title,
      content,
    }),
  });

  if (!response.ok) {
    throw new Error('Failed to create post');
  }

  return response.json();
}

export async function getPosts() {
  const response = await fetch(backendURL);

  if (!response.ok) {
    throw new Error('Failed to fetch posts');
  }

  return response.json();
}