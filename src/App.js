import { useState } from 'react';
import './App.css';

function App() {
  const [open, setOpen] = useState(false)
  return (
    <div className="App">
      <header className="header">
        <nav className="navBar">
          <img src="/For-Website.png" id="logo" alt="" />
          <ul className="navList">
            <li className="navItem">Home</li>
            <li className="navItem">About Us</li>
            <li className="navItem">Products</li>
            <li className="navItem">Benefits</li>
            <li className="navItem">Kenko Nutri Club</li>
            <li className="navItem">Health Corner</li>
            <li className="navItem">Events</li>
            <li className="navItem">Contact Us</li>
            <li className="navItem">Employee Desk</li>
          </ul>
          <div className="search">
            <div className="hamberger" onClick={() => setOpen(!open)}>
              <span></span>
              <span></span>
              <span></span>
            </div>
            <input type="search" name="" id="" placeholder="Serach..." />
            <button type="submit"><img src="/search-30.png" alt="" /></button>
          </div>
        </nav>
        <nav onClick={() => setOpen(false)} className="navMenu" style={{ transform: open ? "translate(0)" : "translate(1000px)" }}>
          <img src="/multiply.png" onClick={() => setOpen(false)} className="close" alt="" />
          <ul className="menuList">
            <li className="menuItem">Home</li>
            <li className="menuItem">About Us</li>
            <li className="menuItem">Products</li>
            <li className="menuItem">Benefits</li>
            <li className="menuItem">Kenko Nutri Club</li>
            <li className="menuItem">Health Corner</li>
            <li className="menuItem">Events</li>
            <li className="menuItem">Contact Us</li>
            <li className="menuItem">Employee Desk</li>
          </ul>
          <div className="search">
            <input type="search" name="" id="" placeholder="Serach..." />
            <button type="submit"><img src="/search-30.png" alt="" /></button>
          </div>
        </nav>
      </header>
      <section className="mainSection">
        <img src="/main.jpg" style={{ width: "100%" }} alt="" />
      </section>
      <section className="cardSection">
        <div className="cards">
          <div className="cardItem">
            <div className="body">
              <div className="cardImage">
                <img src="/cardimg.jpg" alt="" />
              </div>
              <div className="content">
                <h3>
                  <a href="https://ovofarm.in/health-corner/kenko-nutri-club-encouraging-an-eggitarian-lifestyle/">
                    Kenko Nutri Club: Encouraging an ‘Eggitarian’ lifestyle
                  </a>
                </h3>
                <p>
                  Members of a newly-formed nutrition club can be found eating figs, pears, apples, and other healthy snacks, sometimes even discussing ways of keeping fit through
                </p>
              </div>
            </div>
          </div>
          <div class="cardItem">
            <div class="body">
              <div class="cardImage">
                <img src="/health2.jpg" alt="" />
              </div>
              <div class="content">
                <h3>
                  <a href="https://ovofarm.in/health-corner/nutritious-eggs-augment-your-immunity-power/">
                    NUTRITIOUS EGGS AUGMENT YOUR IMMUNITY POWER
                  </a>
                </h3>
                <p>
                  The eggs have been part of our diets since the dawning of time. Eggs are nature’s original superfood. Only a few people know the full
                </p>
              </div>
            </div>
          </div>
          <div class="cardItem">
            <div class="body">
              <div class="cardImage">
                <img src="/health3.jpg" alt="" />
              </div>
              <div class="content">
                <h3>
                  <a href="https://ovofarm.in/health-corner/7-benefits-of-having-eggs-in-winter/">
                    Seven Benefits of having eggs in winter
                  </a>
                </h3>
                <p>
                  Winter is a season of many precautions.  As it approaches, fans are switched off, sweaters and jackets are out for use, people get cozy inside
                </p>
              </div>
            </div>
          </div>
          <div class="cardItem">
            <div class="body">
              <div class="cardImage">
                <img src="/health4.jpg" alt="" />
              </div>
              <div class="content">
                <h3>
                  <a href="https://ovofarm.in/health-corner/childhood-favourite-egg-recipes/">

                    Childhood Favourite Egg Recipes                             </a>
                </h3>
                <p>
                  Eggs are always a favourite for many people across the globe. Children develop and grow up really quickly, and good nutritious food is the key
                </p>
              </div>
            </div>
          </div>
          <div class="cardItem">
            <div class="body">
              <div class="cardImage">
                <img src="/health5.jpg" alt="" />
              </div>
              <div class="content">
                <h3>
                  <a href="https://ovofarm.in/health-corner/5-interesting-facts-about-eggs/">

                    5 INTERESTING FACTS ABOUT EGGS                             </a>
                </h3>
                <p>
                  The humble egg is one of the true miracles of nature and probably the most versatile of all foods in the world. Eggs are one
                </p>
              </div>
            </div>
          </div>
          <div class="cardItem">
            <div class="body">
              <div class="cardImage">
                <img src="/health6.jpg" alt="" />
              </div>
              <div class="content">
                <h3>
                  <a href="https://ovofarm.in/health-corner/un-names-eggs-as-a-star-ingredient/">

                    UN names Eggs as a star ingredient                             </a>
                </h3>
                <p>
                  According to the United Nations, good and nutritious food is one of the essential factors for the health and nutrition in the world and a
                </p>
              </div>
            </div>
          </div>
          <div class="cardItem">
            <div class="body">
              <div class="cardImage">
                <img src="/health7.jpg" alt="" />
              </div>
              <div class="content">
                <h3>
                  <a href="https://ovofarm.in/health-corner/eggs-and-the-homemakers-secrets/">

                    Eggs and The Homemaker’s Secrets                             </a>
                </h3>
                <p>The egg is one of the versatile ingredients in the kitchen in every sense. Being light on the wallet, always easy to cook with, and

                </p>
              </div>
            </div>
          </div>
          <div class="cardItem">
            <div class="body">
              <div class="cardImage">
                <img src="/health8.jpg" alt="" />
              </div>
              <div class="content">
                <h3>
                  <a href="https://ovofarm.in/health-corner/intake-of-eggs-for-healthy-aging/">

                    Intake of Eggs for Healthy Aging                             </a>
                </h3>
                <p>As we grow older, nutrition and physical activity become extremely important. Aging can be delayed or even reversed with a healthy combination of good food</p>
              </div>
            </div>
          </div>
          <div class="cardItem">
            <div class="body">
              <div class="cardImage">
                <img src="/health9.jpg" alt="" />
              </div>
              <div class="content">
                <h3>
                  <a href="https://ovofarm.in/health-corner/good-egg-production-practices-and-how-ovo-is-world-class-in-this-process/">

                    Good egg production practices and how OVO is world-class in this process                             </a>
                </h3>
                <p>
                  The primary function of the egg industry is fresh egg production. Fresh farm eggs are primary sources of quality proteins, minerals, and vitamins needed for
                </p>
              </div>
            </div>
          </div>
          <div class="cardItem">
            <div class="body">
              <div class="cardImage">
                <img src="/health10.jpg" alt="" />
              </div>
              <div class="content">
                <h3>
                  <a href="https://ovofarm.in/health-corner/eggs-a-versatile-food/">

                    Eggs: A Versatile Food                             </a>
                </h3>
                <p>An egg humbly performs myriad culinary functions without being noticed. It’s a little gluten-free seed, packed with protein, riboflavin, selenium, and is the most modest</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
