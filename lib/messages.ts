// すべてのテキストコンテンツを管理するメッセージファイル
// All text content is managed in this messages file

export const messages = {
  // レストラン基本情報
  restaurant: {
    name: "La Baie",
    concept: {
      title: "ラベについて",
      description: [
        "ラベは横浜山手に店舗を構えるフランス料理のお店です。",
        "ラベは、お客様おひとりおひとりを、大切にお迎えしたいと考えています。",
        "ですから画一的な、おもてなしを良しとしていません。ホームパーティの時に、それぞれの友人の好みを忘れないように、その方のセンスやライフスタイルに合わせるように、ラベはおもてなしをプランいたします。",
        "ラベのドアを開けてお迎えする時、「いらっしゃませ」とは申し上げないことが多いのです。よくいらっしゃいました、の思いを込めて「こんにちは」「こんばんは」と笑顔でお迎えします。",
        "毎日来てくださる方も、初めていらした方も、同じようにくつろいで過ごしていただきたい。それが、私たちのスタンスです。",
      ],
    },
    hero: {
      title: "La Baie",
      subtitle:
        "洗練されたフレンチ料理と上質な空間で\n特別なひとときをお過ごしください",
      ctaButton: "メニューを見る",
    },
  },

  // 建物について
  building: {
    title: "建物について",
    description: [
      "大航海時代以降、世界中に進出して行ったヨーロッパ人にとって、アジアの日差しは非常に強く感じられるものでした。",
      "そんな異国で心地よく過ごすために考え出された建築様式がコロニアルスタイル。真っ白な建物にベランダを廻らし、風通しが良くなるように工夫された住居は、アジアとヨーロッパ人のスタイルが融合したものといえるでしょう。",
      "都会に現れる、白い壁に大きなテラスをもった建物、そして屋根には日本瓦…明治41（1908）年に建てられた歴史ある建物です。",
      "その中で繰り広げられるフランス料理は、この建物の佇まいと同じく、フランス料理に和のテイストが融合されたもの。",
      "フランス、スイスと数々の3つ星レストランで修業を重ねたシェフが繰り広げる料理のコンセプトは、食材の融合。すなわち美味しい食材に国境をつくらないこと。",
      "日本とフランスの料理を融合させた独自のコロニアルスタイルです。",
      "フランスの食材もふんだんに使えば、フレンチではタブーとされる醤油がゼリーになって登場する…",
      "100年の時を経て、さらなるフランスと日本の融合をその目で確かめて下さい。",
    ],
    colonialStyle: {
      title: "コロニアルスタイルとは？",
      description:
        "17～18世紀にイギリス・スペイン・オランダなどの植民地に発達した建築・工芸の様式。本国の様式を模倣し、植民地向けの実用性を加味したもの。",
    },
  },

  // 様々なシーンでのご利用
  scenes: {
    title: "様々なシーンでのご利用",
    subtitle: "当店が考えているお客様の様々な利用方法・シーンを紹介します",
    items: [
      {
        title: "ビジネスや接待で",
        description:
          "重要なお客様をお招きする際にご利用いただきたいと思います。",
        icon: "business",
        image: "/images/17.jpg",
      },
      {
        title: "家族のお祝い事",
        description:
          "還暦・入学・就職などの様々な家族でのお祝い事に利用いただきたいと思います。",
        icon: "celebration",
        image: "/images/02.jpg",
      },
      {
        title: "結婚式・結納",
        description: "結婚式や結納の際にご利用いただきたいと思います。",
        icon: "wedding",
        image: "/images/48.jpg",
      },
      {
        title: "記念日に",
        description:
          "結婚記念日初め様々な記念日ごとにご利用いただきたいと思います。（オリジナルプランも承ります）",
        icon: "anniversary",
        image: "/images/21.jpg",
      },
      {
        title: "各種パーティーなど",
        description: "貸切パーティーや展示会などでのご利用もしていただけます。",
        icon: "party",
        image: "/images/23.jpg",
      },
    ],
  },

  // インフォメーション
  info: {
    hours: {
      lunch: "11:30～14:00",
      dinner: "17:30～21:00",
      display: "ランチ（11:30～14:00）・ディナー（17:30～21:00）",
    },
    closed: "月曜日（月曜祝日の場合火曜日）",
    parking: {
      available: true,
      count: "10台",
      display: "パーキングあり（10台）",
    },
    phone: "078-262-6650",
    address: {
      postal: "〒000-0000",
      full: "神奈川県横浜市山手0-0-0",
      display: "神奈川県横浜市山手0-0-0",
    },
    email: "info@la-baie.com",
    access: {
      train: "JR山手線「山手駅」より徒歩5分",
      car: "首都高速3号横浜線「横浜IC」より5分",
    },
  },

  // ブログ
  blog: {
    title: "ブログ",
    recentEntries: [
      {
        date: "2024/04/13",
        title: "横浜山手より。",
      },
      {
        date: "2024/04/11",
        title: "2011 ラベシェフ日記。No01",
      },
      {
        date: "2024/04/07",
        title: "春のメニュー。",
      },
    ],
  },

  // 予約・問い合わせ
  reservation: {
    title: "予約・問い合わせ",
    description: "ご予約・お問い合わせはお気軽にどうぞ",
    ctaButton: "予約フォームへ",
    contactButton: "お問い合わせ",
  },

  // 特徴
  features: {
    title: "La Baie の特徴",
    subtitle: "私たちが大切にしていること",
    moreLink: { label: "More", href: "/about" },
    items: [
      {
        title: "厳選食材",
        description: "最高品質の食材を厳選し、季節の味わいをお届けします",
        image: "/images/19.jpg",
      },
      {
        title: "シェフの技術",
        description: "経験豊富なシェフによる洗練されたフレンチ料理",
        image: "/images/52.jpg",
      },
      {
        title: "心のこもったサービス",
        description: "お客様ひとりひとりに寄り添う丁寧なサービス",
        image: "/images/11.jpg",
      },
      {
        title: "特別な時間",
        description: "大切な人との特別なひとときを演出します",
        image: "/images/21.jpg",
      },
    ],
  },

  // おすすめ料理
  featuredDishes: {
    title: "おすすめ料理",
    subtitle: "厳選された食材と洗練された技術でお届けする特別な料理",
    items: [
      {
        name: "季節のコース",
        description: "旬の食材を活かした特別なコース料理",
        image: "/images/19.jpg",
      },
      {
        name: "シェフのおすすめ",
        description: "シェフが厳選した特別な一品",
        image: "/images/26.jpg",
      },
      {
        name: "デザートプレート",
        description: "手作りのスイーツとコーヒー",
        image: "/images/34.jpg",
      },
    ],
    viewDetails: "詳細を見る",
  },

  // ウェディングプラン
  wedding: {
    title: "ウェディング",
    subtitle:
      "特別な一日を、洗練された空間で\nお二人の思い出に残るウェディングをサポートします",
    plans: [
      {
        name: "ベーシックプラン",
        price: "¥50,000〜",
        capacity: "20〜40名",
        description: "シンプルで上品なウェディングプランです。",
        image: "/images/52.jpg",
        includes: [
          "ウェディングケーキ",
          "シャンパンサービス",
          "フラワーアレンジメント",
          "写真撮影スペース",
          "専属スタッフ",
        ],
      },
      {
        name: "スタンダードプラン",
        price: "¥80,000〜",
        capacity: "30〜60名",
        description: "充実した内容のスタンダードプランです。",
        image: "/images/10.jpg",
        includes: [
          "ウェディングケーキ",
          "シャンパンサービス",
          "フラワーアレンジメント",
          "写真撮影スペース",
          "専属スタッフ",
          "音楽演奏",
          "ドレスチェンジ対応",
        ],
      },
      {
        name: "プレミアムプラン",
        price: "¥120,000〜",
        capacity: "40〜80名",
        description: "最高級のサービスを提供するプレミアムプランです。",
        image: "/images/48.jpg",
        includes: [
          "ウェディングケーキ",
          "シャンパンサービス",
          "フラワーアレンジメント",
          "写真撮影スペース",
          "専属スタッフ",
          "音楽演奏",
          "ドレスチェンジ対応",
          "ビデオ撮影",
          "二次会対応",
        ],
      },
    ],
    servicesTitle: "含まれるサービス",
    venueTitle: "会場の様子",
    venueImages: [
      "/images/49.jpg",
      "/images/10.jpg",
      "/images/05.jpg",
      "/images/02.jpg",
    ],
  },

  // コース・料理
  course: {
    title: "コース・料理",
    subtitle:
      "厳選された食材と洗練された技術でお届けする\n特別なコース料理とアラカルトメニュー",
    tabs: {
      lunch: "ランチ",
      dinner: "ディナー",
      aLaCarte: "アラカルト",
    },
    items: {
      lunch: [
        {
          name: "ランチコース A",
          description: "前菜、メイン、デザート",
          price: "¥3,500",
          detail:
            "季節の前菜、お選びいただけるメイン料理、手作りのデザートが含まれます。",
          image: "/images/40.jpg",
        },
        {
          name: "ランチコース B",
          description: "前菜、メイン、スープ、デザート",
          price: "¥4,500",
          detail:
            "季節の前菜、スープ、お選びいただけるメイン料理、手作りのデザートが含まれます。",
          image: "/images/41.jpg",
        },
        {
          name: "プレミアムランチ",
          description: "特別なランチコース",
          price: "¥6,000",
          detail: "厳選された食材を使用した特別なランチコースです。",
          image: "/images/30.jpg",
        },
      ],
      dinner: [
        {
          name: "ディナーコース A",
          description: "5品コース",
          price: "¥8,000",
          detail: "前菜、スープ、魚料理、肉料理、デザートの5品コースです。",
          image: "/images/53.jpg",
        },
        {
          name: "ディナーコース B",
          description: "7品コース",
          price: "¥12,000",
          detail:
            "前菜、スープ、魚料理、肉料理、チーズ、デザート、コーヒーの7品コースです。",
          image: "/images/56.jpg",
        },
        {
          name: "シェフおまかせコース",
          description: "特別なコース",
          price: "¥15,000",
          detail: "シェフがその日の食材でお選びする特別なコースです。",
          image: "/images/54.jpg",
        },
      ],
      aLaCarte: [
        {
          name: "季節の前菜",
          description: "旬の食材を使用",
          price: "¥1,800",
          detail: "季節の食材を活かした前菜です。",
          image: "/images/54.jpg",
        },
        {
          name: "本日の魚料理",
          description: "新鮮な魚を使用",
          price: "¥3,500",
          detail: "その日仕入れた新鮮な魚を使用した料理です。",
          image: "/images/59.jpg",
        },
        {
          name: "本日の肉料理",
          description: "厳選された肉を使用",
          price: "¥4,500",
          detail: "厳選された肉を使用した料理です。",
          image: "/images/60.jpg",
        },
        {
          name: "手作りデザート",
          description: "シェフ手作りのスイーツ",
          price: "¥1,200",
          detail: "シェフが心を込めて作る手作りのデザートです。",
          image: "/images/45.jpg",
        },
      ],
    },
  },

  // ページメタデータとコンテンツ
  pages: {
    home: {
      title: "ホーム",
      description: "横浜山手のフランス料理レストラン La Baie",
      cta: {
        title: "特別なひとときを\nお過ごしください",
        description: "ご予約・お問い合わせはお気軽にどうぞ",
        menuButton: "メニューを見る",
        aboutButton: "店舗情報",
      },
    },
    course: {
      title: "コース・料理",
      description: "La Baie のコース料理とアラカルトメニューをご紹介します。",
      heading: "コース・料理",
      subtitle:
        "厳選された食材と洗練された技術でお届けする\n特別なコース料理とアラカルトメニュー",
    },
    wedding: {
      title: "ウェディング",
      description:
        "La Baie で特別なウェディングを。各種プランをご用意しております。",
      heading: "ウェディング",
      subtitle:
        "特別な一日を、洗練された空間で\nお二人の思い出に残るウェディングをサポートします",
    },
    about: {
      title: "店舗情報・アクセス",
      description: "La Baie の店舗情報、アクセス方法、営業時間をご案内します。",
      heading: "店舗情報・アクセス",
      subtitle: "La Baie へのアクセス方法と店舗情報をご案内します",
      aboutTitle: "La Baie について",
      interiorTitle: "店内の様子",
      basicInfoTitle: "基本情報",
      accessTitle: "交通アクセス",
      mapTitle: "地図",
      addressLabel: "住所",
      phoneLabel: "電話番号",
      emailLabel: "メール",
      hoursLabel: "営業時間",
      closedLabel: "定休日",
      trainLabel: "電車でお越しの場合",
      carLabel: "お車でお越しの場合",
    },
  },

  // ナビゲーション
  navigation: [
    { href: "/", label: "ホーム" },
    { href: "/course", label: "コース・料理" },
    { href: "/wedding", label: "ウェディング" },
    { href: "/about", label: "店舗情報・アクセス" },
  ],

  // フッター
  footer: {
    storeInfo: {
      title: "店舗情報",
    },
    menu: {
      title: "メニュー",
    },
    hours: {
      title: "営業時間",
    },
    copyright: (year: number) => `© ${year} La Baie. All rights reserved.`,
  },
} as const;
