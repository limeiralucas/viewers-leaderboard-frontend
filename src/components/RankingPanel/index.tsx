import "./style.css";

export default function RankingPanel() {
  return <div class="ranking-container">
    <h4>Ranking</h4>
    <UserScore />
    <UserScore />
    <UserScore />
    <UserScore />
    <UserScore />
  </div>
}

function UserScore() {
  return <div class="user-score-container">
    <UserPhoto />
    <p class="username">lucasalveslm</p>
    <p class="score">1000</p>
  </div>
}

function UserPhoto() {
  return <div class="user-photo" style={{backgroundImage: "url(https://m.media-amazon.com/images/I/41rYPBRG-pL._AC_UF894,1000_QL80_.jpg)"}}></div>
}
