import Link from "next/link";

const USUARIO = "mvmendoncas";

export default async function GitHub() {
  const res = await fetch(
    `https://api.github.com/users/${USUARIO}/repos?per_page=100&sort=updated`,
    {
      headers: {
        Accept: "application/vnd.github+json",
        ...(process.env.GITHUB_TOKEN && {
          Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
        }),
      },
      next: { revalidate: 3600 },
    }
  );

  if (!res.ok) {
    return (
      <div className="pagina">
        <Link href="/">← Voltar</Link>
        <h1>Não foi possível carregar os repositórios</h1>
        <p>Erro {res.status}.</p>
        <a
          href={`https://github.com/${USUARIO}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          Ver meu perfil no GitHub
        </a>
      </div>
    );
  }

  const repos = await res.json();

  return (
    <div className="pagina">
      <Link href="/">← Voltar</Link>
      <h1>Meus repositórios no GitHub</h1>
      <a
        href={`https://github.com/${USUARIO}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        Ver perfil completo
      </a>
      <ul>
        {repos.map((r) => (
          <li key={r.id}>
            <a href={r.html_url} target="_blank" rel="noopener noreferrer">
              {r.name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}