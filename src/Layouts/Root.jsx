import React from "react";
import { Outlet } from "react-router";
import Footer from "../Components/Footer";
import LatestNews from "../Components/LatestNews";
import Header from "../Components/Header";
import Navbar from "../Components/Navbar";
import LeftAsid from "../Components/HomeLayout/LeftAsid";
import RightAsid from "../Components/HomeLayout/RightAsid";

const Root = () => {
  return (
    <div className="flex  flex-col h-screen">
    {/*Header Section */}
      <header className="container mx-auto">
        <Header />
        <section className="w-11/12 mx-auto my-3">
            <LatestNews></LatestNews>
        </section>
        <nav>
            <Navbar></Navbar>
        </nav>
      </header>

    {/*Main Content*/}
      <main className="flex-1 w-11/12 my-10 mx-auto grid grid-cols-12">
        <aside className="col-span-3 sticky top-0 h-fit">
          <LeftAsid/>
          </aside>
        <section className="col-span-6 mx-4"><Outlet /></section>
        <aside className="col-span-3 sticky top-0 h-fit"><RightAsid/></aside>
      </main>

    {/*Footer Section */}
      <footer>
        <Footer />
      </footer>

    </div>
  );
};

export default Root;
