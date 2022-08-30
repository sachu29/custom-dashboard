import React from "react";
import "../SCSS/Dashboard.scss";
import SearchList from "../search-data.json";
<script
  src="https://kit.fontawesome.com/ae81b9c15e.js"
  cross
  origin="anonymous"
></script>;

class Dashboard extends React.Component {
  openPopup = () => {
    document.querySelector(".form-container").style.display = "block";
  };

  filterList = (event) => {
    console.log(event.target.value);
  };
  render() {
    return (
      <div className="dashboard">
        <header>Option</header>

        <main>
          <aside className="left-aside">
            <button
              className="btn btn-primary"
              id="new-btn"
              onClick={this.openPopup}
            >
              + New
            </button>
            <h2 className="left-side__heading">All</h2>
            <ul className="group-list">
              <a href="#" className="group-list__link">
                <li>Test Demo</li>
              </a>
              <a href="#" className="group-list__link">
                <li>Page Builder Demo</li>
              </a>
              <a href="#" className="group-list__link">
                <li>Metabase</li>
              </a>
            </ul>
          </aside>

          <section className="right-main">
            <input
              className="right-main__input"
              type="text"
              placeholder="Filters"
              onChange={this.filterList}
            />

            {/* Mapping Search List */}
            <div>
              {SearchList.map((val, key) => {
                return (
                  <div className="user" key={key}>
                    <p>{val["Dashboard Name "]}</p>
                  </div>
                );
              })}
            </div>
            {/* Mapping Search List */}

            <div className="dashboard-card">
              <i class="fa-regular fa-star"></i>
              <div className="dashboard-card__info">
                <p>Dashboard</p>
                <p>Page Builder Test</p>
              </div>
            </div>

            <div className="dashboard-card">
              <i class="fa-regular fa-star"></i>
              <div className="dashboard-card__info">
                <p>Dashboard</p>
                <p>Page Builder Test</p>
              </div>
            </div>

            <div className="dashboard-card">
              <i class="fa-regular fa-star"></i>
              <div className="dashboard-card__info">
                <p>Dashboard</p>
                <p>Page Builder Test</p>
              </div>
            </div>

            <div className="dashboard-card">
              <i class="fa-regular fa-star"></i>
              <div className="dashboard-card__info">
                <p>Dashboard</p>
                <p>Page Builder Test</p>
              </div>
            </div>

            <div className="dashboard-card">
              <i class="fa-regular fa-star"></i>
              <div className="dashboard-card__info">
                <p>Dashboard</p>
                <p>Page Builder Test</p>
              </div>
            </div>

            <div className="dashboard-card">
              <i class="fa-regular fa-star"></i>
              <div className="dashboard-card__info">
                <p>Dashboard</p>
                <p>Page Builder Test</p>
              </div>
            </div>
          </section>
        </main>
      </div>
    );
  }
}

export default Dashboard;
