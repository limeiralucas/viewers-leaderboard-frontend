import { LocationProvider, Route, Router } from "preact-iso";
import { useEffect, useState } from "preact/hooks";
import { Config } from "@/pages/Config";
import { Ranking } from "@/pages/Ranking";
import { NotFound } from "@/pages/_404";
import { apiClient } from "@/api/client";
import { notifyNewViewer } from "@/api/webhook";
import { FORCE_CHANNEL_ID } from "@/config";

declare global {
  interface Window {
    Twitch?: {
      ext: any;
    };
  }
}

export default function App() {
  const twitch = window.Twitch ? window.Twitch.ext : null;
  const [channelId, setChannelId] = useState<string | null>(FORCE_CHANNEL_ID);

  useEffect(() => {
    if (twitch) {
      twitch.onAuthorized(async (auth: TwitchAuth) => {
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
          <Route path="/config" component={Config} />
          <Route path="/ranking" component={Ranking} channelId={channelId} />
          <Route default component={NotFound} />
        </Router>
      </main>
    </LocationProvider>
  );
}