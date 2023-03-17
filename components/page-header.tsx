
type Props = {
  children: React.ReactNode;
};

const PageHeader = ({children}:Props) => {
  return (
    <h2 className="my-8 text-5xl md:text-7xl font-bold tracking-tighter leading-tight">
    {children}
  </h2>
  )
}
export default PageHeader;