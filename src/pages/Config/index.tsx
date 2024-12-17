import { API_BASE_URL } from "@/config";
import "./style.css";

export function Config() {
  const configUrl = `${API_BASE_URL}/webhook_subscribe`;

  return <div class="subscribe-container">
    <a href={configUrl} about="_blank">Subscribe webhooks</a>
    <p>or access directly:</p>
    <span>{configUrl}</span>
  </div>;
};