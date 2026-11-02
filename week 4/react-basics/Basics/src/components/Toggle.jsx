import { useState } from "react";
const Toggle = () => {
  const [password, setPassword] = useState("");
  const [show, setshow] = useState(false);

  const [activeTab, setactiveTab] = useState("Home");

  const tab = ["Home", "Profile", "settings"];
  return (
    <div>
      <div className="password">
        <label>Enter password:</label>
        <input
          type={show ? "text" : "password"}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <label>show</label>
        <input
          type="checkbox"
          value={show}
          onChange={() => setshow((p) => !p)}
        />
      </div>
      <div className="tab">
        {tab.map((t) => (
          <button
            key={t}
            className={activeTab === t ? "active" : ""}
            onClick={() => setactiveTab(t)}
          >{t}</button>
        ))}

        <div className="content">
            {activeTab === 'Home' && <h1>Home</h1>}
            {activeTab === 'Profile' && <h1>Profile</h1>}
            {activeTab === 'settings' && <h1>Settings</h1>}

        </div>
      </div>
    </div>
  );
};

export default Toggle;
