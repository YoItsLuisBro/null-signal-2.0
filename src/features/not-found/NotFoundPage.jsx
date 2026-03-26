import { Link } from "react-router-dom";
import { PageMeta } from "../../components/ui/PageMeta";

export function NotFoundPage() {
  return (
    <section className="ns-section">
      <PageMeta title="404" description="Page not found on NULL//SIGNAL." />

      <div className="ns-container">
        <div className="ns-panel-strong p-6 sm:p-8 lg:p-10">
          <p className="ns-label">Signal Error</p>
          <h1 className="ns-heading mt-4 text-4xl sm:text-6xl">404</h1>
          <p className="ns-copy mt-4 max-w-xl">
            The requested route could not be resolved. The signal is lost or the
            page does not exist.
          </p>

          <div className="mt-8">
            <Link to="/" className="ns-btn ns-btn-primary">
              Return Home
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
