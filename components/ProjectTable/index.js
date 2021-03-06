import React from "react";
import { useUser, useGetProjects } from "hooks";
import Row from "./Row";

export default function ProjectTable() {
  
  const { projects } = useGetProjects();

  return (
    <>
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
              {projects.map(project => {
                return <Row key={project._id} project={project} />;
              })}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
