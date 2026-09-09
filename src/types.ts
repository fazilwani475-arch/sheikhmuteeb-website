export type Language = 'en' | 'ar' | 'ur';

export interface TranslationData {
  nav: {
    about: string;
    education: string;
    vision: string;
    values: string;
    journey: string;
    library: string;
    quote: string;
    contact: string;
  };
  hero: {
    arabicName: string;
    englishName: string;
    urduName: string;
    scholarRole: string;
    englishSubtitle: string;
    urduSubtitle: string;
    btnJourney: string;
    btnEducation: string;
    btnVision: string;
    btnContact: string;
    statusBadge1: string;
    statusBadge2: string;
  };
  about: {
    sectionTitle: string;
    sectionSubtitle: string;
    englishBio: string;
    arabicBio: string;
    urduBio: string;
    studentFocusTitle: string;
    studentFocusDesc: string;
  };
  education: {
    sectionTitle: string;
    sectionSubtitle: string;
    salafiaTitle: string;
    salafiaStatus: string;
    salafiaArabic: string;
    salafiaUrdu: string;
    salafiaDesc: string;
    ignouTitle: string;
    ignouStatus: string;
    ignouArabic: string;
    ignouUrdu: string;
    ignouDesc: string;
  };
  futureVision: {
    quranicHeading: string;
    sectionSubtitle: string;
    englishText: string;
    arabicText: string;
    urduText: string;
    aspirationTag: string;
    madinahGoalTitle: string;
    phdGoalTitle: string;
  };
  values: {
    sectionTitle: string;
    sectionSubtitle: string;
    items: Array<{
      arabic: string;
      english: string;
      urdu: string;
      descEn: string;
      descUr: string;
    }>;
  };
  journey: {
    sectionTitle: string;
    sectionSubtitle: string;
    milestones: Array<{
      id: string;
      title: string;
      titleAr: string;
      titleUr: string;
      desc: string;
      descAr: string;
      descUr: string;
      status: 'completed' | 'current' | 'future';
      period: string;
    }>;
  };
  library: {
    sectionTitle: string;
    sectionSubtitle: string;
    exploreBooks: string;
  };
  quote: {
    arabicVerse: string;
    surahInfo: string;
    english: string;
    urdu: string;
  };
  contact: {
    sectionTitle: string;
    sectionSubtitle: string;
    emailLabel: string;
    phoneLabel: string;
    handleLabel: string;
    sendMessageTitle: string;
    namePlaceholder: string;
    emailPlaceholder: string;
    subjectPlaceholder: string;
    messagePlaceholder: string;
    sendButton: string;
    successMessage: string;
  };
  footer: {
    nameAr: string;
    nameEn: string;
    role: string;
    motto: string;
    rights: string;
  };
}

export interface LibraryBook {
  id: string;
  titleAr: string;
  titleEn: string;
  author: string;
  discipline: string;
  disciplineAr: string;
  summaryEn: string;
  summaryAr: string;
  summaryUr: string;
  level: string;
  tags: string[];
}
