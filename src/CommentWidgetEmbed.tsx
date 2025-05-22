import { useEffect, useRef } from "react";
import "./widget.css";

declare global {
  interface Window {
    initCommentWidget?: (options: {
      pageId: string;
      theme: string;
      containerId: string;
    }) => void;
  }
}

function CommentWidgetEmbed({
  pageId = "default",
  theme = "light",
  containerId = "comment-widget-container",
}) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Check if widget script is already loaded
    if (!window.initCommentWidget) {
      const script = document.createElement("script");
      script.type = "module";
      script.src ="https://threadtalk-frontend.netlify.app/comment-widget.js";
      script.async = true;
      script.onload = initializeWidget;
      document.body.appendChild(script);
    } else {
      initializeWidget();
    }

    function initializeWidget() {
      window.initCommentWidget?.({
        pageId,
        theme,
        containerId,
      });
    }

    return () => {
      // Cleanup if needed
    };
  }, [pageId, theme, containerId]);

  return <div id={containerId} ref={containerRef} />;
}
export default CommentWidgetEmbed;
