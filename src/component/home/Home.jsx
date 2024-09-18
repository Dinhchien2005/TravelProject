import React from "react";
import "../../assets/global.scss";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <div>
      <meta charSet="utf-8" />
      <title>Travela - Tourism Website Template</title>
      <meta content="width=device-width, initial-scale=1.0" name="viewport" />
      <meta content name="keywords" />
      <meta content name="description" />
      {/* Google Web Fonts */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
      <link
        href="https://fonts.googleapis.com/css2?family=Jost:wght@500;600&family=Roboto&display=swap"
        rel="stylesheet"
      />
      {/* Icon Font Stylesheet */}
      <link
        rel="stylesheet"
        href="https://use.fontawesome.com/releases/v5.15.4/css/all.css"
      />
      <link
        href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.4.1/font/bootstrap-icons.css"
        rel="stylesheet"
      />
      {/* Libraries Stylesheet */}
      <link
        href="lib/owlcarousel/assets/owl.carousel.min.css"
        rel="stylesheet"
      />
      <link href="lib/lightbox/css/lightbox.min.css" rel="stylesheet" />
      {/* Customized Bootstrap Stylesheet */}
      <link href="css/bootstrap.min.css" rel="stylesheet" />
      {/* Template Stylesheet */}
      <link href="css/style.css" rel="stylesheet" />
      {/* Spinner Start */}
      {/* <div
        id="spinner"
        className="show bg-white position-fixed translate-middle w-100 vh-100 top-50 start-50 d-flex align-items-center justify-content-center"
      >
        <div
          className="spinner-border text-primary"
          style={{ width: "3rem", height: "3rem" }}
          role="status"
        >
          <span className="sr-only">Loading...</span>
        </div>
      </div> */}
      {/* Spinner End */}
      {/* Topbar Start */}
      <div className="container-fluid bg-primary px-5 d-none d-lg-block"></div>
      {/* Topbar End */}
      <div className="background-video">
        <video autoPlay loop muted>
          <source src="src\assets\img\bg.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      {/* Navbar & Hero Start */}
      <div className="container-fluid position-relative p-0">
        <nav className="navbar navbar-expand-lg navbar-light px-4 px-lg-5 py-3 py-lg-0">
          <a href className="navbar-brand p-0">
            <h1 className="m-0">
              <i className="fa fa-map-marker-alt me-3" />
              Travela
            </h1>
            <img src="src\assets\img\logo.png" alt="Logo" />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarCollapse"
          >
            <span className="fa fa-bars" />
          </button>
          <div className="collapse navbar-collapse" id="navbarCollapse">
            <div className="navbar-nav ms-auto py-0">
              <Link to="/" className="nav-item nav-link active">
                Home
              </Link>
              <Link to="/about" className="nav-item nav-link ">
                About Us
              </Link>
              <Link to="/" className="nav-item nav-link ">
                Trip Catologue
              </Link>

              <Link to="/contact" className="nav-item nav-link ">
                Contact
              </Link>
              <Link to="/" className="nav-item nav-link ">
                Book Now
              </Link>
              <Link to="/" className="nav-item nav-link ">
                <i className="fa-regular fa-user"></i>
              </Link>
            </div>
          </div>
        </nav>
        {/* Carousel Start */}
        <div className="carousel-header">
          <div
            id="carouselId"
            className="carousel slide"
            data-bs-ride="carousel"
          >
            <ol className="carousel-indicators">
              <li
                data-bs-target="#carouselId"
                data-bs-slide-to={0}
                className="active"
              />
              <li data-bs-target="#carouselId" data-bs-slide-to={1} />
              <li data-bs-target="#carouselId" data-bs-slide-to={2} />
            </ol>
            <div className="carousel-inner" role="listbox">
              <div className="carousel-item active">
                <img
                  src="src\assets\img\carousel-2.jpg"
                  className="img-fluid"
                  alt="Image"
                />
                <div className="carousel-caption">
                  <div className="p-3" style={{ maxWidth: "900px" }}>
                    <h4
                      className="text-white text-uppercase fw-bold mb-4"
                      style={{ letterSpacing: "3px" }}
                    >
                      Explore The World
                    </h4>
                    <h1 className="display-2 text-capitalize text-white mb-4">
                      Let's The World Together!
                    </h1>
                    <p className="mb-5 fs-5">
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the 1500s,
                    </p>
                    <div className="d-flex align-items-center justify-content-center">
                      <a
                        className="btn-hover-bg btn btn-primary rounded-pill text-white py-3 px-5"
                        href="#"
                      >
                        Discover Now
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="carousel-item">
                <img
                  src="src\assets\img\carousel-1.jpg"
                  className="img-fluid"
                  alt="Image"
                />
                <div className="carousel-caption">
                  <div className="p-3" style={{ maxWidth: "900px" }}>
                    <h4
                      className="text-white text-uppercase fw-bold mb-4"
                      style={{ letterSpacing: "3px" }}
                    >
                      Explore The World
                    </h4>
                    <h1 className="display-2 text-capitalize text-white mb-4">
                      Find Your Perfect Tour At Travel
                    </h1>
                    <p className="mb-5 fs-5">
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the 1500s,
                    </p>
                    <div className="d-flex align-items-center justify-content-center">
                      <a
                        className="btn-hover-bg btn btn-primary rounded-pill text-white py-3 px-5"
                        href="#"
                      >
                        Discover Now
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="carousel-item">
                <img
                  src="src\assets\img\carousel-3.jpg"
                  className="img-fluid"
                  alt="Image"
                />
                <div className="carousel-caption">
                  <div className="p-3" style={{ maxWidth: "900px" }}>
                    <h4
                      className="text-white text-uppercase fw-bold mb-4"
                      style={{ letterSpacing: "3px" }}
                    >
                      Explore The World
                    </h4>
                    <h1 className="display-2 text-capitalize text-white mb-4">
                      You Like To Go?
                    </h1>
                    <p className="mb-5 fs-5">
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the 1500s,
                    </p>
                    <div className="d-flex align-items-center justify-content-center">
                      <a
                        className="btn-hover-bg btn btn-primary rounded-pill text-white py-3 px-5"
                        href="#"
                      >
                        Discover Now
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#carouselId"
              data-bs-slide="prev"
            >
              <span
                className="carousel-control-prev-icon btn bg-primary"
                aria-hidden="false"
              />
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#carouselId"
              data-bs-slide="next"
            >
              <span
                className="carousel-control-next-icon btn bg-primary"
                aria-hidden="false"
              />
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>
        {/* Carousel End */}
      </div>
      <div
        className="container-fluid search-bar position-relative"
        style={{ top: "-50%", transform: "translateY(-50%)" }}
      >
        <div className="container">
          <div
            className="position-relative rounded-pill w-100 mx-auto p-5"
            style={{ background: "rgba(19, 53, 123, 0.8)" }}
          >
            <input
              className="form-control border-0 rounded-pill w-100 py-3 ps-4 pe-5"
              type="text"
              placeholder="Eg: Thailand"
            />
            <button
              type="button"
              className="btn btn-primary rounded-pill py-2 px-4 position-absolute me-2"
              style={{
                top: "50%",
                right: "46px",
                transform: "translateY(-50%)",
              }}
            >
              Search
            </button>
          </div>
        </div>
      </div>
      {/* Navbar & Hero End */}
      {/* About Start */}
      <div className="container-fluid about py-5">
        <div className="container py-5">
          <div className="row g-5 align-items-center">
            <div className="col-lg-5">
              <div
                className="h-100"
                style={{
                  border: "50px solid",
                  borderColor: "transparent #13357B transparent #13357B",
                }}
              >
                <img
                  src="src\assets\img\about-img.jpg"
                  className="img-fluid w-100 h-100"
                  alt=""
                />
              </div>
            </div>
            <div
              className="col-lg-7"
              style={{
                background:
                  "linear-gradient(rgba(255, 255, 255, .8), rgba(255, 255, 255, .8)), url(srcassetsimgabout-img-1.png)",
              }}
            >
              <h5 className="section-about-title pe-3">About Us</h5>
              <h1 className="mb-4">
                Welcome to <span className="text-primary">Travela</span>
              </h1>
              <p className="mb-4">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Molestias, dolorum, doloribus sunt dicta, officia voluptatibus
                libero necessitatibus natus impedit quam ullam assumenda? Id
                atque iste consectetur. Commodi odit ab saepe!
              </p>
              <p className="mb-4">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Accusantium quos voluptatem suscipit neque enim, doloribus ipsum
                rem eos distinctio, dignissimos nisi saepe nulla? Libero numquam
                perferendis provident placeat molestiae quia?
              </p>
              <div className="row gy-2 gx-4 mb-4">
                <div className="col-sm-6">
                  <p className="mb-0">
                    <i className="fa fa-arrow-right text-primary me-2" />
                    First Class Flights
                  </p>
                </div>
                <div className="col-sm-6">
                  <p className="mb-0">
                    <i className="fa fa-arrow-right text-primary me-2" />
                    Handpicked Hotels
                  </p>
                </div>
                <div className="col-sm-6">
                  <p className="mb-0">
                    <i className="fa fa-arrow-right text-primary me-2" />5 Star
                    Accommodations
                  </p>
                </div>
                <div className="col-sm-6">
                  <p className="mb-0">
                    <i className="fa fa-arrow-right text-primary me-2" />
                    LaHome Model Vehicles
                  </p>
                </div>
                <div className="col-sm-6">
                  <p className="mb-0">
                    <i className="fa fa-arrow-right text-primary me-2" />
                    150 Premium City Tours
                  </p>
                </div>
                <div className="col-sm-6">
                  <p className="mb-0">
                    <i className="fa fa-arrow-right text-primary me-2" />
                    24/7 Service
                  </p>
                </div>
              </div>
              <a className="btn btn-primary rounded-pill py-3 px-5 mt-2" href>
                Read More
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* About End */}
      {/* Services Start */}
      <div className="container-fluid bg-light service py-5">
        <div className="container py-5">
          <div
            className="mx-auto text-center mb-5"
            style={{ maxWidth: "900px" }}
          >
            <h5 className="section-title px-3">Searvices</h5>
            <h1 className="mb-0">Our Services</h1>
          </div>
          <div className="row g-4">
            <div className="col-lg-6">
              <div className="row g-4">
                <div className="col-12">
                  <div className="service-content-inner d-flex align-items-center bg-white border border-primary rounded p-4 pe-0">
                    <div className="service-content text-end">
                      <h5 className="mb-4">WorldWide Tours</h5>
                      <p className="mb-0">
                        Dolor sit amet consectetur adipisicing elit. Non alias
                        eum, suscipit expedita corrupti officiis debitis
                        possimus nam laudantium beatae quidem dolore
                        consequuntur voluptate rem reiciendis, omnis sequi harum
                        earum.
                      </p>
                    </div>
                    <div className="service-icon p-4">
                      <i className="fa fa-globe fa-4x text-primary" />
                    </div>
                  </div>
                </div>
                <div className="col-12">
                  <div className="service-content-inner d-flex align-items-center  bg-white border border-primary rounded p-4 pe-0">
                    <div className="service-content text-end">
                      <h5 className="mb-4">Hotel Reservation</h5>
                      <p className="mb-0">
                        Dolor sit amet consectetur adipisicing elit. Non alias
                        eum, suscipit expedita corrupti officiis debitis
                        possimus nam laudantium beatae quidem dolore
                        consequuntur voluptate rem reiciendis, omnis sequi harum
                        earum.
                      </p>
                    </div>
                    <div className="service-icon p-4">
                      <i className="fa fa-hotel fa-4x text-primary" />
                    </div>
                  </div>
                </div>
                <div className="col-12">
                  <div className="service-content-inner d-flex align-items-center bg-white border border-primary rounded p-4 pe-0">
                    <div className="service-content text-end">
                      <h5 className="mb-4">Travel Guides</h5>
                      <p className="mb-0">
                        Dolor sit amet consectetur adipisicing elit. Non alias
                        eum, suscipit expedita corrupti officiis debitis
                        possimus nam laudantium beatae quidem dolore
                        consequuntur voluptate rem reiciendis, omnis sequi harum
                        earum.
                      </p>
                    </div>
                    <div className="service-icon p-4">
                      <i className="fa fa-user fa-4x text-primary" />
                    </div>
                  </div>
                </div>
                <div className="col-12">
                  <div className="service-content-inner d-flex align-items-center bg-white border border-primary rounded p-4 pe-0">
                    <div className="service-content text-end">
                      <h5 className="mb-4">Event Management</h5>
                      <p className="mb-0">
                        Dolor sit amet consectetur adipisicing elit. Non alias
                        eum, suscipit expedita corrupti officiis debitis
                        possimus nam laudantium beatae quidem dolore
                        consequuntur voluptate rem reiciendis, omnis sequi harum
                        earum.
                      </p>
                    </div>
                    <div className="service-icon p-4">
                      <i className="fa fa-cog fa-4x text-primary" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="row g-4">
                <div className="col-12">
                  <div className="service-content-inner d-flex align-items-center bg-white border border-primary rounded p-4 ps-0">
                    <div className="service-icon p-4">
                      <i className="fa fa-globe fa-4x text-primary" />
                    </div>
                    <div className="service-content">
                      <h5 className="mb-4">WorldWide Tours</h5>
                      <p className="mb-0">
                        Dolor sit amet consectetur adipisicing elit. Non alias
                        eum, suscipit expedita corrupti officiis debitis
                        possimus nam laudantium beatae quidem dolore
                        consequuntur voluptate rem reiciendis, omnis sequi harum
                        earum.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-12">
                  <div className="service-content-inner d-flex align-items-center bg-white border border-primary rounded p-4 ps-0">
                    <div className="service-icon p-4">
                      <i className="fa fa-hotel fa-4x text-primary" />
                    </div>
                    <div className="service-content">
                      <h5 className="mb-4">Hotel Reservation</h5>
                      <p className="mb-0">
                        Dolor sit amet consectetur adipisicing elit. Non alias
                        eum, suscipit expedita corrupti officiis debitis
                        possimus nam laudantium beatae quidem dolore
                        consequuntur voluptate rem reiciendis, omnis sequi harum
                        earum.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-12">
                  <div className="service-content-inner d-flex align-items-center bg-white border border-primary rounded p-4 ps-0">
                    <div className="service-icon p-4">
                      <i className="fa fa-user fa-4x text-primary" />
                    </div>
                    <div className="service-content">
                      <h5 className="mb-4">Travel Guides</h5>
                      <p className="mb-0">
                        Dolor sit amet consectetur adipisicing elit. Non alias
                        eum, suscipit expedita corrupti officiis debitis
                        possimus nam laudantium beatae quidem dolore
                        consequuntur voluptate rem reiciendis, omnis sequi harum
                        earum.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-12">
                  <div className="service-content-inner d-flex align-items-center bg-white border border-primary rounded p-4 ps-0">
                    <div className="service-icon p-4">
                      <i className="fa fa-cog fa-4x text-primary" />
                    </div>
                    <div className="service-content">
                      <h5 className="mb-4">Event Management</h5>
                      <p className="mb-0">
                        Dolor sit amet consectetur adipisicing elit. Non alias
                        eum, suscipit expedita corrupti officiis debitis
                        possimus nam laudantium beatae quidem dolore
                        consequuntur voluptate rem reiciendis, omnis sequi harum
                        earum.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12">
              <div className="text-center">
                <a className="btn btn-primary rounded-pill py-3 px-5 mt-2" href>
                  Service More
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Services End */}
      {/* Destination Start */}
      <div className="container-fluid destination py-5">
        <div className="container py-5">
          <div
            className="mx-auto text-center mb-5"
            style={{ maxWidth: "900px" }}
          >
            <h5 className="section-title px-3">Destination</h5>
            <h1 className="mb-0">Popular Destination</h1>
          </div>
          <div className="tab-class text-center">
            <ul className="nav nav-pills d-inline-flex justify-content-center mb-5">
              <li className="nav-item">
                <a
                  className="d-flex mx-3 py-2 border border-primary bg-light rounded-pill active"
                  data-bs-toggle="pill"
                  href="#tab-1"
                >
                  <span className="text-dark" style={{ width: "150px" }}>
                    All
                  </span>
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="d-flex py-2 mx-3 border border-primary bg-light rounded-pill"
                  data-bs-toggle="pill"
                  href="#tab-2"
                >
                  <span className="text-dark" style={{ width: "150px" }}>
                    USA
                  </span>
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="d-flex mx-3 py-2 border border-primary bg-light rounded-pill"
                  data-bs-toggle="pill"
                  href="#tab-3"
                >
                  <span className="text-dark" style={{ width: "150px" }}>
                    Canada
                  </span>
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="d-flex mx-3 py-2 border border-primary bg-light rounded-pill"
                  data-bs-toggle="pill"
                  href="#tab-4"
                >
                  <span className="text-dark" style={{ width: "150px" }}>
                    Europe
                  </span>
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="d-flex mx-3 py-2 border border-primary bg-light rounded-pill"
                  data-bs-toggle="pill"
                  href="#tab-5"
                >
                  <span className="text-dark" style={{ width: "150px" }}>
                    China
                  </span>
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="d-flex mx-3 py-2 border border-primary bg-light rounded-pill"
                  data-bs-toggle="pill"
                  href="#tab-6"
                >
                  <span className="text-dark" style={{ width: "150px" }}>
                    Singapore
                  </span>
                </a>
              </li>
            </ul>
            <div className="tab-content">
              <div id="tab-1" className="tab-pane fade show p-0 active">
                <div className="row g-4">
                  <div className="col-xl-8">
                    <div className="row g-4">
                      <div className="col-lg-6">
                        <div className="destination-img">
                          <img
                            className="img-fluid rounded w-100"
                            src="src\assets\img\destination-1.jpg"
                            alt=""
                          />
                          <div className="destination-overlay p-4">
                            <a
                              href="#"
                              className="btn btn-primary text-white rounded-pill border py-2 px-3"
                            >
                              20 Photos
                            </a>
                            <h4 className="text-white mb-2 mt-3">
                              New York City
                            </h4>
                            <a href="#" className="btn-hover text-white">
                              View All Place{" "}
                              <i className="fa fa-arrow-right ms-2" />
                            </a>
                          </div>
                          <div className="search-icon">
                            <a
                              href="src\assets\img\destination-1.jpg"
                              data-lightbox="destination-1"
                            >
                              <i className="fa fa-plus-square fa-1x btn btn-light btn-lg-square text-primary" />
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="destination-img">
                          <img
                            className="img-fluid rounded w-100"
                            src="src\assets\img\destination-2.jpg"
                            alt=""
                          />
                          <div className="destination-overlay p-4">
                            <a
                              href="#"
                              className="btn btn-primary text-white rounded-pill border py-2 px-3"
                            >
                              20 Photos
                            </a>
                            <h4 className="text-white mb-2 mt-3">Las vegas</h4>
                            <a href="#" className="btn-hover text-white">
                              View All Place{" "}
                              <i className="fa fa-arrow-right ms-2" />
                            </a>
                          </div>
                          <div className="search-icon">
                            <a
                              href="src\assets\img\destination-2.jpg"
                              data-lightbox="destination-2"
                            >
                              <i className="fa fa-plus-square fa-1x btn btn-light btn-lg-square text-primary" />
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="destination-img">
                          <img
                            className="img-fluid rounded w-100"
                            src="src\assets\img\destination-7.jpg"
                            alt=""
                          />
                          <div className="destination-overlay p-4">
                            <a
                              href="#"
                              className="btn btn-primary text-white rounded-pill border py-2 px-3"
                            >
                              20 Photos
                            </a>
                            <h4 className="text-white mb-2 mt-3">
                              Los angelas
                            </h4>
                            <a href="#" className="btn-hover text-white">
                              View All Place{" "}
                              <i className="fa fa-arrow-right ms-2" />
                            </a>
                          </div>
                          <div className="search-icon">
                            <a
                              href="src\assets\img\destination-7.jpg"
                              data-lightbox="destination-7"
                            >
                              <i className="fa fa-plus-square fa-1x btn btn-light btn-lg-square text-primary" />
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="destination-img">
                          <img
                            className="img-fluid rounded w-100"
                            src="src\assets\img\destination-8.jpg"
                            alt=""
                          />
                          <div className="destination-overlay p-4">
                            <a
                              href="#"
                              className="btn btn-primary text-white rounded-pill border py-2 px-3"
                            >
                              20 Photos
                            </a>
                            <h4 className="text-white mb-2 mt-3">
                              Los angelas
                            </h4>
                            <a href="#" className="btn-hover text-white">
                              View All Place{" "}
                              <i className="fa fa-arrow-right ms-2" />
                            </a>
                          </div>
                          <div className="search-icon">
                            <a
                              href="src\assets\img\destination-8.jpg"
                              data-lightbox="destination-8"
                            >
                              <i className="fa fa-plus-square fa-1x btn btn-light btn-lg-square text-primary" />
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-4">
                    <div className="destination-img h-100">
                      <img
                        className="img-fluid rounded w-100 h-100"
                        src="src\assets\img\destination-9.jpg"
                        style={{ objectFit: "cover", minHeight: "300px" }}
                        alt=""
                      />
                      <div className="destination-overlay p-4">
                        <a
                          href="#"
                          className="btn btn-primary text-white rounded-pill border py-2 px-3"
                        >
                          20 Photos
                        </a>
                        <h4 className="text-white mb-2 mt-3">San francisco</h4>
                        <a href="#" className="btn-hover text-white">
                          View All Place{" "}
                          <i className="fa fa-arrow-right ms-2" />
                        </a>
                      </div>
                      <div className="search-icon">
                        <a
                          href="src\assets\img\destination-9.jpg"
                          data-lightbox="destination-4"
                        >
                          <i className="fa fa-plus-square fa-1x btn btn-light btn-lg-square text-primary" />
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4">
                    <div className="destination-img">
                      <img
                        className="img-fluid rounded w-100"
                        src="src\assets\img\destination-4.jpg"
                        alt=""
                      />
                      <div className="destination-overlay p-4">
                        <a
                          href="#"
                          className="btn btn-primary text-white rounded-pill border py-2 px-3"
                        >
                          20 Photos
                        </a>
                        <h4 className="text-white mb-2 mt-3">Los angelas</h4>
                        <a href="#" className="btn-hover text-white">
                          View All Place{" "}
                          <i className="fa fa-arrow-right ms-2" />
                        </a>
                      </div>
                      <div className="search-icon">
                        <a
                          href="src\assets\img\destination-4.jpg"
                          data-lightbox="destination-4"
                        >
                          <i className="fa fa-plus-square fa-1x btn btn-light btn-lg-square text-primary" />
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4">
                    <div className="destination-img">
                      <img
                        className="img-fluid rounded w-100"
                        src="src\assets\img\destination-5.jpg"
                        alt=""
                      />
                      <div className="destination-overlay p-4">
                        <a
                          href="#"
                          className="btn btn-primary text-white rounded-pill border py-2 px-3"
                        >
                          20 Photos
                        </a>
                        <h4 className="text-white mb-2 mt-3">Los angelas</h4>
                        <a href="#" className="btn-hover text-white">
                          View All Place{" "}
                          <i className="fa fa-arrow-right ms-2" />
                        </a>
                      </div>
                      <div className="search-icon">
                        <a
                          href="src\assets\img\destination-5.jpg"
                          data-lightbox="destination-5"
                        >
                          <i className="fa fa-plus-square fa-1x btn btn-light btn-lg-square text-primary" />
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4">
                    <div className="destination-img">
                      <img
                        className="img-fluid rounded w-100"
                        src="src\assets\img\destination-6.jpg"
                        alt=""
                      />
                      <div className="destination-overlay p-4">
                        <a
                          href="#"
                          className="btn btn-primary text-white rounded-pill border py-2 px-3"
                        >
                          20 Photos
                        </a>
                        <h4 className="text-white mb-2 mt-3">Los angelas</h4>
                        <a href="#" className="btn-hover text-white">
                          View All Place{" "}
                          <i className="fa fa-arrow-right ms-2" />
                        </a>
                      </div>
                      <div className="search-icon">
                        <a
                          href="src\assets\img\destination-6.jpg"
                          data-lightbox="destination-6"
                        >
                          <i className="fa fa-plus-square fa-1x btn btn-light btn-lg-square text-primary" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div id="tab-2" className="tab-pane fade show p-0">
                <div className="row g-4">
                  <div className="col-lg-6">
                    <div className="destination-img">
                      <img
                        className="img-fluid rounded w-100"
                        src="src\assets\img\destination-5.jpg"
                        alt=""
                      />
                      <div className="destination-overlay p-4">
                        <a
                          href="#"
                          className="btn btn-primary text-white rounded-pill border py-2 px-3"
                        >
                          20 Photos
                        </a>
                        <h4 className="text-white mb-2 mt-3">San francisco</h4>
                        <a href="#" className="btn-hover text-white">
                          View All Place{" "}
                          <i className="fa fa-arrow-right ms-2" />
                        </a>
                      </div>
                      <div className="search-icon">
                        <a
                          href="src\assets\img\destination-5.jpg"
                          data-lightbox="destination-5"
                        >
                          <i className="fa fa-plus-square fa-1x btn btn-light btn-lg-square text-primary" />
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="destination-img">
                      <img
                        className="img-fluid rounded w-100"
                        src="src\assets\img\destination-6.jpg"
                        alt=""
                      />
                      <div className="destination-overlay p-4">
                        <a
                          href="#"
                          className="btn btn-primary text-white rounded-pill border py-2 px-3"
                        >
                          20 Photos
                        </a>
                        <h4 className="text-white mb-2 mt-3">San francisco</h4>
                        <a href="#" className="btn-hover text-white">
                          View All Place{" "}
                          <i className="fa fa-arrow-right ms-2" />
                        </a>
                      </div>
                      <div className="search-icon">
                        <a
                          href="src\assets\img\destination-6.jpg"
                          data-lightbox="destination-6"
                        >
                          <i className="fa fa-plus-square fa-1x btn btn-light btn-lg-square text-primary" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div id="tab-3" className="tab-pane fade show p-0">
                <div className="row g-4">
                  <div className="col-lg-6">
                    <div className="destination-img">
                      <img
                        className="img-fluid rounded w-100"
                        src="src\assets\img\destination-5.jpg"
                        alt=""
                      />
                      <div className="destination-overlay p-4">
                        <a
                          href="#"
                          className="btn btn-primary text-white rounded-pill border py-2 px-3"
                        >
                          20 Photos
                        </a>
                        <h4 className="text-white mb-2 mt-3">San francisco</h4>
                        <a href="#" className="btn-hover text-white">
                          View All Place{" "}
                          <i className="fa fa-arrow-right ms-2" />
                        </a>
                      </div>
                      <div className="search-icon">
                        <a
                          href="src\assets\img\destination-5.jpg"
                          data-lightbox="destination-5"
                        >
                          <i className="fa fa-plus-square fa-1x btn btn-light btn-lg-square text-primary" />
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="destination-img">
                      <img
                        className="img-fluid rounded w-100"
                        src="src\assets\img\destination-6.jpg"
                        alt=""
                      />
                      <div className="destination-overlay p-4">
                        <a
                          href="#"
                          className="btn btn-primary text-white rounded-pill border py-2 px-3"
                        >
                          20 Photos
                        </a>
                        <h4 className="text-white mb-2 mt-3">San francisco</h4>
                        <a href="#" className="btn-hover text-white">
                          View All Place{" "}
                          <i className="fa fa-arrow-right ms-2" />
                        </a>
                      </div>
                      <div className="search-icon">
                        <a
                          href="src\assets\img\destination-6.jpg"
                          data-lightbox="destination-6"
                        >
                          <i className="fa fa-plus-square fa-1x btn btn-light btn-lg-square text-primary" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div id="tab-4" className="tab-pane fade show p-0">
                <div className="row g-4">
                  <div className="col-lg-6">
                    <div className="destination-img">
                      <img
                        className="img-fluid rounded w-100"
                        src="src\assets\img\destination-5.jpg"
                        alt=""
                      />
                      <div className="destination-overlay p-4">
                        <a
                          href="#"
                          className="btn btn-primary text-white rounded-pill border py-2 px-3"
                        >
                          20 Photos
                        </a>
                        <h4 className="text-white mb-2 mt-3">San francisco</h4>
                        <a href="#" className="btn-hover text-white">
                          View All Place{" "}
                          <i className="fa fa-arrow-right ms-2" />
                        </a>
                      </div>
                      <div className="search-icon">
                        <a
                          href="src\assets\img\destination-5.jpg"
                          data-lightbox="destination-5"
                        >
                          <i className="fa fa-plus-square fa-1x btn btn-light btn-lg-square text-primary" />
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="destination-img">
                      <img
                        className="img-fluid rounded w-100"
                        src="src\assets\img\destination-6.jpg"
                        alt=""
                      />
                      <div className="destination-overlay p-4">
                        <a
                          href="#"
                          className="btn btn-primary text-white rounded-pill border py-2 px-3"
                        >
                          20 Photos
                        </a>
                        <h4 className="text-white mb-2 mt-3">San francisco</h4>
                        <a href="#" className="btn-hover text-white">
                          View All Place{" "}
                          <i className="fa fa-arrow-right ms-2" />
                        </a>
                      </div>
                      <div className="search-icon">
                        <a
                          href="src\assets\img\destination-6.jpg"
                          data-lightbox="destination-6"
                        >
                          <i className="fa fa-plus-square fa-1x btn btn-light btn-lg-square text-primary" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div id="tab-5" className="tab-pane fade show p-0">
                <div className="row g-4">
                  <div className="col-lg-6">
                    <div className="destination-img">
                      <img
                        className="img-fluid rounded w-100"
                        src="src\assets\img\destination-5.jpg"
                        alt=""
                      />
                      <div className="destination-overlay p-4">
                        <a
                          href="#"
                          className="btn btn-primary text-white rounded-pill border py-2 px-3"
                        >
                          20 Photos
                        </a>
                        <h4 className="text-white mb-2 mt-3">San francisco</h4>
                        <a href="#" className="btn-hover text-white">
                          View All Place{" "}
                          <i className="fa fa-arrow-right ms-2" />
                        </a>
                      </div>
                      <div className="search-icon">
                        <a
                          href="src\assets\img\destination-5.jpg"
                          data-lightbox="destination-5"
                        >
                          <i className="fa fa-plus-square fa-1x btn btn-light btn-lg-square text-primary" />
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="destination-img">
                      <img
                        className="img-fluid rounded w-100"
                        src="src\assets\img\destination-6.jpg"
                        alt=""
                      />
                      <div className="destination-overlay p-4">
                        <a
                          href="#"
                          className="btn btn-primary text-white rounded-pill border py-2 px-3"
                        >
                          20 Photos
                        </a>
                        <h4 className="text-white mb-2 mt-3">San francisco</h4>
                        <a href="#" className="btn-hover text-white">
                          View All Place{" "}
                          <i className="fa fa-arrow-right ms-2" />
                        </a>
                      </div>
                      <div className="search-icon">
                        <a
                          href="src\assets\img\destination-6.jpg"
                          data-lightbox="destination-6"
                        >
                          <i className="fa fa-plus-square fa-1x btn btn-light btn-lg-square text-primary" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div id="tab-6" className="tab-pane fade show p-0">
                <div className="row g-4">
                  <div className="col-lg-6">
                    <div className="destination-img">
                      <img
                        className="img-fluid rounded w-100"
                        src="src\assets\img\destination-5.jpg"
                        alt=""
                      />
                      <div className="destination-overlay p-4">
                        <a
                          href="#"
                          className="btn btn-primary text-white rounded-pill border py-2 px-3"
                        >
                          20 Photos
                        </a>
                        <h4 className="text-white mb-2 mt-3">San francisco</h4>
                        <a href="#" className="btn-hover text-white">
                          View All Place{" "}
                          <i className="fa fa-arrow-right ms-2" />
                        </a>
                      </div>
                      <div className="search-icon">
                        <a
                          href="src\assets\img\destination-5.jpg"
                          data-lightbox="destination-5"
                        >
                          <i className="fa fa-plus-square fa-1x btn btn-light btn-lg-square text-primary" />
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="destination-img">
                      <img
                        className="img-fluid rounded w-100"
                        src="src\assets\img\destination-6.jpg"
                        alt=""
                      />
                      <div className="destination-overlay p-4">
                        <a
                          href="#"
                          className="btn btn-primary text-white rounded-pill border py-2 px-3"
                        >
                          20 Photos
                        </a>
                        <h4 className="text-white mb-2 mt-3">San francisco</h4>
                        <a href="#" className="btn-hover text-white">
                          View All Place{" "}
                          <i className="fa fa-arrow-right ms-2" />
                        </a>
                      </div>
                      <div className="search-icon">
                        <a
                          href="src\assets\img\destination-6.jpg"
                          data-lightbox="destination-6"
                        >
                          <i className="fa fa-plus-square fa-1x btn btn-light btn-lg-square text-primary" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Destination End */}
      {/* Explore Tour Start */}
      <div className="container-fluid ExploreTour py-5">
        <div className="container py-5">
          <div
            className="mx-auto text-center mb-5"
            style={{ maxWidth: "900px" }}
          >
            <h5 className="section-title px-3">Explore Tour</h5>
            <h1 className="mb-4">The World</h1>
            <p className="mb-0">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum
              tempore nam, architecto doloremque velit explicabo? Voluptate sunt
              eveniet fuga eligendi! Expedita laudantium fugiat corrupti eum cum
              repellat a laborum quasi.
            </p>
          </div>
          <div className="tab-class text-center">
            <ul className="nav nav-pills d-inline-flex justify-content-center mb-5">
              <li className="nav-item">
                <a
                  className="d-flex mx-3 py-2 border border-primary bg-light rounded-pill active"
                  data-bs-toggle="pill"
                  href="#NationalTab-1"
                >
                  <span className="text-dark" style={{ width: "250px" }}>
                    National Tour Category
                  </span>
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="d-flex py-2 mx-3 border border-primary bg-light rounded-pill"
                  data-bs-toggle="pill"
                  href="#InternationalTab-2"
                >
                  <span className="text-dark" style={{ width: "250px" }}>
                    International tour Category
                  </span>
                </a>
              </li>
            </ul>
            <div className="tab-content">
              <div id="NationalTab-1" className="tab-pane fade show p-0 active">
                <div className="row g-4">
                  <div className="col-md-6 col-lg-4">
                    <div className="national-item">
                      <img
                        src="src\assets\img\explore-tour-1.jpg"
                        className="img-fluid w-100 rounded"
                        alt="Image"
                      />
                      <div className="national-content">
                        <div className="national-info">
                          <h5 className="text-white text-uppercase mb-2">
                            Weekend Tour
                          </h5>
                          <a href="#" className="btn-hover text-white">
                            View All Place{" "}
                            <i className="fa fa-arrow-right ms-2" />
                          </a>
                        </div>
                      </div>
                      <div className="national-plus-icon">
                        <a href="#" className="my-auto">
                          <i className="fas fa-link fa-2x text-white" />
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 col-lg-4">
                    <div className="national-item">
                      <img
                        src="src\assets\img\explore-tour-2.jpg"
                        className="img-fluid w-100 rounded"
                        alt="Image"
                      />
                      <div className="national-content">
                        <div className="national-info">
                          <h5 className="text-white text-uppercase mb-2">
                            Holiday Tour
                          </h5>
                          <a href="#" className="btn-hover text-white">
                            View All Place{" "}
                            <i className="fa fa-arrow-right ms-2" />
                          </a>
                        </div>
                      </div>
                      <div className="national-plus-icon">
                        <a href="#" className="my-auto">
                          <i className="fas fa-link fa-2x text-white" />
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 col-lg-4">
                    <div className="national-item">
                      <img
                        src="src\assets\img\explore-tour-3.jpg"
                        className="img-fluid w-100 rounded"
                        alt="Image"
                      />
                      <div className="national-content">
                        <div className="national-info">
                          <h5 className="text-white text-uppercase mb-2">
                            Road Trip
                          </h5>
                          <a href="#" className="btn-hover text-white">
                            View All Place{" "}
                            <i className="fa fa-arrow-right ms-2" />
                          </a>
                        </div>
                      </div>
                      <div className="tour-offer bg-info">15% Off</div>
                      <div className="national-plus-icon">
                        <a href="#" className="my-auto">
                          <i className="fas fa-link fa-2x text-white" />
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 col-lg-4">
                    <div className="national-item">
                      <img
                        src="src\assets\img\explore-tour-4.jpg"
                        className="img-fluid w-100 rounded"
                        alt="Image"
                      />
                      <div className="national-content">
                        <div className="national-info">
                          <h5 className="text-white text-uppercase mb-2">
                            Historical Trip
                          </h5>
                          <a href="#" className="btn-hover text-white">
                            View All Place{" "}
                            <i className="fa fa-arrow-right ms-2" />
                          </a>
                        </div>
                      </div>
                      <div className="national-plus-icon">
                        <a href="#" className="my-auto">
                          <i className="fas fa-link fa-2x text-white" />
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 col-lg-4">
                    <div className="national-item">
                      <img
                        src="src\assets\img\explore-tour-5.jpg"
                        className="img-fluid w-100 rounded"
                        alt="Image"
                      />
                      <div className="national-content">
                        <div className="national-info">
                          <h5 className="text-white text-uppercase mb-2">
                            Family Tour
                          </h5>
                          <a href="#" className="btn-hover text-white">
                            View All Place{" "}
                            <i className="fa fa-arrow-right ms-2" />
                          </a>
                        </div>
                      </div>
                      <div className="tour-offer bg-warning">50% Off</div>
                      <div className="national-plus-icon">
                        <a href="#" className="my-auto">
                          <i className="fas fa-link fa-2x text-white" />
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 col-lg-4">
                    <div className="national-item">
                      <img
                        src="src\assets\img\explore-tour-6.jpg"
                        className="img-fluid w-100 rounded"
                        alt="Image"
                      />
                      <div className="national-content">
                        <div className="national-info">
                          <h5 className="text-white text-uppercase mb-2">
                            Beach Tour
                          </h5>
                          <a href="#" className="btn-hover text-white">
                            View All Place{" "}
                            <i className="fa fa-arrow-right ms-2" />
                          </a>
                        </div>
                      </div>
                      <div className="national-plus-icon">
                        <a href="#" className="my-auto">
                          <i className="fas fa-link fa-2x text-white" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div id="InternationalTab-2" className="tab-pane fade show p-0">
                <div className="InternationalTour-carousel owl-carousel">
                  <div className="international-item">
                    <img
                      src="src\assets\img\explore-tour-1.jpg"
                      className="img-fluid w-100 rounded"
                      alt="Image"
                    />
                    <div className="international-content">
                      <div className="international-info">
                        <h5 className="text-white text-uppercase mb-2">
                          Australia
                        </h5>
                        <a href="#" className="btn-hover text-white me-4">
                          <i className="fas fa-map-marker-alt me-1" /> 8 Cities
                        </a>
                        <a href="#" className="btn-hover text-white">
                          <i className="fa fa-eye ms-2" />{" "}
                          <span>143+ Tour Places</span>
                        </a>
                      </div>
                    </div>
                    <div className="tour-offer bg-success">30% Off</div>
                    <div className="international-plus-icon">
                      <a href="#" className="my-auto">
                        <i className="fas fa-link fa-2x text-white" />
                      </a>
                    </div>
                  </div>
                  <div className="international-item">
                    <img
                      src="src\assets\img\explore-tour-2.jpg"
                      className="img-fluid w-100 rounded"
                      alt="Image"
                    />
                    <div className="international-content">
                      <div className="international-info">
                        <h5 className="text-white text-uppercase mb-2">
                          Germany
                        </h5>
                        <a href="#" className="btn-hover text-white me-4">
                          <i className="fas fa-map-marker-alt me-1" /> 12 Cities
                        </a>
                        <a href="#" className="btn-hover text-white">
                          <i className="fa fa-eye ms-2" />{" "}
                          <span>21+ Tour Places</span>
                        </a>
                      </div>
                    </div>
                    <div className="international-plus-icon">
                      <a href="#" className="my-auto">
                        <i className="fas fa-link fa-2x text-white" />
                      </a>
                    </div>
                  </div>
                  <div className="international-item">
                    <img
                      src="src\assets\img\explore-tour-3.jpg"
                      className="img-fluid w-100 rounded"
                      alt="Image"
                    />
                    <div className="international-content">
                      <div className="tour-offer bg-warning">45% Off</div>
                      <div className="international-info">
                        <h5 className="text-white text-uppercase mb-2">
                          Spain
                        </h5>
                        <a href="#" className="btn-hover text-white me-4">
                          <i className="fas fa-map-marker-alt me-1" /> 9 Cities
                        </a>
                        <a href="#" className="btn-hover text-white">
                          <i className="fa fa-eye ms-2" />{" "}
                          <span>133+ Tour Places</span>
                        </a>
                      </div>
                    </div>
                    <div className="international-plus-icon">
                      <a href="#" className="my-auto">
                        <i className="fas fa-link fa-2x text-white" />
                      </a>
                    </div>
                  </div>
                  <div className="international-item">
                    <img
                      src="src\assets\img\explore-tour-4.jpg"
                      className="img-fluid w-100 rounded"
                      alt="Image"
                    />
                    <div className="international-content">
                      <div className="international-info">
                        <h5 className="text-white text-uppercase mb-2">
                          Japan
                        </h5>
                        <a href="#" className="btn-hover text-white me-4">
                          <i className="fas fa-map-marker-alt me-1" /> 8 Cities
                        </a>
                        <a href="#" className="btn-hover text-white">
                          <i className="fa fa-eye ms-2" />{" "}
                          <span>137+ Tour Places</span>
                        </a>
                      </div>
                    </div>
                    <div className="international-plus-icon">
                      <a href="#" className="my-auto">
                        <i className="fas fa-link fa-2x text-white" />
                      </a>
                    </div>
                  </div>
                  <div className="international-item">
                    <img
                      src="src\assets\img\explore-tour-5.jpg"
                      className="img-fluid w-100 rounded"
                      alt="Image"
                    />
                    <div className="international-content">
                      <div className="tour-offer bg-info">70% Off</div>
                      <div className="international-info">
                        <h5 className="text-white text-uppercase mb-2">
                          London
                        </h5>
                        <a href="#" className="btn-hover text-white me-4">
                          <i className="fas fa-map-marker-alt me-1" /> 17 Cities
                        </a>
                        <a href="#" className="btn-hover text-white">
                          <i className="fa fa-eye ms-2" />{" "}
                          <span>26+ Tour Places</span>
                        </a>
                      </div>
                    </div>
                    <div className="international-plus-icon">
                      <a href="#" className="my-auto">
                        <i className="fas fa-link fa-2x text-white" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Explore Tour Start */}
      {/* Packages Start */}
      <div className="container-fluid packages py-5">
        <div className="container py-5">
          <div
            className="mx-auto text-center mb-5"
            style={{ maxWidth: "900px" }}
          >
            <h5 className="section-title px-3">Packages</h5>
            <h1 className="mb-0">Awesome Packages</h1>
          </div>
          <div className="packages-carousel owl-carousel">
            <div className="packages-item">
              <div className="packages-img">
                <img
                  src="src\assets\img\packages-4.jpg"
                  className="img-fluid w-100 rounded-top"
                  alt="Image"
                />
                <div
                  className="packages-info d-flex border border-start-0 border-end-0 position-absolute"
                  style={{ width: "100%", bottom: 0, left: 0, zIndex: 5 }}
                >
                  <small className="flex-fill text-center border-end py-2">
                    <i className="fa fa-map-marker-alt me-2" />
                    Venice - Italy
                  </small>
                  <small className="flex-fill text-center border-end py-2">
                    <i className="fa fa-calendar-alt me-2" />3 days
                  </small>
                  <small className="flex-fill text-center py-2">
                    <i className="fa fa-user me-2" />2 Person
                  </small>
                </div>
                <div className="packages-price py-2 px-4">$349.00</div>
              </div>
              <div className="packages-content bg-light">
                <div className="p-4 pb-0">
                  <h5 className="mb-0">Venice - Italy</h5>
                  <small className="text-uppercase">Hotel Deals</small>
                  <div className="mb-3">
                    <small className="fa fa-star text-primary" />
                    <small className="fa fa-star text-primary" />
                    <small className="fa fa-star text-primary" />
                    <small className="fa fa-star text-primary" />
                    <small className="fa fa-star text-primary" />
                  </div>
                  <p className="mb-4">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Nesciunt nemo quia quae illum aperiam fugiat voluptatem
                    repellat
                  </p>
                </div>
                <div className="row bg-primary rounded-bottom mx-0">
                  <div className="col-6 text-start px-0">
                    <a href="#" className="btn-hover btn text-white py-2 px-4">
                      Read More
                    </a>
                  </div>
                  <div className="col-6 text-end px-0">
                    <a href="#" className="btn-hover btn text-white py-2 px-4">
                      Book Now
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="packages-item">
              <div className="packages-img">
                <img
                  src="src\assets\img\packages-2.jpg"
                  className="img-fluid w-100 rounded-top"
                  alt="Image"
                />
                <div
                  className="packages-info d-flex border border-start-0 border-end-0 position-absolute"
                  style={{ width: "100%", bottom: 0, left: 0, zIndex: 5 }}
                >
                  <small className="flex-fill text-center border-end py-2">
                    <i className="fa fa-map-marker-alt me-2" />
                    Venice - Italy
                  </small>
                  <small className="flex-fill text-center border-end py-2">
                    <i className="fa fa-calendar-alt me-2" />3 days
                  </small>
                  <small className="flex-fill text-center py-2">
                    <i className="fa fa-user me-2" />2 Person
                  </small>
                </div>
                <div className="packages-price py-2 px-4">$449.00</div>
              </div>
              <div className="packages-content bg-light">
                <div className="p-4 pb-0">
                  <h5 className="mb-0">The New California</h5>
                  <small className="text-uppercase">Hotel Deals</small>
                  <div className="mb-3">
                    <small className="fa fa-star text-primary" />
                    <small className="fa fa-star text-primary" />
                    <small className="fa fa-star text-primary" />
                    <small className="fa fa-star text-primary" />
                    <small className="fa fa-star text-primary" />
                  </div>
                  <p className="mb-4">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Nesciunt nemo quia quae illum aperiam fugiat voluptatem
                    repellat
                  </p>
                </div>
                <div className="row bg-primary rounded-bottom mx-0">
                  <div className="col-6 text-start px-0">
                    <a href="#" className="btn-hover btn text-white py-2 px-4">
                      Read More
                    </a>
                  </div>
                  <div className="col-6 text-end px-0">
                    <a href="#" className="btn-hover btn text-white py-2 px-4">
                      Book Now
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="packages-item">
              <div className="packages-img">
                <img
                  src="src\assets\img\packages-3.jpg"
                  className="img-fluid w-100 rounded-top"
                  alt="Image"
                />
                <div
                  className="packages-info d-flex border border-start-0 border-end-0 position-absolute"
                  style={{ width: "100%", bottom: 0, left: 0, zIndex: 5 }}
                >
                  <small className="flex-fill text-center border-end py-2">
                    <i className="fa fa-map-marker-alt me-2" />
                    Venice - Italy
                  </small>
                  <small className="flex-fill text-center border-end py-2">
                    <i className="fa fa-calendar-alt me-2" />3 days
                  </small>
                  <small className="flex-fill text-center py-2">
                    <i className="fa fa-user me-2" />2 Person
                  </small>
                </div>
                <div className="packages-price py-2 px-4">$549.00</div>
              </div>
              <div className="packages-content bg-light">
                <div className="p-4 pb-0">
                  <h5 className="mb-0">Discover Japan</h5>
                  <small className="text-uppercase">Hotel Deals</small>
                  <div className="mb-3">
                    <small className="fa fa-star text-primary" />
                    <small className="fa fa-star text-primary" />
                    <small className="fa fa-star text-primary" />
                    <small className="fa fa-star text-primary" />
                    <small className="fa fa-star text-primary" />
                  </div>
                  <p className="mb-4">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Nesciunt nemo quia quae illum aperiam fugiat voluptatem
                    repellat
                  </p>
                </div>
                <div className="row bg-primary rounded-bottom mx-0">
                  <div className="col-6 text-start px-0">
                    <a href="#" className="btn-hover btn text-white py-2 px-4">
                      Read More
                    </a>
                  </div>
                  <div className="col-6 text-end px-0">
                    <a href="#" className="btn-hover btn text-white py-2 px-4">
                      Book Now
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="packages-item">
              <div className="packages-img">
                <img
                  src="src\assets\img\packages-1.jpg"
                  className="img-fluid w-100 rounded-top"
                  alt="Image"
                />
                <div
                  className="packages-info d-flex border border-start-0 border-end-0 position-absolute"
                  style={{ width: "100%", bottom: 0, left: 0, zIndex: 5 }}
                >
                  <small className="flex-fill text-center border-end py-2">
                    <i className="fa fa-map-marker-alt me-2" />
                    Thayland
                  </small>
                  <small className="flex-fill text-center border-end py-2">
                    <i className="fa fa-calendar-alt me-2" />3 days
                  </small>
                  <small className="flex-fill text-center py-2">
                    <i className="fa fa-user me-2" />2 Person
                  </small>
                </div>
                <div className="packages-price py-2 px-4">$649.00</div>
              </div>
              <div className="packages-content bg-light">
                <div className="p-4 pb-0">
                  <h5 className="mb-0">Thayland Trip</h5>
                  <small className="text-uppercase">Hotel Deals</small>
                  <div className="mb-3">
                    <small className="fa fa-star text-primary" />
                    <small className="fa fa-star text-primary" />
                    <small className="fa fa-star text-primary" />
                    <small className="fa fa-star text-primary" />
                    <small className="fa fa-star text-primary" />
                  </div>
                  <p className="mb-4">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Nesciunt nemo quia quae illum aperiam fugiat voluptatem
                    repellat
                  </p>
                </div>
                <div className="row bg-primary rounded-bottom mx-0">
                  <div className="col-6 text-start px-0">
                    <a href="#" className="btn-hover btn text-white py-2 px-4">
                      Read More
                    </a>
                  </div>
                  <div className="col-6 text-end px-0">
                    <a href="#" className="btn-hover btn text-white py-2 px-4">
                      Book Now
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Packages End */}
      {/* Gallery Start */}
      <div className="container-fluid gallery py-5 my-5">
        <div className="mx-auto text-center mb-5" style={{ maxWidth: "900px" }}>
          <h5 className="section-title px-3">Our Gallery</h5>
          <h1 className="mb-4">Tourism &amp; Traveling Gallery.</h1>
          <p className="mb-0">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum
            tempore nam, architecto doloremque velit explicabo? Voluptate sunt
            eveniet fuga eligendi! Expedita laudantium fugiat corrupti eum cum
            repellat a laborum quasi.
          </p>
        </div>
        <div className="tab-class text-center">
          <ul className="nav nav-pills d-inline-flex justify-content-center mb-5">
            <li className="nav-item">
              <a
                className="d-flex mx-3 py-2 border border-primary bg-light rounded-pill active"
                data-bs-toggle="pill"
                href="#GalleryTab-1"
              >
                <span className="text-dark" style={{ width: "150px" }}>
                  All
                </span>
              </a>
            </li>
            <li className="nav-item">
              <a
                className="d-flex py-2 mx-3 border border-primary bg-light rounded-pill"
                data-bs-toggle="pill"
                href="#GalleryTab-2"
              >
                <span className="text-dark" style={{ width: "150px" }}>
                  World tour
                </span>
              </a>
            </li>
            <li className="nav-item">
              <a
                className="d-flex mx-3 py-2 border border-primary bg-light rounded-pill"
                data-bs-toggle="pill"
                href="#GalleryTab-3"
              >
                <span className="text-dark" style={{ width: "150px" }}>
                  Ocean Tour
                </span>
              </a>
            </li>
            <li className="nav-item">
              <a
                className="d-flex mx-3 py-2 border border-primary bg-light rounded-pill"
                data-bs-toggle="pill"
                href="#GalleryTab-4"
              >
                <span className="text-dark" style={{ width: "150px" }}>
                  Summer Tour
                </span>
              </a>
            </li>
            <li className="nav-item">
              <a
                className="d-flex mx-3 py-2 border border-primary bg-light rounded-pill"
                data-bs-toggle="pill"
                href="#GalleryTab-5"
              >
                <span className="text-dark" style={{ width: "150px" }}>
                  Sport Tour
                </span>
              </a>
            </li>
          </ul>
          <div className="tab-content">
            <div id="GalleryTab-1" className="tab-pane fade show p-0 active">
              <div className="row g-2">
                <div className="col-sm-6 col-md-6 col-lg-4 col-xl-2">
                  <div className="gallery-item h-100">
                    <img
                      src="src\assets\img\gallery-1.jpg"
                      className="img-fluid w-100 h-100 rounded"
                      alt="Image"
                    />
                    <div className="gallery-content">
                      <div className="gallery-info">
                        <h5 className="text-white text-uppercase mb-2">
                          World Tour
                        </h5>
                        <a href="#" className="btn-hover text-white">
                          View All Place{" "}
                          <i className="fa fa-arrow-right ms-2" />
                        </a>
                      </div>
                    </div>
                    <div className="gallery-plus-icon">
                      <a
                        href="src\assets\img\gallery-1.jpg"
                        data-lightbox="gallery-1"
                        className="my-auto"
                      >
                        <i className="fas fa-plus fa-2x text-white" />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6 col-md-6 col-lg-4 col-xl-3">
                  <div className="gallery-item h-100">
                    <img
                      src="src\assets\img\gallery-2.jpg"
                      className="img-fluid w-100 h-100 rounded"
                      alt="Image"
                    />
                    <div className="gallery-content">
                      <div className="gallery-info">
                        <h5 className="text-white text-uppercase mb-2">
                          World Tour
                        </h5>
                        <a href="#" className="btn-hover text-white">
                          View All Place{" "}
                          <i className="fa fa-arrow-right ms-2" />
                        </a>
                      </div>
                    </div>
                    <div className="gallery-plus-icon">
                      <a
                        href="src\assets\img\gallery-2.jpg"
                        data-lightbox="gallery-2"
                        className="my-auto"
                      >
                        <i className="fas fa-plus fa-2x text-white" />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6 col-md-6 col-lg-4 col-xl-2">
                  <div className="gallery-item h-100">
                    <img
                      src="src\assets\img\gallery-3.jpg"
                      className="img-fluid w-100 h-100 rounded"
                      alt="Image"
                    />
                    <div className="gallery-content">
                      <div className="gallery-info">
                        <h5 className="text-white text-uppercase mb-2">
                          World Tour
                        </h5>
                        <a href="#" className="btn-hover text-white">
                          View All Place{" "}
                          <i className="fa fa-arrow-right ms-2" />
                        </a>
                      </div>
                    </div>
                    <div className="gallery-plus-icon">
                      <a
                        href="src\assets\img\gallery-3.jpg"
                        data-lightbox="gallery-3"
                        className="my-auto"
                      >
                        <i className="fas fa-plus fa-2x text-white" />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6 col-md-6 col-lg-4 col-xl-3">
                  <div className="gallery-item h-100">
                    <img
                      src="src\assets\img\gallery-4.jpg"
                      className="img-fluid w-100 h-100 rounded"
                      alt="Image"
                    />
                    <div className="gallery-content">
                      <div className="gallery-info">
                        <h5 className="text-white text-uppercase mb-2">
                          World Tour
                        </h5>
                        <a href="#" className="btn-hover text-white">
                          View All Place{" "}
                          <i className="fa fa-arrow-right ms-2" />
                        </a>
                      </div>
                    </div>
                    <div className="gallery-plus-icon">
                      <a
                        href="src\assets\img\gallery-4.jpg"
                        data-lightbox="gallery-4"
                        className="my-auto"
                      >
                        <i className="fas fa-plus fa-2x text-white" />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6 col-md-6 col-lg-4 col-xl-2">
                  <div className="gallery-item h-100">
                    <img
                      src="src\assets\img\gallery-5.jpg"
                      className="img-fluid w-100 h-100 rounded"
                      alt="Image"
                    />
                    <div className="gallery-content">
                      <div className="gallery-info">
                        <h5 className="text-white text-uppercase mb-2">
                          World Tour
                        </h5>
                        <a href="#" className="btn-hover text-white">
                          View All Place{" "}
                          <i className="fa fa-arrow-right ms-2" />
                        </a>
                      </div>
                    </div>
                    <div className="gallery-plus-icon">
                      <a
                        href="src\assets\img\gallery-5.jpg"
                        data-lightbox="gallery-5"
                        className="my-auto"
                      >
                        <i className="fas fa-plus fa-2x text-white" />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6 col-md-6 col-lg-4 col-xl-2">
                  <div className="gallery-item h-100">
                    <img
                      src="src\assets\img\gallery-6.jpg"
                      className="img-fluid w-100 h-100 rounded"
                      alt="Image"
                    />
                    <div className="gallery-content">
                      <div className="gallery-info">
                        <h5 className="text-white text-uppercase mb-2">
                          World Tour
                        </h5>
                        <a href="#" className="btn-hover text-white">
                          View All Place{" "}
                          <i className="fa fa-arrow-right ms-2" />
                        </a>
                      </div>
                    </div>
                    <div className="gallery-plus-icon">
                      <a
                        href="src\assets\img\gallery-6.jpg"
                        data-lightbox="gallery-6"
                        className="my-auto"
                      >
                        <i className="fas fa-plus fa-2x text-white" />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6 col-md-6 col-lg-3 col-xl-3">
                  <div className="gallery-item h-100">
                    <img
                      src="src\assets\img\gallery-7.jpg"
                      className="img-fluid w-100 h-100 rounded"
                      alt="Image"
                    />
                    <div className="gallery-content">
                      <div className="gallery-info">
                        <h5 className="text-white text-uppercase mb-2">
                          World Tour
                        </h5>
                        <a href="#" className="btn-hover text-white">
                          View All Place{" "}
                          <i className="fa fa-arrow-right ms-2" />
                        </a>
                      </div>
                    </div>
                    <div className="gallery-plus-icon">
                      <a
                        href="src\assets\img\gallery-7.jpg"
                        data-lightbox="gallery-7"
                        className="my-auto"
                      >
                        <i className="fas fa-plus fa-2x text-white" />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6 col-md-6 col-lg-3 col-xl-2">
                  <div className="gallery-item h-100">
                    <img
                      src="src\assets\img\gallery-8.jpg"
                      className="img-fluid w-100 h-100 rounded"
                      alt="Image"
                    />
                    <div className="gallery-content">
                      <div className="gallery-info">
                        <h5 className="text-white text-uppercase mb-2">
                          World Tour
                        </h5>
                        <a href="#" className="btn-hover text-white">
                          View All Place{" "}
                          <i className="fa fa-arrow-right ms-2" />
                        </a>
                      </div>
                    </div>
                    <div className="gallery-plus-icon">
                      <a
                        href="src\assets\img\gallery-8.jpg"
                        data-lightbox="gallery-8"
                        className="my-auto"
                      >
                        <i className="fas fa-plus fa-2x text-white" />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6 col-md-6 col-lg-3 col-xl-3">
                  <div className="gallery-item h-100">
                    <img
                      src="src\assets\img\gallery-9.jpg"
                      className="img-fluid w-100 h-100 rounded"
                      alt="Image"
                    />
                    <div className="gallery-content">
                      <div className="gallery-info">
                        <h5 className="text-white text-uppercase mb-2">
                          World Tour
                        </h5>
                        <a href="#" className="btn-hover text-white">
                          View All Place{" "}
                          <i className="fa fa-arrow-right ms-2" />
                        </a>
                      </div>
                    </div>
                    <div className="gallery-plus-icon">
                      <a
                        href="src\assets\img\gallery-9.jpg"
                        data-lightbox="gallery-9"
                        className="my-auto"
                      >
                        <i className="fas fa-plus fa-2x text-white" />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6 col-md-6 col-lg-3 col-xl-2">
                  <div className="gallery-item h-100">
                    <img
                      src="src\assets\img\gallery-10.jpg"
                      className="img-fluid w-100 h-100 rounded"
                      alt="Image"
                    />
                    <div className="gallery-content">
                      <div className="gallery-info">
                        <h5 className="text-white text-uppercase mb-2">
                          World Tour
                        </h5>
                        <a href="#" className="btn-hover text-white">
                          View All Place{" "}
                          <i className="fa fa-arrow-right ms-2" />
                        </a>
                      </div>
                    </div>
                    <div className="gallery-plus-icon">
                      <a
                        href="src\assets\img\gallery-10.jpg"
                        data-lightbox="gallery-10"
                        className="my-auto"
                      >
                        <i className="fas fa-plus fa-2x text-white" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div id="GalleryTab-2" className="tab-pane fade show p-0">
              <div className="row g-2">
                <div className="col-sm-6 col-md-6 col-lg-4 col-xl-3">
                  <div className="gallery-item h-100">
                    <img
                      src="src\assets\img\gallery-2.jpg"
                      className="img-fluid w-100 h-100 rounded"
                      alt="Image"
                    />
                    <div className="gallery-content">
                      <div className="gallery-info">
                        <h5 className="text-white text-uppercase mb-2">
                          World Tour
                        </h5>
                        <a href="#" className="btn-hover text-white">
                          View All Place{" "}
                          <i className="fa fa-arrow-right ms-2" />
                        </a>
                      </div>
                    </div>
                    <div className="gallery-plus-icon">
                      <a
                        href="src\assets\img\gallery-2.jpg"
                        data-lightbox="gallery-2"
                        className="my-auto"
                      >
                        <i className="fas fa-plus fa-2x text-white" />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6 col-md-6 col-lg-4 col-xl-2">
                  <div className="gallery-item h-100">
                    <img
                      src="src\assets\img\gallery-3.jpg"
                      className="img-fluid w-100 h-100 rounded"
                      alt="Image"
                    />
                    <div className="gallery-content">
                      <div className="gallery-info">
                        <h5 className="text-white text-uppercase mb-2">
                          World Tour
                        </h5>
                        <a href="#" className="btn-hover text-white">
                          View All Place{" "}
                          <i className="fa fa-arrow-right ms-2" />
                        </a>
                      </div>
                    </div>
                    <div className="gallery-plus-icon">
                      <a
                        href="src\assets\img\gallery-3.jpg"
                        data-lightbox="gallery-3"
                        className="my-auto"
                      >
                        <i className="fas fa-plus fa-2x text-white" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div id="GalleryTab-3" className="tab-pane fade show p-0">
              <div className="row g-2">
                <div className="col-sm-6 col-md-6 col-lg-4 col-xl-3">
                  <div className="gallery-item h-100">
                    <img
                      src="src\assets\img\gallery-2.jpg"
                      className="img-fluid w-100 h-100 rounded"
                      alt="Image"
                    />
                    <div className="gallery-content">
                      <div className="gallery-info">
                        <h5 className="text-white text-uppercase mb-2">
                          World Tour
                        </h5>
                        <a href="#" className="btn-hover text-white">
                          View All Place{" "}
                          <i className="fa fa-arrow-right ms-2" />
                        </a>
                      </div>
                    </div>
                    <div className="gallery-plus-icon">
                      <a
                        href="src\assets\img\gallery-2.jpg"
                        data-lightbox="gallery-2"
                        className="my-auto"
                      >
                        <i className="fas fa-plus fa-2x text-white" />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6 col-md-6 col-lg-4 col-xl-2">
                  <div className="gallery-item h-100">
                    <img
                      src="src\assets\img\gallery-3.jpg"
                      className="img-fluid w-100 h-100 rounded"
                      alt="Image"
                    />
                    <div className="gallery-content">
                      <div className="gallery-info">
                        <h5 className="text-white text-uppercase mb-2">
                          World Tour
                        </h5>
                        <a href="#" className="btn-hover text-white">
                          View All Place{" "}
                          <i className="fa fa-arrow-right ms-2" />
                        </a>
                      </div>
                    </div>
                    <div className="gallery-plus-icon">
                      <a
                        href="src\assets\img\gallery-3.jpg"
                        data-lightbox="gallery-3"
                        className="my-auto"
                      >
                        <i className="fas fa-plus fa-2x text-white" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div id="GalleryTab-4" className="tab-pane fade show p-0">
              <div className="row g-2">
                <div className="col-sm-6 col-md-6 col-lg-4 col-xl-3">
                  <div className="gallery-item h-100">
                    <img
                      src="src\assets\img\gallery-2.jpg"
                      className="img-fluid w-100 h-100 rounded"
                      alt="Image"
                    />
                    <div className="gallery-content">
                      <div className="gallery-info">
                        <h5 className="text-white text-uppercase mb-2">
                          World Tour
                        </h5>
                        <a href="#" className="btn-hover text-white">
                          View All Place{" "}
                          <i className="fa fa-arrow-right ms-2" />
                        </a>
                      </div>
                    </div>
                    <div className="gallery-plus-icon">
                      <a
                        href="src\assets\img\gallery-2.jpg"
                        data-lightbox="gallery-2"
                        className="my-auto"
                      >
                        <i className="fas fa-plus fa-2x text-white" />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6 col-md-6 col-lg-4 col-xl-2">
                  <div className="gallery-item h-100">
                    <img
                      src="src\assets\img\gallery-3.jpg"
                      className="img-fluid w-100 h-100 rounded"
                      alt="Image"
                    />
                    <div className="gallery-content">
                      <div className="gallery-info">
                        <h5 className="text-white text-uppercase mb-2">
                          World Tour
                        </h5>
                        <a href="#" className="btn-hover text-white">
                          View All Place{" "}
                          <i className="fa fa-arrow-right ms-2" />
                        </a>
                      </div>
                    </div>
                    <div className="gallery-plus-icon">
                      <a
                        href="src\assets\img\gallery-3.jpg"
                        data-lightbox="gallery-3"
                        className="my-auto"
                      >
                        <i className="fas fa-plus fa-2x text-white" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div id="GalleryTab-5" className="tab-pane fade show p-0">
              <div className="row g-2">
                <div className="col-sm-6 col-md-6 col-lg-4 col-xl-3">
                  <div className="gallery-item h-100">
                    <img
                      src="src\assets\img\gallery-2.jpg"
                      className="img-fluid w-100 h-100 rounded"
                      alt="Image"
                    />
                    <div className="gallery-content">
                      <div className="gallery-info">
                        <h5 className="text-white text-uppercase mb-2">
                          World Tour
                        </h5>
                        <a href="#" className="btn-hover text-white">
                          View All Place{" "}
                          <i className="fa fa-arrow-right ms-2" />
                        </a>
                      </div>
                    </div>
                    <div className="gallery-plus-icon">
                      <a
                        href="src\assets\img\gallery-2.jpg"
                        data-lightbox="gallery-2"
                        className="my-auto"
                      >
                        <i className="fas fa-plus fa-2x text-white" />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6 col-md-6 col-lg-4 col-xl-2">
                  <div className="gallery-item h-100">
                    <img
                      src="src\assets\img\gallery-3.jpg"
                      className="img-fluid w-100 h-100 rounded"
                      alt="Image"
                    />
                    <div className="gallery-content">
                      <div className="gallery-info">
                        <h5 className="text-white text-uppercase mb-2">
                          World Tour
                        </h5>
                        <a href="#" className="btn-hover text-white">
                          View All Place{" "}
                          <i className="fa fa-arrow-right ms-2" />
                        </a>
                      </div>
                    </div>
                    <div className="gallery-plus-icon">
                      <a
                        href="src\assets\img\gallery-3.jpg"
                        data-lightbox="gallery-3"
                        className="my-auto"
                      >
                        <i className="fas fa-plus fa-2x text-white" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Gallery End */}
      {/* Tour Booking Start */}
      <div className="container-fluid booking py-5">
        <div className="container py-5">
          <div className="row g-5 align-items-center">
            <div className="col-lg-6">
              <h5 className="section-booking-title pe-3">Booking</h5>
              <h1 className="text-white mb-4">Online Booking</h1>
              <p className="text-white mb-4">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Aspernatur maxime ullam esse fuga blanditiis accusantium
                pariatur quis sapiente, veniam doloribus praesentium?
                Repudiandae iste voluptatem fugiat doloribus quasi quo iure
                officia.
              </p>
              <p className="text-white mb-4">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Aspernatur maxime ullam esse fuga blanditiis accusantium
                pariatur quis sapiente, veniam doloribus praesentium?
                Repudiandae iste voluptatem fugiat doloribus quasi quo iure
                officia.
              </p>
              <a
                href="#"
                className="btn btn-light text-primary rounded-pill py-3 px-5 mt-2"
              >
                Read More
              </a>
            </div>
            <div className="col-lg-6">
              <h1 className="text-white mb-3">Book A Tour Deals</h1>
              <p className="text-white mb-4">
                Get <span className="text-warning">50% Off</span> On Your First
                Adventure Trip With Travela. Get More Deal Offers Here.
              </p>
              <form>
                <div className="row g-3">
                  <div className="col-md-6">
                    <div className="form-floating">
                      <input
                        type="text"
                        className="form-control bg-white border-0"
                        id="name"
                        placeholder="Your Name"
                      />
                      <label htmlFor="name">Your Name</label>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-floating">
                      <input
                        type="email"
                        className="form-control bg-white border-0"
                        id="email"
                        placeholder="Your Email"
                      />
                      <label htmlFor="email">Your Email</label>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div
                      className="form-floating date"
                      id="date3"
                      data-target-input="nearest"
                    >
                      <input
                        type="text"
                        className="form-control bg-white border-0"
                        id="datetime"
                        placeholder="Date & Time"
                        data-target="#date3"
                        data-toggle="datetimepicker"
                      />
                      <label htmlFor="datetime">Date &amp; Time</label>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-floating">
                      <select
                        className="form-select bg-white border-0"
                        id="select1"
                      >
                        <option value={1}>Destination 1</option>
                        <option value={2}>Destination 2</option>
                        <option value={3}>Destination 3</option>
                      </select>
                      <label htmlFor="select1">Destination</label>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-floating">
                      <select
                        className="form-select bg-white border-0"
                        id="SelectPerson"
                      >
                        <option value={1}>Persons 1</option>
                        <option value={2}>Persons 2</option>
                        <option value={3}>Persons 3</option>
                      </select>
                      <label htmlFor="SelectPerson">Persons</label>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-floating">
                      <select
                        className="form-select bg-white border-0"
                        id="CategoriesSelect"
                      >
                        <option value={1}>Kids</option>
                        <option value={2}>1</option>
                        <option value={3}>2</option>
                        <option value={3}>3</option>
                      </select>
                      <label htmlFor="CategoriesSelect">Categories</label>
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="form-floating">
                      <textarea
                        className="form-control bg-white border-0"
                        placeholder="Special Request"
                        id="message"
                        style={{ height: "100px" }}
                        defaultValue={""}
                      />
                      <label htmlFor="message">Special Request</label>
                    </div>
                  </div>
                  <div className="col-12">
                    <button
                      className="btn btn-primary text-white w-100 py-3"
                      type="submit"
                    >
                      Book Now
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      {/* Tour Booking End */}
      {/* Travel Guide Start */}
      <div className="container-fluid guide py-5">
        <div className="container py-5">
          <div
            className="mx-auto text-center mb-5"
            style={{ maxWidth: "900px" }}
          >
            <h5 className="section-title px-3">Travel Guide</h5>
            <h1 className="mb-0">Meet Our Guide</h1>
          </div>
          <div className="row g-4">
            <div className="col-md-6 col-lg-3">
              <div className="guide-item">
                <div className="guide-img">
                  <div className="guide-img-efects">
                    <img
                      src="src\assets\img\guide-1.jpg"
                      className="img-fluid w-100 rounded-top"
                      alt="Image"
                    />
                  </div>
                  <div className="guide-icon rounded-pill p-2">
                    <a
                      className="btn btn-square btn-primary rounded-circle mx-1"
                      href
                    >
                      <i className="fab fa-facebook-f" />
                    </a>
                    <a
                      className="btn btn-square btn-primary rounded-circle mx-1"
                      href
                    >
                      <i className="fab fa-twitter" />
                    </a>
                    <a
                      className="btn btn-square btn-primary rounded-circle mx-1"
                      href
                    >
                      <i className="fab fa-instagram" />
                    </a>
                    <a
                      className="btn btn-square btn-primary rounded-circle mx-1"
                      href
                    >
                      <i className="fab fa-linkedin-in" />
                    </a>
                  </div>
                </div>
                <div className="guide-title text-center rounded-bottom p-4">
                  <div className="guide-title-inner">
                    <h4 className="mt-3">Full Name</h4>
                    <p className="mb-0">Designation</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-3">
              <div className="guide-item">
                <div className="guide-img">
                  <div className="guide-img-efects">
                    <img
                      src="src\assets\img\guide-2.jpg"
                      className="img-fluid w-100 rounded-top"
                      alt="Image"
                    />
                  </div>
                  <div className="guide-icon rounded-pill p-2">
                    <a
                      className="btn btn-square btn-primary rounded-circle mx-1"
                      href
                    >
                      <i className="fab fa-facebook-f" />
                    </a>
                    <a
                      className="btn btn-square btn-primary rounded-circle mx-1"
                      href
                    >
                      <i className="fab fa-twitter" />
                    </a>
                    <a
                      className="btn btn-square btn-primary rounded-circle mx-1"
                      href
                    >
                      <i className="fab fa-instagram" />
                    </a>
                    <a
                      className="btn btn-square btn-primary rounded-circle mx-1"
                      href
                    >
                      <i className="fab fa-linkedin-in" />
                    </a>
                  </div>
                </div>
                <div className="guide-title text-center rounded-bottom p-4">
                  <div className="guide-title-inner">
                    <h4 className="mt-3">Full Name</h4>
                    <p className="mb-0">Designation</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-3">
              <div className="guide-item">
                <div className="guide-img">
                  <div className="guide-img-efects">
                    <img
                      src="src\assets\img\guide-3.jpg"
                      className="img-fluid w-100 rounded-top"
                      alt="Image"
                    />
                  </div>
                  <div className="guide-icon rounded-pill p-2">
                    <a
                      className="btn btn-square btn-primary rounded-circle mx-1"
                      href
                    >
                      <i className="fab fa-facebook-f" />
                    </a>
                    <a
                      className="btn btn-square btn-primary rounded-circle mx-1"
                      href
                    >
                      <i className="fab fa-twitter" />
                    </a>
                    <a
                      className="btn btn-square btn-primary rounded-circle mx-1"
                      href
                    >
                      <i className="fab fa-instagram" />
                    </a>
                    <a
                      className="btn btn-square btn-primary rounded-circle mx-1"
                      href
                    >
                      <i className="fab fa-linkedin-in" />
                    </a>
                  </div>
                </div>
                <div className="guide-title text-center rounded-bottom p-4">
                  <div className="guide-title-inner">
                    <h4 className="mt-3">Full Name</h4>
                    <p className="mb-0">Designation</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-3">
              <div className="guide-item">
                <div className="guide-img">
                  <div className="guide-img-efects">
                    <img
                      src="src\assets\img\guide-4.jpg"
                      className="img-fluid w-100 rounded-top"
                      alt="Image"
                    />
                  </div>
                  <div className="guide-icon rounded-pill p-2">
                    <a
                      className="btn btn-square btn-primary rounded-circle mx-1"
                      href
                    >
                      <i className="fab fa-facebook-f" />
                    </a>
                    <a
                      className="btn btn-square btn-primary rounded-circle mx-1"
                      href
                    >
                      <i className="fab fa-twitter" />
                    </a>
                    <a
                      className="btn btn-square btn-primary rounded-circle mx-1"
                      href
                    >
                      <i className="fab fa-instagram" />
                    </a>
                    <a
                      className="btn btn-square btn-primary rounded-circle mx-1"
                      href
                    >
                      <i className="fab fa-linkedin-in" />
                    </a>
                  </div>
                </div>
                <div className="guide-title text-center rounded-bottom p-4">
                  <div className="guide-title-inner">
                    <h4 className="mt-3">Full Name</h4>
                    <p className="mb-0">Designation</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Travel Guide End */}
      {/* Blog Start */}
      <div className="container-fluid blog py-5">
        <div className="container py-5">
          <div
            className="mx-auto text-center mb-5"
            style={{ maxWidth: "900px" }}
          >
            <h5 className="section-title px-3">Our Blog</h5>
            <h1 className="mb-4">Popular Travel Blogs</h1>
            <p className="mb-0">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti
              deserunt tenetur sapiente atque. Magni non explicabo beatae sit,
              vel reiciendis consectetur numquam id similique sunt error
              obcaecati ducimus officia maiores.
            </p>
          </div>
          <div className="row g-4 justify-content-center">
            <div className="col-lg-4 col-md-6">
              <div className="blog-item">
                <div className="blog-img">
                  <div className="blog-img-inner">
                    <img
                      className="img-fluid w-100 rounded-top"
                      src="src\assets\img\blog-1.jpg"
                      alt="Image"
                    />
                    <div className="blog-icon">
                      <a href="#" className="my-auto">
                        <i className="fas fa-link fa-2x text-white" />
                      </a>
                    </div>
                  </div>
                  <div className="blog-info d-flex align-items-center border border-start-0 border-end-0">
                    <small className="flex-fill text-center border-end py-2">
                      <i className="fa fa-calendar-alt text-primary me-2" />
                      28 Jan 2050
                    </small>
                    <a
                      href="#"
                      className="btn-hover flex-fill text-center text-white border-end py-2"
                    >
                      <i className="fa fa-thumbs-up text-primary me-2" />
                      1.7K
                    </a>
                    <a
                      href="#"
                      className="btn-hover flex-fill text-center text-white py-2"
                    >
                      <i className="fa fa-comments text-primary me-2" />
                      1K
                    </a>
                  </div>
                </div>
                <div className="blog-content border border-top-0 rounded-bottom p-4">
                  <p className="mb-3">Posted By: Royal Hamblin </p>
                  <a href="#" className="h4">
                    Adventures Trip
                  </a>
                  <p className="my-3">
                    Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit
                    diam amet diam eos
                  </p>
                  <a
                    href="#"
                    className="btn btn-primary rounded-pill py-2 px-4"
                  >
                    Read More
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="blog-item">
                <div className="blog-img">
                  <div className="blog-img-inner">
                    <img
                      className="img-fluid w-100 rounded-top"
                      src="src\assets\img\blog-2.jpg"
                      alt="Image"
                    />
                    <div className="blog-icon">
                      <a href="#" className="my-auto">
                        <i className="fas fa-link fa-2x text-white" />
                      </a>
                    </div>
                  </div>
                  <div className="blog-info d-flex align-items-center border border-start-0 border-end-0">
                    <small className="flex-fill text-center border-end py-2">
                      <i className="fa fa-calendar-alt text-primary me-2" />
                      28 Jan 2050
                    </small>
                    <a
                      href="#"
                      className="btn-hover flex-fill text-center text-white border-end py-2"
                    >
                      <i className="fa fa-thumbs-up text-primary me-2" />
                      1.7K
                    </a>
                    <a
                      href="#"
                      className="btn-hover flex-fill text-center text-white py-2"
                    >
                      <i className="fa fa-comments text-primary me-2" />
                      1K
                    </a>
                  </div>
                </div>
                <div className="blog-content border border-top-0 rounded-bottom p-4">
                  <p className="mb-3">Posted By: Royal Hamblin </p>
                  <a href="#" className="h4">
                    Adventures Trip
                  </a>
                  <p className="my-3">
                    Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit
                    diam amet diam eos
                  </p>
                  <a
                    href="#"
                    className="btn btn-primary rounded-pill py-2 px-4"
                  >
                    Read More
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="blog-item">
                <div className="blog-img">
                  <div className="blog-img-inner">
                    <img
                      className="img-fluid w-100 rounded-top"
                      src="src\assets\img\blog-3.jpg"
                      alt="Image"
                    />
                    <div className="blog-icon">
                      <a href="#" className="my-auto">
                        <i className="fas fa-link fa-2x text-white" />
                      </a>
                    </div>
                  </div>
                  <div className="blog-info d-flex align-items-center border border-start-0 border-end-0">
                    <small className="flex-fill text-center border-end py-2">
                      <i className="fa fa-calendar-alt text-primary me-2" />
                      28 Jan 2050
                    </small>
                    <a
                      href="#"
                      className="btn-hover flex-fill text-center text-white border-end py-2"
                    >
                      <i className="fa fa-thumbs-up text-primary me-2" />
                      1.7K
                    </a>
                    <a
                      href="#"
                      className="btn-hover flex-fill text-center text-white py-2"
                    >
                      <i className="fa fa-comments text-primary me-2" />
                      1K
                    </a>
                  </div>
                </div>
                <div className="blog-content border border-top-0 rounded-bottom p-4">
                  <p className="mb-3">Posted By: Royal Hamblin </p>
                  <a href="#" className="h4">
                    Adventures Trip
                  </a>
                  <p className="my-3">
                    Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit
                    diam amet diam eos
                  </p>
                  <a
                    href="#"
                    className="btn btn-primary rounded-pill py-2 px-4"
                  >
                    Read More
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Blog End */}
      {/* Testimonial Start */}
      <div className="container-fluid testimonial py-5">
        <div className="container py-5">
          <div
            className="mx-auto text-center mb-5"
            style={{ maxWidth: "900px" }}
          >
            <h5 className="section-title px-3">Testimonial</h5>
            <h1 className="mb-0">Our Clients Say!!!</h1>
          </div>
          <div className="testimonial-carousel owl-carousel">
            <div className="testimonial-item text-center rounded pb-4">
              <div className="testimonial-comment bg-light rounded p-4">
                <p className="text-center mb-5">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis
                  nostrum cupiditate, eligendi repellendus saepe illum earum
                  architecto dicta quisquam quasi porro officiis. Vero
                  reiciendis,
                </p>
              </div>
              <div className="testimonial-img p-1">
                <img
                  src="src\assets\img\testimonial-1.jpg"
                  className="img-fluid rounded-circle"
                  alt="Image"
                />
              </div>
              <div style={{ marginTop: "-35px" }}>
                <h5 className="mb-0">John Abraham</h5>
                <p className="mb-0">New York, USA</p>
                <div className="d-flex justify-content-center">
                  <i className="fas fa-star text-primary" />
                  <i className="fas fa-star text-primary" />
                  <i className="fas fa-star text-primary" />
                  <i className="fas fa-star text-primary" />
                  <i className="fas fa-star text-primary" />
                </div>
              </div>
            </div>
            <div className="testimonial-item text-center rounded pb-4">
              <div className="testimonial-comment bg-light rounded p-4">
                <p className="text-center mb-5">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis
                  nostrum cupiditate, eligendi repellendus saepe illum earum
                  architecto dicta quisquam quasi porro officiis. Vero
                  reiciendis,
                </p>
              </div>
              <div className="testimonial-img p-1">
                <img
                  src="src\assets\img\testimonial-2.jpg"
                  className="img-fluid rounded-circle"
                  alt="Image"
                />
              </div>
              <div style={{ marginTop: "-35px" }}>
                <h5 className="mb-0">John Abraham</h5>
                <p className="mb-0">New York, USA</p>
                <div className="d-flex justify-content-center">
                  <i className="fas fa-star text-primary" />
                  <i className="fas fa-star text-primary" />
                  <i className="fas fa-star text-primary" />
                  <i className="fas fa-star text-primary" />
                  <i className="fas fa-star text-primary" />
                </div>
              </div>
            </div>
            <div className="testimonial-item text-center rounded pb-4">
              <div className="testimonial-comment bg-light rounded p-4">
                <p className="text-center mb-5">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis
                  nostrum cupiditate, eligendi repellendus saepe illum earum
                  architecto dicta quisquam quasi porro officiis. Vero
                  reiciendis,
                </p>
              </div>
              <div className="testimonial-img p-1">
                <img
                  src="src\assets\img\testimonial-3.jpg"
                  className="img-fluid rounded-circle"
                  alt="Image"
                />
              </div>
              <div style={{ marginTop: "-35px" }}>
                <h5 className="mb-0">John Abraham</h5>
                <p className="mb-0">New York, USA</p>
                <div className="d-flex justify-content-center">
                  <i className="fas fa-star text-primary" />
                  <i className="fas fa-star text-primary" />
                  <i className="fas fa-star text-primary" />
                  <i className="fas fa-star text-primary" />
                  <i className="fas fa-star text-primary" />
                </div>
              </div>
            </div>
            <div className="testimonial-item text-center rounded pb-4">
              <div className="testimonial-comment bg-light rounded p-4">
                <p className="text-center mb-5">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis
                  nostrum cupiditate, eligendi repellendus saepe illum earum
                  architecto dicta quisquam quasi porro officiis. Vero
                  reiciendis,
                </p>
              </div>
              <div className="testimonial-img p-1">
                <img
                  src="src\assets\img\testimonial-4.jpg"
                  className="img-fluid rounded-circle"
                  alt="Image"
                />
              </div>
              <div style={{ marginTop: "-35px" }}>
                <h5 className="mb-0">John Abraham</h5>
                <p className="mb-0">New York, USA</p>
                <div className="d-flex justify-content-center">
                  <i className="fas fa-star text-primary" />
                  <i className="fas fa-star text-primary" />
                  <i className="fas fa-star text-primary" />
                  <i className="fas fa-star text-primary" />
                  <i className="fas fa-star text-primary" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Testimonial End */}
      {/* Subscribe Start */}
      <div className="container-fluid subscribe py-5">
        <div className="container text-center py-5">
          <div className="mx-auto text-center" style={{ maxWidth: "900px" }}>
            <h5 className="subscribe-title px-3">Subscribe</h5>
            <h1 className="text-white mb-4">Our Newsletter</h1>
            <p className="text-white mb-5">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum
              tempore nam, architecto doloremque velit explicabo? Voluptate sunt
              eveniet fuga eligendi! Expedita laudantium fugiat corrupti eum cum
              repellat a laborum quasi.
            </p>
            <div className="position-relative mx-auto">
              <input
                className="form-control border-primary rounded-pill w-100 py-3 ps-4 pe-5"
                type="text"
                placeholder="Your email"
              />
              <button
                type="button"
                className="btn btn-primary rounded-pill position-absolute top-0 end-0 py-2 px-4 mt-2 me-2"
              >
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* Subscribe End */}
      {/* Footer Start */}
      <div className="container-fluid footer py-5">
        <div className="container py-5">
          <div className="row g-5">
            <div className="col-md-6 col-lg-6 col-xl-3">
              <div className="footer-item d-flex flex-column">
                <h4 className="mb-4 text-white">Get In Touch</h4>
                <a href>
                  <i className="fas fa-home me-2" /> 123 Street, New York, USA
                </a>
                <a href>
                  <i className="fas fa-envelope me-2" /> info@example.com
                </a>
                <a href>
                  <i className="fas fa-phone me-2" /> +012 345 67890
                </a>
                <a href className="mb-3">
                  <i className="fas fa-print me-2" /> +012 345 67890
                </a>
                <div className="d-flex align-items-center">
                  <i className="fas fa-share fa-2x text-white me-2" />
                  <a
                    className="btn-square btn btn-primary rounded-circle mx-1"
                    href
                  >
                    <i className="fab fa-facebook-f" />
                  </a>
                  <a
                    className="btn-square btn btn-primary rounded-circle mx-1"
                    href
                  >
                    <i className="fab fa-twitter" />
                  </a>
                  <a
                    className="btn-square btn btn-primary rounded-circle mx-1"
                    href
                  >
                    <i className="fab fa-instagram" />
                  </a>
                  <a
                    className="btn-square btn btn-primary rounded-circle mx-1"
                    href
                  >
                    <i className="fab fa-linkedin-in" />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-6 col-xl-3">
              <div className="footer-item d-flex flex-column">
                <h4 className="mb-4 text-white">Company</h4>
                <a href>
                  <i className="fas fa-angle-right me-2" /> About
                </a>
                <a href>
                  <i className="fas fa-angle-right me-2" /> Careers
                </a>
                <a href>
                  <i className="fas fa-angle-right me-2" /> Blog
                </a>
                <a href>
                  <i className="fas fa-angle-right me-2" /> Press
                </a>
                <a href>
                  <i className="fas fa-angle-right me-2" /> Gift Cards
                </a>
                <a href>
                  <i className="fas fa-angle-right me-2" /> Magazine
                </a>
              </div>
            </div>
            <div className="col-md-6 col-lg-6 col-xl-3">
              <div className="footer-item d-flex flex-column">
                <h4 className="mb-4 text-white">Support</h4>
                <a href>
                  <i className="fas fa-angle-right me-2" /> Contact
                </a>
                <a href>
                  <i className="fas fa-angle-right me-2" /> Legal Notice
                </a>
                <a href>
                  <i className="fas fa-angle-right me-2" /> Privacy Policy
                </a>
                <a href>
                  <i className="fas fa-angle-right me-2" /> Terms and Conditions
                </a>
                <a href>
                  <i className="fas fa-angle-right me-2" /> Sitemap
                </a>
                <a href>
                  <i className="fas fa-angle-right me-2" /> Cookie policy
                </a>
              </div>
            </div>
            <div className="col-md-6 col-lg-6 col-xl-3">
              <div className="footer-item">
                <div className="row gy-3 gx-2 mb-4">
                  <div className="col-xl-6">
                    <form>
                      <div className="form-floating">
                        <select
                          className="form-select bg-dark border"
                          id="select1"
                        >
                          <option value={1}>Arabic</option>
                          <option value={2}>German</option>
                          <option value={3}>Greek</option>
                          <option value={3}>New York</option>
                        </select>
                        <label htmlFor="select1">English</label>
                      </div>
                    </form>
                  </div>
                  <div className="col-xl-6">
                    <form>
                      <div className="form-floating">
                        <select
                          className="form-select bg-dark border"
                          id="select1"
                        >
                          <option value={1}>USD</option>
                          <option value={2}>EUR</option>
                          <option value={3}>INR</option>
                          <option value={3}>GBP</option>
                        </select>
                        <label htmlFor="select1">$</label>
                      </div>
                    </form>
                  </div>
                </div>
                <h4 className="text-white mb-3">Payments</h4>
                <div className="footer-bank-card">
                  <a href="#" className="text-white me-2">
                    <i className="fab fa-cc-amex fa-2x" />
                  </a>
                  <a href="#" className="text-white me-2">
                    <i className="fab fa-cc-visa fa-2x" />
                  </a>
                  <a href="#" className="text-white me-2">
                    <i className="fas fa-credit-card fa-2x" />
                  </a>
                  <a href="#" className="text-white me-2">
                    <i className="fab fa-cc-mastercard fa-2x" />
                  </a>
                  <a href="#" className="text-white me-2">
                    <i className="fab fa-cc-paypal fa-2x" />
                  </a>
                  <a href="#" className="text-white">
                    <i className="fab fa-cc-discover fa-2x" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Footer End */}
      {/* Copyright Start */}
      <div className="container-fluid copyright text-body py-4">
        <div className="container">
          <div className="row g-4 align-items-center">
            <div className="col-md-6 text-center text-md-end mb-md-0">
              <i className="fas fa-copyright me-2" />
              <a className="text-white" href="#">
                Your Site Name
              </a>
              , All right reserved.
            </div>
            <div className="col-md-6 text-center text-md-start">
              {/*/*** This template is free as long as you keep the below author’s credit link/attribution link/backlink. *** /*/}
              {/*/*** If you'd like to use the template without the below author’s credit link/attribution link/backlink, *** /*/}
              {/*/*** you can purchase the Credit Removal License from "https://htmlcodex.com/credit-removal". *** /*/}
              Designed By{" "}
              <a className="text-white" href="https://htmlcodex.com">
                HTML Codex
              </a>{" "}
              Distributed By <a href="https://themewagon.com">ThemeWagon</a>
            </div>
          </div>
        </div>
      </div>
      {/* Copyright End */}
      {/* Back to Top */}
      <a
        href="#"
        className="btn btn-primary btn-primary-outline-0 btn-md-square back-to-top"
      >
        <i className="fa fa-arrow-up" />
      </a>
      {/* JavaScript Libraries */}
      {/* Template Javascript */}
    </div>
  );
};

export default Home;
