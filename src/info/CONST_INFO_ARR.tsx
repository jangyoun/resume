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
export const COMPANY_ARR_EN = [
  { id: 0, thumb: ImgCom00, from: Moment([2020, 9, 1]), to: Moment(), now: true, name: "Buildprop", position: "CTO", etc: "", notion: 'a63ce67d384a41e88bba9c3655606182' },
  { id: 1, thumb: ImgCom01, from: Moment([2019, 8, 1]), to: Moment([2020, 9, 1]), now: false, name: "OGQ", position: "Team Leader", etc: "", notion: '74c75f40ba184f54a298d2a7156290cd' },
  { id: 2, thumb: ImgCom02, from: Moment([2014, 8, 1]), to: Moment([2019, 7, 1]), now: false, name: "ListenSoft", position: "CEO", etc: "Exit & M&A", notion: '20e87604c4414c1e862a1f19c734fae2' },
  { id: 3, thumb: ImgCom03, from: Moment([2011, 0, 1]), to: Moment([2014, 7, 1]), now: false, name: "Pantech", position: "Engineer", etc: "", notion: '43474cdcc6dd4908887c4cedb992d73b' },
  { id: 4, thumb: ImgCom04, from: Moment([2010, 5, 1]), to: Moment([2010, 11, 1]), now: false, name: "SK Communications", position: "Engineer", etc: "", notion: '551a7e378ac3479e89953e484fd8b5ef' },
];
export const COMPANY_ARR_KR = [
  { id: 0, thumb: ImgCom00, from: Moment([2020, 9, 1]), to: Moment(), now: true, name: "빌드프롭", position: "CTO", etc: "", notion: 'a63ce67d384a41e88bba9c3655606182' },
  { id: 1, thumb: ImgCom01, from: Moment([2019, 8, 1]), to: Moment([2020, 9, 1]), now: false, name: "오지큐", position: "팀장", etc: "", notion: '74c75f40ba184f54a298d2a7156290cd' },
  { id: 2, thumb: ImgCom02, from: Moment([2014, 8, 1]), to: Moment([2019, 7, 1]), now: false, name: "리슨소프트", position: "CEO", etc: "Exit & M&A", notion: '20e87604c4414c1e862a1f19c734fae2' },
  { id: 3, thumb: ImgCom03, from: Moment([2011, 0, 1]), to: Moment([2014, 7, 1]), now: false, name: "팬택", position: "연구원", etc: "", notion: '43474cdcc6dd4908887c4cedb992d73b' },
  { id: 4, thumb: ImgCom04, from: Moment([2010, 5, 1]), to: Moment([2010, 11, 1]), now: false, name: "SK Communications", position: "사원", etc: "", notion: '551a7e378ac3479e89953e484fd8b5ef' },
];

export const AWARD_ARR = [
  { id: 0, competition: "2013 DB Mashup Challenge", organizer: "Ministry of ICT", date: "2013.10.16", rank: "2nd Prize (for SKT)", notion: '7d0770317a674b7c8fe9d4ac8cca25a1' },
  { id: 1, competition: "Imagine Cup 2010", organizer: "Microsoft", date: "2010.03.20", rank: "Finalist", notion: '6bbd9abd4de04130b9f1a7b7c88c4bc7' },
  { id: 2, competition: "MASHUP CONTEST 2010", organizer: "NAVER, DAUM", date: "2010.02.06", rank: "Pronunciation", notion: 'a36595f84daf4733bcdd6b9c29c2deec' },
];

export const PROJECT_ARR_EN = [
  { id: 0, thumb: ImgProject00, now: true, from: Moment([2021, 0, 1]), to: Moment(), name: "건설사 인력 · 자산 관리 솔루션", description: "Construction site management platform", tags: ["full-stack"], notion: '' },
  { id: 1, thumb: ImgProject01, now: false, from: Moment([2020, 5, 1]), to: Moment([2020, 11, 1]), name: "OGQ Backend HD", description: "1.2 million downloads backgrounds application", tags: ["iOS"], notion: '' },
  { id: 2, thumb: ImgProject02, now: false, from: Moment([2019, 9, 1]), to: Moment([2020, 6, 1]), name: "O'Studio", description: "Demo Service for technology of OGQ", tags: ["ML", "AOS", "iOS"], notion: '' },
  { id: 3, thumb: ImgProject03, now: false, from: Moment([2020, 1, 1]), to: Moment([2020, 5, 1]), name: "NAVER OGQ Market", description: "creative platform for digital content in NAVER service", tags: ["backend"], notion: '' },
  { id: 4, thumb: ImgProject04, now: false, from: Moment([2019, 7, 1]), to: Moment([2019, 11, 1]), name: "AR content tool", description: "AR · MR R&D project for governmente", tags: ["iOS", "Backend"], notion: '' },
  { id: 5, thumb: ImgProject05, now: false, from: Moment([2018, 2, 1]), to: Moment([2019, 5, 1]), name: "Greenticon", description: "Drawing animated emoji for teen", tags: ["full-stack"], notion: '' },
  { id: 6, thumb: ImgProject06, now: false, from: Moment([2018, 1, 1]), to: Moment([2018, 7, 1]), name: "NEMO for store · office", description: "store · office agency platform  of based on map (Zigbang M&A)", tags: ["AOS"], notion: '' },
  { id: 7, thumb: ImgProject07, now: false, from: Moment([2018, 1, 1]), to: Moment([2019, 1, 1]), name: "DNBB", description: "Local community service (subsidiary of Kyocharo)", tags: ["backend", "AOS", "iOS"], notion: '' },
  { id: 8, thumb: ImgProject08, now: false, from: Moment([2017, 1, 1]), to: Moment([2017, 11, 1]), name: "Character Farm", description: "Character wiget serivice", tags: ["backend", "AOS"], notion: '' },
  { id: 9, thumb: ImgProject09, now: false, from: Moment([2018, 3, 1]), to: Moment([2018, 5, 1]), name: "Let's get it'", description: "contest web for Ministry of Gender Equality and Family", tags: ["backend", "Frontend"], notion: '' },
  { id: 10, thumb: ImgProject10, now: false, from: Moment([2013, 6, 1]), to: Moment([2014, 8, 1]), name: "Miracast", description: "screen mirroring for TV or  devices", tags: ["AOS", "JNI"], notion: '' },
  { id: 11, thumb: ImgProject11, now: false, from: Moment([2012, 0, 1]), to: Moment([2013, 5, 1]), name: "Media Link (DLNA)", description: "industry-wide standard for sharing digital media", tags: ["AOS", "JNI"], notion: '' },
  { id: 12, thumb: ImgProject12, now: false, from: Moment([2011, 2, 1]), to: Moment([2011, 11, 1]), name: "Camera", description: "custom camera modul for U.S.", tags: ["C", "C++"], notion: '' },
];

export const PROJECT_ARR_KR = [
  { id: 0, thumb: ImgProject00, now: false, from: Moment([2020, 9, 1]), to: Moment([2022, 9, 1]), between: 24, name: "건설사 인력 · 자산 관리 솔루션", tags: ["Backend", "Frontend", "Android", "iOS"], notion: 'd24d16c8b55e4daf82c70de59a58d57a' },
  { id: 1, thumb: ImgProject02, now: false, from: Moment([2019, 9, 1]), to: Moment([2020, 9, 1]), between: 12, name: "A.I. 신사업 프로젝트", tags: ["ML", "Android", "iOS"], notion: '4d679b857d0f41138bf1d506436966f9' },
  { id: 2, thumb: ImgProject05, now: false, from: Moment([2015, 11, 1]), to: Moment([2018, 2, 1]), between: 27, name: "움직이는 이모티콘 제작 SNS", tags: ["Backend", "Frontend", "Android", "iOS"], notion: '48465326782c4042ba334ce817ef2f5f' },
  { id: 3, thumb: ImgProject07, now: false, from: Moment([2018, 1, 1]), to: Moment([2019, 1, 1]), between: 12, name: "지역기반 커뮤니티 서비스", tags: ["Android", "iOS", "Frontend"], notion: '4e6030cfcc8c4d839b148bebdd961ae5' },
  { id: 4, thumb: ImgProject06, now: false, from: Moment([2018, 1, 1]), to: Moment([2018, 7, 1]), between: 6, name: "상가 · 사무실 중개 서비스", tags: ["Android"], notion: '1dabbf6f265e415a9870246e83cc4f9c' },
  { id: 5, thumb: ImgProject11, now: false, from: Moment([2011, 0, 1]), to: Moment([2014, 8, 1]), between: 44, name: "Multimedia Mirroring", tags: ["Android", "JNI"], notion: 'd8fb3879550a44a2a3416cb813b83024' },
  { id: 6, thumb: ImgProject04, now: false, from: Moment([2018, 5, 1]), to: Moment([2019, 11, 1]), between: 18, name: "R&D 국가 과제", tags: ["Backend", "Frontend"], notion: '34d94ff2bbe04b4187c268b8b6e7b973' },
];

export const SKILL_ARR = [
  { id: 0, name: "Dev Infra", description: ["AWS", "EC2", "S3", "Beanstalk", "RDS", "ElastiCache", "SQS", "SNS", "CodePipeLine"] },
  { id: 1, name: "Dev Backend", description: ["Java", "Kotlin", "Spring Boot Framework", "Mysql", "Postgresql"] },
  { id: 2, name: "Dev Fronted", description: ["Javascript", "React.js", "Jquery"] },
  { id: 3, name: "Dev iOS", description: ["Swift", "Object-C", "Storyboard", "Java", "Kotlin", "iOS-Native"] },
  { id: 4, name: "Dev Android", description: ["Java", "Kotlin", "Android-Native"] },
  { id: 5, name: "Dev Etc", description: ["Python", "Flask", "Machine-Learning", "tensorflow", "Github", "Github-issues", "Slack-Webhook"] },
  { id: 6, name: "Productivity Tools", description: ["Slack", "Notion", "Overflow", "Zeplin", "Figma", "Photoshop"] },
];