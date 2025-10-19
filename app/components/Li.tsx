type Props = {
  title: string;
  text?: string;
  classTitle?: string;
  classText?: string;
  className?: string;
};

export default function Li(props: Props) {
  return (
    <li className={` ${props.className}`}>
      <h3 className={`fs-bold ${props.classTitle}`}>{props.title}</h3>
      <p className={` ${props.classText}`}>{props.text}</p>
    </li>
  );
}
