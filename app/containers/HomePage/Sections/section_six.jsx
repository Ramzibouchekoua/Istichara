import React from 'react';
import { Card, Row, Col } from 'antd';
import ReactHtmlParser from "react-html-parser"

const prices = [
  {
    index: 1,
    subtext: 'إستشارة',
    text: 'ستشارة  واحدة مكتوبة أو صوتية لمدة 20 دقيقة مع محامي مختصّ',
    price: '<span>29</span>دت/إستشارة',
    featured: false,
  },
  {
    index: 2,
    subtext: 'عرض :  3 إستشارات',
    text:
      '3 إستشارات مكتوبة أو صوتية  لمدة 20 دقيقة مع محامين مختصّين.العرض يبقى صالح لمدة سنة.',
    price: '69',
    featured: true,
  },
  {
    index: 3,
    subtext: 'عرض :  بلا حدود',
    text:
      'إستشارات  غير محدودة المدة مع  محامين مختصّين إمكانية إستشارة نفس المحامي عدة مرّات الإلتزام لمدة أدناها 6 أشهر',
    price: '99',
    featured: false,
  },
  {
    index: 4,
    subtext: 'عرض : على القياس',
    text:
      'ماذا تحتاج؟ مستخدمين متعددين؟ حزمة مكالمات مخصصة؟ يمكننا أن نوفر لكم عرضا على قياسكم',
    price: '',
    featured: false,
    custom:true
  },
];
const section_six = () => {
  return (
    <div className="section-six">
      {prices.map(e => (
        <Card className={e.featured && 'featured'} key={e.index}>
          <div className="desc">
            {e.featured && <button className="featured-btn">منصوح به</button>}
            <div className="desc_text">{e.subtext}</div>
            {e.custom || 
            <div className="desc_price">
             { ReactHtmlParser(e.price)}
             {/* {e.price} */}
            </div>
           }
            <div className="desc_subtitle">{e.text}</div>
            <button className={e.featured ? 'featured-sub-btn':'sub-btn'}>
              التسجيل
            </button>
          </div>
        </Card>
      ))}
    </div>
  );
};

export default section_six;
