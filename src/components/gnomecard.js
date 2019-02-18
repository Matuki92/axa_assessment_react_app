// react
import React from 'react';

const GnomeCard = ({ gnome }) => {

  // render list of friends
  const renderFriends = () => {
    if (gnome.friends.length === 0) {
      return <p>Nobody.</p>
    }
    return gnome.friends.map(friend => {
      return <p key={friend}>{friend}.</p>;
    });
  }

  // render list of professions
  const renderProfessions = () => {
    if (gnome.professions.length === 0) {
      return <p>Unemployed.</p>
    }
    return gnome.professions.map(profession => {
      return <p key={profession}>{profession}.</p>;
    });
  }

  return (
    <section className="gnome-card-container">

      <div className="thumbnail-container">
        {/* profile thumbnail */}
        <img 
          className="gnome-thumbnail"
          src={gnome.thumbnail}
          alt="gnome thumbnail"
        />
        <h3 className="gnome-name">{gnome.name}</h3>
      </div>

      {/* general info container */}
      <div className="gnome-info">

        {/* properties */}

        {/* age */}
        <div className="gnome-property-container">
          <div className="gnome-property-field">
            <p><span className="gnome-property-name">Age:</span></p> 
          </div>
          <div className="gnome-property-field">
            <p>{gnome.age} years old.</p>
          </div>
        </div>

        {/* gender */}
        <div className="gnome-property-container">
          <div className="gnome-property-field">
            <p><span className="gnome-property-name">Gender:</span></p>
          </div>
          <div className="gnome-property-field">
            <p>{gnome.gender}.</p>
          </div>
        </div>

        {/* hair color */}
        <div className="gnome-property-container">
          <div className="gnome-property-field">
            <p><span className="gnome-property-name">Hair Color:</span></p> 
          </div>
          <div className="gnome-property-field">
            <p>{gnome.hair_color}.</p>
          </div>
        </div>

        {/* weight */}
        <div className="gnome-property-container">
          <div className="gnome-property-field">
            <p><span className="gnome-property-name">Weight:</span></p> 
          </div>
          <div className="gnome-property-field">
            <p>{parseFloat(gnome.weight).toFixed(1)} Kg.</p>
          </div>
        </div>

        {/* height */}
        <div className="gnome-property-container">
          <div className="gnome-property-field">
            <p><span className="gnome-property-name">Height:</span></p> 
          </div>
          <div className="gnome-property-field">
            <p>{parseFloat(gnome.height).toFixed(1)} Cm.</p>
          </div>
        </div>

        {/* friends and professions
          these two share container, just to make it look nice in UI
        */}
        <div className="gnome-property-container">
          <div className="gnome-property-field">
            <p><span className="gnome-property-name">Friends with:</span></p> 
            {renderFriends()}
          </div>
          <div className="gnome-property-field">
            <p><span className="gnome-property-name">Professions:</span></p> 
            {renderProfessions()}
          </div>
        </div>
      </div>
    </section>
  );
}

export default React.memo(GnomeCard);