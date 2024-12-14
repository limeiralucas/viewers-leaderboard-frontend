import { apiClient } from "./client";

export async function getViewersRanking(channelId: string) {
  const response = await apiClient.get<ViewersRanking>(`/ranking/${channelId}`);

  return response.data;
}
