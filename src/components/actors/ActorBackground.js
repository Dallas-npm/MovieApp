import moment from "moment";

import "../layout/BackgroundCarousel.css";

const ActorBackground = ({
  birthday,
  deathday,
  name,
  profileImage,
  department,
}) => {
  const currentDate = new Date();
  const today = moment(currentDate);
  const birthdayMoment = moment(birthday);

  return (
    <div className='slider-section'>
      <div
        style={{
          background: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), no-repeat`,
        }}
        className='slider-section-slide-main'
      >
        <div className='slider-section-slide-main-content'>
          <img
            src={`https://image.tmdb.org/t/p/original/${profileImage}`}
            alt=''
          />

          <div className='slider-section-slide-main-content-item'>
            <h4 className='slider-section-slide-main-content-item-desc'>
              {moment(birthday).format("DD-MM-YYYY")} |{" "}
              {deathday
                ? moment(deathday).format("DD-MM-YYYY")
                : `${today.diff(birthdayMoment, "years")} years old`}
            </h4>
            <div className='slider-section-slide-main-content-item-heading'>
              {name}
            </div>
            <p className='slider-section-slide-main-content-item-info'>
              {department}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ActorBackground;
