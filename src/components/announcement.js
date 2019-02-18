// react
import React from 'react';

const Announcement = ({ data }) => {
  // generate random number between 0 and 10
  const num = Math.floor(Math.random() * 10);

  // renders a message based on the number previously defined
  // this component was made only for fun
  const renderAnnouncement = () => {
    switch (num) {
      case 0:
        return `There are a total of ${data.totalGnomes} gnomes in Brastlewark.`
       
      case 1:
        return `Gnomes have ${data.professions.length} different professions.`
      
      case 2:
        return `The fattest gnome weighs ${Math.floor(data.maxWeight)} Kilograms!.`

      case 3: 
        return `The skinniest gnome weighs only ${Math.floor(data.minWeight)} Kilograms.`

      case 4: 
        return `The tallest gnome is ${Math.floor(data.maxHeight)} Cm tall.`

      case 5:
        return `The shortest gnome is ${Math.floor(data.minHeight)} Cm tall.`

      case 6:
        return `The oldest gnome is ${data.maxAge} years old!, amazing right?`

      case 7:
        return `The youngest gnome is ${data.minAge} years old, still a long way to go!`

      case 8:
        return `Right now, the top-trending hair color between gnomes is ${data.hairColors[Math.floor(Math.random() * data.hairColors.length - 1)]}, it may change later!`

      default: 
        return `This app was made with React, Redux, and love.`;
    }
  }

  return (
    <div className="announcement-container">
      <p>
        <span className="announcement-badge">Did you know?</span>
        {renderAnnouncement()}
      </p>
    </div>
  );
}

export default Announcement;