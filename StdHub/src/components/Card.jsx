const Card = ({ title, subtitle, content, footer }) => {
  return (
    <div className="card shadow-sm border-0 mb-3">
      <div className="card-body">
        {title && <h5 className="card-title fw-bold">{title}</h5>}
        {subtitle && <h6 className="card-subtitle mb-2 text-muted">{subtitle}</h6>}
        {content}
        {footer && <div className="mt-3">{footer}</div>}
      </div>
    </div>
  );
};

export default Card;
