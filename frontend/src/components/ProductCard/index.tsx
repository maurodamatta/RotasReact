import { CategoryDTO } from "../../models/category";
import CategoryProduct from "../CategoryProduct";
import './styles.css';

type Props = {
  category: CategoryDTO;
}

export default function ProductCard({ category }: Props) {
  return (
    <div className="products-cards-container">
      {
        category.products.map(prod => (
          <CategoryProduct key={prod.id} product={prod.name} />
        ))
      }
    </div>

  );
}