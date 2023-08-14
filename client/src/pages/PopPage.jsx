
import { ProductCard } from "../components";
import { useSearchContext } from "../context/SearchProvider";

export const PopPage = () => {

    const searchDiscos = useSearchContext();

    const filteredDiscos = searchDiscos("pop");

    return (
        <div>
            <h3 className="text-center pt-2 mt-3">Todo del Pop</h3>
            <hr />
            <div className="container mt-5">
                <div className="row">
                    <div className="col-sm-4">
                        <div className="p-5 text-white">
                            <h3>Historia del Pop</h3>
                            <hr />
                            <p>
                                La música pop (del inglés pop music, contracción de popular music), también conocida simplemente como pop, es un género de música popular que tuvo su origen a finales de los años 1950 como una derivación del Pop tradicional, en combinación con otros géneros musicales que estaban de moda en aquel momento. Los términos música pop y música popular se usan a menudo de manera indistinta, aunque el segundo tiene un sentido más amplio al dar cabida a otros géneros distintos del pop que se consideren populares.
                                Es un género ecléctico, que toma prestados elementos de otros estilos como el urban, el dance, el rock, la música latina, el rhythm and blues o el folk. Con todo, hay elementos esenciales que definen al pop, como son las canciones de corta a media duración, escritas en un formato básico (a menudo la estructura estrofa-estribillo), así como el uso habitual de estribillos repetidos, de temas melódicos y ganchos. La instrumentación se compone habitualmente de guitarra, batería, bajo, guitarra eléctrica, teclado, sintetizador, etc.
                            </p>
                        </div>
                    </div>
                    <div className="col-md-8 mt-6">
                        {filteredDiscos.length === 0 ? (
                            <div>No se encontraron resultados.</div>
                        ) : (
                            <div className="row row-cols-1 row-cols-md-3 g-3 m-1 animate__animated animate__fadeIn">
                                {filteredDiscos.map((disco) => (
                                    <ProductCard key={disco.id} {...disco} />
                                ))}
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
};
