import { Fragment } from 'react'
import { OrderCardHeader } from './OrderCardHeader';
import { OrderCardProductRow } from './OrderCardProductRow';




export function OrdersGrid({ orders }) {
    return (

        <div className="orders-grid">
            {orders.length > 0 && orders.map((order) => {

                return (
                    <Fragment key={order.id}>

                        <div className="order-container">
                            <OrderCardHeader
                                order={order}
                            />
                        </div>

                        {Object.keys(order.products).map((productId) => (
                            <OrderCardProductRow
                                key={productId}
                                productData={order.products[productId]}
                                order={order}
                            />
                        ))}
                    </Fragment>
                );

            })}
        </div>
    );
}