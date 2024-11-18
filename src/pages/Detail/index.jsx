import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import api from "../../api";
import ReactPlayer from "react-player";
import Channel from "./Channel";
import Description from "./Description";
import Comments from "./Comments";
import Card from "../../components/Card";
import { BasicLoader } from "../../components/Loader";

const Detail = () => {
  const [video, setVideo] = useState(null);
  const [error, setError] = useState(null);
  const [searchParams] = useSearchParams();
  const id = searchParams.get("v");

  useEffect(() => {
    const params = { id, extend: 1 };

    api
      .get(`/video/info`, { params })
      .then((res) => setVideo(res.data))
      .catch((err) => setError(err.message));
  }, [id]);

  return (
    <div className="detail-page h-screen overflow-auto ">
      <div className="page-content">
        <div>
          <div className="h-[30vh] md:h-[50vh] lg:h-[60vh] rounded overflow-hidden">
            <ReactPlayer
              //   playing={true}
              height={"100%"}
              width={"100%"}
              controls
              url={`https://www.youtube.com/watch?v=${id}`}
            />
          </div>

          {error ? (
            <Error info={error} />
          ) : !video ? (
            <BasicLoader />
          ) : (
            <div>
              <h1 className="my-3 text-xl font-bold">{video.title}</h1>

              <Channel video={video} />

              <Description video={video} />

              <Comments videoId={id} />
            </div>
          )}
        </div>

        <div className="flex flex-col gap-5 p-1">
          {video?.relatedVideos.data.map(
            (item) =>
              item.type === "video" && (
                <Card key={item.videoId} video={item} isRow />
              )
          )}
        </div>
      </div>
    </div>
  );
};

export default Detail;
