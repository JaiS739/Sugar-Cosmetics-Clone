
let navbar = ()=>{
    return `
    
    <div id="header">
      <div class="logo">
        <img src="https://in.sugarcosmetics.com/desc-images/SUGARLogo1.png" alt="" />
      </div>
      <div class="searchbar">
        <input
          type="text"
          class="search_input"
          placeholder='Try "Liquid Lipstick"'
        />
        <a href="lips.html" class="search_icon">Search</a>
      </div>
      <div class="login_btn">
        <img
          src="https://t4.ftcdn.net/jpg/00/65/77/27/240_F_65772719_A1UV5kLi5nCEWI0BNLLiFaBPEkUbv5Fv.jpg"
          alt=""
        />

        <div onclick="window.location.href='login.html'">LOGIN/</div>
        <div onclick="window.location.href='login.html'">SIGN UP</div>
      </div>




      <div class="cute_btn">

          <img id="wishlist"
            src="https://cdn-icons-png.flaticon.com/128/1077/1077086.png";
            alt="wishlist"

            
          />
          <img  id="cart"
                src="https://cdn-icons-png.flaticon.com/512/726/726564.png"
                alt="cart"
                placeholder="cart"
              />


          <img id="discount"
            src="https://in.sugarcosmetics.com/desc-images/discountIcon.svg"
            alt="discount"
            placeholder="Discount"
            
          />

      </div>
    </div>
    <div id="home_nav">
      <ul>
        <li>
          <a href="makeup.html" class="nav_link" style="padding-left: 20px">
            MAKEUP</a
          >
          <div class="dropdown-makeup">
            <ul>
              <li>
                <a href="lips.html">LIPS</a>
              </li>
              <li>
                <a href="makeup.html">FACE</a>
              </li>
              <li>
                <a href="makeup.html">EYES</a>
              </li>
            </ul>
          </div>
        </li>
        <li>
          <a href="brush.html" class="nav_link">BRUSHES</a>
          <div class="dropdown-makeup">
            <ul>
              <li>
              <a href="brush.html">FACE BRUSH</a></li>
              
              <li>EYE BRUSHES 
              <div class="2drop">
              <ul>
              <li>More Bruhes</li>
              <li>Feather Brushes</li></ul>
              
              </li>
              
           
          </div>
        </li>
        <li>
          <a href="#" class="nav_link"> SKINCARE </a>
          <div class="dropdown-makeup">
            <ul>
              <li>
              <a href="moisturizer.html">MOISTURIZERS</li>
              <li>MASKS</li>
              <li>SETTING MISTS</li>
              <li>COFFEE CULTURE RANGE</li>
              <li>SHEET MASK COMBO</li>
            </ul>
          </div>
        </li>
        <li>
          <a href="trend.html" class="nav_link"> TRENDING </a>
          <div class="dropdown-makeup">
            <ul>
              <li>
              <a href="sugermerch.html">SUGAR MERCH STATION</a></li>
              <li>MINIS SET</li>
              <li>MAKEUP KITS</li>
              <li>BESTSELLERS</li>
            </ul>
          </div>
        </li>
        <li>
          <a href="blog.html" class="nav_link">BLOG </a>
          <div class="dropdown-makeup">
            <ul>
              <li>FEATURED</li>
              <li><a href="blogMakeup.html">MAKEUP</a></li>
              <li><a href="blog_Skin">SKINCARE</a></li>
            </ul>
          </div>
        </li>
        <li>
          <a href="offer.html" class="nav_link" tags" id="offerconnect">OFFERS</a>
        </li>
      </ul>
    </div>
  

    
    `;
};

export {navbar};