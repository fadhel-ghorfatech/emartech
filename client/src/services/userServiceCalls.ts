import { serviceCalls } from "./serviceCalls"

export const signInService = (payload:any, cb:any) => {
  try {
    serviceCalls.post("/auth/signin", payload, (err:any, response: any) => {
      if (err) {
        cb(err);
      }
      else {
        cb(null, response);
      }
    });
  }
  catch(err) {
    console.log("🚀 ~ file: userServiceCalls.js:15 ~ signInService ~ err:", err)
  }
}

