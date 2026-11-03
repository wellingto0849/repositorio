import Link from "next/link";

const USUARIO = "wellingto0849";

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
      <div className="estado estado-erro" role="alert">
        <h1 className="page-title">Não foi possível carregar os repositórios</h1>
        <p>
          {res.status === 403
            ? "O limite de pedidos da API do GitHub foi atingido. Tente de novo mais tarde."
            : `A API do GitHub respondeu com o erro ${res.status}.`}
        </p>
        <div className="estado-acoes">
          <Link href="/" className="voltar">Voltar para o início</Link>
          <a
            className="B2"
            href={`https://github.com/${USUARIO}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            Ver meu perfil no GitHub
          </a>
        </div>
      </div>
    );
  }

  const repos = await res.json();

  return (
    <>
      <div className="page-header">
        <Link href="/" className="voltar">Voltar para o início</Link>
        <h1 className="page-title">Meus repositórios no GitHub</h1>
        <a
          className="B2"
          href={`https://github.com/${USUARIO}?tab=repositories`}
          target="_blank"
          rel="noopener noreferrer"
        >
          Ver perfil completo
        </a>
      </div>

      {repos.length === 0 ? (
        <div className="estado">
          <h3>Nenhum repositório encontrado</h3>
          <p>Ainda não há repositórios públicos para mostrar.</p>
        </div>
      ) : (
        <div className="container">
          {repos.map((r) => (
            <article className="card" key={r.id}>
              <h3>{r.name}</h3>
              <p>{r.description || "Sem descrição."}</p>
              <div className="repo-meta">
                {r.language && <span>{r.language}</span>}
                <span>★ {r.stargazers_count}</span>
              </div>
              <a href={r.html_url} target="_blank" rel="noopener noreferrer">
                Ver no GitHub
              </a>
            </article>
          ))}
        </div>
      )}
    </>
  );
}