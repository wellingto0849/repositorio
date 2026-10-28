export default function Secao({ titulo, children }) {
 return (
 <section className="secao">
 <h2>{titulo}</h2>
    {children}
 </section>
 );
}
