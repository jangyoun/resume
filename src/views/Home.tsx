import React, { useState, useEffect } from 'react';
import { Table, Tag, List, Typography, Image } from "antd";
import { DownloadOutlined } from "@ant-design/icons";

import { ImgProfileThumb } from '../images/zIndex';
import * as INFO from "../info/InfoHome";

import { PopupInfo } from "./popup/PopupInfo";


export const Home: React.FunctionComponent = () => {

    const [overlayInfo, setOverlayInfo] = useState({ hidden: true, type: 0, title: '', notion: '' });

    useEffect(() => { }, []);

    return (
        <div style={{ width: '100%', height: '100%', position: 'relative' }}>

            {/* 팝업 */}
            {overlayInfo.hidden ?
                <></> :
                <PopupInfo
                    type={overlayInfo.type}
                    title={overlayInfo.title}
                    notion={overlayInfo.notion}
                    onClosed={() => setOverlayInfo({ hidden: true, type: 0, title: '', notion: '' })}
                />
            }

            {/* body */}
            <div style={{ width: '100%', height: '100%', overflow: 'auto' }}>
                <div style={{ width: "100%", height: 200, backgroundColor: "#999", marginBottom: -50, position: "relative" }}>
                    <div style={{ height: "100%", width: "100%", backgroundColor: "#007e71", position: "absolute" }} />
                </div>
                <div style={{ width: "100%", display: "flex" }}>
                    <div style={{ width: 80, height: 80, margin: "0px 10px 0px 20px" }}>
                        <Image
                            style={{ borderRadius: 10 }}
                            preview={{ mask: <></> }}
                            src={ImgProfileThumb}
                        />
                    </div>
                    <div style={{ flex: 1, display: "flex", flexDirection: "column" }}>
                        <div style={{ flex: 1, marginTop: 16, fontSize: 22, fontWeight: "bold", color: "#fff", zIndex: 1 }}>Jangyoun Lee</div>
                        <Typography.Paragraph style={{ height: 28, fontSize: 18, marginTop: 2 }}>
                            jangyounc@gmail.com
                        </Typography.Paragraph>
                    </div>
                </div>

                <div style={{ margin: "30px 20px 0px 20px" }}>
                    <div style={{ fontSize: 18, fontWeight: "bold" }}>Full-Stack Developer</div>
                    <div style={{ fontSize: 18, margin: "0px 10px 30px 0px" }}>Have developed data crawling search system from a portal service company and DLNA, Miracast technology from a mobile phone manufacturer. Also have founded and managed a company about creating animation stickers and the company was sold to OGQ and I participated in projects related to AI and deep learning at OGQ. Currently, I am developing non-contact construction management platform using bluetooth device as a CTO at Buildprop.</div>

                    {/* Education */}
                    <div>
                        <div style={{ fontSize: 18, fontWeight: "bold" }}>Education</div>
                        <Table
                            size={"small"}
                            dataSource={INFO.EDU_ARR}
                            rowKey={(item) => item.id}
                            scroll={{ x: 600 }}
                            pagination={false}
                        >
                            <Table.Column
                                className="ant-table-title"
                                width={200}
                                title={"Title"}
                                render={(item) => (
                                    <div style={{ display: "flex" }}>
                                        <img style={{ height: 22, width: 22, marginRight: 5, borderRadius: 2 }} src={item.thumb} />
                                        <div>{item.name}</div>
                                    </div>
                                )}
                            />
                            <Table.Column title={"From ~ To"} width={160} render={(item) => <div>{item.date}</div>} />
                            <Table.Column title={"Major"} width={60} render={(item) => <div>{item.major}</div>} />
                            <Table.Column title={"Location"} width={120} render={(item) => <div>{item.location}</div>} />
                            <Table.Column title={"Grade"} render={(item) => <div>{item.grade}</div>} />
                        </Table>
                    </div>

                    {/* Company */}
                    <div>
                        <div style={{ fontSize: 18, fontWeight: "bold", marginTop: 30 }}>Company</div>
                        <Table
                            size={"small"}
                            dataSource={INFO.COMPANY_ARR_KR}
                            rowKey={(item) => item.id}
                            scroll={{ x: 600 }}
                            pagination={false}
                            onRow={(item, idx) => { return { onClick: (event) => setOverlayInfo({ hidden: false, type: 3, title: item.name, notion: item.notion }), }; }}
                        >
                            <Table.Column
                                className="ant-table-title"
                                width={200}
                                title={"Title"}
                                render={(item) => (
                                    <div style={{ display: "flex" }}>
                                        <img style={{ height: 22, width: 22, marginRight: 5, borderRadius: 2 }} src={item.thumb} />
                                        <div>{item.name}</div>
                                        &nbsp;&nbsp;
                                        <div style={{ color: '#ccc' }}><DownloadOutlined /></div>
                                    </div>
                                )}
                            />
                            <Table.Column title={"Position"} width={80} render={(item) => <div>{item.position}</div>} />
                            <Table.Column title={"From ~ To"} width={160} render={(item) => (<div> {item.from.format("YYYY.MM")} ~ {item.now ? "" : item.to.format("YYYY.MM")} </div>)} />
                            <Table.Column title={"Between"} width={80} render={(item) => <div>{item.to.diff(item.from, "months")}M</div>} />
                            <Table.Column title={"etc"} render={(item) => <div>{item.etc}</div>} />
                        </Table>
                    </div>

                    {/* Project */}
                    <div>
                        <div style={{ fontSize: 18, fontWeight: "bold", marginTop: 30 }}>Project</div>
                        <Table
                            size={"small"}
                            dataSource={INFO.PROJECT_ARR_KR}
                            rowKey={(item) => item.id}
                            scroll={{ x: 600 }}
                            pagination={false}
                            onRow={(item, idx) => { return { onClick: (event) => setOverlayInfo({ hidden: false, type: 3, title: item.name, notion: item.notion }), }; }}
                        >
                            <Table.Column
                                className="ant-table-title"
                                width={250}
                                title={"Title"}
                                render={(item) => (
                                    <div style={{ display: "flex", alignItems: 'center' }}>
                                        <img style={{ height: 22, width: 22, marginRight: 5, borderRadius: 2 }} src={item.thumb} />
                                        <div>{item.name}</div>
                                        &nbsp;&nbsp;
                                        <div style={{ color: '#ccc' }}><DownloadOutlined /></div>
                                    </div>
                                )}
                            />
                            <Table.Column title={"Date"} width={130} render={(item) => <div>{item.from.format("YY.MM")} ~ {item.now ? "" : item.to.format("YY.MM")}</div>} />
                            <Table.Column title={"MM"} width={60} render={(item) => <div>{item.to.diff(item.from, "months")}M</div>} />
                            <Table.Column title={"TAG"} render={(item) =>
                                <div style={{ height: 24, overflow: "hidden" }}>
                                    {item.tags.map((tag: string) => (
                                        <Tag key={tag}>{tag}</Tag>
                                    ))}
                                </div>} />
                        </Table>
                    </div>

                    {/* Award */}
                    <div>
                        <div style={{ fontSize: 18, fontWeight: "bold", marginTop: 30 }}>Award</div>
                        <Table
                            size={"small"}
                            dataSource={INFO.AWARD_ARR}
                            rowKey={(item) => item.id}
                            scroll={{ x: 600 }}
                            pagination={false}
                            onRow={(item, idx) => { return { onClick: (event) => setOverlayInfo({ hidden: false, type: 4, title: item.competition, notion: item.notion }), }; }}
                        >
                            <Table.Column
                                className="ant-table-title"
                                width={220}
                                title={"Title"}
                                render={(item) => (
                                    <div style={{ display: "flex", alignItems: 'center' }}>
                                        <div>{item.competition}</div>
                                        &nbsp;&nbsp;
                                        <div style={{ color: '#ccc' }}><DownloadOutlined /></div>
                                    </div>
                                )}
                            />
                            <Table.Column title={"Organizer"} width={130} render={(item) => <div>{item.organizer}</div>} />
                            <Table.Column title={"Date"} width={110} render={(item) => <div>{item.date}</div>} />
                            <Table.Column title={"Rank"} render={(item) => <div>{item.rank}</div>} />
                        </Table>
                    </div>

                    {/* Skill */}
                    <div>
                        <div style={{ fontSize: 18, fontWeight: "bold", marginTop: 30 }}>Skill</div>
                        <Table
                            size={"small"}
                            dataSource={INFO.SKILL_ARR}
                            rowKey={(item) => item.id}
                            scroll={{ x: 600 }}
                            pagination={false}
                            onRow={(item, idx) => { return { onClick: (event) => { }, }; }}
                        >
                            <Table.Column title={"Category"} width={150} render={(item) => <div>{item.name}</div>} />
                            <Table.Column
                                title={"Description"}
                                render={(item) => (
                                    <div>
                                        {item.description.map((desc: string) => (
                                            <Tag key={desc}>{desc}</Tag>
                                        ))}
                                    </div>
                                )}
                            />
                        </Table>
                    </div>

                    <div style={{ height: 40 }} />

                </div>

                {/* footer */}
                <div style={{ backgroundColor: '#aaa', padding: 5, color: '#666' }} >
                    made with React.js &nbsp; | &nbsp;  Modified on : 2022.09.29
                </div>
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