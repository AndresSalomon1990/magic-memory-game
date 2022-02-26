import './SingleCard.css';

const SingleCard = ({ card }) => {
  return (
    <div className='card'>
      <div>
        <img src={card.src} className='front' alt='card front' />
        <img src='/img/cover.png' className='back' alt='card back' />
      </div>
    </div>
  );
};

export default SingleCard;
