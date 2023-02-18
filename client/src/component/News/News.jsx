import React from "react";
import "./News.css";

export const News = (props) => {
  function logout() {
    props.setLoginStatus(false);
    localStorage.clear();
  }

  return (
    <div className="news">
      <div className="navbar">
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          News
        </div>
        <div>
          <button className="logout-button" onClick={logout}>
            Logout
          </button>
        </div>
      </div>

      <div className="news-box">
        <div
          className="news-box-left"
          style={{ width: "98%", padding: "10px" }}
        >
          <div className="left-box">
            <img
              style={{ width: "100%" }}
              src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/575957/its-less-risky-to-make-a-small-downpayment-250x141.jpg"
            />
            <div class="text">
              <h2>Before Making A 20% Mortgage Down Payment, Read This</h2>
              <p>August 8, 2017</p>
              <p>
                Making a large downpayment is not the conservative investment
                you believe it is. The risks of putting 20% down on a home are
                real. Know what you should do.
              </p>
            </div>
          </div>
        </div>
        <div
          className="news-box-right"
          style={{ width: "98%", padding: "10px" }}
        >
          <div className="news-cover">
            <article>
              <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/575957/its-less-risky-to-make-a-small-downpayment-250x141.jpg" />
              <div class="text">
                <h2>Before Making A 20% Mortgage Down Payment, Read This</h2>
                <p>August 8, 2017</p>
                <p>
                  Making a large downpayment is not the conservative investment
                  you believe it is. The risks of putting 20% down on a home are
                  real. Know what you should do.
                </p>
              </div>
            </article>
            <article>
              <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/575957/minimum-fico-score-drops-to-580-250x141.jpg" />
              <div class="text">
                <h2>Minimum FHA Credit Score Requirement Falls 60 Points</h2>
                <span>August 8, 2017</span>
                <p>
                  Credit score requirements are dropping for the FHA mortgage.
                  Analysis and effect on U.S. home buyers, plus today's live FHA
                  mortgage rates.
                </p>
              </div>
            </article>
            <article>
              <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/575957/8.8-1-250x109.png" />
              <div class="text">
                <h2>
                  Mortgage Rates Today, August 8, Plus Lock Recommendations
                </h2>
                <span>August 8, 2017</span>
                <p>
                  Mortgage rates today are driven by movements in financial
                  markets worldwide. When the economy heats up, bond price drop,
                  and rates increase. When the economy pulls back, interest
                  rates tend to fall.
                </p>
              </div>
            </article>
          </div>
        </div>
      </div>
      <br />
      <div className="bottom-card">
        <div class="main">
          <ul class="cards">
            <li class="cards_item">
              <div class="card">
                <div class="card_image">
                  <img src="https://picsum.photos/500/300/?image=10" />
                </div>
                <div class="card_content">
                  <h2 class="card_title">Card Grid Layout</h2>
                  <p class="card_text">
                    Demo of pixel perfect pure CSS simple responsive card grid
                    layout
                  </p>
                  <button class="btn card_btn">Read More</button>
                </div>
              </div>
            </li>
            <li class="cards_item">
              <div class="card">
                <div class="card_image">
                  <img src="https://picsum.photos/500/300/?image=5" />
                </div>
                <div class="card_content">
                  <h2 class="card_title">Card Grid Layout</h2>
                  <p class="card_text">
                    Demo of pixel perfect pure CSS simple responsive card grid
                    layout
                  </p>
                  <button class="btn card_btn">Read More</button>
                </div>
              </div>
            </li>
            <li class="cards_item">
              <div class="card">
                <div class="card_image">
                  <img src="https://picsum.photos/500/300/?image=11" />
                </div>
                <div class="card_content">
                  <h2 class="card_title">Card Grid Layout</h2>
                  <p class="card_text">
                    Demo of pixel perfect pure CSS simple responsive card grid
                    layout
                  </p>
                  <button class="btn card_btn">Read More</button>
                </div>
              </div>
            </li>
            <li class="cards_item">
              <div class="card">
                <div class="card_image">
                  <img src="https://picsum.photos/500/300/?image=14" />
                </div>
                <div class="card_content">
                  <h2 class="card_title">Card Grid Layout</h2>
                  <p class="card_text">
                    Demo of pixel perfect pure CSS simple responsive card grid
                    layout
                  </p>
                  <button class="btn card_btn">Read More</button>
                </div>
              </div>
            </li>
            <li class="cards_item">
              <div class="card">
                <div class="card_image">
                  <img src="https://picsum.photos/500/300/?image=17" />
                </div>
                <div class="card_content">
                  <h2 class="card_title">Card Grid Layout</h2>
                  <p class="card_text">
                    Demo of pixel perfect pure CSS simple responsive card grid
                    layout
                  </p>
                  <button class="btn card_btn">Read More</button>
                </div>
              </div>
            </li>
            <li class="cards_item">
              <div class="card">
                <div class="card_image">
                  <img src="https://picsum.photos/500/300/?image=2" />
                </div>
                <div class="card_content">
                  <h2 class="card_title">Card Grid Layout</h2>
                  <p class="card_text">
                    Demo of pixel perfect pure CSS simple responsive card grid
                    layout
                  </p>
                  <button class="btn card_btn">Read More</button>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
