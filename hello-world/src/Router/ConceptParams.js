import React from "react";
import { useParams } from "react-router";

const ConceptParams = () => {
  let { id , Prince } = useParams();
  return <div style={{ fontSize: "50px" }}>
           Now showing post {id} {Prince}
         </div>;
}

export default ConceptParams