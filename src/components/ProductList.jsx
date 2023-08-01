import { discos } from "../data/discos"
import { ProductCard } from "./index"

export const ProductList = () => {

    return (

        <div className="col-md-10 mt-4 mx-auto">
            <h2>Discografías</h2>
            <hr />

            <div className="row rows-cols-1 row-cols-md-3 g-3 m-3">
                {discos.map((disco) => (
                    <ProductCard key={disco.id} {...disco} />
                ))}
            </div>

        </div>

    )
}
