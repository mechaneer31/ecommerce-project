import axios from 'axios'
import { Fragment } from 'react'
import { DeliveryOptions } from './DeliveryOptions';
import { CartItemDetails } from './CartItemDetails';
import { DeliveryDate } from './DeliveryDate';



export function OrderSummary({ cart, deliveryOptions, loadCart }) {
    return (
        <div className="order-summary">
            {deliveryOptions.length > 0 && cart.map((cartItem) => {

                const deleteCartItem = async () => {
                    await axios.delete(`/api/cart-items/${cartItem.productId}`);
                    await loadCart();
                };


                return (
                    <Fragment
                        key={cartItem.productId}
                    >



                        <div className="cart-item-container">


                            <DeliveryDate
                                cartItem={cartItem}
                                deliveryOptions={deliveryOptions}
                            />


                            <div className="cart-item-details-grid">
                                <CartItemDetails
                                    cartItem={cartItem}
                                    loadCart={loadCart}
                                    deleteCartItem={deleteCartItem}
                                />



                                <DeliveryOptions
                                    cartItem={cartItem}
                                    deliveryOptions={deliveryOptions}
                                />

                            </div>
                        </div>

                    </Fragment>
                );
            })}
        </div>
    );
}