import { Outlet } from "react-router-dom";
import NavigationBar from "./navbar";

export default function Layout() {
  return (
    <>
      {/* <NavigationBar /> */}
      <Outlet />
    </>
  );
}
