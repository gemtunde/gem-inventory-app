import React from "react";
import styles from "../auth.module.scss";
import { TiUserAddOutline } from "react-icons/ti";
import Card from "../../../Components/Card";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div className={`container ${styles.auth} `}>
      <Card>
        <div className={styles.form}>
          <div className="--flex-center">
            <TiUserAddOutline size={35} color="#999" />
          </div>
          <h2>Register</h2>
          <form>
            <input type="text" placeholder="Name" required name="name" />
            <input type="email" placeholder="Email" required name="email" />
            <input
              type="password"
              placeholder="Password"
              required
              name="password"
            />
            <input
              type="password"
              placeholder="Confirm Password"
              required
              name="confirmPassword"
            />
            <button type="submit" className="--btn --btn-primary --btn-block">
              Login
            </button>
          </form>
          <span className={styles.register}>
            Already have an account? &nbsp; <Link to="/login"> Login</Link>
          </span>
        </div>
      </Card>
    </div>
  );
};

export default Register;
