import Card from "./Card";

const TutorCard = ({ tutor }) => {
  return (
    <Card
      title={tutor.name}
      subtitle={tutor.subject}
      content={<p>Experience: {tutor.experience}</p>}
      footer={<button className="btn btn-sm btn-primary">Message Tutor</button>}
    />
  );
};

export default TutorCard;
