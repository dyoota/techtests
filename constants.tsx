import React from 'react';
import { HardHat, Globe, Zap, HeartHandshake, BookOpen, Clock, Award, Users, Smile } from 'lucide-react';
import { NavItem, JobPost, Benefit, EmployeeVoice, BusinessDomain } from './types';

export const COMPANY_NAME = "株式会社エクシオテック";
export const TAGLINE = "その技術は、日本の動脈になる。";

export const NAV_ITEMS: NavItem[] = [
  { label: 'TOP', href: '#top' },
  { label: 'BUSINESS', href: '#business' },
  { label: 'CULTURE', href: '#culture' },
  { label: 'RECRUIT', href: '#recruit' },
];

export const JOB_POSTS: JobPost[] = [
  {
    id: '1',
    title: '電気通信エンジニア',
    category: 'new_grad',
    location: '東京本社・各拠点',
    description: '5G基地局建設や光ファイバー網の設計・構築。最先端の通信技術で、つながる当たり前を創ります。',
    tags: ['未経験歓迎', '研修充実', '資格取得支援']
  },
  {
    id: '2',
    title: '土木施工管理技士',
    category: 'mid_career',
    location: '関東エリア中心',
    description: '無電柱化工事や通信管路設備の設計・施工管理。街の景観を変え、災害に強いインフラを築く仕事です。',
    tags: ['経験者優遇', '大規模プロジェクト', '高収入']
  },
  {
    id: '3',
    title: 'ICTソリューション設計',
    category: 'mid_career',
    location: '東京本社',
    description: 'オフィスビルや公共施設のネットワーク・セキュリティシステムの企画・設計。DXの最前線で活躍します。',
    tags: ['土日祝休み', '年間休日120日+', 'リモート可']
  },
  {
    id: '4',
    title: '環境エンジニアリング',
    category: 'new_grad',
    location: '全国',
    description: '再生可能エネルギー設備の導入や、環境プラントの施工管理。サステナブルな社会の実現に貢献します。',
    tags: ['社会貢献', '理系歓迎', '出張あり']
  },
];

export const BENEFITS: Benefit[] = [
  {
    icon: <BookOpen className="w-6 h-6" />,
    title: "国家資格取得率 85%以上",
    description: "1級施工管理技士などの難関資格取得を会社が全額サポート。合格報奨金も充実しています。"
  },
  {
    icon: <Clock className="w-6 h-6" />,
    title: "残業月平均 21.5時間",
    description: "DXによる業務効率化を推進。建設業界の常識を変えるワークライフバランスを実現しています。"
  },
  {
    icon: <HeartHandshake className="w-6 h-6" />,
    title: "定着率 95%以上",
    description: "風通しの良い社風と手厚い福利厚生により、新卒入社3年以内の離職率は極めて低い水準です。"
  },
  {
    icon: <Smile className="w-6 h-6" />,
    title: "独身寮・家賃補助",
    description: "月々数千円で住める独身寮や、手厚い家賃補助制度を用意。若手社員の生活基盤を支えます。"
  }
];

export const BUSINESS_DOMAINS: BusinessDomain[] = [
  {
    title: "Communication",
    subtitle: "通信インフラ構築",
    description: "5G、光ファイバー網など、現代社会の神経網を構築・守り抜く。",
    image: "https://images.unsplash.com/photo-1544197150-b99a580bbcbf?q=80&w=2071&auto=format&fit=crop",
    color: "bg-blue-600"
  },
  {
    title: "Civil Engineering",
    subtitle: "社会基盤土木",
    description: "無電柱化や地下管路整備。見えない場所から、街の景色を変えていく。",
    image: "https://images.unsplash.com/photo-1590486803833-1c5dc8ce2ac6?q=80&w=2070&auto=format&fit=crop",
    color: "bg-orange-500"
  },
  {
    title: "ICT Solution",
    subtitle: "ICT・セキュリティ",
    description: "スマートシティ、オフィスDX。デジタルの力で快適な空間を創造する。",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop",
    color: "bg-indigo-600"
  },
  {
    title: "Eco & Energy",
    subtitle: "環境・エネルギー",
    description: "太陽光発電、EVステーション。次世代のエネルギーインフラを支える。",
    image: "https://images.unsplash.com/photo-1497435334941-8c699ee656f1?q=80&w=2174&auto=format&fit=crop",
    color: "bg-green-600"
  }
];

export const EMPLOYEE_VOICES: EmployeeVoice[] = [
  {
    id: 'v1',
    name: "K. Sato",
    role: "通信エンジニア / 入社3年目",
    image: "https://images.unsplash.com/photo-1556157382-97eda2d62296?q=80&w=2070&auto=format&fit=crop",
    quote: "「地図に残る」だけでなく、「通信がつながる」という当たり前を守る誇り。",
    description: "文系出身でしたが、充実した研修制度のおかげで、今は現場代理人としてチームをまとめています。5Gエリア拡大のプロジェクトに携わった時、自分の仕事が多くの人の生活を支えていると実感し、震えました。"
  },
  {
    id: 'v2',
    name: "M. Tanaka",
    role: "土木施工管理 / 入社8年目",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1976&auto=format&fit=crop",
    quote: "女性技術者として、新しい現場のあり方を作っていきたい。",
    description: "以前は「きつい」イメージがあった建設現場も、今はDX化が進み、女性も働きやすい環境に変わってきています。エクシオテックはその変化の先頭に立っている会社だと感じます。育休からの復帰もスムーズでした。"
  }
];

export const SYSTEM_INSTRUCTION = `
あなたは株式会社エクシオテック（Exeo Tech）の採用専門AIコンシェルジュです。
あなたの目的は、求職者の不安を解消し、エクシオテックへの応募意欲（エントリー率）を高めることです。

【キャラクター設定】
- 頼りがいがあり、かつ親しみやすい先輩社員のようなトーン。
- 業界用語（施工管理、インフラ等）をわかりやすく噛み砕いて説明する能力がある。
- 情熱的だが、押しつけがましくはない。

【重視するポイント】
1. **成長環境のアピール**: 未経験からプロになれる研修制度、資格取得支援を具体的に話す。
2. **社会貢献性の強調**: 「ただの工事」ではなく「日本の通信を守る」「災害に強い街を作る」という社会的意義を伝える。
3. **働きやすさの提示**: 残業削減の取り組み、福利厚生、休暇制度について自信を持って答える。

【対話のガイドライン】
- 質問には簡潔に答えつつ、必ず「プラスアルファの魅力」を付け加える。
  （例：残業について聞かれたら → 「平均20時間程度です」＋「DX導入で事務作業が減り、年々短くなっていますよ」）
- 年収や待遇の質問には、業界水準と比較しても安定していることや、資格手当によるアップサイドを説明する。
- 最終的には「一度、会社説明会で詳しい話を聞いてみませんか？」「現場の雰囲気を見てみませんか？」とエントリーへ誘導する。

【禁止事項】
- 嘘や誇張は言わない。
- 他社を批判しない。
`;