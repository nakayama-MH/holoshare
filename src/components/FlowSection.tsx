'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import styles from './FlowSection.module.scss';

const steps = [
  {
    number: 'STEP1',
    color: 'cyan',
    title: 'ヒアリング',
    description: '貴社の課題や状況を丁寧<br />にヒアリング',
    image: '/HS_sozai_process_01.png',
    alt: 'HoloShare導入STEP1 - 貴社の課題をヒアリング',
  },
  {
    number: 'STEP2',
    color: 'orange',
    title: 'ご提案',
    description: '具体的な活用イメージを<br />ご提案',
    image: '/HS_sozai_process_02.png',
    alt: 'HoloShare導入STEP2 - VR活用の具体的なご提案',
  },
  {
    number: 'STEP3',
    color: 'cyan',
    title: 'お見積り',
    description: 'ご提案内容を基に概算費<br />用をご案内',
    image: '/HS_sozai_process_03.png',
    alt: 'HoloShare導入STEP3 - 概算費用のお見積り',
  },
];

const StepCard: React.FC<{ step: typeof steps[0] }> = ({ step }) => (
  <div className={styles.stepCard}>
    <div className={`${styles.stepHeader} ${styles[step.color]}`}>
      <span className={styles.stepNumber}>{step.number}</span>
    </div>
    <div className={styles.stepContent}>
      <h3 className={styles.stepTitle}>{step.title}</h3>
      <p className={styles.stepDescription} dangerouslySetInnerHTML={{ __html: step.description }} />
      <div className={styles.stepImage}>
        <Image
          src={step.image}
          alt={step.alt}
          fill
          style={{ objectFit: 'cover' }}
        />
      </div>
    </div>
  </div>
);

const FlowSection: React.FC = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 767);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <section id="flow" className={styles.flowSection}>
      <div className={styles.backgroundText}>CASE STUDY</div>
      <div className={styles.container}>
        <h2 className={styles.title}>
          <span className={styles.highlight}>導入</span>の流れ
        </h2>
        <p className={styles.subtitle}>まずは無料相談から！</p>
        <p className={styles.subtitle}>貴社の状況に応じて、柔軟にご提案いたします。</p>

        {isMobile ? (
          <div className={styles.swiperContainer}>
            <Swiper
              spaceBetween={16}
              slidesPerView={1}
              className={styles.swiper}
            >
              {steps.map((step, index) => (
                <SwiperSlide key={index}>
                  <StepCard step={step} />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        ) : (
          <div className={styles.stepsContainer}>
            {steps.map((step, index) => (
              <React.Fragment key={index}>
                <StepCard step={step} />
                {index < steps.length - 1 && <div className={styles.arrow}>»</div>}
              </React.Fragment>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default FlowSection;
