import "bootstrap/dist/css/bootstrap.min.css";
import "../assets/css/my-style.css";
import { AuthProvider } from "../provider/AuthProvider";

const MyApp = ({ Component, pageProps }) => {
  return (
    <AuthProvider>
      <Component {...pageProps} />
    </AuthProvider>
  );
};

export default MyApp;
