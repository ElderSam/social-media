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

export async function deletePost(postId: number) {
  const response = await fetch(`${backendURL}${postId}/`, {
    method: 'DELETE',
  });

  if (!response.ok) {
    throw new Error('Failed to delete post');
  }

  // No content returned from server
  return;
}

export async function updatePost(postId: number, title: string, content: string) {
  const response = await fetch(`${backendURL}${postId}/`, {
    method: 'PATCH',
    headers,
    body: JSON.stringify({
      title,
      content,
    }),
  });

  if (!response.ok) {
    throw new Error('Failed to update post');
  }

  return response.json();
}