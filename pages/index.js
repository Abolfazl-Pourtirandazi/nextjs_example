import { useState, useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { useRouter } from "next/router";
import Input from "../components/Input";
import Button from "../components/Button";
import Layout from "../template/Layout";

const Index = () => {
  const router = useRouter();

  const { login } = useContext(AuthContext);

  const [data, setData] = useState({
    email: "demo@gmail.com",
    password: "demo",
    alert: {},
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    if (data.email === "demo@gmail.com" && data.password === "demo") {
      setData({
        ...data,
        alert: {
          type: "success",
          message: "You have been logged in successfully !!",
        },
      });

      login();

      router.push("/about");
    } else {
      setData({
        ...data,
        alert: {
          type: "danger",
          message: "Username or password is incorrect !!",
        },
      });
    }
  };

  const handleInputChange = (value, name) => {
    setData({
      ...data,
      [name]: value,
    });
  };

  return (
    <Layout>
      <div className="container">
        <div className="col-lg-6 col-md-6 col-12 mx-auto mt-5">
          {data?.alert?.type ? (
            <div className={`alert alert-${data?.alert?.type}`} role="alert">
              {data?.alert?.message}
            </div>
          ) : (
            false
          )}
          <form onSubmit={handleSubmit}>
            <Input
              label="Email address"
              placeholder="Enter email"
              name="email"
              value={data?.email}
              onChange={handleInputChange}
              type="email"
              small="We'll never share your email with anyone else."
            />
            <Input
              label="Password"
              placeholder="Enter password"
              name="password"
              value={data?.password}
              onChange={handleInputChange}
              type="password"
            />
            <Button label="submit" />
          </form>
        </div>
      </div>
    </Layout>
  );
};

export default Index;
