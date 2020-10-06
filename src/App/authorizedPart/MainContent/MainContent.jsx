import React from "react";
import { Link } from "react-router-dom";

import "../styles.css";

class MainContent extends React.Component {
  render() {
    return (
      <div id="layoutSidenav_content">
        <main>
          <div className="container-fluid">
            <h1 className="mt-4">Dashboard</h1>
            <ol className="breadcrumb mb-4">
              <li className="breadcrumb-item active">Dashboard</li>
            </ol>
            <div className="row">
              <div className="col-xl-3 col-md-6">
                <div className="card bg-primary text-white mb-4">
                  <div className="card-body">Primary Card</div>
                  <div className="card-footer d-flex align-items-center justify-content-between">
                    <Link className="small text-white stretched-link" href="#">
                      View Details
                    </Link>
                    <div className="small text-white">
                      <i className="fas fa-angle-right"></i>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-md-6">
                <div className="card bg-warning text-white mb-4">
                  <div className="card-body">Warning Card</div>
                  <div className="card-footer d-flex align-items-center justify-content-between">
                    <Link className="small text-white stretched-link" href="#">
                      View Details
                    </Link>
                    <div className="small text-white">
                      <i className="fas fa-angle-right"></i>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-md-6">
                <div className="card bg-success text-white mb-4">
                  <div className="card-body">Success Card</div>
                  <div className="card-footer d-flex align-items-center justify-content-between">
                    <Link className="small text-white stretched-link" href="#">
                      View Details
                    </Link>
                    <div className="small text-white">
                      <i className="fas fa-angle-right"></i>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-md-6">
                <div className="card bg-danger text-white mb-4">
                  <div className="card-body">Danger Card</div>
                  <div className="card-footer d-flex align-items-center justify-content-between">
                    <Link className="small text-white stretched-link" href="#">
                      View Details
                    </Link>
                    <div className="small text-white">
                      <i className="fas fa-angle-right"></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-xl-6">
                <div className="card mb-4">
                  <div className="card-header">
                    <i className="fas fa-chart-area mr-1"></i>
                    Area Chart Example
                  </div>
                  <div className="card-body">
                    <canvas id="myAreaChart" width="100%" height="40"></canvas>
                  </div>
                </div>
              </div>
              <div className="col-xl-6">
                <div className="card mb-4">
                  <div className="card-header">
                    <i className="fas fa-chart-bar mr-1"></i>
                    Bar Chart Example
                  </div>
                  <div className="card-body">
                    <canvas id="myBarChart" width="100%" height="40"></canvas>
                  </div>
                </div>
              </div>
            </div>
            <TemporaryData />
          </div>
        </main>
        <footer className="py-4 bg-light mt-auto">
          <div className="container-fluid">
            <div className="d-flex align-items-center justify-content-between small">
              <div className="text-muted">
                Copyright &copy; Your Website 2020
              </div>
              <div>
                <Link href="#">Privacy Policy</Link>
                &middot;
                <Link href="#">Terms &amp; Conditions</Link>
              </div>
            </div>
          </div>
        </footer>
      </div>
    );
  }
}
export default MainContent;

const TemporaryData = () => {
  return (
    <div className="card mb-4">
      <div className="card-header">
        <i className="fas fa-table mr-1"></i>
        Ostatnie transakcje
      </div>
      <div className="card-body">
        <div className="table-responsive">
          <table
            className="table table-bordered"
            id="dataTable"
            width="100%"
            cellSpacing="0"
          >
            <thead>
              <tr>
                <th>Name</th>
                <th>Position</th>
                <th>Office</th>
                <th>Age</th>
                <th>Start date</th>
                <th>Salary</th>
              </tr>
            </thead>
            <tfoot>
              <tr>
                <th>Name</th>
                <th>Position</th>
                <th>Office</th>
                <th>Age</th>
                <th>Start date</th>
                <th>Salary</th>
              </tr>
            </tfoot>
            <tbody>
              <tr>
                <td>Zorita Serrano</td>
                <td>Software Engineer</td>
                <td>San Francisco</td>
                <td>56</td>
                <td>2012/06/01</td>
                <td>$115,000</td>
              </tr>
              <tr>
                <td>Jennifer Acosta</td>
                <td>Junior Javascript Developer</td>
                <td>Edinburgh</td>
                <td>43</td>
                <td>2013/02/01</td>
                <td>$75,650</td>
              </tr>
              <tr>
                <td>Cara Stevens</td>
                <td>Sales Assistant</td>
                <td>New York</td>
                <td>46</td>
                <td>2011/12/06</td>
                <td>$145,600</td>
              </tr>
              <tr>
                <td>Hermione Butler</td>
                <td>Regional Director</td>
                <td>London</td>
                <td>47</td>
                <td>2011/03/21</td>
                <td>$356,250</td>
              </tr>
              <tr>
                <td>Lael Greer</td>
                <td>Systems Administrator</td>
                <td>London</td>
                <td>21</td>
                <td>2009/02/27</td>
                <td>$103,500</td>
              </tr>
              <tr>
                <td>Jonas Alexander</td>
                <td>Developer</td>
                <td>San Francisco</td>
                <td>30</td>
                <td>2010/07/14</td>
                <td>$86,500</td>
              </tr>
              <tr>
                <td>Shad Decker</td>
                <td>Regional Director</td>
                <td>Edinburgh</td>
                <td>51</td>
                <td>2008/11/13</td>
                <td>$183,000</td>
              </tr>
              <tr>
                <td>Michael Bruce</td>
                <td>Javascript Developer</td>
                <td>Singapore</td>
                <td>29</td>
                <td>2011/06/27</td>
                <td>$183,000</td>
              </tr>
              <tr>
                <td>Donna Snider</td>
                <td>Customer Support</td>
                <td>New York</td>
                <td>27</td>
                <td>2011/01/25</td>
                <td>$112,000</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
