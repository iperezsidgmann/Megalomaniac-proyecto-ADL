import React, { useContext } from 'react'
import { MyContext } from '../context/MyContext';
import { Link } from 'react-router-dom'

const FolkPage = () => {
    const {folk} = useContext(MyContext)
  return (
    <div>
        <h3 class="text-center pt-2">Todo del Folk</h3>
        <hr />
        <div class="container mt-5">
            <div class="row">
                <div class="col-sm-4">
                    <div class="p-5 text-white">
                        <h3>Historia del Folk</h3>
                        <hr />
                        <p>
                        El folk rock o rock folk,1 en un sentido amplio, es un género musical que combina elementos de la música folk, el blues y el rock. Sin embargo, el término se suele usar preferentemente, aunque no exclusivamente, en referencia a la música de fusión surgida en los Estados Unidos y en el Reino Unido, a mediados de los años sesenta, resultado de la incorporación de elementos del rock, sobre todo del rock de la Costa Oeste, y especialmente en el terreno instrumental y rítmico, a la música de tradición folclórica local. Algunos autores denominaron este género folk pop.​ En muchos aspectos, el folk rock se solapa con otras denominaciones aplicadas a fusiones de música tradicional estadounidense y rock, como es el caso del country rock o del llamado rock sureño.[cita requerida]
                        Los ejemplos de fusión de rock o pop y música folclórica de otros lugares del mundo u otras culturas, suelen recibir denominaciones más específicas (zydeco, celtic fusion, world music, etc.), aunque la etiqueta «folk rock» se aplicó también, de forma usual, a la música de los grupos británicos de esa misma época.
                        </p>
                    </div>
                </div>
                    <div class="col-sm-4">
                        <div class="p-5 text-white">
                            <div class="p-2">
                            <img src="https://www.dirtyrock.info/wp-content/uploads/2021/08/bob-dylan-Highway-61-Revisited-disco-aniversario.jpg" class="img-thumbnail" alt="..."></img>
                            <p>Highway 61 Revisited (1965)</p>
                        </div>
                        <div class="p-2">
                            <img src="https://i.discogs.com/M4r8pCzPp8nL3yHd43B73eEIF6fkpb93Vz4yRHNkdoI/rs:fit/g:sm/q:90/h:579/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTEzMTkw/NjEyLTE1NzU4NDc3/MDQtMjAzNC5qcGVn.jpeg" class="img-thumbnail" alt="..."></img>
                            <p>Eight Miles High (1966)</p>
                        </div>
                    </div>
                </div>

                <div class="col-sm-4">
                    <div class="p-5 text-white">
                
                        <div class="p-2">
                            <img src="https://i.ebayimg.com/images/g/5zgAAOSwUBxkpelp/s-l1600.jpg" class="img-thumbnail" alt="..."></img>
                            <p>Greatest Hits (1975)</p>
                        </div>

                        <div class="p-2">
                            <img src="https://www.diariocritico.com/album/imagenes/141/everybody.jpg" class="img-thumbnail" alt="..."></img>
                            <p>Everybody knows this is nowhere (1969)</p>
                        </div>
                    </div>
                </div>
            </div>  {/* div row */}
        </div> {/* div container */}
    </div>  /* div Inicial */
  )
}

export default FolkPage