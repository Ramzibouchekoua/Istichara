import React from 'react';
import { Card,Row,Col } from 'antd';

const testimonials = [
  {
    index: 1,
    subtext: 'ابراهيم رمضان — موظف حكومي',
    text:
      'إتّصل بمحامٍ مختصّ في أيّ مجال من المجالات القانونيّة لطرح إشكاليّتك. يمكنك طرح إشكاليّتك القانونيّة : إمّا بصورة كتابيّة أو عبر الهاتف.',
    icon: 'touch-id-approved-1.png',
  },
  {
    index: 2,
    subtext: 'ابراهيم رمضان — موظف حكومي',
    text:
      'إتّصل بمحامٍ مختصّ في أيّ مجال من المجالات القانونيّة لطرح إشكاليّتك. يمكنك طرح إشكاليّتك القانونيّة : إمّا بصورة كتابيّة أو عبر الهاتف.',
    icon: 'seo-search.png',
  },
  {
    index: 3,
    subtext: 'ابراهيم رمضان — موظف حكومي',
    text:
      'إتّصل بمحامٍ مختصّ في أيّ مجال من المجالات القانونيّة لطرح إشكاليّتك. يمكنك طرح إشكاليّتك القانونيّة : إمّا بصورة كتابيّة أو عبر الهاتف.',
    icon: 'money-wallet.png',
  },
  {
    index: 4,
    subtext: 'ابراهيم رمضان — موظف حكومي',
    text:
      'إتّصل بمحامٍ مختصّ في أيّ مجال من المجالات القانونيّة لطرح إشكاليّتك. يمكنك طرح إشكاليّتك القانونيّة : إمّا بصورة كتابيّة أو عبر الهاتف.',
    icon: 'user-question.png',
  },
  {
    index: 5,
    subtext: 'ابراهيم رمضان — موظف حكومي',
    text:
      'إتّصل بمحامٍ مختصّ في أيّ مجال من المجالات القانونيّة لطرح إشكاليّتك. يمكنك طرح إشكاليّتك القانونيّة : إمّا بصورة كتابيّة أو عبر الهاتف.',
    icon: '',
  },
];
const section_five = () => {
  return (
    <div className="section-five">
      <div className="title">قالوا عنا</div>
      <div className="subtitle">
        إستعن بمحامي مختصّ في أيّ مجال من المجالات القانونيّة التي تختارها
      </div>
      <Row>
        {testimonials.map(e => (
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

export default section_five;
