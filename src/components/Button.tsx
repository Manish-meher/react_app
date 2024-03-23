interface Props {
  children: string;
  onClick: () => void;
  //   color: string;
  color: "primary" | "secondary" | "warning" | "danger";
}

const Button = ({ children, onClick, color }: Props) => {
  return (
    <button onClick={onClick} className={"btn btn-" + color}>
      {children}
    </button>
  );
};

export default Button;
