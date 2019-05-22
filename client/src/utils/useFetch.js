import { useState, useEffect } from "react";
import Axios from "axios";

const useFetch = reqResource => {
  const [resource, setResource] = useState(null);

  useEffect(() => {
    Axios.get(`/${reqResource}`)
      .then(res => {
        setResource(res.data);
      })
      .catch(err => {
        console.log(err);
      });
  }, [reqResource]);

  return resource;
};

export default useFetch;
