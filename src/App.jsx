import { useState } from "react";
import {
  Rocket,
  Heart,
  CalendarDays,
  MessageCircle,
  Globe,
  Clock,
  Package,
  Menu,
  X,
} from "lucide-react";

const familyUpdates = [
  {
    id: 1,
    person: "Amma",
    icon: "❤️",
    message: "Did you eat properly today?",
    time: "24 min ago",
  },
  {
    id: 2,
    person: "Dad",
    icon: "📸",
    message: "Dad uploaded 4 family photos.",
    time: "1 hour ago",
  },
  {
    id: 3,
    person: "Anu",
    icon: "🎂",
    message: "My birthday is in 3 days!",
    time: "3 hours ago",
  },
  {
    id: 4,
    person: "Family",
    icon: "🍲",
    message: "Everyone had dinner together.",
    time: "Yesterday",
  },
];

const memoryCapsules = [
  {
    id: 1,
    from: "Amma",
    icon: "❤️",
    title: "For the days you miss home",
    unlockDay: 120,
    message:
      "Take care of yourself. We are all proud of you. Remember that no matter how far you travel, you always have a home waiting for you.",
  },
  {
    id: 2,
    from: "Anu",
    icon: "🎂",
    title: "A little birthday surprise",
    unlockDay: 125,
    message:
      "Happy birthday from Earth! We are celebrating with your favorite cake and saving a piece for you.",
  },
  {
    id: 3,
    from: "Dad",
    icon: "🌍",
    title: "Keep looking at Earth",
    unlockDay: 130,
    message:
      "Whenever you look at Earth from space, remember that we are looking at the same sky from here.",
  },
];

function App() {
  const [role, setRole] = useState("astronaut");
  const [mobileMenu, setMobileMenu] = useState(false);
  const [showFamilyBrief, setShowFamilyBrief] = useState(false);
  const [missionDay, setMissionDay] = useState(118);
  const [selectedCapsule, setSelectedCapsule] = useState(null);
  const [showCommunication, setShowCommunication] = useState(false);
  const [showHome, setShowHome] = useState(false);
  const [showMessage, setShowMessage] = useState(false);

  const openFamilyBrief = () => {
    setShowFamilyBrief(true);
    setMobileMenu(false);
  };

  return (
    <div className="app">

      {/* ================= SIDEBAR ================= */}

      <aside className={`sidebar ${mobileMenu ? "show" : ""}`}>

        <div className="sidebar-top">

          <div className="logo">

            <div className="logo-icon">
              <Rocket size={22} />
            </div>

            <div>
              <h2>CareBridge</h2>
              <span>Mission • Family • Home</span>
            </div>

          </div>

          {mobileMenu && (
            <button
              className="mobile-close"
              onClick={() => setMobileMenu(false)}
            >
              <X size={22} />
            </button>
          )}

        </div>

        <nav>

          <p className="nav-title">MISSION</p>

          <button className="nav-item active">
            <Rocket size={18} />
            Mission Home
          </button>

          <button
            className="nav-item"
            onClick={openFamilyBrief}
          >
            <Heart size={18} />
            Family Brief
          </button>

          <button
            className="nav-item"
            onClick={() => setShowCommunication(true)}
          >
            <MessageCircle size={18} />
            Talk to Home
          </button>

          <p className="nav-title">FAMILY</p>

          <button className="nav-item">
            <Package size={18} />
            Memory Capsules
          </button>

          <button className="nav-item">
            <CalendarDays size={18} />
            Important Events
          </button>

          <p className="nav-title">MISSION TOOLS</p>

          <button
            className="nav-item"
            onClick={() => setShowCommunication(true)}
          >
            <Clock size={18} />
            Communication
          </button>

          <button className="nav-item">
            <Globe size={18} />
            Earth Status
          </button>

        </nav>

        {/* ROLE SWITCH */}

        <div className="role-box">

          <p>VIEW AS</p>

          <button
            className={
              role === "astronaut" ? "role-active" : ""
            }
            onClick={() => {
              setRole("astronaut");
              setMobileMenu(false);
            }}
          >
            🧑‍🚀 Astronaut
          </button>

          <button
            className={
              role === "family" ? "role-active" : ""
            }
            onClick={() => {
              setRole("family");
              setMobileMenu(false);
            }}
          >
            👨‍👩‍👧 Family
          </button>

        </div>

      </aside>

      {/* ================= MOBILE HEADER ================= */}

      <div className="mobile-header">

        <button
          onClick={() => setMobileMenu(true)}
        >
          <Menu size={24} />
        </button>

        <strong>🚀 CareBridge</strong>

      </div>

      {/* ================= MAIN ================= */}

      <main className="main">

        {/* TOP BAR */}

        <header className="topbar">

          <div>

            <p className="small-label">
              {role === "astronaut"
                ? "ASTRONAUT DASHBOARD"
                : "FAMILY DASHBOARD"}
            </p>

            <h1>
              {role === "astronaut"
                ? "Good evening, Commander 👋"
                : "Welcome back, Family ❤️"}
            </h1>

            <p className="subtitle">
              {role === "astronaut"
                ? "Your connection to home, wherever you are."
                : "Stay connected with your astronaut during the mission."}
            </p>

          </div>

          {role === "astronaut" && (

            <div className="mission-day">

              <span>MISSION DAY</span>

              <strong>{missionDay}</strong>

              <button
                className="day-button"
                onClick={() =>
                  setMissionDay((day) => day + 1)
                }
              >
                + 1 Day
              </button>

            </div>

          )}

        </header>

        {/* ================= ASTRONAUT VIEW ================= */}

        {role === "astronaut" ? (

          <>

            {/* EARTH STATUS */}

            <section className="earth-card">

              <div className="earth-icon">
                <Globe size={28} />
              </div>

              <div className="earth-info">

                <span>EARTH STATUS</span>

                <h2>
                  Everyone at home is doing well ❤️
                </h2>

                <p>
                  Your family shared an update 24 minutes ago.
                </p>

              </div>

              <div className="status">
                <span />
                All okay
              </div>

            </section>

            {/* DASHBOARD */}

            <section className="dashboard-grid">

              {/* FAMILY BRIEF */}

              <div className="card family-brief">

                <div className="card-heading">

                  <div className="card-icon green">
                    <Heart size={20} />
                  </div>

                  <div>
                    <span>FAMILY BRIEF</span>
                    <h3>
                      While you were working...
                    </h3>
                  </div>

                </div>

                <p className="brief-text">
                  Everyone at home is doing well.
                  Your family has shared a few
                  updates with you.
                </p>

                <ul className="brief-list">

                  <li>
                    ❤️ Amma checked on you.
                  </li>

                  <li>
                    📸 Dad uploaded family photos.
                  </li>

                  <li>
                    🎂 Anu&apos;s birthday is in 3 days.
                  </li>

                  <li>
                    🍲 Your family had dinner together.
                  </li>

                </ul>

                <button
                  className="outline-button"
                  onClick={openFamilyBrief}
                >
                  View all updates →
                </button>

              </div>

              {/* NEXT EVENT */}

              <div className="card">

                <div className="card-heading">

                  <div className="card-icon orange">
                    <CalendarDays size={20} />
                  </div>

                  <div>
                    <span>NEXT EVENT</span>
                    <h3>
                      Anu&apos;s Birthday
                    </h3>
                  </div>

                </div>

                <div className="event-count">

                  <strong>3</strong>

                  <div>
                    <span>days</span>
                    <p>
                      until the celebration
                    </p>
                  </div>

                </div>

                <p className="muted">
                  Prepare a message for Anu before
                  communication time.
                </p>

                <button
                  className="outline-button"
                  onClick={() => setShowMessage(true)}
                >
                  Prepare message →
                </button>

              </div>

              {/* COMMUNICATION */}

              <div className="card communication-card">

                <div className="card-heading">

                  <div className="card-icon blue">
                    <MessageCircle size={20} />
                  </div>

                  <div>
                    <span>COMMUNICATION</span>
                    <h3>Talk to Home</h3>
                  </div>

                </div>

                <div className="communication-info">

                  <div>
                    <span>NEXT WINDOW</span>
                    <strong>18:30 UTC</strong>
                  </div>

                  <div>
                    <span>SIMULATED DELAY</span>
                    <strong>09:32</strong>
                  </div>

                </div>

                <button
                  className="primary-button"
                  onClick={() =>
                    setShowCommunication(true)
                  }
                >
                  <MessageCircle size={17} />
                  Open Communication
                </button>

              </div>

              {/* MEMORY CAPSULE */}

              <div className="card capsule-card">

                <div className="card-heading">

                  <div className="card-icon purple">
                    <Package size={20} />
                  </div>

                  <div>
                    <span>MEMORY CAPSULE</span>
                    <h3>Messages from home</h3>
                  </div>

                </div>

                <div className="capsule-list">

                  {memoryCapsules.map((capsule) => {

                    const unlocked =
                      missionDay >= capsule.unlockDay;

                    return (

                      <div
                        className={`capsule-item ${
                          unlocked
                            ? "unlocked"
                            : "locked"
                        }`}
                        key={capsule.id}
                      >

                        <div className="capsule-icon">
                          {unlocked
                            ? capsule.icon
                            : "🔒"}
                        </div>

                        <div className="capsule-details">

                          <strong>
                            {capsule.title}
                          </strong>

                          <p>
                            From {capsule.from}
                          </p>

                          {unlocked ? (

                            <span className="unlock-text">
                              ✨ Ready to open
                            </span>

                          ) : (

                            <span className="lock-text">
                              Unlocks on Mission Day{" "}
                              {capsule.unlockDay}
                            </span>

                          )}

                        </div>

                        {unlocked && (

                          <button
                            className="open-capsule"
                            onClick={() =>
                              setSelectedCapsule(capsule)
                            }
                          >
                            Open
                          </button>

                        )}

                      </div>

                    );

                  })}

                </div>

              </div>

            </section>

            {/* MISSING HOME */}

            <section className="missing-home">

              <div>

                <Heart size={25} />

                <div>

                  <h3>Missing home?</h3>

                  <p>
                    Take a moment to reconnect with
                    the people who are waiting for you
                    on Earth.
                  </p>

                </div>

              </div>

              <button
                className="primary-button"
                onClick={() => setShowHome(true)}
              >
                Open Home ❤️
              </button>

            </section>

          </>

        ) : (

          /* ================= FAMILY VIEW ================= */

          <section className="family-dashboard">

            <div className="family-hero card">

              <div className="card-icon green">
                <Rocket size={24} />
              </div>

              <div>

                <span>ASTRONAUT STATUS</span>

                <h2>
                  Commander is currently on Mission Day 118
                </h2>

                <p>
                  Last communication received 24 minutes ago.
                </p>

              </div>

              <div className="status">
                <span />
                Connected
              </div>

            </div>

            <div className="family-grid">

              {/* SEND MESSAGE */}

              <div className="card">

                <div className="card-heading">

                  <div className="card-icon blue">
                    <MessageCircle size={20} />
                  </div>

                  <div>
                    <span>COMMUNICATION</span>
                    <h3>Send a message</h3>
                  </div>

                </div>

                <p className="muted">
                  Your message will be delivered during
                  the next communication window.
                </p>

                <button
                  className="primary-button"
                  onClick={() => setShowMessage(true)}
                >
                  Write message →
                </button>

              </div>

              {/* CREATE MEMORY */}

              <div className="card">

                <div className="card-heading">

                  <div className="card-icon purple">
                    <Package size={20} />
                  </div>

                  <div>
                    <span>MEMORY CAPSULE</span>
                    <h3>Create a memory</h3>
                  </div>

                </div>

                <p className="muted">
                  Leave a message that can unlock on
                  a future mission day.
                </p>

                <button
                  className="outline-button"
                  onClick={() => setShowMessage(true)}
                >
                  Create capsule →
                </button>

              </div>

            </div>

          </section>

        )}

      </main>

      {/* ================= FAMILY BRIEF MODAL ================= */}

      {showFamilyBrief && (

        <div
          className="modal-overlay"
          onClick={() => setShowFamilyBrief(false)}
        >

          <div
            className="family-modal"
            onClick={(e) => e.stopPropagation()}
          >

            <div className="modal-header">

              <div>

                <span>FAMILY CONNECTION</span>

                <h2>
                  Updates from Home ❤️
                </h2>

              </div>

              <button
                className="modal-close"
                onClick={() =>
                  setShowFamilyBrief(false)
                }
              >
                <X size={20} />
              </button>

            </div>

            <div className="family-updates">

              {familyUpdates.map((update) => (

                <div
                  className="update-row"
                  key={update.id}
                >

                  <div className="update-icon">
                    {update.icon}
                  </div>

                  <div>

                    <strong>
                      {update.person}
                    </strong>

                    <p>
                      {update.message}
                    </p>

                    <small>
                      {update.time}
                    </small>

                  </div>

                </div>

              ))}

            </div>

            <div className="modal-footer">

              <p>
                💚 Everyone at home is doing well.
              </p>

              <button
                className="primary-button"
                onClick={() =>
                  setShowFamilyBrief(false)
                }
              >
                Done
              </button>

            </div>

          </div>

        </div>

      )}

      {/* ================= MEMORY CAPSULE MODAL ================= */}

      {selectedCapsule && (

        <div
          className="modal-overlay"
          onClick={() => setSelectedCapsule(null)}
        >

          <div
            className="capsule-modal"
            onClick={(e) => e.stopPropagation()}
          >

            <div className="capsule-modal-icon">
              {selectedCapsule.icon}
            </div>

            <span className="capsule-label">
              MEMORY CAPSULE
            </span>

            <h2>
              {selectedCapsule.title}
            </h2>

            <p className="capsule-from">
              From {selectedCapsule.from} ❤️
            </p>

            <div className="capsule-message">

              <p>
                &quot;{selectedCapsule.message}&quot;
              </p>

            </div>

            <p className="capsule-day">
              Opened on Mission Day {missionDay}
            </p>

            <button
              className="primary-button capsule-close"
              onClick={() =>
                setSelectedCapsule(null)
              }
            >
              Keep this memory ❤️
            </button>

          </div>

        </div>

      )}

      {/* ================= COMMUNICATION MODAL ================= */}

      {showCommunication && (

        <div
          className="modal-overlay"
          onClick={() =>
            setShowCommunication(false)
          }
        >

          <div
            className="simple-modal"
            onClick={(e) => e.stopPropagation()}
          >

            <button
              className="modal-close"
              onClick={() =>
                setShowCommunication(false)
              }
            >
              <X size={20} />
            </button>

            <div className="card-icon blue large-icon">
              <MessageCircle size={25} />
            </div>

            <span>
              COMMUNICATION WINDOW
            </span>

            <h2>
              Talk to Home
            </h2>

            <p>
              Next communication window:{" "}
              <strong>18:30 UTC</strong>
            </p>

            <p>
              Simulated communication delay:{" "}
              <strong>09:32</strong>
            </p>

            <button
              className="primary-button"
              onClick={() => {
                setShowCommunication(false);
                setShowMessage(true);
              }}
            >
              Compose message →
            </button>

          </div>

        </div>

      )}

      {/* ================= VIRTUAL HOME MODAL ================= */}

      {showHome && (

        <div
          className="modal-overlay"
          onClick={() => setShowHome(false)}
        >

          <div
            className="simple-modal home-modal"
            onClick={(e) => e.stopPropagation()}
          >

            <button
              className="modal-close"
              onClick={() => setShowHome(false)}
            >
              <X size={20} />
            </button>

            <div className="home-heart">
              ❤️
            </div>

            <span>
              VIRTUAL HOME
            </span>

            <h2>
              A little piece of Earth
            </h2>

            <p>
              Imagine your family sitting together
              at home. Their messages, memories and
              important moments are always close to you.
            </p>

            <button
              className="primary-button"
              onClick={() => setShowHome(false)}
            >
              Back to Mission
            </button>

          </div>

        </div>

      )}

      {/* ================= MESSAGE MODAL ================= */}

      {showMessage && (

        <div
          className="modal-overlay"
          onClick={() => setShowMessage(false)}
        >

          <div
            className="simple-modal"
            onClick={(e) => e.stopPropagation()}
          >

            <button
              className="modal-close"
              onClick={() => setShowMessage(false)}
            >
              <X size={20} />
            </button>

            <div className="card-icon blue large-icon">
              <MessageCircle size={25} />
            </div>

            <span>
              MESSAGE COMPOSER
            </span>

            <h2>
              Write to Home ❤️
            </h2>

            <textarea
              className="message-box"
              placeholder="Write your message here..."
              rows="5"
            />

            <button
              className="primary-button"
              onClick={() => {
                setShowMessage(false);
                alert(
                  "Message saved for the next communication window."
                );
              }}
            >
              Save message
            </button>

          </div>

        </div>

      )}

    </div>
  );
}

export default App;