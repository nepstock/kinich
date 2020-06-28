import axios from "axios";
import r from "jsrsasign";
import router from "../router";
import store from "../store/index";

const instance = axios.create({
  baseURL: process.env.VUE_APP_BACKEND_ADDRESS
});

instance.defaults.headers["X-Gravitee-Api-Key"] =
  "197bbffe-cfff-4e21-a15a-0a75e99899b6";

instance.interceptors.request.use(
  config => {
    if (config) {
      return config;
    }
  },
  error => {
    return Promise.reject(error);
  }
);

instance.interceptors.response.use(null, error => {
  const expectedError =
    error.response &&
    error.response.status >= 400 &&
    error.response.status < 500;
  if (expectedError) {
    return Promise.reject(error);
  }
});

export default instance;

export const login = async body => {
  instance
    .post("/oauth/token", body)
    .then(resp => {
      console.log(resp.data);
      store.dispatch("uploadToken", resp.data.id_token);

      const headerObj = r.KJUR.jws.JWS.readSafeJSONString(
        r.b64utoutf8(store.state.token.split(".")[0])
      );
      console.log(headerObj);
      if (headerObj["kid"] === process.env.VUE_APP_KEY_IDENTIFIER) {
        const payloadObj = r.KJUR.jws.JWS.readSafeJSONString(
          r.b64utoutf8(store.state.token.split(".")[1])
        );

        console.log(payloadObj);
        store.dispatch("uploadUsername", payloadObj.preferred_username);
        store.dispatch("uploadEmail", payloadObj.email);

        instance.defaults.headers["Authorization"] = store.state.token;
        router.push({ name: "Profile" });
      }

      return resp;
    })
    .catch(err => {
      console.log(err);
    });
};

export const logout = () => {
  instance
    .delete("/oauth/token")
    .then(resp => {
      console.log(resp);
      store.dispatch("uploadToken", "");
      store.dispatch("uploadUsername", "");
      router.push({ name: "Home" });
    })
    .catch(err => {
      console.log(err);
    });
};
