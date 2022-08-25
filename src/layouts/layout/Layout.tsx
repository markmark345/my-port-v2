import Navbar from '../../components/Navbar/navbar';

interface tamplate {
  children: any;
}

const Layout: React.FC<tamplate> = ({ children }) => {
  return (
    <div className="h-screen">
      <Navbar />
      <div>{children}</div>
    </div>
  );
};

export default Layout;
