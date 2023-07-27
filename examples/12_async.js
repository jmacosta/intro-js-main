/* Asincronia */

// callback
// const cargarDatosCb = (cb) => {
//   setTimeout(() => {
//     cb("Datos cargados");
//   }, 2000);
// };

// let loading = true;
// console.log(loading);
// cargarDatosCb((data) => {
//   console.log(data);
//   loading = false;
//   console.log(loading);
// });

// const downloadUserData = (cb) => {
//   setTimeout(() => {
//     console.log("User data downloading");
//     let user = { name: "test" };
//     cb(null, user);
//   }, 2000);
// };
// const ProcessUserData = (cb) => {
//   setTimeout(() => {
//     console.log("User data processing...");
//     cb();
//   }, 3000);
// };
// const displayUserData = (cb) => {
//   setTimeout(() => {
//     console.log("displaying data");
//     cb();
//   }, 1000);
// };

// console.log("cargando...");
// downloadUserData((error, user) => {
//   ProcessUserData(() => {
//     displayUserData(() => {
//       console.log("Ya esta todo hecho");
//     });
//   });
// });

// promises

const downloadUserData = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("User data downloading");
      let user = { name: "test" };
      resolve(user);
    }, 2000);
  });
};

const ProcessUserData = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("User data processing...");
      resolve();
    }, 3000);
  });
};
const displayUserData = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("displaying data");
      reject("pettooo");
    }, 1000);
  });
};
console.log("cargando...");
// downloadUserData().then(() => {
//   ProcessUserData().then(() => {
//     displayUserData().then(() => {
//       console.log("Se acabo chimpon");
//     });
//   });
// });

// downloadUserData()
//   .then(() => {
//     return ProcessUserData();
//   })
//   .then(() => {
//     return displayUserData();
//   })
//   .then(() => {
//     console.log("Ya se acabo tachin");
//   })
//   .catch((error) => {
//     console.log("algo falla", error);
//   })
//   .finally(() => {
//     console.log("esto siempre pa entro");
//   });

// async/await

const main = async () => {
  try {
    //throw new Error("eto ha petado por ahi en medio");
    const user = await downloadUserData();
    console.log(user);
    await ProcessUserData();
    await displayUserData();
    console.log("san se acabo");
  } catch (error) {
    console.log("Error gordo", error);
  } finally {
    console.log("san se acabo");
  }
};

main();
