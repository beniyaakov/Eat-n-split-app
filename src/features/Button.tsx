
type BtnProps = {
  children: React.ReactNode;
  onClick?:()=>void
};

export default function Button({ children,onClick }: BtnProps) {
  return <button className="button" onClick={onClick}>{children}</button>;
}
