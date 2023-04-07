import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Card from "./Card";
import CartItem from "./CartItem";
import { useState } from "react";
function App() {
  const [products, setProduct] = useState([
    {
      id: 1,
      title: "Samsung",
      price: 50000,
      img: "https://images.samsung.com/is/image/samsung/assets/in/about-us/brand/logo/mo/360_197_1.png?$FB_TYPE_B_PNG$",
    },
    {
      id: 2,
      title: "iPhone",
      price: 90000,
      img: "https://1000logos.net/wp-content/uploads/2017/02/iPhone-Logo-2007.png",
    },
    {
      id: 3,
      title: "OnePlus",
      price: 70000,
      img: "data:image/png;base64,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",
    },
    {
      id: 4,
      title: "Redmi",
      price: 20000,
      img: "data:image/png;base64,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",
    },
    {
      id: 5,
      title: "Realme",
      price: 23000,
      img: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1d/Realme-realme-_logo_box-RGB-01.svg/2560px-Realme-realme-_logo_box-RGB-01.svg.png",
    },
  ]);

  const [cartitems, setCartItem] = useState([]);
  const [total, setTotal] = useState(0);

  let handleAddToCart = (id) => {
    const productIndex = products.findIndex((obj) => obj.id === id);
    const product = products[productIndex];
    setCartItem([...cartitems, product]);
    setTotal(total + product.price);
  };

  let handleRemoveCart = (id) => {
    const cartItemIndex = cartitems.findIndex((obj) => obj.id === id);
    setTotal(total - cartitems[cartItemIndex].price);
    const cartitem = cartitems.splice(cartItemIndex, 1);
    setCartItem([...cartitems]);
    console.log(cartitem);
  };
  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-8">
          <div className="row">
            <div className="col-lg-12">
              <h1>Products</h1>
            </div>
          </div>
          <div className="row">
            {products.map((product) => {
              return (
                <Card
                  cartitems={cartitems}
                  data={product}
                  handleAddToCart={handleAddToCart}
                ></Card>
              );
            })}
          </div>
        </div>
        <div className="col-lg-4">
          <div className="row">
            <div className="col-lg-12">
              <h1>Cart</h1>
            </div>
          </div>
          <ol class="list-group list-group-numbered">
            {cartitems.map((item) => {
              return (
                <CartItem data={item} handleRemoveCart={handleRemoveCart} />
              );
            })}

            <div className="col-lg-12">
              <h1>Total: {total}</h1>
            </div>
          </ol>
        </div>
      </div>
    </div>
  );
}

export default App;
