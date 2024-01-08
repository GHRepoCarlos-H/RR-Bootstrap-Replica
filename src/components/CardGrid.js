// CardGrid.js

import React from 'react';
import './CardGrid.css';

const CardGrid = () => (
  <div className="container mt-5">
    <div className="row">
      {/* Card 1 */}
      <div className="col-md-4 mb-3">
        <div className="card custom-card">
          <div className="row no-gutters">
            <div className="col-md-4">
              <img src="https://1000logos.net/wp-content/uploads/2023/10/Sprouts-Logo-500x281.jpg" className="card-img rounded-circle" />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title">Sprouts</h5>
                <p className="card-text">Delivery + Pickup</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Card 2 */}
      <div className="col-md-4 mb-3">
        <div className="card custom-card border shadow">
          <div className="row no-gutters">
            <div className="col-md-4">
            <img src="https://www.aldi.com/images/aldi_sued_logo.png" className="card-img rounded-circle" alt="Image for Card 2" />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title">Aldi</h5>
                <p className="card-text">Delivery + Pickup</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Card 3 */}
      <div className="col-md-4 mb-3">
        <div className="card custom-card">
          <div className="row no-gutters">
            <div className="col-md-4">
              <img src="https://zenifydrinks.com/wp-content/uploads/2019/02/kroger-logo-png-transparent.png" className="card-img" alt="Image for Card 3" />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title">Kroger</h5>
                <p className="card-text">Delivery Only</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div className="row">
      {/* Card 4 */}
      <div className="col-md-4 mb-3">
        <div className="card custom-card">
          <div className="row no-gutters">
            <div className="col-md-4">
              <img src="https://1000logos.net/wp-content/uploads/2023/10/Sprouts-Logo-500x281.jpg" className="card-img" alt="Image for Card 4" />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title">Sprouts</h5>
                <p className="card-text">Delivery + Pickup</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Card 5 */}
      <div className="col-md-4 mb-3">
        <div className="card custom-card">
          <div className="row no-gutters">
            <div className="col-md-4">
            <img src="https://www.aldi.com/images/aldi_sued_logo.png" className="card-img rounded-circle" alt="Image for Card 2" />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title">Aldi</h5>
                <p className="card-text">Delivery + Pickup</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Card 6 */}
      <div className="col-md-4 mb-3">
        <div className="card custom-card">
          <div className="row no-gutters">
            <div className="col-md-4">
              <img src="https://zenifydrinks.com/wp-content/uploads/2019/02/kroger-logo-png-transparent.png" className="card-img" alt="Image for Card 6" />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title">Kroger</h5>
                <p className="card-text">Delivery Only</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div className="row">
      {/* Card 7 */}
      <div className="col-md-4 mb-3">
        <div className="card custom-card">
          <div className="row no-gutters">
            <div className="col-md-4">
              <img src="https://1000logos.net/wp-content/uploads/2023/10/Sprouts-Logo-500x281.jpg" className="card-img" alt="Image for Card 7" />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title">Sprouts</h5>
                <p className="card-text">Delivery + Pickup</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Card 8 */}
      <div className="col-md-4 mb-3">
        <div className="card custom-card">
          <div className="row no-gutters">
            <div className="col-md-4">
            <img src="https://www.aldi.com/images/aldi_sued_logo.png" className="card-img rounded-circle" alt="Image for Card 2" />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title">Aldi</h5>
                <p className="card-text">Delivery + Pickup</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Card 9 */}
      <div className="col-md-4 mb-3">
        <div className="card custom-card">
          <div className="row no-gutters">
            <div className="col-md-4">
              <img src="https://zenifydrinks.com/wp-content/uploads/2019/02/kroger-logo-png-transparent.png" className="card-img" alt="Image for Card 9" />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title">Kroger</h5>
                <p className="card-text">Delivery Only</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default CardGrid;

