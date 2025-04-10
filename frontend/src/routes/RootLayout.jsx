import MainHeader from "../components/MainHeader";
import {Outlet} from "react-router-dom";

export default function RootLayout({children}) {
  return (
    <>
      
      <MainHeader />
      
      <Outlet />
    </>
  );
}