import React, { useEffect, useState } from "react";
import { Col, Row, Image } from "react-bootstrap";
import Product from "../components/Product";
import { useDispatch, useSelector } from "react-redux";
import { listProducts } from "../actions/productActions";
import Loader from "../components/Loader";
import Message from "../components/Message";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
import Paginate from "../components/Paginate";
import ProductCarousal from "../components/ProductCarousal";
import Meta from "../components/Meta";
import { Link } from "react-router-dom";
// ..
AOS.init();

const HomeScreen = ({ match }) => {
  const keyword = match.params.keyword;

  const pageNumber = match.params.pageNumber || 1;

  const dispatch = useDispatch();

  const productList = useSelector((state) => state.productList);
  const { loading, error, products, page, pages } = productList;

  useEffect(() => {
    dispatch(listProducts(keyword, pageNumber));
  }, [dispatch, keyword, pageNumber]);

  return (
    <>
      <Meta />
      {!keyword ? (
        <ProductCarousal />
      ) : (
        <Link to="/" className="btn btn-light">
          Go Back
        </Link>
      )}
      <Image
        data-aos="fade-up"
        data-aos-duration="2500"
        style={{ width: "100%" }}
        src="https://sslimages.shoppersstop.com/sys-master/root/h64/h13/27800672337950/main-strip-eoss-white_web--hp-clp-flat-50-2022-07-07.gif"
        alt=""
      />
      <h1 style={{ color: "white" }}>Where Quality is Nurtured</h1>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant="danger">{error}</Message>
      ) : (
        <>
          <Row>
            {products.map((product) => (
              <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                <Product product={product} />
              </Col>
            ))}
          </Row>
          <Paginate
            pages={pages}
            page={page}
            keyword={keyword ? keyword : ""}
          />
        </>
      )}
    </>
  );
};

export default HomeScreen;
