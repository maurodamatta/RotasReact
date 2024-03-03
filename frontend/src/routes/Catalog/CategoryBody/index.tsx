import { useParams } from "react-router-dom";
import ProductCard from "../../../components/ProductCard";
import * as categoryService from '../../../services/category-service';

export default function CategoryBody() {
  const params = useParams();
  const cat = categoryService.productsByCategory(Number(params.categoryId));

  return (
    <section className="product-category-section">
      {
        cat.map(prod => (
          <ProductCard key={prod.id} category={prod} />
        ))
      }
    </section>
  );
}