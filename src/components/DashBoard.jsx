import { useState } from "react";
import Template from "./Template";
import CashMemo from "./cashMemo";

function DashBoard() {
  const [showMemo, setShowMemo] = useState(false);

  return (
    <div>
      {/* Navbar */}
      <nav className="dashboard-navbar">
        <h2 className="dashboard-logo">Amit Electricals</h2>

        <ul className="dashboard-nav-links">
          <li onClick={() => setShowMemo(false)}>Home</li>
          <li onClick={() => setShowMemo(true)}>Cash Memo</li>
          <li>Report</li>
          <li>Contact</li>
        </ul>
      </nav>

      {/* Hero (only home) */}
      {!showMemo && (
        <main className="dashboard-hero">
          <h1>Welcome to Cash Memo App!</h1>
          <p>⚡ Generate memos fast | Perfect print | Business growth 🚀</p>
        </main>
      )}
      
      {/* Content Switch */}
      {!showMemo ? (
        <section className="template-preview" onClick={() => setShowMemo(true)}>
          <Template />
        </section>
      ) : (
        <CashMemo goBack={() => setShowMemo(false)} />
      )}
    </div>
  );
}

export default DashBoard;
