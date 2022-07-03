import { Table, Tag, List, Typography, Descriptions } from "antd";
import { CloseOutlined, SmileFilled } from "@ant-design/icons";
import React, { useState, useEffect } from 'react';

import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';

import { Util } from "../../util/Util";
import * as INFO from "../../info/InfoHome";

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
          <div style={{ height: 50 }} />
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
          <div style={{ height: 50 }} />
          <Swiper
            onSwiper={setSwiper}
            initialSlide={index}
            style={{ flex: 1, width: "100%", height: '100%' }}
            slidesPerView={Util.isMobile() ? 1.5 : 2}
            spaceBetween={20}
            centeredSlides={true}
            pagination={{
              clickable: true,
            }}
          // onSwiper={(swiper) => console.log("onSwiper", swiper)}
          // onSlideChange={(e) => console.log("onSlideChange", e.activeIndex)}
          >
            {INFO.COMPANY_ARR.map((item) => (
              <SwiperSlide key={item.id}>
                <div style={{ width: "100%", display: "flex", flexDirection: "column", backgroundColor: "#fff", borderRadius: "10px 10px 0px 0px" }}>
                  <div style={{ width: "100%", padding: 5, fontSize: 16, fontWeight: "bold", textAlign: "center" }}>{item.name}</div>
                  <div style={{ width: "100%", height: 100, backgroundColor: '#ccc' }} />
                  <div>
                    <Descriptions bordered size="small" column={1}>
                      <Descriptions.Item label="From ~ To">{item.to.diff(item.from, "months")}M ({item.from.format("YYYY.MM")} ~ {item.now ? "" : item.to.format("YYYY.MM")})</Descriptions.Item>
                      <Descriptions.Item label="Position">{item.position}</Descriptions.Item>
                      <Descriptions.Item label="Description" span={1}>
                        {item.desc.map((desc) => <>· {desc}<br /></>)}
                      </Descriptions.Item>
                    </Descriptions>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          <div style={{ height: 100 }} />
        </div>
      </div>
    </>
  );
};
