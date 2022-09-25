import Navbar from '../../components/Navbar';

interface tamplate {
  children: any;
}

const Layout: React.FC<tamplate> = ({ children }) => {
  return (
    <div className="h-screen">
      <Navbar />
      <div className="flex">
        <div>{children}</div>
      </div>
    </div>
  );
};

export default Layout;
