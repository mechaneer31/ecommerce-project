import dayjs from 'dayjs'
import BuyAgainImage from '../../assets/images/icons/buy-again.png'
import { Link } from 'react-router';



export function OrderCardProductRow({ order, productData }) {
    if (!order || !productData) return null;
    //console.log("Entire Props Box:", order, productData);
    const { product, estimatedDeliveryTimeMs, quantity } = productData;

    return (
        <>
            <div className="order-details-grid">

                <div className="product-image-container">
                    <img src={product.image} />
                </div>

                <div className="product-details">
                    <div className="product-name">
                        {product.name}
                    </div>
                    <div className="product-delivery-date">
                        {`Arriving on: ${dayjs(estimatedDeliveryTimeMs).
                            format('MMMM D')}`
                        }
                    </div>
                    <div className="product-quantity">
                        {`Quantity: ${quantity}`}
                    </div>
                    <button className="buy-again-button button-primary">
                        <img className="buy-again-icon" src={BuyAgainImage} />
                        <span className="buy-again-message">Add to Cart</span>
                    </button>
                </div>


                {console.log(order.id)}
                {console.log(product.id)}
                <div className="product-actions">
                    <Link to={`/tracking/${order.id}/${product.id}`}>
                        <button className="track-package-button button-secondary">
                            Track package
                        </button>
                    </Link>
                </div>
            </div>
        </>
    );
}