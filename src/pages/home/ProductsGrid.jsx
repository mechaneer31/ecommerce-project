import { Product } from "./Product";

export function ProductsGrid({ loadCart, products }) {


    return (

        <div className="products-grid">
            {products.map((product) => {

                return (

                    <Product
                        key={product.id}
                        loadCart={loadCart}
                        product={product}
                    />

                );
            })}

        </div>


    );
}

