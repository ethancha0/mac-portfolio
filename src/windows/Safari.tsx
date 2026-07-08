import { Search } from "lucide-react";
import WindowControls from "../components/WindowControls";
import WindowWrapper from "../hoc/WindowWrapper";
import useWindowStore from "../store/window";
import type { WindowKey } from "../store/window";

type SafariPageData = {
  name?: string;
  pageType?: string;
};

const pageContent = {
  experience: {
    title: "Experiance",
    url: "ethanchao.dev/experiance",
    eyebrow: "Personal webpage placeholder",
    body: "Add your experience timeline, internships, roles, achievements, and the components you want to use for this page here.",
  },
  leadership: {
    title: "Leadership",
    url: "ethanchao.dev/leadership",
    eyebrow: "Personal webpage placeholder",
    body: "Add your leadership roles, organizations, initiatives, photos, and story-driven components for this page here.",
  },
} as const;

type LocalPageType = keyof typeof pageContent;

type SafariProps = {
  windowKey: WindowKey;
  defaultPageType?: LocalPageType;
};

const isLocalPageType = (pageType?: string): pageType is LocalPageType =>
  pageType === "experience" || pageType === "leadership";

const Safari = ({ windowKey, defaultPageType = "experience" }: SafariProps) => {
  const data = useWindowStore((state) => state.windows[windowKey].data) as SafariPageData | null;
  const pageType = isLocalPageType(data?.pageType) ? data.pageType : defaultPageType;
  const page = pageContent[pageType];

  return (
    <>
      <div id="window-header">
        <WindowControls target={windowKey} />
        <div className="search">
          <Search size={16} />
          <input value={page.url} readOnly aria-label="Current page URL" />
        </div>
      </div>

      <main className="webpage-placeholder">
        <p className="eyebrow">{page.eyebrow}</p>
        <h1>{page.title}</h1>
        <p>{page.body}</p>

        <section className="component-dropzone">
          <h2>Component placeholder</h2>
          <p>
            Replace this section with your real content components when you are
            ready.
          </p>
        </section>
      </main>
    </>
  );
};

const SafariWindow = WindowWrapper(
  () => <Safari windowKey="safari" defaultPageType="experience" />,
  "safari"
);
export const ExperienceSafariWindow = WindowWrapper(
  () => <Safari windowKey="safariExperience" defaultPageType="experience" />,
  "safariExperience"
);
export const LeadershipSafariWindow = WindowWrapper(
  () => <Safari windowKey="safariLeadership" defaultPageType="leadership" />,
  "safariLeadership"
);

export default SafariWindow;
