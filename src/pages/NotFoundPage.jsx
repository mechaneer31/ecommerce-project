import { Header } from '../components/Header';

export function NotFoundPage({ cart }) {

    return (
        <>
            <title>Page Not Found</title>
            <link rel="icon" type="image/svg+xml" href="notfound-favicon.png" />

            <Header
                cart={cart}
            />



            <div className="checkout-page">
                <div className="page-title">Page Not Found</div>

                <div className="orders-grid">
                    <div className="order-container"></div>
                </div>
            </div>

            <div>
                <h1>
                    This page could not be found.
                </h1>
            </div>
            <div>
                <p>
                    We're sorry, it looks like this page cannot be found.
                </p>
            </div>


        </>




    );
}