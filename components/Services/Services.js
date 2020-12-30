import style from "./Services.module.css";
const Services = () => {
  return <div className={style.service}>
      <div className={style.cards}>
          <div className={style.card}>
              <img src="/analytics.svg" alt=""/>
              <h3>Web / App Development</h3>
              <p>UI/UX</p>
              <p>IOS Apps</p>
              <p>Android Apps</p>
              <p>Unique Design</p>
              <p>CMS Website</p>
          </div>
      </div>
      <div className={style.cards}>
          <div className={style.card}>
              <img src="/branding.svg" alt=""/>
              <h3>Branding</h3>
              <p>Logo Design</p>
              <p>Banner Design</p>
              <p>Brochure Design</p>
              <p>Stationery Design</p>
          </div>
      </div>
      <div className={style.cards}>
          <div className={style.card}>
              <img src="/digital-marketing.svg" alt=""/>
              <h3>Digital Marketing</h3>
              <p>SEO</p>
              <p>SMM</p>
              <p>Content Writing</p>
             
          </div>
      </div>
  </div>;
};

export default Services;
