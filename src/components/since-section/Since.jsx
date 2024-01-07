import sinceStyles from './since.css'

import sinceImg from '../../assets/img/since/since.png'

const Since = () => {
    return (
      <section className="section__since">
        <div className="container">
          <div className="since__wrapper d-flex a-items j-cont">
            <img src={sinceImg} alt="sinceImg" className="since__img" />
            <div className="since__text-body">
              <h2>
                Great Creative 
                SEO-Agency 
                Since 1993
              </h2>
              <h4>Creative & Proffesional Creative Agency!</h4>
              <p>
                It is a long established fact that a reader will be distracted
                the readable content of a page when looking at its layout. The
                point of using Lorem Ipsum is that it has a more-or-less normal
                distribution of letters.
              </p>
            </div>
          </div>
        </div>
      </section>
    );
}
 
export default Since;