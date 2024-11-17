import { useSearchParams } from "react-router-dom";
import Card from "../components/Card";
import Sidebar from "../components/Sidebar";
import { useEffect, useState } from "react";
import api from "../api/index";

const Feed = () => {
  const [videos, setVideos] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const [searchParams] = useSearchParams();
  const selectedCat = searchParams.get("category");

  useEffect(() => {
    const url = !selectedCat
      ? "/home"
      : selectedCat === "trending"
      ? "/trending"
      : `/search?query=${selectedCat}`;

    setIsLoading(true);
    api
      .get(url)
      .then((res) => setVideos(res.data.data))
      .catch((err) => setError(err.message))
      .finally(() => setIsLoading(false));
  }, [selectedCat]);
  return (
    <div className="flex">
      <Sidebar selectedCat={selectedCat} />
      <div>
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
};

export default Feed;
