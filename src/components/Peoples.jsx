import React, { useEffect, useState } from "react";
import TopNav from "./templatess/TopNav";
// import Dropdown from "./templatess/Dropdown";
import { useNavigate } from "react-router-dom";
import Cards from "./templatess/Cards";
import axios from "../utils/axios";
import InfiniteScroll from "react-infinite-scroll-component";
import Loading from "./Loading";
import CardSkeleton from "./skeleton/CardSkeleton";

const Peoples = () => {
  const navigate = useNavigate();
  const [person, setPerson] = useState([]);
  const [page, setpage] = useState(1);
  const [hasMore, sethasMore] = useState(true);
  // document.title = "ixsn | Peoples";   yo sidhai lekhyo vane re-rendering cause garna sakcha 
  useEffect(() => {
    document.title = "ixsn | Peoples";
  }, []);

  const getPerson = async () => {
    try {
      const { data } = await axios.get(`/person/popular?page=${page}`);
      // console.log(data);

      // setPerson(data.results);
      if (data.results.length > 0) {
        // setPerson((prev) => [...prev, ...data.results]);   //yedi api response ma duplicate entry xa vane add huncha due to pagination, which could lead to duplicate items 
        setPerson((prev) => {
          const newResults = data.results.filter(
            (item) => !prev.some((p) => p.id === item.id)
          );
          return [...prev, ...newResults];
        });
        setpage((prev) => prev + 1);
      } else {
        sethasMore(false);
      }
      // console.log(data);
    } catch (error) {
      console.log("Error", error);
    }
  };
  // console.log(person);

  const refreshPerson = () => {
    if (person.length === 0) {
      getPerson();
    } else {
      setPerson([]);
      setpage(1);
      getPerson();
      sethasMore(true);
    }
  };

  useEffect(() => {
    refreshPerson();
  }, []);

  return (
    <div className="h-full w-full ">
      <div className=" flex justify-between bg-[#1d1c22] p-3 items-center h-[12%]">
        <h1
          onClick={() => navigate(-1)}
          className="w-[20%] cursor-pointer text-zinc-200 p-5 font-semibold text-xl "
        >
          <i className="ri-arrow-left-line mr-2 text-xl"></i>
          Person
        </h1>
        {/* <TopNav /> */}
      </div>

      <div className="w-full">
        <InfiniteScroll
          dataLength={person.length}
          next={getPerson}
          // loader={<Loading />}
          loader={<CardSkeleton />}
          endMessage={<h1>You have reached to end, chalo ghar jao aab !!</h1>}
          hasMore={hasMore}
        >
          <Cards data={person} title="person" />
        </InfiniteScroll>
      </div>
    </div>
  );
};

export default Peoples;
