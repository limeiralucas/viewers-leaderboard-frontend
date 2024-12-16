import { getViewersRanking } from "@/api/viewersRanking";
import RankingPanel from "../../components/RankingPanel";
import "./style.css";
import { useEffect, useState } from "preact/hooks";

type RankingProps = {
  channelId: string
}

export function Ranking(props: RankingProps) {
  const { channelId } = props;
  const [rankingRequestTimer, setRankingRequestTimer] = useState<number>(null);
  const [ viewersRanking, setViewersRanking ] = useState<ViewersRanking>([]);

  // Component did mount
  useEffect(() => {
    clearInterval(rankingRequestTimer);

    updateViewersRanking();
    const timer = setInterval(
      updateViewersRanking,
      60000,
    );

    setRankingRequestTimer(timer);
  }, [channelId])

  // Component will unmount
  useEffect(() => {
    return () => {
      clearInterval(rankingRequestTimer);
      setRankingRequestTimer(null)
    };
  }, []);

  function updateViewersRanking() {
    getViewersRanking(channelId).then((data) => setViewersRanking(data))
  }

  return <div class="overlay-container">
    <RankingPanel viewersRanking={viewersRanking} />
  </div>
}