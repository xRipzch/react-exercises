import Header from "./components/Header";
import { PropTypes } from "prop-types";

export default function Layout({ children }) {
  return (
    <main style={{ maxWidth: "900px", margin: "0 auto" }}>
      <Header />
      <div>{children}</div>
      {/* <footer
        style={{
          padding: "1em",
          backgroundColor: "",
          borderTop: "1px solid #eaeaea",
        }}
      >
        HELLO
      </footer> */}
    </main>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};
