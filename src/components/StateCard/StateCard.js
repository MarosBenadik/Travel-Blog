import './StateCard.css'

const StateCard = ({ pic, name }) => (
    <div className="contact-card">
      <div className="contact-card__thumbnail">
        <img src={pic} alt="thumbnail" />
      </div>
      <div className="contact-card__details">
        <h3 className="contact-name">{name}</h3>
      </div>
    </div>
  );
  
  export default StateCard;
  