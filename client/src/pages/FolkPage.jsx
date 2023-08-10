
import { ProductCard } from "../components";
import { useSearchContext } from "../context/SearchProvider";

export const FolkPage = () => {
    const searchDiscos = useSearchContext(); 

    const filteredDiscos = searchDiscos("folk");

    return (
        <div>
            <h3 className="text-center pt-2 mt-3">Todo del Folk</h3>
            <hr />
            <div className="container mt-5">
                <div className="row">
                    <div className="col-sm-4">
                        <div className="p-5 text-white">
                            <h3>Historia del Folk</h3>
                            <hr />
                            <p>
                                El folk rock o rock folk,1 en un sentido amplio, es un género musical que combina elementos de la música folk, el blues y el rock. Sin embargo, el término se suele usar preferentemente, aunque no exclusivamente, en referencia a la música de fusión surgida en los Estados Unidos y en el Reino Unido, a mediados de los años sesenta, resultado de la incorporación de elementos del rock, sobre todo del rock de la Costa Oeste, y especialmente en el terreno instrumental y rítmico, a la música de tradición folclórica local. Algunos autores denominaron este género folk pop. En muchos aspectos, el folk rock se solapa con otras denominaciones aplicadas a fusiones de música tradicional estadounidense y rock, como es el caso del country rock o del llamado rock sureño.[cita requerida]
                                Los ejemplos de fusión de rock o pop y música folclórica de otros lugares del mundo u otras culturas, suelen recibir denominaciones más específicas (zydeco, celtic fusion, world music, etc.), aunque la etiqueta «folk rock» se aplicó también, de forma usual, a la música de los grupos británicos de esa misma época.
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
