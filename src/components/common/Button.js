export const Button = (props) => {
  const { variant, onClick, label, children } = props;

  return (
    <button variant={variant} onClick={onClick} label={label}>
      {children}
    </button>
  );
};
