import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { baseUrl } from "../../Utilits/BaseUrl.js";
import Loading from "../Loading/Loading.jsx";
import { cartContext } from "../../Context/CartContect.jsx";
import { wishlistContext } from "../../Context/WishListContext.jsx";

export default function ProductDetails() {
  let { addToCart } = useContext(cartContext);
  let { addToWishList, idOfWishList, removeFromWishList } =
    useContext(wishlistContext);

  const { id } = useParams();
  const [product, setproduct] = useState("");
  const [spacificImg, setspacificImg] = useState("");
  const [isLoading, setisLoading] = useState(true);

  async function getDetailsProduct() {
    let { data } = await axios.get(`${baseUrl}/products/${id}`);
    setproduct(data.data);
    setisLoading(false);
  }
  const navigator = useNavigate();

  function displayImg(img) {
    setspacificImg(img);
  }
  useEffect(() => {
    getDetailsProduct();
  }, []);

  return (
    <>
      {isLoading && <Loading />}

      {product && (
        <div className="container-fluid d-flex  mt-5">
          <div className="row mt-5">
            <div className="col-2 col-md-1">
              <div className="d-flex flex-column pt-3">
                {product.images.map((img) => (
                  <div
                    key={img}
                    onClick={() => {
                      displayImg(img);
                    }}
                    className="div"
                  >
                    <img className="w-100 pb-2 img" src={img} alt="" />
                  </div>
                ))}
              </div>
            </div>

            <div className="col-10  col-md-3 ">
              <img
                className="w-100 rounded-5 "
                src={spacificImg || product.imageCover}
                alt=""
              />
            </div>
            <div className="col-md-8  pt-5">
              <div className="d-flex  justify-content-between align-items-center">
                <h3 className="py-3">{product.title}</h3>
                {!idOfWishList.find((item) => item === product._id) ? (
                  <i
                    onClick={() =>
                      localStorage.getItem("token")
                        ? addToWishList(product._id)
                        : navigator("/login")
                    }
                    className=" fs-2 pe-5  text-muted  fa-regular   fa-heart"
                  ></i>
                ) : (
                  <i
                    onClick={() => removeFromWishList(product._id)}
                    className="fs-2 pe-5    text-danger fa-solid   fa-heart"
                  ></i>
                )}
              </div>

              <p className="py-3">{product.description}</p>
              <p className="text-main">{product.category.name}</p>
              <div className="d-flex justify-content-between py-3">
                <p>{product.priceAfterDiscount || product.price} EGP</p>
                <p>
                  <i className="rating-color fa-solid fa-star"></i>
                  {product.ratingsAverage} |{product.ratingsQuantity} Rating
                </p>
              </div>
              <button
                onClick={() => {
                  addToCart(product._id);
                }}
                className="w-100 text-white bg-success btn mb-5 fs-5"
              >
                Add to cart
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
