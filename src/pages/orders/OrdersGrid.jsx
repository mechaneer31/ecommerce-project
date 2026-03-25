import { OrderCardHeader } from './OrderCardHeader';
import { OrderCardProuctRow } from './OrderCardProductRow';




export function OrdersGrid({ orders }) {
    return (

        <div className="orders-grid">
            {orders.length > 0 && orders.map((order) => {

                return (<>
                    <div key={order.id} className="order-container">
                        <OrderCardHeader
                            order={order}
                        />
                    </div>

                    {Object.keys(order.products).map((productId) => (
                        <OrderCardProuctRow
                            key={productId}
                            productData={order.products[productId]}
                        />
                    ))}
                </>
                );

            })}
        </div>
    );
}