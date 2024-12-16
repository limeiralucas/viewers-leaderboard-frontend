import { getViewersRanking } from "@/api/viewersRanking";
import RankingPanel from "../../components/RankingPanel";
import { useEffect, useState } from "preact/hooks";
import { RANKING_UPDATE_INTERVAL_MS } from "@/config";
import "./style.css";

type RankingProps = {
  channelId: string,
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
      RANKING_UPDATE_INTERVAL_MS,
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