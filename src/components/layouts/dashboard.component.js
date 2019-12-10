import React from 'react';
import MatchesList from '../matches/List.component';

const Dashboard = () => {
  return (
    <>
      {/* <section className="section">
        <div className="container is-fluid">
          <p className="title">Welcome on dashboard page</p>
        </div>
      </section> */}
      <section className="section">
        <div className="container is-fluid">
          <div className="columns is-centered">
            <div className="column is-4">
              <MatchesList />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Dashboard;
