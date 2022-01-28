import React, { useEffect } from "react";
import { useQuery } from "react-query";

import Table from "../components/Table";

const Home = () => {
  const {
    isLoading,
    error,
    data,
  }: { isLoading: boolean; error: any; data: any } = useQuery("repoData", () =>
    fetch("https://data.messari.io/api/v2/assets").then((res) => {
      console.log(res, "1111");

      return res.json();
    })
  );

  const columns = [
    { id: "1", name: "Serial Id" },
    { id: "2", name: "Symbol" },
    { id: "3", name: "Name" },
    { id: "4", name: "Slug" },
  ];
  console.log(data, "33333333333333");

  return (
    <div className="container mx-auto">
      <div className="flex items-center justify-center">
        <div>
          {isLoading && <div> Loading... </div>}
          {error && <div> 'An error has occurred: ' {error.message} </div>}
          {data && <Table columns={columns} rows={data?.data} />}
        </div>
      </div>
    </div>
  );
};

export default Home;
