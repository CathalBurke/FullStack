import SportBadge from './SportBadge';
import './MemberCard.css';

function MemberCard({ photo, name, sport, position, age, quote }) {
  const positionClass = position.toLowerCase().replace(' ', '-');

  return (
    <div className={`member-card ${positionClass}`}>
      <img src={photo} alt={name} />
      <h2>{name}</h2>
      <SportBadge sport={position} />
      <p>Sport: {sport}</p>
      <p>Age: {age}</p>
      <p className="quote">"{quote}"</p>
    </div>
  );
}

export default MemberCard;