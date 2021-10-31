import React, { Component } from "react";

class HomePageContent extends Component {
  render() {
    return (
      <>
        <section className="container">
          <div className="row">
            <div className="col-12 col-md-6">
              <div className="mt-5">
                <h2
                  className=" font-weight-bolder mb-0 text-uppercase"
                  style={{ fontWeight: 700 }}
                >
                  Thẻ cá nhân thông minh SPACE
                </h2>
                <span className="font-weight-bold">
                  Xu hướng kết nối chuyên nghiệp hiện đại
                </span>
                <p className="mt-3 textDescription">
                  Chạm thẻ Space vào điện thoại để chia sẻ thông tin, giảm thời
                  gian trao đổi các mạng xã hội như Facebook, Instagram, Zalo,
                  Số điện thoại, Email và thông tin liên lạc
                </p>
              </div>
            </div>
            <div className="col-12 col-md-6 text-center">
              <img
                className="w-75"
                src={process.env.PUBLIC_URL + "/img/homepage1.png"}
                alt=""
              />
            </div>
          </div>
        </section>
        <section className="container">
          <div className="row">
            <div className="col-12 col-md-6 text-center">
              <img
                className="w-75"
                src={process.env.PUBLIC_URL + "/img/homepage2.png"}
                alt=""
              />
            </div>
            <div className="col-12 col-md-6">
              <div className="mt-5">
                <h2
                  className=" font-weight-bolder mb-0 text-uppercase"
                  style={{ fontWeight: 700 }}
                >
                  Bạn có thể chia sẻ những gì ?
                </h2>
                <p className="mt-3 textDescription">
                  "Một chạm để chia sẻ, một chạm để kết nối", Card visit điện tử
                  SPACE dần thay thế Card visit truyền thống vì những tính năng
                  ưu việt mà nó mang lại. Card Visit điện tử SPACE iúp bạn chia
                  sẻ thông tin liên lạc cơ bản chỉ với 1 chạm để chia sẻ từ số
                  điện thoại, email cho đến các nền tảng mạng xã hội như
                  Facebook, Zalo, Instagram, Tiktok,...và nhiều hơn nữa. Với
                  tính năng đặc biệt, số điện thoại và Email của bạn sẽ được lưu
                  vào danh bạ của đối tác chỉ với 1 lần chạm.
                </p>
              </div>
            </div>
          </div>
        </section>
      </>
    );
  }
}

export default HomePageContent;
