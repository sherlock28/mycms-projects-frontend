import useSWR from "swr";
import { useEffect } from "react";
import Navbar from "components/Navbar";
import { useRouter } from "next/router";
import { useUser, useGetProjects } from "hooks";
import ProjectTable from "components/ProjectTable";
import Spinner from "components/Spinner";
import Footer from "components/Footer";
import FormProject from "components/FormProject";
import ModalDelete from "components/ModalDelete";

export default function HomePage() {
  // const { data, error } = useSWR('/api/hello');

  // if (error) return <div>failed to load</div>
  // if (!data) return <div>loading...</div>

  // // render data
  // return <div>hello {data.name}</div>
  const { isLogged } = useUser();
  const router = useRouter();

  useEffect(() => {
    if (!isLogged) {
      router.push("/");
    }
  }, [isLogged]);

  const { isLoading } = useGetProjects();
  

  return (
    <>
      <Navbar />
      <ModalDelete />
      
      <div className="container mt-5">
        <div className="row">

          <div className="col-lg-4">
            <div className="card">
              <div className="card-body">
                <h3 className="card-title text-center">Add a project</h3>
                <FormProject />
              </div>
            </div>
          </div>

          <div className="col-lg-8 mt-5">
            {isLoading ? (
              <div className="d-flex justify-content-center mt-5">
                <Spinner height={"50px"} width={"50px"} />
              </div>
            ) : (
              <ProjectTable />
            )}
          </div>
          
        </div>
      </div>
      <Footer />
    </>
  );
}
