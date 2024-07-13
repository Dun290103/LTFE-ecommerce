import React from "react";

const AboutPage = () => {
  return (
    <>
      <div className="container my-3 py-3">
        <h1 className="text-center">Hướng dẫn mua hàng  💵</h1>
        <hr />
        <div className="lead text-start" style={{
          display: "flex",
          flexDirection: "row"
        }}><p className="fw-bold">B1</p><p className="context">: Nhấp vào  <b>Products</b> trên thanh điều hướng hoặc nhấp vào  <b>SHOP NOW</b> </p></div>
        <img src="./assets/HOW/HD1.png" width={600} height={300} />

        <div className="lead text-start" style={{
          display: "flex",
          flexDirection: "row"
        }}><p className="fw-bold">B2</p><p className="context">: Lựa chọn sản phẩm mình muốn</p> Lúc này trang web sẽ điều hướng đến trang chi tiết sản phẩm</div>
        <img src="./assets/HOW/HD2.png" width={600} height={300} />

        <div className="lead text-start" style={{
          display: "flex",
          flexDirection: "row"
        }}><p className="fw-bold">B3</p><p className="context">: Nhấp vào <b>Add to card</b> để thêm sản phẩm vào giỏ hàng </p></div>
        <img src="./assets/HOW/HD3.png" width={600} height={300} />

        <div className="lead text-start" style={{
          display: "flex",
          flexDirection: "row"
        }}><p className="fw-bold">B4</p><p className="context">: Nhấp vào <b>Go to cart</b> (hoặc <b>Cart</b>) để xem giỏ hàng</p></div>
        <img src="./assets/HOW/HD4.png" width={600} height={300} />

        <div className="lead text-start" style={{
          display: "flex",
          flexDirection: "row"
        }}><p className="fw-bold">B5</p>: Lúc này bạn có thể kiểm tra số lượng, tổng tiền trong giỏ hàng</div>
        <img src="./assets/HOW/HD5.png" width={600} height={300} />

        <h2 className="text-center py-4">Our Products</h2>
        <div className="row">
          <div className="col-md-3 col-sm-6 mb-3 px-3">
            <div className="card h-100">
              <img
                className="card-img-top img-fluid"
                src="https://images.pexels.com/photos/298863/pexels-photo-298863.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt=""
                height={160}
              />
              <div className="card-body">
                <h5 className="card-title text-center">Mens's Clothing</h5>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-sm-6 mb-3 px-3">
            <div className="card h-100">
              <img
                className="card-img-top img-fluid"
                src="https://images.pexels.com/photos/7679720/pexels-photo-7679720.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt=""
                height={160}
              />
              <div className="card-body">
                <h5 className="card-title text-center">Women's Clothing</h5>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-sm-6 mb-3 px-3">
            <div className="card h-100">
              <img
                className="card-img-top img-fluid"
                src="https://images.pexels.com/photos/1927259/pexels-photo-1927259.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt=""
                height={160}
              />
              <div className="card-body">
                <h5 className="card-title text-center">Jewelery</h5>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-sm-6 mb-3 px-3">
            <div className="card h-100">
              <img
                className="card-img-top img-fluid"
                src="https://images.pexels.com/photos/356056/pexels-photo-356056.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt=""
                height={160}
              />
              <div className="card-body">
                <h5 className="card-title text-center">Electronics</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutPage;
