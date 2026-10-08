// src/components/Navbar.jsx
const Navbar = ({ setView }) => {
  const total = 0;
  const token = false; // cambia a true para probar

  const formatCurrency = (value) =>
    value.toLocaleString("es-CL", { minimumFractionDigits: 0 });

  return (
    <nav className="navbar navbar-dark bg-dark px-4">
      <span
        className="navbar-brand mb-0 h1"
        style={{ cursor: "pointer" }}
        onClick={() => setView("home")}
      >
        Pizzería Mamma Mía
      </span>

      <div className="d-flex gap-2">
        {/* Home (siempre visible) */}
        <button
          className="btn btn-outline-light"
          onClick={() => setView("home")}
        >
          🏠 Home
        </button>

        {/* Botones según token */}
        {token ? (
          <>
            <button className="btn btn-outline-light">🔓 Profile</button>
            <button className="btn btn-outline-light">🔒 Logout</button>
          </>
        ) : (
          <>
            <button
              className="btn btn-outline-light"
              onClick={() => setView("login")}
            >
              🔐 Login
            </button>
            <button
              className="btn btn-outline-light"
              onClick={() => setView("register")}
            >
              📝 Register
            </button>
          </>
        )}

        {/* Total (siempre visible) */}
        <button className="btn btn-warning">
          🛒 Total: ${formatCurrency(total)}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
