import "./style.css";

type RankingPanelProps = {
  viewersRanking: ViewersRanking
}

type ViewerScoreProps = {
  viewerScore: ViewerScore
}

export default function RankingPanel(props: RankingPanelProps) {
  const { viewersRanking } = props;

  return <div class="ranking-container">
    <h4>Ranking</h4>
    { viewersRanking.map((viewerScore) => <ViewerScore viewerScore={viewerScore}/>) }
  </div>
}

function ViewerScore(props: ViewerScoreProps) {
  const { viewerScore } = props;

  return <div class="user-score-container">
    <UserPhoto />
    <p class="username">{viewerScore.username}</p>
    <p class="score">{viewerScore.score}</p>
  </div>
}

function UserPhoto() {
  return <div class="user-photo" style={{backgroundImage: "url(https://m.media-amazon.com/images/I/41rYPBRG-pL._AC_UF894,1000_QL80_.jpg)"}}></div>
}
