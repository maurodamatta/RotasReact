import './styles.css';

type Props = {
  product: string;
}

export default function CategoryProduct({ product }: Props) {
  return (
    <div className="card-product">
      {product}
    </div>
  );
}