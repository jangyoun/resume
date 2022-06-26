import { Table, Tag, List, Typography, Image } from "antd";
import { CloseOutlined, SmileFilled } from "@ant-design/icons";
import { Swiper, SwiperSlide } from "swiper/react";
import React from "react";

import * as CONST from "../ConstHome";

function PopupCompany(props) {
  return (
    <>
      <div style={{ display: props.visible ? "block" : "none", position: "fixed", zIndex: 100, left: 0, top: 0, width: "100%", height: "100%", backgroundColor: "rgba(0,0,0,0.4)" }}>
        <div style={{ display: "flex", flexDirection: "column", height: "100%", alignItems: "center" }}>
          <div style={{ height: 50 }} />
          <div style={{ width: 500, display: "flex", color: "#fff", fontSize: 24, fontWeight: "bold", textAlign: "center" }}>
            <div style={{ width: 50 }} />
            <span style={{ flex: 1 }}>Company</span>
            <div
              style={{ width: 50 }}
              onClick={(e) => {
                console.log("onCancel");
                this.setState({ visible: false, current: 0 });
              }}
            >
              <CloseOutlined />
            </div>
          </div>
          <div style={{ width: 500, height: 1, backgroundColor: "rgba(255,255,255,0.2)" }} />
          <div style={{ height: 50 }} />
          <Swiper
            initialSlide={props.current}
            style={{ flex: 1, width: "100%" }}
            slidesPerView={3}
            spaceBetween={30}
            centeredSlides={true}
            pagination={{
              clickable: true,
            }}
            onSwiper={(swiper) => console.log("onSwiper", swiper)}
            onSlideChange={(e) => console.log("onSlideChange", e.activeIndex)}
          >
            {CONST.COMPANY_ARR.map((item) => (
              <SwiperSlide key={item.id}>
                <div style={{ height: "100%", display: "flex", flexDirection: "column", backgroundColor: "#fff", borderRadius: "10px 10px 0px 0px" }}>
                  <div style={{ width: "100%", padding: 5, fontSize: 16, fontWeight: "bold", textAlign: "center" }}>{item.name}</div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          <div style={{ height: 100 }} />
        </div>
      </div>
    </>
  );
}

export default PopupCompany;
