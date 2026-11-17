export default async function GitHub() {
  const res = await fetch(
    `https://api.github.com/users/${USUARIO}/repos?per_page=100&sort=updated`
  );
  if (!res.ok) {
    throw new Error("Falha ao buscar repositórios do GitHub");
  }
  const repos = await res.json();
  return repos;
}
    