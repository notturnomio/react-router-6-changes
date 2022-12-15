import React from "react";
import { Outlet } from "react-router-dom";

function Welcome() {
  return (
    <section>
      <h1>The Welcome Page</h1>
      {/* <Routes>
        <Route path="/new-user" element={<p>Welcome, new User!</p>} />
      </Routes> */}
      <Outlet />
    </section>
  );
}

export default Welcome;
