import { Fragment } from "react";
import Footer from "./Footer";
import Header from "./Header";
import Body from "./Body";

interface PageProps {
  children?: JSX.Element | JSX.Element[];
}

function Page({ children }: PageProps) {
  return (
    <Fragment>
      <Header />
      <Body>{children}</Body>
      <Footer />
    </Fragment>
  );
}

export default Page;
