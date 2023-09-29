import styles from "../auth.module.scss";
import { AiOutlineMail } from "react-icons/ai";
import Card from "../../../Components/Card";
import { Link } from "react-router-dom";

const ResetPassword = () => {
  return (
    <div className={`container ${styles.auth} `}>
      <Card>
        <div className={styles.form}>
          <div className="--flex-center">
            <Link to="/">
              <AiOutlineMail size={35} color="#999" />
            </Link>
          </div>
          <h2>Reset Password</h2>
          <form>
            <input
              type="password"
              placeholder="New Password"
              required
              name="password"
            />
            <input
              type="password"
              placeholder="Confirm New Password"
              required
              name="confirmpassword"
            />

            <button type="submit" className="--btn --btn-primary --btn-block">
              Reset Password
            </button>
            <div className={styles.links}>
              <Link to="/">- Home</Link>
              <Link to="/login">- Login</Link>
            </div>
          </form>
        </div>
      </Card>
    </div>
  );
};

export default ResetPassword;
