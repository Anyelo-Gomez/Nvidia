import { ReactNode } from "react";

type Props = {
  title: string;
  image: string;
  price?: string;
  children?: ReactNode;
};

export default function CardProducts(props: Props) {
  return (
    <article
      className="BoxShadow bg-dark text-white p-3 d-flex flex-column"
      style={{ width: "300px" }}
    >
      <div className="card-image">
        <img
          src={props.image}
          alt={props.title}
          className="w-100 object-fit-contain"
        />
      </div>
      <div className="card-body d-flex flex-column justify-content-end gap-3">
        <h5 className="card-title">{props.title}</h5>
        <h4 className="card-text pb-3">{`$${props.price}`}</h4>
        {props.children}
      </div>
    </article>
  );
}
