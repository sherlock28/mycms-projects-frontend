import useSWR from "swr";
import { useEffect } from "react";
import styles from "./Home.module.css";
import Navbar from "components/Navbar";
import { useRouter } from "next/router";
import { useUser, useForm, useGetProjects } from "hooks";
import { FaTrash, FaEdit } from "react-icons/fa";
import Footer from "components/Footer";
import Spinner from "components/Spinner";

export default function HomePage() {
  // const { data, error } = useSWR('/api/hello');

  // if (error) return <div>failed to load</div>
  // if (!data) return <div>loading...</div>

  // // render data
  // return <div>hello {data.name}</div>
  const { isLogged, jwt } = useUser();
  const router = useRouter();

  useEffect(() => {
    if (!isLogged) {
      router.push("/");
    }
  }, [isLogged]);

  const { isLoading, projects } = useGetProjects({ jwt });

  const {
    title,
    description,
    repositoryURL,
    pageURL,
    handleChange,
    handleSubmit,
    isSubmiting,
  } = useForm();

  const handleEdit = () => {
    console.log("edit");
  };

  const handleDelete = () => {
    console.log("delete");
  };

  return (
    <>
      <Navbar />
      <div className="container mt-5">
        <div className="row">
          <div className="col-md-3">
            <div className="card">
              <div className="card-body">
                <h3 className="card-title text-center">Add a project</h3>
                <form
                  onSubmit={e => handleSubmit(e, { jwt })}
                  encType="multipart/form-data"
                  autoComplete="off"
                >
                  <div className="form-group">
                    <input
                      value={title || ""}
                      onChange={handleChange}
                      type="text"
                      name="title"
                      className="form-control"
                      placeholder="Title..."
                    />
                  </div>
                  <div className="form-group">
                    <textarea
                      value={description || ""}
                      onChange={handleChange}
                      rows="6"
                      type="text"
                      name="description"
                      className="form-control"
                      placeholder="Description..."
                    />
                  </div>
                  <div className="form-group">
                    <input
                      value={repositoryURL || ""}
                      onChange={handleChange}
                      type="text"
                      name="repositoryURL"
                      className="form-control"
                      placeholder="Repository URL..."
                    />
                  </div>
                  <div className="form-group">
                    <input
                      value={pageURL || ""}
                      onChange={handleChange}
                      type="text"
                      name="pageURL"
                      className="form-control"
                      placeholder="Page URL..."
                    />
                  </div>
                  <div className="form-group">
                    <div className="custom-file">
                      <input
                        onChange={handleChange}
                        type="file"
                        name="image"
                        className="custom-file-input"
                        id="inputGroupFile01"
                      />
                      <label
                        htmlFor="inputGroupFile01"
                        className="custom-file-label"
                      >
                        Choose an image...
                      </label>
                    </div>
                  </div>
                  <button
                    className={`btn ${styles.button_save} btn-block mb-3`}
                    disabled={isSubmiting}
                  >
                    Save
                  </button>
                  <div className={styles.spinner_container}>
                    {isSubmiting && (
                      <Spinner height={"30px"} width={"30px"} color={"#09f"} />
                    )}
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div className="col-md-9 mt-5">
            <div className="table-responsive-sm">
              <div className="table-responsive-md">
                <table className="table table-md">
                  <thead className="thead-dark">
                    <tr>
                      <th>Title</th>
                      <th>Page URL</th>
                      <th>Operations</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Title 1</td>
                      <td>https://something.com</td>
                      <td>
                        <button
                          onClick={handleEdit}
                          className={`${styles.btn_edit} btn btn-sm m-1`}
                        >
                          <FaEdit /> Edit
                        </button>
                        <button
                          onClick={handleDelete}
                          className={`${styles.btn_delete} btn btn-sm m-1`}
                        >
                          <FaTrash /> Delete
                        </button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
