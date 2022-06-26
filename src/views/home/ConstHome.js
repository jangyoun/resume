import Moment from "moment";
export const EDU_ARR = [
  { id: 0, thumb: "/images/edu_00.png", name: "Sejong University", date: "2004.03 ~ 2004.03", major: "ICT", location: "Seoul, Korea", grade: "4.09 / 4.5" },
  { id: 1, thumb: "/images/edu_01.png", name: "Yushin high school", date: "2004.03 ~ 2004.03", major: "", location: "Seoul, Korea", grade: "" },
];
export const COMPANY_ARR = [
  { id: 0, thumb: "/images/com_00.png", from: Moment([2020, 9, 1]), to: Moment(), now: true, name: "Buildprop", position: "CTO", etc: "" },
  { id: 1, thumb: "/images/com_01.png", from: Moment([2019, 8, 1]), to: Moment([2020, 9, 1]), now: false, name: "OGQ", position: "Team Leader", etc: "" },
  { id: 2, thumb: "/images/com_02.png", from: Moment([2014, 8, 1]), to: Moment([2019, 7, 1]), now: false, name: "ListenSoft", position: "CEO", etc: "Exit & M&A" },
  { id: 3, thumb: "/images/com_03.png", from: Moment([2011, 0, 1]), to: Moment([2014, 7, 1]), now: false, name: "Pantech", position: "Engineer", etc: "" },
  { id: 4, thumb: "/images/com_04.png", from: Moment([2010, 5, 1]), to: Moment([2010, 11, 1]), now: false, name: "SK Communications", position: "Engineer", etc: "" },
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
  { id: 0, thumb: "/images/project_00.png", now: true, from: Moment([2021, 0, 1]), to: Moment(), name: "Odigo", description: "Construction site management platform", tags: ["Backend", "Frontend", "Android", "iOS"] },
  { id: 1, thumb: "/images/project_01.png", now: false, from: Moment([2020, 5, 1]), to: Moment([2020, 11, 1]), name: "OGQ Backend HD", description: "1.2 million downloads backgrounds application", tags: ["iOS"] },
  { id: 2, thumb: "/images/project_02.png", now: false, from: Moment([2019, 9, 1]), to: Moment([2020, 6, 1]), name: "O'Studio", description: "Demo Service for technology of OGQ", tags: ["ML", "AOS", "iOS"] },
  { id: 3, thumb: "/images/project_03.png", now: false, from: Moment([2020, 1, 1]), to: Moment([2020, 5, 1]), name: "NAVER OGQ Market", description: "creative platform for digital content in NAVER service", tags: ["backend"] },
  { id: 4, thumb: "/images/project_04.png", now: false, from: Moment([2019, 7, 1]), to: Moment([2019, 11, 1]), name: "AR content tool", description: "AR · MR R&D project for governmente", tags: ["iOS", "Backend"] },
  { id: 5, thumb: "/images/project_05.png", now: false, from: Moment([2018, 2, 1]), to: Moment([2019, 5, 1]), name: "Greenticon", description: "Drawing animated emoji for teen", tags: ["AOS", "iOS", "Backend"] },
  { id: 6, thumb: "/images/project_06.png", now: false, from: Moment([2018, 1, 1]), to: Moment([2018, 7, 1]), name: "NEMO for store · office", description: "store · office agency platform  of based on map (Zigbang M&A)", tags: ["AOS"] },
  { id: 7, thumb: "/images/project_07.png", now: false, from: Moment([2018, 1, 1]), to: Moment([2019, 1, 1]), name: "DNBB", description: "Local community service (subsidiary of Kyocharo)", tags: ["backend", "AOS", "iOS"] },
  { id: 8, thumb: "/images/project_08.png", now: false, from: Moment([2017, 1, 1]), to: Moment([2017, 11, 1]), name: "Character Farm", description: "Character wiget serivice", tags: ["backend", "AOS"] },
  { id: 9, thumb: "/images/project_09.png", now: false, from: Moment([2018, 3, 1]), to: Moment([2018, 5, 1]), name: "Let's get it'", description: "contest web for Ministry of Gender Equality and Family", tags: ["backend", "Frontend"] },
  { id: 10, thumb: "/images/project_10.png", now: false, from: Moment([2013, 6, 1]), to: Moment([2014, 8, 1]), name: "Miracast", description: "screen mirroring for TV or  devices", tags: ["AOS", "JNI"] },
  { id: 11, thumb: "/images/project_11.png", now: false, from: Moment([2012, 0, 1]), to: Moment([2013, 5, 1]), name: "Media Link (DLNA)", description: "industry-wide standard for sharing digital media", tags: ["AOS", "JNI"] },
  { id: 12, thumb: "/images/project_12.png", now: false, from: Moment([2011, 2, 1]), to: Moment([2011, 11, 1]), name: "Camera", description: "custom camera modul for U.S.", tags: ["C", "C++"] },
];
