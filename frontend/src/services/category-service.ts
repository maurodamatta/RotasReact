import { CategoryDTO } from './../models/category';

export function findAll(): CategoryDTO[] {
  return categories;
}

export function findById(id: number) : CategoryDTO | undefined {
  return categories.find(x => x.id === id);
}

export function productsByCategory(id: number | any): CategoryDTO[] {
  return findAll().filter(x => (x.id === id))
}



let categories: CategoryDTO[] = [
  {
    "id": 1,
    "name": "Computadores",
    "products": [
      {
        "id": 1,
        "name": "Computador 1"
      },
      {
        "id": 2,
        "name": "Computador 2"
      },
      {
        "id": 3,
        "name": "Computador 3"
      }
    ]
  },
 
  {
    "id": 2,
    "name": "Eletrônicos",
    "products": [
      {
        "id": 1,
        "name": "Eletrônico 1"
      },
      {
        "id": 2,
        "name": "Eletrônico 2"
      },
      {
        "id": 3,
        "name": "Eletrônico 3"
      }
    ]
  },

  {
    "id": 3,
    "name": "Livros",
    "products": [
      {
        "id": 1,
        "name": "Livro 1"
      },
      {
        "id": 2,
        "name": "Livro 2"
      },
      {
        "id": 3,
        "name": "Livro 3"
      }
    ]
  }
]