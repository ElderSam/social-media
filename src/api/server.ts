export async function saveUsername(username: string) {
  localStorage.setItem('username', username);
}