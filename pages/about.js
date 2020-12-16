import { useContext } from "react";
import Link from "next/link";
import { AuthContext } from "../provider/AuthProvider";
import Layout from "../template/Layout";

const About = () => {
  const { user } = useContext(AuthContext);

  return (
    <Layout>
      <main role="main" className="container">
        <h1 className="mt-5">
          {user ? "You have logged in" : "You dont logged in"}
        </h1>
        <h1 className="mt-5">
          H!
          {`${user?.name ? user?.name : " Guest "} 
          ${user?.family ? user?.family : ""}`}
        </h1>
        <h1 className="mt-5">Example Next JS</h1>
        <p className="lead">
          Hello, This is an educational website for next JS, I hope it is useful
          for you.
        </p>
        <p>
          Back to
          <Link href="/">
            <a>Home</a>
          </Link>
        </p>
      </main>
    </Layout>
  );
};

export default About;
