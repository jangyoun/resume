import { Table, Tag, List, Typography, Descriptions } from "antd";
import { CloseOutlined, SmileFilled } from "@ant-design/icons";
import React, { useState, useEffect } from 'react';

import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';

import { Util } from "../../util/Util";
import * as INFO from "../../info/CONST_INFO_ARR";

interface IPopupCompanyProps {
  visible: boolean;
  index: number;
  onClosed: () => void;
}

export const PopupCompany: React.FunctionComponent<IPopupCompanyProps> = (props) => {

  const { visible, index, onClosed } = props;
  const [swiper, setSwiper] = useState<any>(null);

  useEffect(() => {
    console.log(index);
    swiper?.slideTo(index)
  }, [index]);

  return (
    <>
      <div style={{ display: props.visible ? "block" : "none", position: "fixed", zIndex: 100, left: 0, top: 0, width: "100%", height: "100%", backgroundColor: "rgba(0,0,0,0.3)" }}>
        <div style={{ display: "flex", flexDirection: "column", height: "100%", alignItems: "center" }}>
          <div style={{ height: 20 }} />
          <div style={{ width: '100%', display: "flex", color: "#fff", fontSize: 24, fontWeight: "bold", textAlign: "center" }}>
            <div style={{ width: 100 }} />
            <span style={{ flex: 1 }}>Company</span>
            <div
              style={{ width: 50, cursor: 'pointer' }}
              onClick={(e) => {
                onClosed();
              }}
            >
              <CloseOutlined />
            </div>
            <div style={{ width: 50 }} />
          </div>
          <div style={{ width: 'calc(100% - 100px)', height: 1, backgroundColor: "rgba(255,255,255)" }} />
          <div style={{ height: 20 }} />
          <Swiper
            onSwiper={setSwiper}
            initialSlide={index}
            style={{ flex: 1, width: "100%", height: '100%' }}
            slidesPerView={Util.isMobile() ? 1.2 : 2}
            spaceBetween={Util.isMobile() ? 10 : 30}
            centeredSlides={true}
            pagination={{
              clickable: true,
            }}
          // onSwiper={(swiper) => console.log("onSwiper", swiper)}
          // onSlideChange={(e) => console.log("onSlideChange", e.activeIndex)}
          >
          </Swiper>

          <div style={{ height: Util.isMobile() ? 20 : 50 }} />
        </div>
      </div>
    </>
  );
};
