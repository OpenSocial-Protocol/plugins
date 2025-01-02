// import React, { useMemo } from "react";
// import * as Stores from "../stores";

// export const filterStores = React.useMemo(() => {
//   const stores: { [key: string]: any } = {};
//   Object.keys(Stores)
//     .filter(
//       (key) => typeof (Stores as { [key: string]: any })[key] !== "function"
//     )
//     .forEach((key) => {
//       stores[key] = (Stores as any)[key];
//     });
//   return stores;
// }, []);
