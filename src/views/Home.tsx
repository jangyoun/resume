import React, { useState, useEffect } from "react";
import { Table, Tag, Select, Typography, Image } from "antd";
import { DownloadOutlined } from "@ant-design/icons";

import { ImgProfileThumb } from "../images/zIndex";
import * as INFO from "../info/CONST_INFO_ARR";

import { PopupInfo } from "./popup/PopupInfo";

export const Home: React.FunctionComponent = () => {
  const [isEn, setEn] = useState<boolean>(true);
  const [overlayInfo, setOverlayInfo] = useState({ hidden: true, type: 0, title: "", notion: "" });

  useEffect(() => {}, []);

  return (
    <div style={{ width: "100%", height: "100%", position: "relative" }}>
      {/* 팝업 */}
      {overlayInfo.hidden ? <></> : <PopupInfo type={overlayInfo.type} title={overlayInfo.title} notion={overlayInfo.notion} onClosed={() => setOverlayInfo({ hidden: true, type: 0, title: "", notion: "" })} />}

      {/* body */}
      <div style={{ width: "100%", height: "100%", overflow: "auto" }}>
        <div style={{ width: "100%", height: 200, backgroundColor: "#999", marginBottom: -50, position: "relative" }}>
          <div style={{ height: "100%", width: "100%", backgroundColor: "#007e71", position: "absolute" }} />
        </div>

        <div style={{ width: "100%", display: "flex" }}>
          <div style={{ width: 80, height: 80, margin: "0px 10px 0px 20px" }}>
            <Image style={{ borderRadius: 10 }} preview={{ mask: <></> }} src={ImgProfileThumb} />
          </div>
          <div style={{ flex: 1, display: "flex", flexDirection: "column" }}>
            <div style={{ flex: 1, marginTop: 16, fontSize: 22, fontWeight: "bold", color: "#fff", zIndex: 1 }}>{isEn ? "Jangyoun Lee" : "이장연"}</div>
            <Typography.Paragraph style={{ height: 28, fontSize: 18, marginTop: 2 }}>jangyounc@gmail.com</Typography.Paragraph>
          </div>
        </div>

        <div style={{ margin: "30px 20px 0px 20px" }}>
          <Select style={{ width: "100%", marginBottom: 20 }} placeholder="select language" defaultValue={"en"} onChange={(value: string) => setEn(value === "en")}>
            <Select.Option value="en" label="en">
              {" "}
              🇺🇸 English Resume{" "}
            </Select.Option>
            <Select.Option value="kr" label="kr">
              {" "}
              🇰🇷 Korean Resume
            </Select.Option>
          </Select>
          <div style={{ fontSize: 18, fontWeight: "bold" }}>Full-Stack Developer</div>
          <div style={{ fontSize: 18, margin: "0px 10px 30px 0px" }}>{isEn ? "Have developed data crawling search system from a portal service company and DLNA, Miracast technology from a mobile phone manufacturer. Also have founded and managed a company about creating animation stickers and the company was sold to OGQ and I participated in projects related to AI and deep learning at OGQ. Currently, I am developing non-contact construction management platform using bluetooth device as a CTO at Buildprop." : "국내 포털사에서 검색 수집 머신 개발을, 국내 제조사에서 멀티미디어 미러링 개발 하였습니다. 우연한 기회로 콘텐츠 스타트업을 창업하였고, 그 과정에서 기술력을 인정받아 인수 합병을 경험하였습니다. 인수된 회사에서 신사업 및 A.I. 머신러닝 업무를 진행하였으며, 현재는 다수의 건설사 대표님들과 자산과 인력을 추적하는 솔루션을 개발 적용중에 있습니다. 전 개발 영역에 참여 하였으며, 개발 외적으로도 기획 / 디자인 / 운영 분들과 원만한 커뮤니케이션을 통해 다수의 프로젝트를 수행하였습니다."}</div>

          {/* ==========================  Education ========================== */}
          <div>
            <div style={{ fontSize: 18, fontWeight: "bold" }}>{isEn ? "Education" : "학력사항"}</div>
            <Table size={"small"} dataSource={isEn ? INFO.EDU_ARR_EN : INFO.EDU_ARR_KR} rowKey={(item) => item.id} scroll={{ x: 600 }} pagination={false}>
              <Table.Column
                className="ant-table-title"
                width={200}
                title={isEn ? "Title" : "제목"}
                render={(item) => (
                  <div style={{ display: "flex" }}>
                    <img style={{ height: 22, width: 22, marginRight: 5, borderRadius: 2 }} src={item.thumb} />
                    <div>{item.name}</div>
                  </div>
                )}
              />
              <Table.Column title={isEn ? "From ~ To" : "기간"} width={160} render={(item) => <div>{item.date}</div>} />
              <Table.Column title={isEn ? "Major" : "전공"} width={110} render={(item) => <div>{item.major}</div>} />
              <Table.Column title={isEn ? "Location" : "위치"} width={120} render={(item) => <div>{item.location}</div>} />
              {/* <Table.Column title={isEn ? "Grade" : "학점"} render={(item) => <div >{item.grade}</div>} /> */}
              <Table.Column title={isEn ? "" : ""} render={(item) => <></>} />
            </Table>
          </div>

          {/* ==========================  Company ========================== */}
          <div>
            <div style={{ fontSize: 18, fontWeight: "bold", marginTop: 30 }}>{isEn ? "Company" : "경력사항"}</div>
            <Table
              size={"small"}
              dataSource={isEn ? INFO.COMPANY_ARR_EN : INFO.COMPANY_ARR_KR}
              rowKey={(item) => item.id}
              scroll={{ x: 600 }}
              pagination={false}
              onRow={(item, idx) => {
                return { onClick: (event) => setOverlayInfo({ hidden: false, type: 3, title: item.name, notion: item.notion }) };
              }}
            >
              <Table.Column
                className="ant-table-title"
                width={210}
                title={isEn ? "Title" : "제목"}
                render={(item) => (
                  <div style={{ display: "flex" }}>
                    <img style={{ height: 22, width: 22, marginRight: 5, borderRadius: 2 }} src={item.thumb} />
                    <div>{item.name}</div>
                    &nbsp;&nbsp;
                    <div style={{ color: "#ccc" }}>
                      <DownloadOutlined />
                    </div>
                  </div>
                )}
              />
              <Table.Column title={isEn ? "Position" : "직책"} width={120} render={(item) => <div>{item.position}</div>} />
              <Table.Column
                title={isEn ? "From ~ To" : "기간"}
                width={160}
                render={(item) => (
                  <div>
                    {" "}
                    {item.from.format("YY.MM")} ~ {item.now ? "" : item.to.format("YY.MM")}{" "}
                  </div>
                )}
              />
              <Table.Column title={isEn ? "MM" : "MM"} width={80} render={(item) => <div>{item.to.diff(item.from, "months")}M</div>} />
              <Table.Column title={isEn ? "etc" : "기타"} render={(item) => <div>{item.etc}</div>} />
            </Table>
          </div>

          {/* ==========================  Project ========================== */}
          <div>
            <div style={{ fontSize: 18, fontWeight: "bold", marginTop: 30 }}>{isEn ? "Project" : "프로젝트"}</div>
            <Table
              size={"small"}
              dataSource={isEn ? INFO.PROJECT_ARR_EN : INFO.PROJECT_ARR_KR}
              rowKey={(item) => item.id}
              scroll={{ x: 600 }}
              pagination={false}
              onRow={(item, idx) => {
                return { onClick: (event) => setOverlayInfo({ hidden: false, type: 3, title: item.name, notion: item.notion }) };
              }}
            >
              <Table.Column
                className="ant-table-title"
                width={280}
                title={isEn ? "Title" : "제목"}
                render={(item) => (
                  <div style={{ display: "flex", alignItems: "center" }}>
                    <img style={{ height: 22, width: 22, marginRight: 5, borderRadius: 2 }} src={item.thumb} />
                    <div>{item.name}</div>
                    &nbsp;&nbsp;
                    <div style={{ color: "#ccc" }}>
                      <DownloadOutlined />
                    </div>
                  </div>
                )}
              />
              <Table.Column
                title={isEn ? "From ~ To" : "기간"}
                width={130}
                render={(item) => (
                  <div>
                    {item.from.format("YY.MM")} ~ {item.now ? "" : item.to.format("YY.MM")}
                  </div>
                )}
              />
              <Table.Column title={isEn ? "MM" : "MM"} width={60} render={(item) => <div>{item.to.diff(item.from, "months")}M</div>} />
              <Table.Column
                title={isEn ? "TAG" : "상세"}
                render={(item) => (
                  <div style={{ height: 24, overflow: "hidden" }}>
                    {item.tags.map((tag: string) => (
                      <Tag key={tag}>{tag}</Tag>
                    ))}
                  </div>
                )}
              />
            </Table>
          </div>

          {/* ==========================  Award ========================== */}
          <div>
            <div style={{ fontSize: 18, fontWeight: "bold", marginTop: 30 }}>{isEn ? "Award" : "수상내역"}</div>
            <Table
              size={"small"}
              dataSource={isEn ? INFO.AWARD_ARR_EN : INFO.AWARD_ARR_KR}
              rowKey={(item) => item.id}
              scroll={{ x: 600 }}
              pagination={false}
              onRow={(item, idx) => {
                return { onClick: (event) => setOverlayInfo({ hidden: false, type: 4, title: item.competition, notion: item.notion }) };
              }}
            >
              <Table.Column
                className="ant-table-title"
                width={240}
                title={isEn ? "Title" : "제목"}
                render={(item) => (
                  <div style={{ display: "flex", alignItems: "center" }}>
                    <div>{item.competition}</div>
                    &nbsp;&nbsp;
                    <div style={{ color: "#ccc" }}>
                      <DownloadOutlined />
                    </div>
                  </div>
                )}
              />
              <Table.Column title={isEn ? "Organizer" : "주최"} width={130} render={(item) => <div>{item.organizer}</div>} />
              <Table.Column title={isEn ? "Date" : "수상일"} width={110} render={(item) => <div>{item.date}</div>} />
              <Table.Column title={isEn ? "Rank" : "수상내역"} render={(item) => <div>{item.rank}</div>} />
            </Table>
          </div>

          {/* ==========================  Skill ========================== */}
          <div>
            <div style={{ fontSize: 18, fontWeight: "bold", marginTop: 30 }}>{isEn ? "Skill" : "업무스킬"}</div>
            <Table
              size={"small"}
              dataSource={INFO.SKILL_ARR}
              rowKey={(item) => item.id}
              scroll={{ x: 600 }}
              pagination={false}
              onRow={(item, idx) => {
                return { onClick: (event) => {} };
              }}
            >
              <Table.Column title={isEn ? "Category" : "항목"} width={150} render={(item) => <div>{item.name}</div>} />
              <Table.Column
                title={isEn ? "Description" : "상세내역"}
                render={(item) => (
                  <div>
                    {item.description.map((desc: string) => (
                      <Tag key={desc}>{desc}</Tag>
                    ))}
                  </div>
                )}
              />
              {/* <Table.Column title={isEn ? "ETC" : "기타"} render={(item) => <div>{'.......'}</div>} /> */}
            </Table>
          </div>

          {/* ==========================  self.intro ========================== */}
          {/* <div>
                        <div style={{ fontSize: 18, fontWeight: "bold", marginTop: 30 }}>{isEn ? 'Skill' : '자기소개'}</div>
                        {isEn ?
                            <></> :
                            <Typography.Paragraph>
                                {INFO.MY_SELF_ARR_KR.map((info: any) => (
                                    <pre>
                                        {info.name.map((desc: string) => (
                                            <div key={desc}>{desc}</div>
                                        ))}
                                    </pre>
                                ))}
                            </Typography.Paragraph>}
                    </div> */}

          <div style={{ height: 40 }} />
        </div>

        {/* ==========================  footer ========================== */}
        <div style={{ backgroundColor: "#666", padding: "5px 20px", color: "#fff" }}>made with React.js &nbsp; | &nbsp; Modified on : 2022.09.29</div>
      </div>
    </div>
  );
};

/* 
<div>
    <div style={{ fontSize: 18, fontWeight: "bold", marginTop: 30 }}>Project</div>
    <List
        grid={{
            gutter: 16,
            xs: 1,
            sm: 1,
            md: 3,
            lg: 3,
            xl: 3,
            xxl: 3,
        }}
        dataSource={INFO.PROJECT_ARR}
        renderItem={(item) => (
            <List.Item>
                <div style={{ display: "flex", flexDirection: "column", backgroundColor: "#f3f3f3", borderRadius: 10, padding: 8 }}>
                    <div style={{ display: "flex", fontSize: 14, fontWeight: "bold" }}>
                        <img style={{ height: 22, width: 22, marginRight: 5, borderRadius: 2 }} src={item.thumb} />
                        {item.name}
                    </div>
                    <div style={{ height: 24, overflow: "hidden" }}>{item.description}</div>
                    <div style={{ height: 24, overflow: "hidden" }}>
                        {item.from.format("YYYY.MM")} ~ {item.now ? "Now" : item.to.format("YYYY.MM")} ({item.to.diff(item.from, "months")}M)
                    </div>
                    <div style={{ height: 24, overflow: "hidden" }}>
                        {item.tags.map((tag) => (
                            <Tag key={tag}>{tag}</Tag>
                        ))}
                    </div>
                </div>
            </List.Item>
        )}
    />
</div>
*/
