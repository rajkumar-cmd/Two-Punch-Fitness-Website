export const navbar = ()=>{
    return `
    <div id="nav_container">
        <div id="brand">
          <a href="./index.html"
            ><img
              src="./img/website logo.png"
              alt=""
          /></a>
        </div>
        <div id="menu_main">
          <div id="workouts">
            <a href="">WORKOUTS <i class="fa-solid fa-caret-down"></i></a>
          </div>
          <div id="programs" id="workout2">
            <a href="">PROGRAMS <i class="fa-solid fa-caret-down"></i></a>
          </div>
          <div id="healthy_living">
            <a href="">
              HEALTHY LIVING <i class="fa-solid fa-caret-down"></i
            ></a>
          </div>
          <div id="community">
            <a href="">COMMUNITY <i class="fa-solid fa-caret-down"></i></a>
          </div>
          <div id="about">
            <a href="">ABOUT <i class="fa-solid fa-caret-down"></i></a>
          </div>
          <div id="store"><a href="">STORE</a></div>
          <div id="membership"><a href="">MEMBERSHIP</a></div>
        </div>
        <div id="menu_controls">
          <div id="login">
            <div>
              <span class="bl"> Hi! Sign In </span>
            </div>
            <div>
              <span> MY FITNESS <i class="fa-solid fa-caret-down"></i></span>
            </div>
          </div>
          <div>
            <i class="fa-solid fa-magnifying-glass"></i>
          </div>
          <div>
            <i class="fa-solid fa-bag-shopping"></i>
          </div>
        </div>
      </div>
      
      
       <div id="workout_inner_pages">
      <div class="inner_page">
        
        <div id="workout_info" class = "inner_img" ><img src="https://www.nicepng.com/png/full/47-478784_gymnastics-svg-dancer-silhouette-yoga-poses-silhouette-png.png" alt="">workout_info  </div>
        <div id="custom" class = "inner_img" ><img src="http://cdn.onlinewebfonts.com/svg/img_105482.png" alt="">custom</div>
      </div>
    </div> 

    <!-- page-2 -->
     <div id="program_inner_pages">
      <div class="inner_page" >
      <div id="workout_programs" class = "inner_img" ><img src="http://cdn.onlinewebfonts.com/svg/img_464400.png" alt="">workout programs  </div>
      <div id="meal_plans" class = "inner_img" ><img src="https://static.thenounproject.com/png/668842-200.png" alt="">meal plans</div>
      <div id="meal_plans" class = "inner_img" ><img src="https://static.thenounproject.com/png/668842-200.png" alt="">meal plans</div>
      <div id="meal_plans" class = "inner_img" ><img src="https://static.thenounproject.com/png/668842-200.png" alt="">meal plans</div>
   
      
        
      </div>
    </div> 

    <!-- page-3 -->
     <div id="healthy_living_inner_pages">
      <div class="inner_page" >
        inside healthy_living
      </div>
     
    </div> 

    <!-- page-4 -->
     <div id="community_inner_pages">
      <div class="inner_page" >
        inside community_inner_pages
      </div>
    </div> 

    <!-- page-5 -->
     <div id="about_inner_pages">
      <div class="inner_page" >
        inside about
      </div>
    </div> `
}