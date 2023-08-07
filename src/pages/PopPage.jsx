import React, { useContext } from 'react'
import { MyContext } from '../context/MyContext';

export const PopPage = () => {
    const {pop} = useContext(MyContext)
  return (
    <div>
        <h3 class="text-center pt-2">Todo del Folk</h3>
        <hr />
    
        <div class="container mt-5">
            <div class="row">
                    <div class="col-sm-4">
                        <div class="p-5 text-white">
                            <h3>Historia del Pop</h3>
                            <hr />
                            <p>
                                La música pop (del inglés pop music, contracción de popular music), también conocida simplemente como pop, es un género de música popular que tuvo su origen a finales de los años 1950 como una derivación del Pop tradicional, en combinación con otros géneros musicales que estaban de moda en aquel momento.​ Los términos música pop y música popular se usan a menudo de manera indistinta, aunque el segundo tiene un sentido más amplio al dar cabida a otros géneros distintos del pop que se consideren populares.
                                Es un género ecléctico, que toma prestados elementos de otros estilos como el urban, el dance, el rock, la música latina, el rhythm and blues o el folk. Con todo, hay elementos esenciales que definen al pop, como son las canciones de corta a media duración, escritas en un formato básico (a menudo la estructura estrofa-estribillo), así como el uso habitual de estribillos repetidos, de temas melódicos y ganchos. La instrumentación se compone habitualmente de guitarra, batería, bajo, guitarra eléctrica, teclado, sintetizador, etc.
                            </p>
                        </div>
                    </div>

                    <div class="col-sm-4">
                        <div class="p-5 text-white">
                            <h3></h3>
                            <div class="p-2">
                                <img src="https://i.discogs.com/FeDM1O-95bpjZsMw1tdY3TvkMOEDYmBppsIVqST1rCg/rs:fit/g:sm/q:90/h:600/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTUxMTYw/OS0xNTA5MDY3ODI0/LTYwNzIuanBlZw.jpeg" class="img-thumbnail" alt="..."></img>
                                <p>Dangerous (1991)</p>
                            </div>

                            <div class="p-2">
                                <img src="https://i.ebayimg.com/images/g/DXMAAOSwHfBiLKbo/s-l500.jpg" class="img-thumbnail" alt="..."></img>
                                <p>Ray Of Light (1998)</p>
                            </div>
                        
                        </div>
                    </div>

                    <div class="col-sm-4">
                        <div class="p-5 text-white">
                            <div class="p-2">
                                <img src="https://www.lahiguera.net/musicalia/artistas/cher/disco/5185/tema/7402/cher_i_walk_alone-portada.jpg" class="img-thumbnail" alt="..."></img>
                                <p>I Walk Alone (2014)</p>
                            </div>
                            <div class="p-2">
                                <img src="https://www.lahiguera.net/musicalia/artistas/lady_gaga/disco/4971/lady_gaga_artpop-portada.jpg" class="img-thumbnail" alt="..."></img>
                                <p>ArtPop (2013)</p>
                            </div>
                        </div>
                    </div>
            </div>  {/* div row */}
        </div> {/* div container */}
    </div>  /* div Inicial */
  )
}

