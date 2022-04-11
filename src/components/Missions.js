import React from 'react';
import Title from './Title';
import missions from '../data/missions';
import MissionCard from './MissionCard';

class Missions extends React.Component {
  render() {
    return (
      <div data-testid="missions" className="missoes">
        <Title
          headline="Missões"
          classeTitleBox="missoesBox"
          classeTitle="missoesText"
        />
        <div className="cards">
          {missions.map((e) => (
            <MissionCard
              key={ e.name }
              name={ e.name }
              year={ e.year }
              country={ e.country }
              destination={ e.destination }
            />
          ))}
        </div>
      </div>
    );
  }
}

export default Missions;
