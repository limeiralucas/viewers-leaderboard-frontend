import { getViewersRanking } from "@/api/viewersRanking";
import RankingPanel from "../../components/RankingPanel";
import "./style.css";
import { useEffect, useState } from "preact/hooks";

type RankingProps = {
  channelId: string
}

export function Ranking(props: RankingProps) {
  const { channelId } = props;
  const [rankingRequestTimer, setRankingRequestTimer] = useState<any>(null);
  const [ viewersRanking, setViewersRanking ] = useState<ViewersRanking>([]);

  useEffect(() => {
    getViewersRanking(channelId).then((data) => setViewersRanking(data));
  }, [channelId])

  return <div class="overlay-container">
    <RankingPanel viewersRanking={viewersRanking} />
  </div>
}