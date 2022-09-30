import Moment from "moment";
import {
  ImgEdu00, ImgEdu01,
  ImgCom00, ImgCom01, ImgCom02, ImgCom03, ImgCom04,
  ImgProject00, ImgProject01, ImgProject02, ImgProject03, ImgProject04, ImgProject05, ImgProject06, ImgProject07, ImgProject08, ImgProject09, ImgProject10, ImgProject11, ImgProject12
} from '../images/zIndex';

// edu --------------------------------------
export const EDU_ARR_EN = [
  { id: 0, thumb: ImgEdu00, name: "Sejong University", date: "04.03 ~ 04.03", major: "ICT", location: "Seoul, Korea", grade: "4.09 / 4.5" },
  { id: 1, thumb: ImgEdu01, name: "Yushin high school", date: "04.03 ~ 04.03", major: "", location: "Suwon, Korea", grade: "" },
];
export const EDU_ARR_KR = [
  { id: 0, thumb: ImgEdu00, name: "세종대학교", date: "04.03 ~ 04.03", major: "정보통신공학과", location: "서울, 대한민국", grade: "4.09 / 4.5" },
  { id: 1, thumb: ImgEdu01, name: "유신고등학교", date: "04.03 ~ 04.03", major: "인문계", location: "수원, 대한민국", grade: "" },
];

// comp --------------------------------------
export const COMPANY_ARR_EN = [
  { id: 0, thumb: ImgCom00, from: Moment([2020, 9, 1]), to: Moment(), now: true, name: "Buildprop", position: "CTO", etc: "", notion: 'a63ce67d384a41e88bba9c3655606182' },
  { id: 1, thumb: ImgCom01, from: Moment([2019, 8, 1]), to: Moment([2020, 9, 1]), now: false, name: "OGQ", position: "Team Leader", etc: "", notion: '74c75f40ba184f54a298d2a7156290cd' },
  { id: 2, thumb: ImgCom02, from: Moment([2014, 8, 1]), to: Moment([2019, 7, 1]), now: false, name: "ListenSoft", position: "CEO", etc: "Exit & M&A", notion: '20e87604c4414c1e862a1f19c734fae2' },
  { id: 3, thumb: ImgCom03, from: Moment([2011, 0, 1]), to: Moment([2014, 7, 1]), now: false, name: "Pantech", position: "Engineer", etc: "", notion: '43474cdcc6dd4908887c4cedb992d73b' },
  { id: 4, thumb: ImgCom04, from: Moment([2010, 5, 1]), to: Moment([2010, 11, 1]), now: false, name: "SK Communications", position: "Engineer", etc: "", notion: '551a7e378ac3479e89953e484fd8b5ef' },
];
export const COMPANY_ARR_KR = [
  { id: 0, thumb: ImgCom00, from: Moment([2020, 9, 1]), to: Moment(), now: true, name: "빌드프롭 (BuildProp)", position: "CTO", etc: "", notion: 'a63ce67d384a41e88bba9c3655606182' },
  { id: 1, thumb: ImgCom01, from: Moment([2019, 8, 1]), to: Moment([2020, 9, 1]), now: false, name: "오지큐 (OGQ)", position: "팀장", etc: "", notion: '74c75f40ba184f54a298d2a7156290cd' },
  { id: 2, thumb: ImgCom02, from: Moment([2014, 8, 1]), to: Moment([2019, 7, 1]), now: false, name: "리슨소프트 (ListenSoft)", position: "CEO", etc: "Exit & M&A", notion: '20e87604c4414c1e862a1f19c734fae2' },
  { id: 3, thumb: ImgCom03, from: Moment([2011, 0, 1]), to: Moment([2014, 7, 1]), now: false, name: "팬택 (Pantech)", position: "연구원", etc: "", notion: '43474cdcc6dd4908887c4cedb992d73b' },
  { id: 4, thumb: ImgCom04, from: Moment([2010, 5, 1]), to: Moment([2010, 11, 1]), now: false, name: "SK Communications", position: "사원", etc: "", notion: '551a7e378ac3479e89953e484fd8b5ef' },
];

// award --------------------------------------
export const AWARD_ARR_EN = [
  { id: 0, competition: "2013 DB Mashup Challenge", organizer: "Ministry of ICT", date: "2013.10.16", rank: "2nd Prize (for SKT)", notion: '7d0770317a674b7c8fe9d4ac8cca25a1' },
  { id: 1, competition: "Imagine Cup 2010", organizer: "Microsoft", date: "2010.03.20", rank: "Finalist", notion: '6bbd9abd4de04130b9f1a7b7c88c4bc7' },
  { id: 2, competition: "MASHUP CONTEST 2010", organizer: "NAVER, DAUM", date: "2010.02.06", rank: "Pronunciation", notion: 'a36595f84daf4733bcdd6b9c29c2deec' },
];
export const AWARD_ARR_KR = [
  { id: 0, competition: "2013 DB 매쉬업 공모전", organizer: "미래창조과학부", date: "2013.10.16", rank: "은상 - 2등상", notion: '7d0770317a674b7c8fe9d4ac8cca25a1' },
  { id: 1, competition: "2010 이매진컵", organizer: "Microsoft", date: "2010.03.20", rank: "Finalist", notion: '6bbd9abd4de04130b9f1a7b7c88c4bc7' },
  { id: 2, competition: "2010 대한민국 매쉬업 경진대회", organizer: "NAVER, DAUM", date: "2010.02.06", rank: "특별상", notion: 'a36595f84daf4733bcdd6b9c29c2deec' },
];

// project --------------------------------------
export const PROJECT_ARR_EN = [
  { id: 0, thumb: ImgProject00, now: false, from: Moment([2020, 9, 1]), to: Moment([2022, 9, 1]), between: 24, name: "Construction Asset Management", tags: ["Backend", "Frontend", "Android", "iOS"], notion: 'd24d16c8b55e4daf82c70de59a58d57a' },
  { id: 1, thumb: ImgProject02, now: false, from: Moment([2019, 9, 1]), to: Moment([2020, 9, 1]), between: 12, name: "A.I. MachineLearning Project", tags: ["ML", "Android", "iOS"], notion: '4d679b857d0f41138bf1d506436966f9' },
  { id: 2, thumb: ImgProject05, now: false, from: Moment([2015, 11, 1]), to: Moment([2018, 2, 1]), between: 27, name: "Animantion Emoji SNS", tags: ["Backend", "Frontend", "Android", "iOS"], notion: '48465326782c4042ba334ce817ef2f5f' },
  { id: 3, thumb: ImgProject07, now: false, from: Moment([2018, 1, 1]), to: Moment([2019, 1, 1]), between: 12, name: "Local-based Community Service", tags: ["Android", "iOS", "Frontend"], notion: '4e6030cfcc8c4d839b148bebdd961ae5' },
  { id: 4, thumb: ImgProject06, now: false, from: Moment([2018, 1, 1]), to: Moment([2018, 7, 1]), between: 6, name: "Office Brokerage Service", tags: ["Android"], notion: '1dabbf6f265e415a9870246e83cc4f9c' },
  { id: 5, thumb: ImgProject11, now: false, from: Moment([2011, 0, 1]), to: Moment([2014, 8, 1]), between: 44, name: "Multimedia Mirroring", tags: ["Android", "JNI"], notion: 'd8fb3879550a44a2a3416cb813b83024' },
  { id: 6, thumb: ImgProject04, now: false, from: Moment([2018, 5, 1]), to: Moment([2019, 11, 1]), between: 18, name: "R&D Government Project", tags: ["Backend", "Frontend"], notion: '34d94ff2bbe04b4187c268b8b6e7b973' },
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

// skill --------------------------------------
export const SKILL_ARR = [
  { id: 0, name: "Dev Infra", description: ["AWS", "EC2", "S3", "Beanstalk", "RDS", "ElastiCache", "SQS", "SNS", "CodePipeLine"] },
  { id: 1, name: "Dev Backend", description: ["Java", "Kotlin", "Spring Boot Framework", "Mysql", "Postgresql"] },
  { id: 2, name: "Dev Fronted", description: ["Javascript", "React.js", "Jquery"] },
  { id: 3, name: "Dev iOS", description: ["Swift", "Object-C", "Storyboard", "Java", "Kotlin", "iOS-Native"] },
  { id: 4, name: "Dev Android", description: ["Java", "Kotlin", "Android-Native"] },
  { id: 5, name: "Dev Etc", description: ["Python", "Flask", "Machine-Learning", "tensorflow", "Github", "Github-issues", "Slack-Webhook"] },
  { id: 6, name: "Productivity Tools", description: ["Slack", "Notion", "Overflow", "Zeplin", "Figma", "Photoshop"] },
];

// skill --------------------------------------
export const MY_SELF_ARR_EN = [];
export const MY_SELF_ARR_KR = [
  {
    id: 0, name: [
      "Full Stack Dev\n · Android / iOS / Backend / Frontend에 대한 분야별 이슈 해결 능력을 보유\n · Kotlin / Swift / React.js / JPA / AWS 등 최신 기술 스택의 실 적용 사례 보유\n\n",
      "다양한 개발 문화 경험\n · 대기업, 중견기업, 예비 유니콘, 소규모 스타트업 등 다양한 규모의 개발 문화를 직 · 간접적으로 체험\n · 창업 과정을 통하여, 개발 인력 세팅 및 일정 조율 등 관리 업무 경험\n\n",
      "커뮤니케이션\n · 대표 및 관리 업무를 수행함으로써, 내 · 외부 인력의 관리 및 R&R 조율\n · 상주 / 비상주 외주 개발을 통하여, 고객사 및 협업사와 원만한 협업 조율\n · 개발인력 외에 기획 / 마케팅 / CS 인력과의 원만한 협업 조율\n",
    ]
  },
  {
    id: 1, name: [
      "내부 프로젝트\n콘텐츠 기반의 SNS 서비스를 기획 · 개발 하였습니다. 이 과정에서 유저의 콘텐츠 소비 및 제작 패턴을 분석하여 사용성을 극대화 하였고, 이러한 결과로 30만 다운로드, 3천개의 사용자 리뷰 등 긍정적인 반응을 이끌어 낼 수 있었습니다. 또한 경쟁사와의 기술적 우위를 차지하기 위하여, 움직이는 이모티콘 제작 툴을 개발하였고, 제작툴을 통하여 14만개의 콘텐츠가 창작되었습니다. 이 성과를 통하여 예비 유니콘으로 불리우는 OGQ로 부터 인수 제안에 응하여, 회사 매각을 경험 하였습니다.\n\n",
      "신사업 프로젝트\nOGQ 합류 후 대표자의 요청에 의해 머신러닝 프로젝트를 진행하였습니다. 별도의 지식과 전문 인력 없어, 수행하기에 어려움이 있었으나, 스터디 및 Tech 스타트업과의 협업을 통해 다수의 A.I. 머신러닝 프로젝트를 완수 하였습니다.\n\n",
      "협업 프로젝트\n슈가힐의 네모 프로젝트를 통하여, 스타트업의 빠른 성장 및 직방으로부터 200억 매각을 간접 경험하였습니다. 또한, 교차로 자회사의  지역 기반 커뮤니티 프로젝트를 통하여, 예산에 따른 기획-마케팅-개발로 이어지는 협업을 수행하였고, 이 과정에서 일정관리의 중요성을 경험하였습니다. 이 밖에도 개발에 대한 이해도가 높지 않는 다수의 마케팅 협업사를 통하여, 기술 내역에 대한 소개 및 문서화에 대한 중요성 역시 알게 되었습니다.\n",
    ]
  },
];

/*
export const PROJECT_ARR = [
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
*/