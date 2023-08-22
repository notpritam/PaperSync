import axios from "axios";

const uselogin = async ({ email, password, token }) => {
  try {
    const res = await axios.post(
      "http://localhost:3001/api/login",
      {
        email: email,
        password: password,
      },
      {
        headers: {
          "x-access-token": token,
          "content-type": "application/json",
        },
      }
    );

    return res;
  } catch (err) {
    console.log(err);
  }
};

const useRegister = async ({ email, password, name }) => {
  try {
    const res = await axios.post("http://localhost:3001/api/register", {
      email: email,
      password: password,
      name: name,
    });

    return res;
  } catch (err) {
    console.log(err);
  }
};

export { uselogin, useRegister };
