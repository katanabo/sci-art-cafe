import { Page, NavItem, EventInfo } from './types';

export const NAVIGATION_ITEMS: NavItem[] = [
  { page: Page.HOME, label: 'HOME' },
  { page: Page.ABOUT, label: 'ABOUT' },
  { page: Page.EVENT, label: 'EVENT' },
  { page: Page.CONTACT, label: 'CONTACT' },
];

export const CAFE_NAME = "科学と音楽のカフェ";
// Updated catchphrase to allow for <br/> in HomePage
export const CAFE_CATCHPHRASE = "科学と音楽が交わる特別な空間。知的好奇心と感性が共鳴する、新しいカフェ体験";
export const CAFE_SUB_CATCHPHRASE = "大学の近くで、学びと癒しのひとときを。";

export const ABOUT_TEXT_TITLE = "科学と音楽の融合";
export const ABOUT_TEXT_P1 = "当カフェは、科学的思考と音楽的感性が交わる特別な空間です。大学キャンパス近くに位置し、学生や研究者、音楽愛好家が集い、新たな発見や創造が生まれる場所を目指しています。";
export const ABOUT_TEXT_P2 = "物理学の法則を説明するセミナーから、クラシック音楽の演奏会まで、知的好奇心を刺激するイベントを定期的に開催しています。美味しいコーヒーと共に、心地よい時間をお過ごしください。";

export const EVENT_PAGE_TITLE = "イベント情報";
export const EVENT_PAGE_DESCRIPTION = "当カフェで開催される、または予定されているイベントの一覧です。科学セミナー、音楽ライブ、ワークショップなど、多彩なプログラムをご用意しています。";

export const CONTACT_PAGE_TITLE = "お問い合わせ";