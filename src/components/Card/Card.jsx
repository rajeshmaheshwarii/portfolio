import './card.css';
import Image from 'next/image';
const Card = ({data,type}) => {
  return (
   
        <div className="education-container" data-aos="fade-up">
            <div className="education-card">
              <Image
                src={data.logo}
                alt={`${data.title} logo`}
                className="education-logo"
                width={100}
                height={100}
              />
              <div className="education-info">
                <h3 className="education-name">{data.title}</h3>
                <p className="education-course">
                  {data.heading} - {data.sub_heading}
                </p>
                <p className="education-duration">{data.duration}</p>
              </div>
            </div>
        </div>
  );
};

export default Card;
