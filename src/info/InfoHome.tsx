import Moment from "moment";
import {
  ImgEdu00, ImgEdu01,
  ImgCom00, ImgCom01, ImgCom02, ImgCom03, ImgCom04,
  ImgProject00, ImgProject01, ImgProject02, ImgProject03, ImgProject04, ImgProject05, ImgProject06, ImgProject07, ImgProject08, ImgProject09, ImgProject10, ImgProject11, ImgProject12
} from '../images/zIndex';

export const EDU_ARR = [
  { id: 0, thumb: ImgEdu00, name: "Sejong University", date: "2004.03 ~ 2004.03", major: "ICT", location: "Seoul, Korea", grade: "4.09 / 4.5" },
  { id: 1, thumb: ImgEdu01, name: "Yushin high school", date: "2004.03 ~ 2004.03", major: "", location: "Seoul, Korea", grade: "" },
];
export const COMPANY_ARR = [
  { id: 0, thumb: ImgCom00, from: Moment([2020, 9, 1]), to: Moment(), now: true, name: "Buildprop", position: "CTO", etc: "", desc: ["Buildprop desc1", "Buildprop desc2"] },
  { id: 1, thumb: ImgCom01, from: Moment([2019, 8, 1]), to: Moment([2020, 9, 1]), now: false, name: "OGQ", position: "Team Leader", etc: "", desc: ["OGQ desc1", "OGQ desc2"] },
  { id: 2, thumb: ImgCom02, from: Moment([2014, 8, 1]), to: Moment([2019, 7, 1]), now: false, name: "ListenSoft", position: "CEO", etc: "Exit & M&A", desc: ["ListenSoft desc1", "ListenSoft desc2"] },
  { id: 3, thumb: ImgCom03, from: Moment([2011, 0, 1]), to: Moment([2014, 7, 1]), now: false, name: "Pantech", position: "Engineer", etc: "", desc: ["Pantech desc1", "Pantech desc2"] },
  { id: 4, thumb: ImgCom04, from: Moment([2010, 5, 1]), to: Moment([2010, 11, 1]), now: false, name: "SK Communications", position: "Engineer", etc: "", desc: ["SK desc1"] },
];

export const AWARD_ARR = [
  { id: 0, competition: "2013 DB Mashup Challenge", organizer: "Ministry of ICT", date: "2013.10.16", rank: "2nd Prize (for SKT)" },
  { id: 1, competition: "Imagine Cup 2010", organizer: "Microsoft", date: "2010.03.20", rank: "Finalist" },
  { id: 2, competition: "MASHUP CONTEST 2010", organizer: "NAVER, DAUM", date: "2010.02.06", rank: "Pronunciation" },
];

export const SKILL_ARR = [
  { id: 0, name: "Dev Language", description: ["java", "python", "Swift", "Objective-C", "javascript", "mysql"] },
  { id: 1, name: "Dev Platform", description: ["Android", "iOS", "backend", "Web", "tensorflow", "flask", "jquery"] },
  { id: 2, name: "Dev Infra", description: ["AWS", "ubuntu", "EC2", "S3", "RDB", "Lambda", "ElastiCache"] },
  { id: 3, name: "Dev Tool", description: ["Android", "Studio", "Xcode", "intellij"] },
  { id: 4, name: "Design Tool", description: ["Photoshop", "Zeplin", "Sketch"] },
  { id: 5, name: "Productivity Tools", description: ["slack", "trello", "overflow"] },
];
export const PROJECT_ARR = [
  { id: 0, thumb: ImgProject00, now: true, from: Moment([2021, 0, 1]), to: Moment(), name: "Odigo", description: "Construction site management platform", tags: ["Backend", "Frontend", "Android", "iOS"] },
  { id: 1, thumb: ImgProject01, now: false, from: Moment([2020, 5, 1]), to: Moment([2020, 11, 1]), name: "OGQ Backend HD", description: "1.2 million downloads backgrounds application", tags: ["iOS"] },
  { id: 2, thumb: ImgProject02, now: false, from: Moment([2019, 9, 1]), to: Moment([2020, 6, 1]), name: "O'Studio", description: "Demo Service for technology of OGQ", tags: ["ML", "AOS", "iOS"] },
  { id: 3, thumb: ImgProject03, now: false, from: Moment([2020, 1, 1]), to: Moment([2020, 5, 1]), name: "NAVER OGQ Market", description: "creative platform for digital content in NAVER service", tags: ["backend"] },
  { id: 4, thumb: ImgProject04, now: false, from: Moment([2019, 7, 1]), to: Moment([2019, 11, 1]), name: "AR content tool", description: "AR · MR R&D project for governmente", tags: ["iOS", "Backend"] },
  { id: 5, thumb: ImgProject05, now: false, from: Moment([2018, 2, 1]), to: Moment([2019, 5, 1]), name: "Greenticon", description: "Drawing animated emoji for teen", tags: ["AOS", "iOS", "Backend"] },
  { id: 6, thumb: ImgProject06, now: false, from: Moment([2018, 1, 1]), to: Moment([2018, 7, 1]), name: "NEMO for store · office", description: "store · office agency platform  of based on map (Zigbang M&A)", tags: ["AOS"] },
  { id: 7, thumb: ImgProject07, now: false, from: Moment([2018, 1, 1]), to: Moment([2019, 1, 1]), name: "DNBB", description: "Local community service (subsidiary of Kyocharo)", tags: ["backend", "AOS", "iOS"] },
  { id: 8, thumb: ImgProject08, now: false, from: Moment([2017, 1, 1]), to: Moment([2017, 11, 1]), name: "Character Farm", description: "Character wiget serivice", tags: ["backend", "AOS"] },
  { id: 9, thumb: ImgProject09, now: false, from: Moment([2018, 3, 1]), to: Moment([2018, 5, 1]), name: "Let's get it'", description: "contest web for Ministry of Gender Equality and Family", tags: ["backend", "Frontend"] },
  { id: 10, thumb: ImgProject10, now: false, from: Moment([2013, 6, 1]), to: Moment([2014, 8, 1]), name: "Miracast", description: "screen mirroring for TV or  devices", tags: ["AOS", "JNI"] },
  { id: 11, thumb: ImgProject11, now: false, from: Moment([2012, 0, 1]), to: Moment([2013, 5, 1]), name: "Media Link (DLNA)", description: "industry-wide standard for sharing digital media", tags: ["AOS", "JNI"] },
  { id: 12, thumb: ImgProject12, now: false, from: Moment([2011, 2, 1]), to: Moment([2011, 11, 1]), name: "Camera", description: "custom camera modul for U.S.", tags: ["C", "C++"] },
];
