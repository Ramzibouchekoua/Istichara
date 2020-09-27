import React from 'react'

const Section_one = () => {
    return (
        <div className="section-one">
            <div className="part right">
                <div className="icon"></div>
                <div className="title">إستشارة كتابيّة</div>
                <div className="desc">إطرح إشكاليّتك القانونيّة بصورة كتابيّة.
                تقع إجابتك كتابيّا بصورة فوريّة من طرف محامي
 مختصّ في أيّ مجال من المجالات القانونيّة التي تختارها.</div>
                 <button>التسجيل</button>
            </div>
            <div className="part left">
                <div className="icon"></div>
                <div className="title">إستشارة صوتية</div>
                <div className="desc">تحصل على استشارة قانونية هاتفية من محامي مختص في الميدان الذي تختاره
</div>
             <button>التسجيل</button>
            </div>
        </div>
    )
}

export default Section_one
