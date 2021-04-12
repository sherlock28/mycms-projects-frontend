import { useState, useEffect } from "react";
import Spinner from "components/Spinner";
import styles from "./FormLogin.module.css";
// import { useUser } from "hooks/useUser";
import { signIn } from "services";

export default function FormLogin() {
  // eslint-disable-next-line
  // const {
  //   signIn,
  //   isLoginLoading,
  //   hasLoginError,
  //   isLogged,
  // } = useUser();
  // eslint-disable-next-line
  // const [_, pushLocation] = useLocation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(
    () => {
      // if (isLogged) {
      //   pushLocation("/home");
      // }
    } /*[isLogged, pushLocation]*/
  );

  const handleChange = e => {
    const { name, value } = e.target;
    name === "email" ? setEmail(value) : setPassword(value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    signIn({user: 'rodol28', password: '1234'});
    // signIn({ email, password });
  };

  return (
    <>
      <div className="container p-4 mt-5">
        <div className="row">
          <div className="col-md-4 mx-auto">
            <div className="card text-center animate__animated animate__pulse">
              <div className="card-header">
                <h3>Login</h3>
              </div>
              <div className="card-body">
                {/* <img src="public/img/usuario.png" alt="logo-usuario" class="mx-auto m-2"/> */}

                <form onSubmit={handleSubmit}>
                  <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input
                      type="text"
                      name="email"
                      id="email"
                      className="form-control"
                      onChange={handleChange}
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input
                      type="password"
                      className="form-control"
                      name="password"
                      id="password"
                      onChange={handleChange}
                    />
                  </div>

                  <div className="form-group">
                    <button
                      className={`${styles.button_enter} btn btn-lg btn-block`}
                    >
                      Entrar
                    </button>
                  </div>
                </form>
              </div>
            </div>

            {false /*isLoginLoading*/ && (
              <div className="container d-flex justify-content-center mt-4">
                <Spinner />
              </div>
            )}

            {false /*hasLoginError*/ && (
              <strong>Credenciales invalidas.</strong>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
