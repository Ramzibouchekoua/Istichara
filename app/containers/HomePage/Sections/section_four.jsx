import React from 'react';
import { Row, Col } from 'antd';

const fields = [
  {
    index: 1,
    subtext: 'قانون الأُسرة',
    text: 'زواج ، نفقة ، طلاق ، حضانة ، نسب ، ميراث ، وصيّة ، هبة ...',
    icon: 'touch-id-approved-1.png',
  },
  {
    index: 2,
    subtext: 'حـــــــــــــادث',
    text: 'حادث مرور ، تسرّب مياه ، حريق ، حادث شغل…',
    icon: 'seo-search.png',
  },
  {
    index: 3,
    subtext: 'إستخلاص دين',
    text: 'شيك ، كمبيالة ، إعتراف بدين ، دين تعاقدي …',
    icon: 'money-wallet.png',
  },
  {
    index: 4,
    subtext: 'قــــانون جزائي',
    text: 'تحيّل ، سرقة ، إعتداء جسدي ،  عنف ضد المرأة أو الطفل …',
    icon: 'user-question.png',
  },
  {
    index: 5,
    subtext: 'قــــــــــانون الشغل',
    text: 'إبرام عقد شغل  ، طرد ، إستقالة، حادث شغل ، ضمان إجتماعي…',
    icon: '',
  },
  {
    index: 6,
    subtext: 'قانون الأكرية',
    text: 'كراء (سكني ، تجاري) أصل تجاري (بيع ، كراء ، رهن ) …',
    icon: '',
  },
  {
    index: 7,
    subtext: 'قانون عقّاري',
    text: 'بيع ، وعد بيع ، رهن، التسجيل ، ترسيم الملكية، تحيين ، تخصيص...',
    icon: '',
  },
  {
    index: 8,
    subtext: 'نزاعات الجوار',
    text: 'إستحقاق الملكية ، حوز ، كف الشغب ، رفع المضرّة …',
    icon: '',
  },
  {
    index: 9,
    subtext: 'قانون التأمين',
    text:
      'تأمين المسؤولية المدنية ، التأمين على الحياة ، التأمين على المرض ، التأمين البري / البحري…',
    icon: '',
  },
  {
    index: 10,
    subtext: 'القانون البنكي',
    text: 'عقد قرض ، إعادة جدولة الديون ، حساب جاري، مسؤولية بنكيّة  ، عقلة …',
    icon: '',
  },
  {
    index: 11,
    subtext: 'القانون الجبائي',
    text: 'تصاريح ، مراجعة جبائية، توظيف إجباري  ، بطاقة إلزام…',
    icon: '',
  },
  {
    index: 12,
    subtext: 'قانون الشركات التجارية',
    text:
      'تأسيس شركة ، الترفيع في رأس المال  ، إنقاذ الشركات التي تمرّ بصعوبات إقتصادية …',
    icon: '',
  },
];

const section_four = () => {
  return (
    <div className="section-four">
      <div className="title">مجالات الإختصاص</div>
      <div className="subtitle">إستعن بمحامي مختصّ في أيّ مجال من المجالات القانونيّة التي تختارها </div>
      <Row>
        {fields.map(e => (
          <Col xs={24} md={12} lg={6} key={e.index}>
            <div className="desc">
              <div className="desc_icon">
                {/* <img src={require(`../../../assets/images/${e.icon}`)} alt="" /> */}
              </div>
              <div className="desc_text">{e.subtext}</div>
              <div className="desc_subtitle">{e.text}</div>
            </div>
          </Col>
        ))}
      </Row>
      <button>التسجيل</button>
    </div>
  );
};

export default section_four;
