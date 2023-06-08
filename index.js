let header = document.querySelector("header");
let section_01 = document.querySelector("#section_inicial_01");
let section_02 = document.querySelector("#section_second_02");
let section_03 = document.querySelector("#section_second_03");
let section_04 = document.querySelector("#section_second_04");
let section_05 = document.querySelector("#section_second_05");
let section_06 = document.querySelector("#section_second_06");
let contact = document.querySelector("#contact");
let about = document.querySelector("#about");

window.addEventListener("DOMContentLoaded", () => {
  header.innerHTML = `
  <div id="header_mobile">
    <img id="logo" src="./images/logo.png"/>
    <img id="menu" src="./images/Sort.png"/>
    </div>
    <div id="header_desktop">
    <img src="./images/logo.png" alt="">
        <ul>
            <li>Home</li>
            <li>Services</li>
            <li>Our Project</li>
            <li>About us</li>
        </ul>
        <button id="btn_header">Contact us</button></div>
`;

  section_01.innerHTML = `
  <h1 class="title_message">Build Your Awesome Platform</h1>

  <p class="paragraph_message">Enver studio is a digital studio that offers several services such as UI/UX Design to developers, we will provide the best service for those of you who use our services.</p>

  <button id="button_message_inital">Our Services <img src="./images/seta.png"/></button>
`;

  section_02.innerHTML = `
  <div id="container_images_NO">
  <img id="circulos" src="./images/circulos.png"/>
  <img id="onda" src="./images/onda.png"/>
  <img id="mais" src="./images/mais.png"/>
  <img class="play" src="./images/play.png"/>
  <img id="jovem" src="./images/jovem.png"/>
  </div>
`;

  section_03.innerHTML = `
 <h1 id="title_section_03" class="title_message">Why Enver Is The Best Choice?</h1>

  <p id="paragraph_section_03" class="paragraph_message">Watch this one minute video so you understand why you should use our services!</p>
<div class="container_img">
  <img id="bg" src="./images/reuniao_empresa_produtiva.jpg"/>
  </div>
`;

  section_04.innerHTML = `

<h1 id="title_section_04" class="title_message "><img class="play_title" src="./images/play.png"/>The Service We Provide For You   <img id="mais_section_04" src="./images/mais.png"/></h1>`;

  section_05.innerHTML = `

                <div class="card">
                  <div>
                       <img src="./images/icon_01.png"/>
                   </div>
                    <h3>Development</h3>
                    <p class="paragraph_card">Create a platform with the best and coolest quality from us.</p>
                </div>

                <div class="card">
                    <div>
                         <img src="./images/Icon_02.png"/>
                    </div>
                    <h3>UI/UX Designer</h3>
                    <p class="paragraph_card">We provide UI/UX Design services, and of course with the best quality</p>
                </div>

                <div class="card">
                    <div>
                         <img src="./images/Icon_03.png"/>
                    </div>
                    <h3>Graphik Designer</h3>
                    <p class="paragraph_card">We provide Graphic Design services, with the best designers</p>
                </div>

                <div class="card">
                    <div>
                         <img src="./images/Icon_04.png"/>
                    </div>
                    <h3>Motion Graphik</h3>
                    <p class="paragraph_card">Create a platform with the best and coolest quality from us.</p>
                </div>

                <div class="card">
                    <div>
                         <img src="./images/Icon_05.png"/>
                    </div>
                    <h3>Photography</h3>
                    <p class="paragraph_card">We provide Photography services, and of course with the best quality</p>
                </div>

                <div class="card">
                    <div>
                         <img src="./images/Icon_06.png"/>
                    </div>
                    <h3>Videography</h3>
                    <p class="paragraph_card">Create a platform with the best and coolest quality from us.</p>
                </div>
                <img id="mais_section_05" src="./images/mais.png"/>
`;

  section_06.innerHTML = `
<h1 id="title_section_06" class="title_message">Our Awesome Portofolio  <img id="circulos_section_06" src="./images/circulos.png"/></h1>
<section id="container_carrosel">
<div id="carrosel">
<img id="carrosel_item_01" class="carrosel_item" src="./images/image_carrosel_01.png"/>
<img id="carrosel_item_02" class="carrosel_item" src="./images/image_carrosel_02.png"/>
<img id="carrosel_item_03" class="carrosel_item" src="./images/image_carrosel_03.png"/>
</div>
<img id="onda_carrosel" src="./images/onda.png"/>
</section>



`;

  contact.innerHTML = `<img id="mais_footer" src="./images/mais.png"/><h1 id="title_footer">Contact us for the service you want to use</h1> <img id="circulos_footer" src="./images/circulos.png"/>

<button id="button_footer">Contact us</button>
`;

  about.innerHTML = `

<img src="./images/logo.png"/>
 <ul>
  <li>Support</li>
  <li>Privacy Policy</li>
  <li>Terms and Conditions</li>
</ul>
<span>© 2020 Enver, All Rights Reserved</span>
`;
});
