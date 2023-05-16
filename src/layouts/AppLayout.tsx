import { IChildren } from "../common/interfaces/IChildren";
import Logo from "../components/Logo/Logo";

const AppLayout: React.FC<IChildren> = ({ children }) => {
  return (
    <section>
      <Logo />
      {children}
    </section>
  );
};

export default AppLayout;
