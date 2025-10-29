import { useState } from "react";

const initialProducts = [
  {
    id: 0,
    name: "Baklava",
    count: 1,
  },
  {
    id: 1,
    name: "Cheese",
    count: 5,
  },
  {
    id: 2,
    name: "Spaghetti",
    count: 2,
  },
];

export default function ShoppingCart() {
  const [products, setProducts] = useState(initialProducts);

  function handleIncreaseClick(productId) {
    setProducts(
      products.map((product) => {
        if (product.id === productId) {
          return {
            ...product,
            count: product.count + 1,
          };
        } else {
          return product;
        }
      })
    );
  }
// mano variantas
//   function handleDecreaseClick(productId) {
//     setProducts(
//       products
//         .map((product) => {
//           if (product.id === productId) {
//             return {
//               ...product,
//               count: product.count - 1,
//             };
//           } else {
//             return product;
//           }
//         })
//         .filter((p) => p.count !== 0)
//     );
//   }

// sukuriamas nextProducts masyvas (products kopija). Jei id lygus graziname ta pati objekta, tik su kitu count, jei id nelygus nepakitusi objekta. filter isfiltruoja count mazesnius nei 0. i setProducts idedame nextProducts
function handleDecreaseClick(productId) {
    let nextProducts = products.map(product => {
      if (product.id === productId) {
        return {
          ...product,
          count: product.count - 1
        };
      } else {
        return product;
      }
    });
    nextProducts = nextProducts.filter(p =>
      p.count > 0
    );
    setProducts(nextProducts)
  }

  return (
    <ul>
      {products.map((product) => (
        <li key={product.id}>
          {product.name} (<b>{product.count}</b>)
          <button
            onClick={() => {
              handleIncreaseClick(product.id);
            }}
          >
            +
          </button>
          <button
            onClick={() => {
              handleDecreaseClick(product.id);
            }}
          >
            -
          </button>
        </li>
      ))}
    </ul>
  );
}
