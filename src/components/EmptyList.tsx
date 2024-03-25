import { Link } from "react-router-dom";

interface EmptyListProps {
  title: string;
  paragraph: string;
  linkUrl: string;
  linkText: string;
}

export const EmptyList = ({
  title,
  paragraph,
  linkUrl,
  linkText,
}: EmptyListProps) => {
  return (
    <div className="content-wrapper text-center">
      <img src="/sorry.jpg" alt="Sorry" style={{ maxWidth: 340 }} />
      <h1> {title} </h1>
      <p> {paragraph} </p>
      <Link to={linkUrl} className="btn-primary">
        {linkText}
      </Link>
    </div>
  );
};
