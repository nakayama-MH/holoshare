import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://holoshare.jp'),

  // 基本メタデータ
  title: {
    default: 'HoloShare（ホロシェア）| VR/XR営業DX - 展示会・商談を「体験」に変える | Meta Heroes',
    template: '%s | HoloShare - VR/XR営業DXソリューション',
  },
  description: 'HoloShare（ホロシェア）は、VR/XR技術で営業活動を革新するソリューション。実物大の製品をVR表示、リアルタイムカスタマイズ提案で商談化率2倍に。展示会コスト83%削減、CAD/BIMデータ活用で製造業・建設業の営業DXを実現。無料相談受付中。',
  keywords: [
    // ブランド・製品
    'HoloShare',
    'ホロシェア',
    'Meta Heroes',
    // 技術・ソリューション
    'VR営業',
    'XR営業',
    '営業DX',
    '体験営業',
    'VR営業ツール',
    'XR営業支援',
    'MR営業ソリューション',
    'バーチャルショールーム',
    // 展示会・イベント
    '展示会VR',
    'VR展示会',
    '展示会VRデモ',
    'バーチャル展示会',
    '展示会ブース削減',
    // 商談・営業効率
    '商談化率向上',
    'リアルタイムカスタマイズ',
    '遠隔商談',
    'オンライン商談VR',
    '営業効率化ツール',
    // データ活用
    'CADデータVR化',
    'BIMデータ活用',
    '3Dモデリング営業',
    '製品VR化サービス',
    '3DモデルVR変換',
    // 業界特化
    '製造業DX',
    '建設業DX',
    '大型機械VR',
    '住宅展示VR',
    'BtoB VR営業',
    '法人向けVRソリューション',
    '工場機械VR',
    '住宅VRショールーム',
    '建築VRプレゼンテーション',
    // 技術
    'ガウシアンスプラッティング',
    'フォトグラメトリ',
    '360度動画',
    // コスト・効果
    'コスト削減',
    'Meta Quest 営業活用'
  ],

  // 作成者情報
  authors: [{ name: 'Meta Heroes', url: 'https://meta-heroes.co.jp/' }],
  creator: 'Meta Heroes',
  publisher: 'Meta Heroes',

  // カテゴリ
  category: 'technology',

  // Robots設定
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },

  // Open Graph (Facebook, LinkedIn等)
  openGraph: {
    type: 'website',
    locale: 'ja_JP',
    url: 'https://holoshare.jp/',
    siteName: 'HoloShare（ホロシェア）- VR/XR営業DXソリューション',
    title: 'HoloShare（ホロシェア）| VR/XR営業DX - 展示会・商談を「体験」に変える',
    description: 'VR/XR技術で営業活動を革新。実物大の製品をその場に表示、リアルタイムカスタマイズ提案で商談化率2倍に。展示会コスト83%削減。製造業・建設業の営業DXを実現するHoloShare。',
    images: [
      {
        url: '/key_visual.png',
        width: 1200,
        height: 630,
        alt: 'HoloShare - VR/XR技術で営業を体験に変える',
      },
      {
        url: '/HS_logo.png',
        width: 800,
        height: 600,
        alt: 'HoloShareロゴ',
      },
    ],
  },

  // Twitter Card
  twitter: {
    card: 'summary_large_image',
    site: '@MetaHeroes',
    creator: '@MetaHeroes',
    title: 'HoloShare（ホロシェア）| VR/XR営業DX - 展示会・商談を「体験」に変える',
    description: 'VR/XR技術で営業活動を革新。商談化率2倍、展示会コスト83%削減。製造業・建設業の営業DXを実現するHoloShare。無料相談受付中。',
    images: ['/key_visual.png'],
  },

  // Canonical URL
  alternates: {
    canonical: 'https://holoshare.jp/',
  },

  // アイコン設定
  icons: {
    icon: [
      { url: '/HS_logo.png', type: 'image/png' },
    ],
    apple: [
      { url: '/HS_logo.png', sizes: '180x180', type: 'image/png' },
    ],
    shortcut: '/HS_logo.png',
  },

  // その他のメタ情報
  applicationName: 'HoloShare',
  referrer: 'origin-when-cross-origin',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },

  // 検証用（必要に応じてコメントアウト解除）
  // verification: {
  //   google: 'あなたのGoogle Search Console認証コード',
  //   yandex: 'あなたのYandex認証コード',
  //   yahoo: 'あなたのYahoo認証コード',
  // },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // 構造化データ（JSON-LD）の定義
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Meta Heroes",
    "url": "https://meta-heroes.co.jp/",
    "logo": "https://holoshare.jp/HS_logo.png",
    "description": "VR/XR技術を活用した営業DXソリューション「HoloShare」を提供",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "堂山町1-5 三共梅田ビル 8F",
      "addressLocality": "大阪市北区",
      "postalCode": "530-0027",
      "addressCountry": "JP"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "Sales",
      "availableLanguage": ["Japanese"]
    },
    "sameAs": [
      "https://holoshare.jp/"
    ]
  };

  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "HoloShare（ホロシェア）",
    "description": "VR/XR技術で営業活動を革新するソリューション。実物大の製品をVR表示、リアルタイムカスタマイズ提案で商談化率2倍、展示会コスト83%削減を実現。",
    "brand": {
      "@type": "Brand",
      "name": "Meta Heroes"
    },
    "offers": {
      "@type": "Offer",
      "availability": "https://schema.org/InStock",
      "price": "0",
      "priceCurrency": "JPY",
      "priceValidUntil": "2026-12-31",
      "url": "https://holoshare.jp/"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "reviewCount": "50"
    },
    "image": "https://holoshare.jp/key_visual.png",
    "category": "Business Software",
    "applicationCategory": "BusinessApplication",
    "operatingSystem": "Web-based"
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "HoloShare（ホロシェア）",
    "url": "https://holoshare.jp/",
    "description": "VR/XR技術で営業活動を革新するソリューション",
    "publisher": {
      "@type": "Organization",
      "name": "Meta Heroes"
    },
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://holoshare.jp/?s={search_term_string}",
      "query-input": "required name=search_term_string"
    }
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "HoloShareとは何ですか？",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "HoloShare（ホロシェア）は、VR/XR技術を活用して営業活動を革新するソリューションです。実物大の製品をその場に表示したり、リアルタイムでカスタマイズ提案を行うことができ、商談化率が従来の2倍になる効果があります。"
        }
      },
      {
        "@type": "Question",
        "name": "どのような業界で活用できますか？",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "製造業・機械業界、建設業・住宅業界を中心に、大型製品や複雑な製品を扱う様々な業界で活用いただけます。展示会での製品展示、営業先でのデモンストレーション、オンライン商談など、幅広いシーンで利用可能です。"
        }
      },
      {
        "@type": "Question",
        "name": "導入にはどのくらいの費用がかかりますか？",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "お客様の課題や活用シーンによって最適なプランをご提案いたします。まずは無料相談にて、貴社の状況をヒアリングさせていただき、具体的な活用イメージと概算費用をご案内いたします。"
        }
      },
      {
        "@type": "Question",
        "name": "既存のCADデータやBIMデータは活用できますか？",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "はい、既存のCADデータ（STEP、IGES等）やBIMデータ、一般的な3Dフォーマット（FBX、OBJ等）をそのまま活用できます。営業だけでなく、様々な用途に横展開可能で、使えば使うほど投資効果が高まります。"
        }
      },
      {
        "@type": "Question",
        "name": "どのような効果が期待できますか？",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "商談化率が従来の2倍に向上する効果があります。また、展示会ブース設営コストを83%削減（300万円→50万円）、実機輸送費を100%削減（50万円→0円）など、大幅なコスト削減も実現できます。"
        }
      },
      {
        "@type": "Question",
        "name": "営業担当者でも操作できますか？",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "はい、直感的な操作で誰でも簡単に使えます。特別な技術知識は不要で、タブレットやスマートフォンでも操作可能です。導入時には操作トレーニングも提供しています。"
        }
      },
      {
        "@type": "Question",
        "name": "HoloShareの導入期間はどのくらいですか？",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "導入期間は通常2〜4週間程度です。既存の3Dデータがある場合は短縮可能です。ヒアリング→ご提案→お見積り→導入という流れで、貴社の状況に応じて柔軟に対応いたします。"
        }
      },
      {
        "@type": "Question",
        "name": "VRゴーグルは購入する必要がありますか？",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "VRゴーグルのレンタルプランもご用意しております。Meta Quest 3などの最新デバイスを、展示会期間中のみのレンタルや、月額レンタルでご利用いただけます。購入とレンタル、どちらが最適かご相談に応じます。"
        }
      },
      {
        "@type": "Question",
        "name": "商談化率2倍の根拠は何ですか？",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "導入企業様の実績に基づいています。VR体験により顧客が製品を「自分ごと化」できるため、カタログや動画のみの提案と比較して、具体的な検討・購買意欲が大幅に向上します。展示会での名刺獲得数も平均2倍以上になっています。"
        }
      },
      {
        "@type": "Question",
        "name": "展示会コスト83%削減はどのように実現しますか？",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "従来の展示会ブース設営費300万円に対し、HoloShareを活用したVR体験ブースは約50万円で設営可能です。実機輸送費（50万円/回）、サンプル発送代も削減でき、初回のみの3Dモデリング費用で繰り返し活用できるため、長期的にはさらに大きなコスト削減が実現します。"
        }
      },
      {
        "@type": "Question",
        "name": "HoloShareとメタバースの違いは何ですか？",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "HoloShareは、VR空間に相手を入れるメタバースとは異なり、現実の場所で実物大の3Dモデルを体験できるMR/XR技術です。相手にVRゴーグルを装着してもらう必要なく、タブレットやスマートフォンでも体験可能。導入ハードルが低く、すぐに営業活動で活用できます。"
        }
      },
      {
        "@type": "Question",
        "name": "対応している3Dファイル形式を教えてください",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "STEP、IGES、STL、OBJ、FBX、glTF、USDZ等の主要な3Dフォーマットに対応しています。CADデータ（SolidWorks、CATIA、AutoCAD等）やBIMデータ（Revit、ArchiCAD等）も変換可能です。対応形式についてはお気軽にお問い合わせください。"
        }
      },
      {
        "@type": "Question",
        "name": "HoloShareは海外でも使えますか？",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "はい、世界中どこでもご利用いただけます。インターネット接続があれば、海外の展示会や海外顧客へのリモート商談でも活用可能です。多言語対応のUIカスタマイズも承っております。"
        }
      },
      {
        "@type": "Question",
        "name": "ガウシアンスプラッティングとは何ですか？",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "ガウシアンスプラッティングは、最新の3D再構成技術です。写真や動画から高品質な3Dモデルを生成でき、従来のフォトグラメトリより高速かつリアルな表現が可能です。HoloShareでは、この技術を活用した3Dコンテンツ制作もサポートしています。"
        }
      },
      {
        "@type": "Question",
        "name": "無料相談では何ができますか？",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "無料相談では、貴社の課題や営業シーンをヒアリングし、HoloShareの具体的な活用イメージをご提案します。実際のVRデモ体験も可能です。オンラインまたは対面（大阪・東京）で承っております。所要時間は約30〜60分です。"
        }
      }
    ]
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "ホーム",
        "item": "https://holoshare.jp/"
      }
    ]
  };

  // LocalBusiness スキーマ（ローカルSEO強化）
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://holoshare.jp/#localbusiness",
    "name": "Meta Heroes - HoloShare",
    "description": "VR/XR技術を活用した営業DXソリューション「HoloShare（ホロシェア）」を提供。製造業・建設業の営業効率化、展示会コスト削減を実現。",
    "url": "https://holoshare.jp/",
    "image": "https://holoshare.jp/HS_logo.png",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "堂山町1-5 三共梅田ビル 8F",
      "addressLocality": "大阪市北区",
      "addressRegion": "大阪府",
      "postalCode": "530-0027",
      "addressCountry": "JP"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 34.7055,
      "longitude": 135.5023
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        "opens": "09:00",
        "closes": "18:00"
      }
    ],
    "priceRange": "$$",
    "areaServed": {
      "@type": "Country",
      "name": "Japan"
    }
  };

  // HowTo スキーマ（導入ステップのリッチスニペット）
  const howToSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": "HoloShare（ホロシェア）導入の流れ",
    "description": "VR/XR営業DXソリューション「HoloShare」を導入するための3ステップガイド。無料相談からお見積りまで、貴社に最適なプランをご提案します。",
    "totalTime": "P14D",
    "estimatedCost": {
      "@type": "MonetaryAmount",
      "currency": "JPY",
      "value": "0",
      "description": "初回相談・見積りは無料"
    },
    "step": [
      {
        "@type": "HowToStep",
        "position": 1,
        "name": "ヒアリング",
        "text": "貴社の課題や状況を丁寧にヒアリングします。営業活動における課題、展示会での目標、対象製品などをお聞かせください。",
        "url": "https://holoshare.jp/#flow",
        "image": "https://holoshare.jp/HS_sozai_process_01.png"
      },
      {
        "@type": "HowToStep",
        "position": 2,
        "name": "ご提案",
        "text": "ヒアリング内容を基に、HoloShareの具体的な活用イメージをご提案します。実際のVRデモ体験もこの段階で可能です。",
        "url": "https://holoshare.jp/#flow",
        "image": "https://holoshare.jp/HS_sozai_process_02.png"
      },
      {
        "@type": "HowToStep",
        "position": 3,
        "name": "お見積り",
        "text": "ご提案内容を基に概算費用をご案内します。3Dモデリング費用、VRゴーグルレンタル、導入サポート等を含めた総合的なお見積りを提示します。",
        "url": "https://holoshare.jp/#flow",
        "image": "https://holoshare.jp/HS_sozai_process_03.png"
      }
    ]
  };

  // Service スキーマ（サービス詳細）
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "VR/XR営業DXソリューション",
    "name": "HoloShare（ホロシェア）",
    "description": "VR/XR技術を活用した営業DXソリューション。展示会でのVR製品展示、営業先でのリアルタイムカスタマイズ提案、リモート商談での3Dデモンストレーションを実現。商談化率2倍、展示会コスト83%削減。",
    "provider": {
      "@type": "Organization",
      "name": "Meta Heroes",
      "url": "https://meta-heroes.co.jp/"
    },
    "areaServed": {
      "@type": "Country",
      "name": "Japan"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "HoloShareサービスメニュー",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "3Dモデリング・VRコンテンツ制作",
            "description": "CAD/BIMデータからVRコンテンツを制作。STEP、IGES、FBX等の主要フォーマットに対応。"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "展示会VRブース設営",
            "description": "展示会でのVR体験ブース設営。従来比83%のコスト削減を実現。"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "VRゴーグルレンタル",
            "description": "Meta Quest 3等の最新VRデバイスをレンタル。展示会期間中のみ、月額等柔軟に対応。"
          }
        }
      ]
    },
    "audience": {
      "@type": "Audience",
      "audienceType": "製造業・機械業界、建設業・住宅業界の営業部門、マーケティング部門"
    }
  };

  return (
    <html lang="ja">
      <head>
        <link rel="stylesheet" href="/aivo-chatbot.css" />

        {/* 構造化データ（JSON-LD） - SEO & LLMO最適化 */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(productSchema),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(websiteSchema),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(faqSchema),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(breadcrumbSchema),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(localBusinessSchema),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(howToSchema),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(serviceSchema),
          }}
        />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {children}
        <Script src="/aivo-chatbot.js" strategy="lazyOnload" />
      </body>
    </html>
  );
}
