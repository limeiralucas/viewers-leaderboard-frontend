import { LocationProvider, Route, Router } from "preact-iso";
import { useEffect, useState } from "preact/hooks";
import { Ranking } from "../../pages/Ranking";
import { NotFound } from "../../pages/_404";
import { getViewersRanking } from "@/api/viewersRanking";
import { apiClient } from "@/api/client";
import { notifyNewViewer } from "@/api/webhook";

declare global {
  interface Window {
    Twitch?: {
      ext: any;
    };
  }
}

export default function App() {
  const twitch = window.Twitch ? window.Twitch.ext : null;
  const [channelId, setChannelId] = useState<string | null>(null);

  useEffect(() => {
    if (twitch) {
      twitch.onAuthorized(async (auth: TwitchAuth) => {
        console.log(auth);
        // Set authorization header on client
        apiClient.defaults.headers.common["Twitch-Auth"] = auth.token;

        setChannelId(auth.channelId);

        await notifyNewViewer(auth.channelId, auth.userId);
      });
    }
  });

	return (
    <LocationProvider>
      <main>
        <Router>
          <Route path="/ranking" component={Ranking} channelId={channelId} />
          <Route default component={NotFound} />
        </Router>
      </main>
    </LocationProvider>
  );
}