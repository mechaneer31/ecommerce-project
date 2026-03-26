import dayjs from 'dayjs'
import { Link } from 'react-router';



export function TrackingItemDetails({ order, productId }) {

    const productDetail = order.products.find(product => product.productId === productId)
    console.log("productDetail: ", productDetail)

    //calculate # of days in total to ship
    const totalDeliveryTime = productDetail.estimatedDeliveryTimeMs -
        order.orderTimeMs

    console.log("Estimated delivery: ", productDetail.estimatedDeliveryTimeMs)
    console.log("Order time: ", order.orderTimeMs)
    console.log("totalDeliveryTime: ", totalDeliveryTime)

    //how much time has passed
    const timePassedMs = dayjs().valueOf() - order.orderTimeMs
    //const timePassedMs = totalDeliveryTime * 0.3;  //test timeframe to check it works
    console.log("timePassedMs: ", timePassedMs)

    //Percent of total delivery time.
    let deliveryPercent = (timePassedMs / totalDeliveryTime) * 100



    let arrivingDate = `Arriving on ${dayjs(productDetail.estimatedDeliveryTimeMs).format('MMMM D')}`
    if (deliveryPercent >= 100) {
        arrivingDate = 'Delivered'
    }

    //Set shipping status for Green Progress indicator above bar
    if (deliveryPercent > 100) {
        deliveryPercent = 100
    }


    const isPreparing = deliveryPercent < 33;
    const isShipped = deliveryPercent >= 33 && deliveryPercent < 100;
    const isDelivered = deliveryPercent === 100;

    //Delivery Status Bar Color Indicator

    //console.log("ID:", productId, "Progress:", deliveryPercent)


    return (

        <div className="order-tracking">

            <Link className="back-to-orders-link link-primary" to="/orders">
                View all orders
            </Link>

            <div className="delivery-date">
                {arrivingDate}
            </div>

            <div className="product-info">
                {productDetail.product.name}
            </div>

            <div className="product-info">
                Quantity: {productDetail.quantity}
            </div>

            <img className="product-image" src={productDetail.product.image} />

            <div className="progress-labels-container">
                <div className={`progress-label ${isPreparing && 'current-status'}`}>
                    Preparing
                </div>
                <div className={`progress-label ${isShipped && 'current-status'}`}>
                    Shipped
                </div>
                <div className={`progress-label ${isDelivered && 'current-status'}`}>
                    Delivered
                </div>
            </div>

            <div className="progress-bar-container">
                <div className="progress-bar"
                    style={{ width: `${deliveryPercent}%` }}
                ></div>
            </div>
        </div>
    );
}