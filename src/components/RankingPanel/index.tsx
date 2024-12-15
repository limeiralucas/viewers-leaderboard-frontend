import "./style.css";

type RankingPanelProps = {
  viewersRanking: ViewersRanking
}

type ViewerScoreProps = {
  viewerScore: ViewerScore
}

type UserPhotoProps = {
  imageUrl: string
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
    <UserPhoto imageUrl={viewerScore.profilePicture} />
    <p class="username">{viewerScore.username}</p>
    <p class="score">{viewerScore.score}</p>
  </div>
}

function UserPhoto(props: UserPhotoProps) {
  const { imageUrl } = props;
  return <div class="user-photo" style={{backgroundImage: `url(${imageUrl})`}}></div>
}
