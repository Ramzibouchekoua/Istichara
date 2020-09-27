/**
 *
 * Footer
 *
 */

import React from 'react';
import './footer.scss';

// import PropTypes from 'prop-types';
// import styled from 'styled-components';

import Logo from '../../assets/images/logo@2x.png';

const Footer = () => (
  <div className="Footer">
    <div className="Brand">
      <img alt="brand" src={Logo} />
    </div>

    <div className="Consulting">
      <span className="Categorie-title">استشارة</span>
      <span className="Categorie">الرئيسية</span>
      <span className="Categorie">انا محامي</span>
      <span className="Categorie">استشارة كتابية</span>
      <span className="Categorie">استشارة سمعية بصرية</span>
    </div>

    <div className="Law">
      <span className="Categorie-title"> قانوني</span>
      <span className="Categorie">سياسة الخصوصية</span>
      <span className="Categorie">أسعارنا</span>
      <span className="Categorie">من نحن</span>
      <span className="Categorie">اتصل بنا</span>
    </div>

    <div className="Newsletter">
      <span>سجل في النشرة البريدية الخاصة</span>
      <input type="text" name="name" value="عنوان البريد الإلكتروني" />
      <button type="submit">التسجيل</button>
    </div>
  </div>
);

Footer.propTypes = {};

export default Footer;
