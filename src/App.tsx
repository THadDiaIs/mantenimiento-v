import React from 'react';
import LoginVehiculos from './Login';
import FormularioOrden from './Orden'
function App() {
  return (
    <main
      style={{
        backgroundColor: "var(--primary)",
      }}
    >
      <div
        className="illustration"
        style={{
          backgroundImage: "url(/rav-pexels.jpg)",
          width: "100vw",
          height: "90vh",
          backgroundPosition: "center",
        }}
      ></div>
      <div
        className="content"
        style={{
          marginTop: "-90vh",
          width: "100%",
          minHeight: "100vh",
        }}
      >
        <div
          className="nav-container"
          style={{
            width: "100%",
          }}
        >
          <nav
            style={{
              backgroundColor: "rgba(var(--secondary-raw), 0.7)",
              height: "50px",
              width: "90%",
              borderRadius: "1em",
              margin: "1em auto 1em auto",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              paddingLeft: "1em",
              paddingRight: "1em",
            }}
          >
            <a href="#">Logo</a>
            <div>
              <button>button 1</button>
              <button>button2</button>
              <button>button3</button>
            </div>
            <div>
              <button>Login</button>
              <button>Ask something</button>
            </div>
          </nav>
        </div>

        <div
          style={{
            width: "100%",
            height: "70%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            marginTop: "10%",
          }}
        >
          <h1
            style={{
              marginLeft: "5%",
              fontSize: "7rem",
              color: "var(--primary)",
            }}
          >
            Cuida de tu <br /> Vehiculo
          </h1>
        </div>
        
        <div
          className="search-fields-container"
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginTop: "170px",
          }}
        >
          <div
            className="serach-fields"
            style={{
              minWidth: "90%",
              height: "60px",
              backgroundColor: "var(--secondary)",
              display: "flex",
            }}
          >
            <FormularioOrden/>
            <LoginVehiculos/>
            <input type="date" name="date" id="date" />
            <input type="date" name="date" id="date" />
            <input type="date" name="date" id="date" />
            <input type="date" name="date" id="date" />
          </div>
        </div>
      </div>
    </main>
  );
}

export default App;
