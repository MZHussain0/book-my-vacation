import Container from "./Container";
import Logo from "./Logo";
import SearchBar from "./Search";
import UserMenu from "./UserMenu";

type Props = {};

const Navbar = (props: Props) => {
  return (
    <div className="fixed w-full bg-theme-50 z-10 shadow-sm ">
      <div className="py-2 border-b">
        <Container>
          <div className="flex flex-row items-center justify-between gap-3 md:gap-0">
            <Logo />

            <SearchBar />

            <UserMenu />
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Navbar;
