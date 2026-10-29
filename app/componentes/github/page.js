import Link from "next/link";

export default async function GitHub() {
  const res = await fetch("https://api.github.com/users/mvmendoncas/repos", {
    next: { revalidate: 3600 },
  });

  if (!res.ok) {
    return (
      <div className="pagina">
        <Link href="/">← Voltar</Link>
        <h1>Não foi possível carregar os repositórios</h1>
        <p>Confira se o usuário do GitHub está escrito corretamente.</p>
      </div>
    );
  }

  const repos = await res.json();

  return (
    <div className="pagina">
      <Link href="/">← Voltar</Link>
      <h1>Meus repositórios no GitHub</h1>
      <ul>
        {repos.map((r) => (
          <li key={r.id}>
            <a href={r.html_url} target="_blank" rel="noreferrer">
              {r.name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}