import { apiClient } from "./client";

export function notifyNewViewer(channelId: string, viewerId: string) {
  return apiClient.post("/webhook/notify_new_viewer", {
    channel_id: channelId,
    viewer_id: viewerId,
  });
}