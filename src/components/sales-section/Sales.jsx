import salesStyles from './sales.css';

import salesImg from '../../assets/img/speciality/speciality.png';

const Sales = () => {
    return (
      <section className="sales__section">
        <div className="container">
          <div className="sales__wrapper d-flex a-items j-cont">
            <div className="sales__text-body">
              <h3>
                Our Speciality Sales <br /> Increase By 250%
              </h3>
              <dl className="sales__unordered-list">
                <dd>
                  There are many variations of passages of Lorem <br /> Ipsum.
                </dd>
                <dd>
                  available, but the majority have suffered alteration <br /> in
                  some form, by injected humour.
                </dd>
                <dd>
                  randomised words which don't look even slightly <br />{" "}
                  believable.
                </dd>
                <dd>If you are going to use a passage of Lorem Ipsum.</dd>
                <dd>
                  need to be sure there isn't anything embarrassing <br />{" "}
                  hidden in the middle of text.
                </dd>
              </dl>
            </div>
            <img src={salesImg} alt="salesImg" />
          </div>
        </div>
      </section>
    );
}
 
export default Sales;