import { useEffect, useState } from "react";
import { PhoneFrame } from "./components/PhoneFrame.jsx";
import { AnalyticsScreen } from "./screens/AnalyticsScreen.jsx";
import { DocumentsScreen } from "./screens/DocumentsScreen.jsx";
import { HomeScreen } from "./screens/HomeScreen.jsx";
import { IncomeScreen } from "./screens/IncomeScreen.jsx";
import { PersonalScreen } from "./screens/PersonalScreen.jsx";
import { ProfileScreen } from "./screens/ProfileScreen.jsx";
import { StatementScreen } from "./screens/StatementScreen.jsx";
import { ViewerScreen } from "./screens/ViewerScreen.jsx";

export default function App() {
  const [screen, setScreen] = useState("home");
  const [viewer, setViewer] = useState({ src: "", isObjectUrl: false });

  useEffect(() => {
    return () => {
      if (viewer.isObjectUrl && viewer.src) {
        URL.revokeObjectURL(viewer.src);
      }
    };
  }, [viewer]);

  const goTo = (nextScreen) => {
    setScreen(nextScreen);
  };

  const openViewer = (src, isObjectUrl = false) => {
    setViewer((currentViewer) => {
      if (currentViewer.isObjectUrl && currentViewer.src) {
        URL.revokeObjectURL(currentViewer.src);
      }

      return { src, isObjectUrl };
    });
    setScreen("viewer");
  };

  const screens = {
    home: <HomeScreen goTo={goTo} />,
    analytics: <AnalyticsScreen goTo={goTo} />,
    income: <IncomeScreen goTo={goTo} />,
    profile: <ProfileScreen goTo={goTo} />,
    documents: <DocumentsScreen goTo={goTo} />,
    personal: <PersonalScreen goTo={goTo} />,
    statement: <StatementScreen goTo={goTo} openViewer={openViewer} />,
    viewer: <ViewerScreen goTo={goTo} src={viewer.src} />,
  };

  return (
    <PhoneFrame>
      <div className="flex h-full flex-col bg-black text-white">
        {screens[screen] ?? screens.home}
      </div>
    </PhoneFrame>
  );
}
