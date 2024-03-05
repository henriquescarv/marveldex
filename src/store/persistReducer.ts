import storage from "redux-persist/lib/storage";
import { persistReducer as persistor } from "redux-persist";

const persistReducer = (reducers: any) => {
  const persistedReducer = persistor(
    {
      key: "react-structure",
      storage,
      whitelist: ["auth", "user", "root","training"],
    },
    reducers,
  );

  return persistedReducer;
};

export default persistReducer;
