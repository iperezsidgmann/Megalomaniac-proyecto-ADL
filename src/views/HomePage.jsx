import { ProductList } from "../components/index"
import { Slider } from "../components/Slider"

export const HomePage = () => {
  return (
    <div className="min-vh-100">
      <Slider />
      <ProductList />
    </div>
  )
}
