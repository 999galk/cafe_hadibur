// ==========================================================================
//  כל התוכן של האתר במקום אחד.
//  רוצים לשנות טקסט / מחיר / שעה? עורכים כאן — לא צריך לגעת בשאר הקבצים.
//  שדות שמסומנים ב-TODO הם תוכן זמני שצריך להחליף בפרטים האמיתיים.
// ==========================================================================

// תמונות זמניות (placeholders) מ-Unsplash — יוחלפו בתמונות אמיתיות של המקום.
const IMG = {
  hero: 'https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&w=1600&q=70',
  vibe1: 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=900&q=70',
  vibe2: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=900&q=70',
  vibe3: 'https://images.unsplash.com/photo-1447933601403-0c6688de566e?auto=format&fit=crop&w=900&q=70',
  story: 'https://images.unsplash.com/photo-1461023058943-07fcbe16d735?auto=format&fit=crop&w=1000&q=70',
  beans: 'https://images.unsplash.com/photo-1559056199-641a0ac8b55e?auto=format&fit=crop&w=1000&q=70',
}

export const business = {
  name: 'קפה הדיבור',
  tagline: 'בית קפה ביתי ומזמין בלב פרדס חנה',
  // TODO: כתובת מדויקת
  address: 'פרדס חנה-כרכור',
  // TODO: טלפון
  phone: '000-0000000',
  // TODO: קישור וואטסאפ (https://wa.me/9725XXXXXXXX)
  whatsapp: '',
  instagram: 'https://www.instagram.com/cafe_hadibur/',
  facebook: 'https://www.facebook.com/Cafehadibur',
  // TODO: קישור Google Maps של העסק
  mapsUrl: 'https://www.google.com/maps/search/?api=1&query=קפה+הדיבור+פרדס+חנה',
}

// TODO: שעות פתיחה אמיתיות
export const hours = [
  { day: 'ראשון–חמישי', time: '07:00 – 20:00' },
  { day: 'שישי', time: '07:00 – 15:00' },
  { day: 'שבת', time: 'סגור' },
]

export const hero = {
  image: IMG.hero,
  eyebrow: 'פרדס חנה-כרכור',
  title: 'הַדִּיבּוּר',
  subtitle: 'קפה טוב, אנשים טובים, ושיחה שלא נגמרת.',
  ctaPrimary: { label: 'לתפריט', href: '#menu' },
  ctaSecondary: { label: 'איך מגיעים', href: '#contact' },
}

export const about = {
  title: 'האווירה שלנו',
  text: 'מקום קטן עם לב גדול. אצלנו נכנסים בתור אורחים ויוצאים בתור חברים — כוס קפה מדויקת, מאפה טרי, ופינה חמה לשבת בה בכל שעה של היום. זה הבית השני של פרדס חנה.',
  images: [IMG.vibe1, IMG.vibe2, IMG.vibe3],
}

// ----- תפריט -----
// שינוי מחיר / פריט? עורכים כאן. מחיקה של פריט — מוחקים את השורה שלו.
export const menu = {
  title: 'התפריט',
  note: 'התפריט מתעדכן לפי העונה. מחירים בשקלים.',
  categories: [
    {
      name: 'קפה',
      items: [
        { name: 'אספרסו', price: 9 },
        { name: 'הפוך', price: 13 },
        { name: 'אמריקנו', price: 12 },
        { name: 'מקיאטו', price: 11 },
        { name: 'קפה קר', price: 15 },
      ],
    },
    {
      name: 'רותחים ומתוקים',
      items: [
        { name: 'תה צמחים', price: 12 },
        { name: 'שוקו חם', price: 14 },
        { name: 'צ׳אי לאטה', price: 16 },
      ],
    },
    {
      name: 'מהמאפייה',
      items: [
        { name: 'קרואסון חמאה', price: 14 },
        { name: 'בורקס', price: 12 },
        { name: 'עוגת היום', price: 18 },
      ],
    },
  ],
}

export const story = {
  title: 'הסיפור של איציק',
  image: IMG.story,
  // TODO: לשכתב עם הסיפור האמיתי של איציק והמעבר מהצפון
  paragraphs: [
    'איציק הוא הלב הפועם של קפה הדיבור. עסק שפונה מהצפון ומצא בית חדש בפרדס חנה — ועם הרבה אהבה הפך לפינה שכולם מכירים ואוהבים.',
    'כשנכנסים, איציק תמיד שם: זוכר את ההזמנה הקבועה שלכם, שואל מה נשמע, ודואג שתצאו עם חיוך. זה בדיוק מה שהופך קפה לבית.',
  ],
}

export const coffee = {
  title: 'תערובת הפולים שלנו',
  image: IMG.beans,
  text: 'תערובת ייחודית: 70% ערביקה משובח מהרי קולומביה, גואטמלה וברזיל, ו-30% רובוסטה איכותי מהודו ואוגנדה. יחד עם קלייה ייחודית — ארומה מפתה, טעם מורכב עם נגיעות מתיקות, וטעם של עוד.',
}

// ----- כתבות -----
// TODO: להחליף בקישורים האמיתיים לכתבות שנעשו על המקום.
export const press = {
  title: 'כתבו עלינו',
  articles: [
    { source: 'שם המגזין / אתר', title: 'כותרת הכתבה על קפה הדיבור', url: '#' },
    { source: 'שם המגזין / אתר', title: 'כותרת כתבה נוספת', url: '#' },
  ],
}
