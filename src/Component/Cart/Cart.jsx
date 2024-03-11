import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { cartContext } from "../../Context/CartContect.jsx";
import CartEmpty from "../CartEmpty/CartEmpty.jsx";

export default function Cart() {
  let {
    cart,
    totalPrice,
    removeAll,
    removeFromCart,
    isEmpty,
    getCart,
    increaseCount,
    decreaseCount
  } = useContext(cartContext);
  useEffect(() => {
    getCart();
  }, []);
  return (
    <>
      {!isEmpty ? (
        <CartEmpty />
      ) : (
        <>
          <div className="container mt-5 ">
            <div className="d-flex mb-0 pb-0 p-5 justify-content-between align-items-center">
              <div>
                <h2>Total Carts</h2>
                <h4 className="text-success">
                  total Price : <span>{totalPrice ? totalPrice : ""}</span>
                </h4>
              </div>
              <div>
                <button
                  onClick={() => {
                    removeAll(cart);
                  }}
                  className="btn btn-danger"
                >
                  Remove All
                </button>
                <Link to="/address">
                  {" "}
                  <button className="btn px-3 text-dark ms-5 btn-info">
                    <i className="fa-regular pe-2 fa-circle-check"></i>Confirm
                  </button>
                </Link>
              </div>
            </div>

            <div className="container  ">
              {cart &&
                cart.map((elm) => (
                  <div key={elm._id}>
                    <div className="row border m-auto box-shadow p-1  rounded-4 border-3 mt-3">
                      <div className="d-flex align-items-center ">
                        <div className="item-card d-flex">
                          <div className="col-4 pe-2 col-md-2   d-flex justify-content-start align-items-center">
                            <img
                              className="img-width-cart  p-1   rounded-3 "
                              src={elm.product.imageCover}
                              alt=""
                            />
                          </div>

                          <div className="col-5 p-1 col-md-7    rounded-3 border-success  pb-2 my-1 d-flex flex-column justify-content-center ">
                            <h3 className="text-center pb-3 fw-bold">
                              {elm.product.title}
                            </h3>
                            <p className=" ps-3 border border-1 d-flex w-25 fs-5">
                              price :{" "}
                              <span className="text-success fw-bolder px-1">
                                {elm.price}{" "}
                              </span>
                              LE
                            </p>
                            <div className="d-flex">
                              <div className="d-flex  m-auto px-3 py-2">
                                <button
                                  onClick={() => {
                                    removeFromCart(elm.product.id);
                                  }}
                                  className="btn btn-danger m-auto w-100"
                                >
                                  <i className="pe-1 fa-solid fa-trash"></i>{" "}
                                  Remove
                                </button>
                              </div>
                            </div>
                          </div>
                          <div className="col-3 col-md-3 d-flex  justify-content-center   align-items-center  ">
                            <div className="pe-md-5 pe-2">
                              <div className=" d-flex  justify-content-center   align-items-center ">
                                <button
                                  onClick={() =>
                                    increaseCount(elm.count, elm.product._id)
                                  }
                                  className="btn  btn-success "
                                >
                                  <i className="fa-solid fa-plus"></i>
                                </button>
                                <p className="pt-3  fs-4 mx-3">{elm.count}</p>
                                <button
                                  onClick={() =>
                                    decreaseCount(elm.product._id, elm.count)
                                  }
                                  className="btn btn-success"
                                >
                                  <i className="fa-solid fa-minus"></i>
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </>
      )}
    </>
  );
}
