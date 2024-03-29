import DefaultHeader from "./DefaultHeader";

const Header = ({ header, contactButton }) => {
  switch (header) {
    case 1:
      return (
        <DefaultHeader
          contactButton={contactButton}
        />
      );

    default:
      return (
        <DefaultHeader
          contactButton={contactButton}
        />
      );
  }
};
export default Header;