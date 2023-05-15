import { toast } from "react-hot-toast";
import { globalAction } from "../slices/GlobalSlices";

const setMessage = (promise) => {
  toast.promise(promise, {
    loading: () => {
      return "Loading ...";
    },
    success: (data) => {
      // console.log(data.response.data.message);
      if (data.code) {
        if (data.response) {
          throw new Error(data.response.data.message);
        }
        throw new Error(data.message);
      }
      if (data.status === 200) {
        return `${data.data.message}`;
      } else {
        if (data.response.status === 500)
          throw new Error(data.response.data.message);
      }
    },
    error: (error) => `${error.toString()}`,
  });
};

const setLoading = (value) => {
  return globalAction({ type: "SET_LOADING", value });
};

export { setLoading, setMessage };
