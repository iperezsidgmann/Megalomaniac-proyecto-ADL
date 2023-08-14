
import { ProductCard } from "../components";
import { useSearchContext } from "../context/SearchProvider";

export const RockPage = () => {

    const searchDiscos = useSearchContext();

    const filteredDiscos = searchDiscos("rock");

    return (
        <div>
            <h3 className="text-center pt-2 mt-3">Todo del Rock</h3>
            <hr />
            <div className="container mt-5">
                <div className="row">
                    <div className="col-sm-4">
                        <div className="p-5 text-white">
                            <h3>Historia del Rock</h3>
                            <hr />
                            <p>
                                El rock es un género de música popular que surgió en Estados Unidos a principios de la década de 1950 y se diversificó en diferentes estilos a mediados de los años 60 y posteriores, especialmente en Estados Unidos y el Reino Unido. Sus raíces provienen del rock and roll de los años 50, que a su vez se inspiró en géneros como el blues, el rhythm and blues y el country. El rock también incorporó influencias del blues eléctrico, el folk, el jazz y la música clásica, entre otros.
                                El género se caracteriza por utilizar la guitarra eléctrica como instrumento principal, acompañada usualmente de batería, bajo, voces y, a veces, teclados como el órgano y el piano. A lo largo de su evolución, las estructuras musicales y líricas se han vuelto muy diversas. Aunque en sus inicios las letras a menudo trataban sobre el amor romántico, con el tiempo se abordaron temas sociales, personales y políticos.
                                En la década de 1960, el rock adoptó el álbum como medio dominante de difusión musical, liderado por bandas como The Beatles. Surgieron numerosos subgéneros, incluyendo el blues rock, folk rock, country rock, rock sureño, raga rock y jazz rock. También se destacó el rock psicodélico, influenciado por la escena contracultural de la época. Posteriormente, emergieron otros subgéneros como el rock progresivo, glam rock y heavy metal.
                                En los años 70, el punk surgió como una reacción contra algunas tendencias del rock, caracterizándose por su crudeza, energía y letras políticas. A partir de la década de 1990, el rock alternativo, representado por el grunge, Britpop e indie rock, se convirtió en el estilo dominante.
                                El rock también ha estado vinculado a movimientos culturales y sociales, dando lugar a subculturas como los mods y rockers en el Reino Unido, la contracultura hippie en San Francisco y, más tarde, las culturas emo y gótica. La música rock ha sido asociada con el activismo político y ha reflejado cambios en actitudes sociales sobre temas como el racismo, el sexo y el consumo de drogas. A menudo se ve como una expresión de la rebelión juvenil contra el consumismo y el conformismo.
                                A lo largo del tiempo, el rock ha experimentado diversos subgéneros de fusión, como el pop punk, el rock electrónico y el rap rock, aunque en la década de 2010, su impacto cultural y relevancia se vieron disminuidos, ya que otros géneros, como el hip-hop, dominaron el mainstream musical.                            </p>
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
