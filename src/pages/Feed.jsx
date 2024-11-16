import { useSearchParams } from "react-router-dom";
import Card from "../components/Card";
import Sidebar from "../components/Sidebar";

const Feed = () => {
  const [searchParams] = useSearchParams();
  const selectedCat = searchParams.get("v");
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
