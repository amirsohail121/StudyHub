import Card from "./Card";

const StudentRequestCard = ({ request }) => {
  return (
    <Card
      title={request.student}
      subtitle={request.topic}
      content={<p>{request.message}</p>}
      footer={<button className="btn btn-sm btn-success">Respond</button>}
    />
  );
};

export default StudentRequestCard;
