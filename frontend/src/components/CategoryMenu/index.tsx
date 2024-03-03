import { CategoryDTO } from '../../models/category';
import './styles.css';

type Props = {
  category: CategoryDTO;
}

export default function CategoryMenu({ category }: Props) {
  return (
    <div className='category-menu'>
      {category.name}
    </div>
  );
}