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
    url: "/ethanchaoo",
    embedSrc:
      "https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7473450620209778690?collapsed=1",
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

      <main className={pageType === "experience" ? "webpage-embed" : "webpage-placeholder"}>
        {pageType === "experience" && "embedSrc" in page ? (
          <iframe
            src={page.embedSrc}
            height={628}
            width={504}
            frameBorder={0}
            allowFullScreen
            title="Embedded post"
          />
        ) : pageType === "leadership" ? (
          <>
            <p className="eyebrow">{pageContent.leadership.eyebrow}</p>
            <h1>{pageContent.leadership.title}</h1>
            <p>{pageContent.leadership.body}</p>

            <section className="component-dropzone">
              <h2>Component placeholder</h2>
              <p>
                Replace this section with your real content components when you are
                ready.
              </p>
            </section>
          </>
        ) : null}
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
