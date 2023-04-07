function Card(props) {
  return (
    <div className="col-lg-4">
      <div className="card" style={{ width: "18rem" }}>
        <img
          src={props.data.img}
          className="card-img-top img-thumbnail"
          alt="..."
        />
        <div className="card-body">
          <h5 className="card-title">{props.data.title}</h5>
          <h6>{props.data.price}</h6>
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <button
            disabled={props.cartitems.some((obj) => obj.id === props.data.id)}
            onClick={() => {
              props.handleAddToCart(props.data.id);
            }}
            className="btn btn-primary"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default Card;
