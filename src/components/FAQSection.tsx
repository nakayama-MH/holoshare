'use client';

import React, { useState } from 'react';
import styles from './FAQSection.module.scss';

interface FAQItem {
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  {
    question: 'HoloShareとは何ですか？',
    answer: 'HoloShare（ホロシェア）は、VR/XR技術を活用して営業活動を革新するソリューションです。実物大の製品をその場に表示したり、リアルタイムでカスタマイズ提案を行うことができ、商談化率が従来の2倍になる効果があります。'
  },
  {
    question: 'どのような業界で活用できますか？',
    answer: '製造業・機械業界、建設業・住宅業界を中心に、大型製品や複雑な製品を扱う様々な業界で活用いただけます。\n• 展示会での製品展示\n• 営業先でのデモンストレーション\n• オンライン商談\nなど、幅広いシーンで利用可能です。'
  },
  {
    question: '導入にはどのくらいの費用がかかりますか？',
    answer: 'お客様の課題や活用シーンによって最適なプランをご提案いたします。まずは無料相談にて、貴社の状況をヒアリングさせていただき、具体的な活用イメージと概算費用をご案内いたします。'
  },
  {
    question: '既存のCADデータやBIMデータは活用できますか？',
    answer: 'はい、既存のCADデータ（STEP、IGES等）やBIMデータ、一般的な3Dフォーマット（FBX、OBJ等）をそのまま活用できます。営業だけでなく、様々な用途に横展開可能で、使えば使うほど投資効果が高まります。'
  },
  {
    question: 'どのような効果が期待できますか？',
    answer: '商談化率が従来の2倍に向上する効果があります。また、展示会ブース設営コストを83%削減（300万円→50万円）、実機輸送費を100%削減（50万円→0円）など、大幅なコスト削減も実現できます。'
  },
  {
    question: '営業担当者でも操作できますか？',
    answer: 'はい、直感的な操作で誰でも簡単に使えます。特別な技術知識は不要で、タブレットやスマートフォンでも操作可能です。導入時には操作トレーニングも提供しています。'
  },
  {
    question: 'HoloShareの導入期間はどのくらいですか？',
    answer: '導入期間は通常2〜4週間程度です。既存の3Dデータがある場合は短縮可能です。ヒアリング→ご提案→お見積り→導入という流れで、貴社の状況に応じて柔軟に対応いたします。'
  },
  {
    question: 'VRゴーグルは購入する必要がありますか？',
    answer: 'VRゴーグルのレンタルプランもご用意しております。Meta Quest 3などの最新デバイスを、展示会期間中のみのレンタルや、月額レンタルでご利用いただけます。購入とレンタル、どちらが最適かご相談に応じます。'
  },
  {
    question: '商談化率2倍の根拠は何ですか？',
    answer: '導入企業様の実績に基づいています。VR体験により顧客が製品を「自分ごと化」できるため、カタログや動画のみの提案と比較して、具体的な検討・購買意欲が大幅に向上します。展示会での名刺獲得数も平均2倍以上になっています。'
  },
  {
    question: '展示会コスト83%削減はどのように実現しますか？',
    answer: '従来の展示会ブース設営費300万円に対し、HoloShareを活用したVR体験ブースは約50万円で設営可能です。実機輸送費（50万円/回）、サンプル発送代も削減でき、初回のみの3Dモデリング費用で繰り返し活用できるため、長期的にはさらに大きなコスト削減が実現します。'
  },
  {
    question: 'HoloShareとメタバースの違いは何ですか？',
    answer: 'HoloShareは、VR空間に相手を入れるメタバースとは異なり、現実の場所で実物大の3Dモデルを体験できるMR/XR技術です。相手にVRゴーグルを装着してもらう必要なく、タブレットやスマートフォンでも体験可能。導入ハードルが低く、すぐに営業活動で活用できます。'
  },
  {
    question: '対応している3Dファイル形式を教えてください',
    answer: 'STEP、IGES、STL、OBJ、FBX、glTF、USDZ等の主要な3Dフォーマットに対応しています。CADデータ（SolidWorks、CATIA、AutoCAD等）やBIMデータ（Revit、ArchiCAD等）も変換可能です。対応形式についてはお気軽にお問い合わせください。'
  },
  {
    question: 'HoloShareは海外でも使えますか？',
    answer: 'はい、世界中どこでもご利用いただけます。インターネット接続があれば、海外の展示会や海外顧客へのリモート商談でも活用可能です。多言語対応のUIカスタマイズも承っております。'
  },
  {
    question: 'ガウシアンスプラッティングとは何ですか？',
    answer: 'ガウシアンスプラッティングは、最新の3D再構成技術です。写真や動画から高品質な3Dモデルを生成でき、従来のフォトグラメトリより高速かつリアルな表現が可能です。HoloShareでは、この技術を活用した3Dコンテンツ制作もサポートしています。'
  },
  {
    question: '無料相談では何ができますか？',
    answer: '無料相談では、貴社の課題や営業シーンをヒアリングし、HoloShareの具体的な活用イメージをご提案します。実際のVRデモ体験も可能です。オンラインまたは対面（大阪・東京）で承っております。所要時間は約30〜60分です。'
  }
];

const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <section id="faq" className={styles.faqSection}>
      <div className={styles.backgroundText}>FAQ</div>
      <div className={styles.container}>
        <h2 className={styles.title}>
          よくある<span className={styles.highlight}>質問</span>
        </h2>
        <p className={styles.subtitle}>皆様からいただいたよくある質問をご紹介します</p>

        <div className={styles.faqList}>
          {faqData.map((faq, index) => (
            <div key={index} className={styles.faqItem}>
              <div
                className={styles.faqQuestion}
                onClick={() => toggleFAQ(index)}
              >
                <div className={styles.questionContent}>
                  <div className={styles.qIcon}>Q</div>
                  <span className={styles.questionText}>{faq.question}</span>
                </div>
                <div className={styles.toggleIcon}>
                  {openIndex === index ? '▲' : '▼'}
                </div>
              </div>
              <div className={`${styles.faqAnswerWrapper} ${openIndex === index ? styles.open : ''}`}>
                <div className={styles.faqAnswer}>
                  {faq.answer.split('\n').map((line, i) => (
                    <React.Fragment key={i}>
                      {line}
                      {i < faq.answer.split('\n').length - 1 && <br />}
                    </React.Fragment>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className={styles.colorStripe}></div>
    </section>
  );
};

export default FAQSection;
