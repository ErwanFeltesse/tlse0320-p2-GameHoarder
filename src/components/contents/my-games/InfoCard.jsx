import React from 'react';
import PropTypes from 'prop-types';
import './MyGameCard.scss';

export default function InfoCard({
  handleClose,
  show,
  children,
  name,
  rating,
  url,
  artworksUrl,
  platformsName,
  genresName,
  summary
}) {
  return (
    <div className={show ? 'modalInfo display-flex' : 'modalInfo display-none'}>
      <section className="PopupInfo">
        {children}
        <div className="InfoCard">
          <button className="InfoButton" type="button" onClick={handleClose}>
            <img src="/img/svg/close.svg" alt="icon close" />
          </button>
          <div className="Info">
            <div>
              <h2 className="InfoTitle">{name}</h2>
            </div>
            <div className="InfoSupp">
              <p className="infoNote">{Math.round(rating)} / 100</p>
              <p
                className="infoPlatforms"
                style={{
                  margin: '0 2%'
                }}
              >
                {platformsName.join(' / ')}
              </p>
              {/* <p className="infoGenre">{genresName.join(' / ')}</p> */}
            </div>
          </div>
          <div className="InfoMain">
            <img src={url[0]} alt="cover of the game" className="InfoCover" />
            <div className="InfoGame">
              <p>{summary}</p>
            </div>
          </div>
          {/* {artworksUrl.length > 0 ? <h2 className="artworkSection">Artworks :</h2> : ''}
          <div className="Images">
            {artworksUrl.map(artwork => (
              <div>
                <img src={artwork} alt="artwork of the game" className="CoverSupp" />
              </div>
            ))}
          </div> */}
        </div>
        <div />
      </section>
    </div>
  );
}

InfoCard.propTypes = {
  handleClose: PropTypes.string.isRequired,
  show: PropTypes.string.isRequired,
  children: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  rating: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  platformsName: PropTypes.arrayOf(PropTypes.string).isRequired,
  genresName: PropTypes.arrayOf(PropTypes.string).isRequired,
  summary: PropTypes.string.isRequired
};
