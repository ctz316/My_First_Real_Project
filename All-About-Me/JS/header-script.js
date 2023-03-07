class Header extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `

    <header>
        <h1 class=title>Kid Barker
        </h1>
            <div id="navbar">
                <li class="dropbtn"><a href="/My_First_Real_Project/All-About-Me/Header_Pages/Home.html">Home</a>
                </li>
                <li class="dropbtn"><a>Projects</a>
                    <ul class="dropdown-content">
                        <li><a href="/My_First_Real_Project/All-About-Me/Header_Pages/Projects/Setting_up_home_system.html">Setting up my home system</a>
                        </li>
                        <li class="dropbtn-sub"><a>Coding I have Done &dArr;</a>
                            <ul class="dropdown-content-sub">
                                <li><a href="/My_First_Real_Project/All-About-Me/Header_Pages/Projects/Projects.html">Project 1</a>
                                <li><a href="/My_First_Real_Project/All-About-Me/Header_Pages/Projects/Projects.html">Project 2</a>
                            </ul>
                        </li>
                    </ul>
                </li>
                <li class="dropbtn"><a>Certifications</a>
                    <ul class="dropdown-content">
                        <li><a href="/My_First_Real_Project/All-About-Me/Header_Pages/Certifications/Extending_Forklift.html">Extending Forklift</a>
                        <li><a href="/My_First_Real_Project/All-About-Me/Header_Pages/Certifications/Rigging.html">Rigging</a>
                        <li><a href="/My_First_Real_Project/All-About-Me/Header_Pages/Certifications/Osha_10.html">Osha 10</a>
                        <li><a href="/My_First_Real_Project/All-About-Me/Header_Pages/Certifications/Combat_Life_Saver.html">Combat Life Saver</a>
                        <li><a href="/My_First_Real_Project/All-About-Me/Header_Pages/Certifications/Military_Customs_Inspector.html">Military Customs Inspector</a>
                        <li><a href="/My_First_Real_Project/All-About-Me/Header_Pages/Certifications/Scissor_Lift.html">Scissor Lift</a>
                        <li><a href="/My_First_Real_Project/All-About-Me/Header_Pages/Certifications/Boom.html">Boom</a>
                        <li><a href="/My_First_Real_Project/All-About-Me/Header_Pages/Certifications/CPR_AED.html">CPR/AED</a>
                        <li><a href="/My_First_Real_Project/All-About-Me/Header_Pages/Certifications/Marksmanship.html">Marksmanship Instructor</a>
<!--                        <li><a href="/My_First_Real_Project/All-About-Me/Header_Pages/Certifications/Boom.html">Boom</a>-->
<!--                        <li><a href="/My_First_Real_Project/All-About-Me/Header_Pages/Certifications/Boom.html">Boom</a>-->
                    </ul>
                </li>
                <li class="dropbtn"><a>Experiences</a>
                    <ul class="dropdown-content">
                        <li class="dropbtn-sub"><a>Experience 1 &dArr;</a>
                            <ul class="dropdown-content-sub">
                                <li><a href="/./My_First_Real_Project/All-About-Me/Header_Pages/Experiences/">XXXXXX</a></li>
                                <li><a href="/./My_First_Real_Project/All-About-Me/Header_Pages/Experiences/">XXXXXX</a></li>
                                <li><a href="/./My_First_Real_Project/All-About-Me/Header_Pages/Experiences/">XXXXXX</a></li>
                                <li><a href="/./My_First_Real_Project/All-About-Me/Header_Pages/Experiences/">XXXXXX</a></li>
                                <li><a href="/./My_First_Real_Project/All-About-Me/Header_Pages/Experiences/">XXXXXX</a></li>
                                <li><a href="/./My_First_Real_Project/All-About-Me/Header_Pages/Experiences/">XXXXXX</a></li>
                                <li><a href="/./My_First_Real_Project/All-About-Me/Header_Pages/Experiences/">XXXXXX</a></li>
                                <li><a href="/./My_First_Real_Project/All-About-Me/Header_Pages/Experiences/">XXXXXX</a></li>
                                <li><a href="/./My_First_Real_Project/All-About-Me/Header_Pages/Experiences/">XXXXXX</a></li>
                                <li><a href="/./My_First_Real_Project/All-About-Me/Header_Pages/Experiences/">XXXXXX</a></li>
                                <li><a href="/./My_First_Real_Project/All-About-Me/Header_Pages/Experiences/">XXXXXX</a></li>
                                <li><a href="/./My_First_Real_Project/All-About-Me/Header_Pages/Experiences/">XXXXXX</a></li>
                            </ul>
                        <li class="dropbtn-sub"><a>Experience 2 &dArr;</a>
                            <ul class="dropdown-content-sub">
                                <li><a href="/./My_First_Real_Project/All-About-Me/Header_Pages/Experiences/ATV.html">ATV</a></li>
                                <li><a href="/./My_First_Real_Project/All-About-Me/Header_Pages/Experiences/Building_a_power_wheel_for_performance.html">Power Wheel Builds</a></li>
                                <li><a href="/./My_First_Real_Project/All-About-Me/Header_Pages/Experiences/Canoeing.html">Canoeing</a></li>
                                <li><a href="/./My_First_Real_Project/All-About-Me/Header_Pages/Experiences/Concerts.html">Concerts</a></li>
                                <li><a href="/./My_First_Real_Project/All-About-Me/Header_Pages/Experiences/Cruises.html">Cruises</a></li>
                                <li><a href="/./My_First_Real_Project/All-About-Me/Header_Pages/Experiences/Grand_Canyon.html">Grand Canyon</a></li>
                                <li><a href="/./My_First_Real_Project/All-About-Me/Header_Pages/Experiences/Helicopter.html">Helicopter</a></li>
                                <li><a href="/./My_First_Real_Project/All-About-Me/Header_Pages/Experiences/Horse_Back_Riding.html">Horse Back Riding</a></li>
                                <li><a href="/./My_First_Real_Project/All-About-Me/Header_Pages/Experiences/Nascar_Experience.html">Nascar Experience</a></li>
                                <li><a href="/./My_First_Real_Project/All-About-Me/Header_Pages/Experiences/North_Pole_Express.html">North Pole Express</a></li>
                                <li><a href="/./My_First_Real_Project/All-About-Me/Header_Pages/Experiences/Para_Sailing.html">Para Sailing</a></li>
                                <li><a href="/./My_First_Real_Project/All-About-Me/Header_Pages/Experiences/Parachuting.html">Parachuting</a></li>
                                <li><a href="/./My_First_Real_Project/All-About-Me/Header_Pages/Experiences/Parades.html">Parades</a></li>
                                <li><a href="/./My_First_Real_Project/All-About-Me/Header_Pages/Experiences/Rip_Cord.html">Rip Cord</a></li>
                                <li><a href="/./My_First_Real_Project/All-About-Me/Header_Pages/Experiences/Shooting.html">Shooting</a></li>
                                <li><a href="/./My_First_Real_Project/All-About-Me/Header_Pages/Experiences/Submarine.html">Submarine</a></li>
                                <li><a href="/./My_First_Real_Project/All-About-Me/Header_Pages/Experiences/Train.html">Train</a></li>
                                <li><a href="/./My_First_Real_Project/All-About-Me/Header_Pages/Experiences/Ultra_Light_Airplanes.html">Ultra Light Airplanes</a></li>
                                <li><a href="/./My_First_Real_Project/All-About-Me/Header_Pages/Experiences/Zip_Line.html">Zip Line</a></li>
                        </ul>
                    </ul>
                </li>
                <li class="dropbtn"><a>Military</a>
                    <ul class="dropdown-content">
                        <li><a href="/My_First_Real_Project/All-About-Me/Header_Pages/Military/Army_Reserve.html">Army Reserve</a></li>
                        <li><a href="/My_First_Real_Project/All-About-Me/Header_Pages/Military/Marine_Corps.html">Marine Corps</a></li>
                        <li class="dropbtn-sub"><a>Awards and Medals &dArr;</a>
                            <ul class="dropdown-content-sub">
                                <li><a href="/My_First_Real_Project/All-About-Me/Header_Pages/Military/Awards_and_Medals/Awards_and_Medals.html">Full Rack</a></li>
                                <li><a href="/My_First_Real_Project/All-About-Me/Header_Pages/Military/Awards_and_Medals/Afghanistan_Campaign_Ribbon.html">Afghanistan Campaign Ribbon</a></li>
                                <li><a href="/My_First_Real_Project/All-About-Me/Header_Pages/Military/Awards_and_Medals/Armed_Forces_Expeditionary_Medal.html">Armed Forces Expeditionary Medal</a></li>
                                <li><a href="/My_First_Real_Project/All-About-Me/Header_Pages/Military/Awards_and_Medals/Armed_Forces_Reserve_Medal.html">Armed Forces Reserve Medal</a></li>
                                <li><a href="/My_First_Real_Project/All-About-Me/Header_Pages/Military/Awards_and_Medals/Army_Commendation_Medal.html">Army Commendation Medal</a></li>
                                <li><a href="/My_First_Real_Project/All-About-Me/Header_Pages/Military/Awards_and_Medals/Army_Achievement_Medal.html">Army Achievement Medal</a></li>
                                <li><a href="/My_First_Real_Project/All-About-Me/Header_Pages/Military/Awards_and_Medals/Army_Service_Ribbon.html">Army Service Ribbon</a></li>
                                <li><a href="/My_First_Real_Project/All-About-Me/Header_Pages/Military/Awards_and_Medals/Global_War_on_Terrorism_Service_Medal.html">Global War on Terrorism Service Medal</a></li>
                                <li><a href="/My_First_Real_Project/All-About-Me/Header_Pages/Military/Awards_and_Medals/Marine_Corps_Good_Conduct_Medal.html">Marine Corps Good Conduct Medal</a></li>
                                <li><a href="/My_First_Real_Project/All-About-Me/Header_Pages/Military/Awards_and_Medals/National_Defense_Service_Medal.html">National Defense Service Medal</a></li>
                                <li><a href="/My_First_Real_Project/All-About-Me/Header_Pages/Military/Awards_and_Medals/NATO_ISAF_Medal.html">NATO ISAF Medal</a></li>
                                <li><a href="/My_First_Real_Project/All-About-Me/Header_Pages/Military/Awards_and_Medals/Navy_Sea_Service_Deployment_Ribbon.html">Navy Sea Service Deployment Ribbon</a></li>
                                <li><a href="/My_First_Real_Project/All-About-Me/Header_Pages/Military/Awards_and_Medals/Marksmanship.html">Marksmanship</a></li>
                            </ul>
                    </ul>
                </li>
                <li class="dropbtn"><a>Work History</a>
                    <ul class="dropdown-content">
                        <li><a href="/My_First_Real_Project/All-About-Me/Header_Pages/Work_History/Hydro.html">Hydro</a></li>
                        <li><a href="/My_First_Real_Project/All-About-Me/Header_Pages/Work_History/Wireless_Vision.html">Wireless Vision</a></li>
                        <li><a href="/My_First_Real_Project/All-About-Me/Header_Pages/Work_History/Creative_Tent_International.html">Creative Tent International</a></li>
                        <li><a href="/My_First_Real_Project/All-About-Me/Header_Pages/Work_History/G4S.html">G4S</a></li>
                        <li><a href="/My_First_Real_Project/All-About-Me/Header_Pages/Work_History/T-Mobile.html">T-Mobile</a></li>
                        <li><a href="/My_First_Real_Project/All-About-Me/Header_Pages/Work_History/Alltel.html">Alltel</a></li>
                        <li><a href="/My_First_Real_Project/All-About-Me/Header_Pages/Work_History/Verizon_Wireless.html">Verizon Wireless</a></li>
                        <li><a href="/My_First_Real_Project/All-About-Me/Header_Pages/Work_History/Spectra_Physics.html">Spectra Physics</a></li>
                        <li><a href="/My_First_Real_Project/All-About-Me/Header_Pages/Work_History/McDonalds.html">McDonalds</a></li>
                    </ul>
                </li>
                <li class="dropbtn"><a>Schooling</a>
                    <ul class="dropdown-content">
                        <li><a href="/My_First_Real_Project/All-About-Me/Header_Pages/Schooling/Central_Texas_College.html">Central Texas College</a>
                        <li><a href="/My_First_Real_Project/All-About-Me/Header_Pages/Schooling/Estrella_Mountain_Community_College.html">Estrella Mountain Community College</a>
                        <li><a href="/My_First_Real_Project/All-About-Me/Header_Pages/Schooling/Apprentice_Now.html">Apprentice Now</a>
                    </ul>
                </li>
                <li class="dropbtn"><a>Countries that I have visited</a>
                    <ul class="dropdown-content">
                        <li><a href="/My_First_Real_Project/All-About-Me/Header_Pages/Countries_and_States_that_I_have_visited/Afghanistan.html">Afghanistan</a>
                        <li><a href="/My_First_Real_Project/All-About-Me/Header_Pages/Countries_and_States_that_I_have_visited/Australia.html">Australia</a>
                        <li><a href="/My_First_Real_Project/All-About-Me/Header_Pages/Countries_and_States_that_I_have_visited/Bahamas.html">Bahamas</a>
                        <li><a href="/My_First_Real_Project/All-About-Me/Header_Pages/Countries_and_States_that_I_have_visited/Bahrain.html">Bahrain</a>
                        <li><a href="/My_First_Real_Project/All-About-Me/Header_Pages/Countries_and_States_that_I_have_visited/Canada.html">Canada</a>
                        <li><a href="/My_First_Real_Project/All-About-Me/Header_Pages/Countries_and_States_that_I_have_visited/Cayman_Islands.html">Cayman Islands</a>
                        <li><a href="/My_First_Real_Project/All-About-Me/Header_Pages/Countries_and_States_that_I_have_visited/Germany.html">Germany</a>
                        <li><a href="/My_First_Real_Project/All-About-Me/Header_Pages/Countries_and_States_that_I_have_visited/Honduras.html">Honduras</a>
                        <li><a href="/My_First_Real_Project/All-About-Me/Header_Pages/Countries_and_States_that_I_have_visited/Hong_Kong.html">Hong Kong</a>
                        <li><a href="/My_First_Real_Project/All-About-Me/Header_Pages/Countries_and_States_that_I_have_visited/Ireland.html">Ireland</a>
                        <li><a href="/My_First_Real_Project/All-About-Me/Header_Pages/Countries_and_States_that_I_have_visited/Jamaica.html">Jamaica</a>
                        <li><a href="/My_First_Real_Project/All-About-Me/Header_Pages/Countries_and_States_that_I_have_visited/Japan.html">Japan</a>
                        <li><a href="/My_First_Real_Project/All-About-Me/Header_Pages/Countries_and_States_that_I_have_visited/Kuwait.html">Kuwait</a>
                        <li><a href="/My_First_Real_Project/All-About-Me/Header_Pages/Countries_and_States_that_I_have_visited/Kyrgyzstan.html">Kyrgyzstan</a>
                        <li><a href="/My_First_Real_Project/All-About-Me/Header_Pages/Countries_and_States_that_I_have_visited/Malaysia.html">Malaysia</a>
                        <li><a href="/My_First_Real_Project/All-About-Me/Header_Pages/Countries_and_States_that_I_have_visited/Mexico.html">Mexico</a>
                        <li><a href="/My_First_Real_Project/All-About-Me/Header_Pages/Countries_and_States_that_I_have_visited/Oman.html">Oman</a>
                        <li><a href="/My_First_Real_Project/All-About-Me/Header_Pages/Countries_and_States_that_I_have_visited/Puerto_Rico.html">Puerto Rico</a>
                        <li><a href="/My_First_Real_Project/All-About-Me/Header_Pages/Countries_and_States_that_I_have_visited/Qatar.html">Qatar</a>
                        <li><a href="/My_First_Real_Project/All-About-Me/Header_Pages/Countries_and_States_that_I_have_visited/Saint_Kitts_and_Nevis.html">Saint Kitts and Nevis</a>
                        <li><a href="/My_First_Real_Project/All-About-Me/Header_Pages/Countries_and_States_that_I_have_visited/Seychelles.html">Seychelles</a>
                        <li><a href="/My_First_Real_Project/All-About-Me/Header_Pages/Countries_and_States_that_I_have_visited/Singapore.html">Singapore</a>
                    </ul>
                </li>
                <li class="dropbtn"><a>Places that I have Lived</a>
                    <ul class="dropdown-content">
                        <li><a href="/My_First_Real_Project/All-About-Me/Header_Pages/Places_I_have_Lived/California.html">California</a>
                        <li><a href="/My_First_Real_Project/All-About-Me/Header_Pages/Places_I_have_Lived/Washington_D.C..html">Washington D.C.</a>
                        <li><a href="/My_First_Real_Project/All-About-Me/Header_Pages/Places_I_have_Lived/Virginia.html">Virginia</a>
                        <li><a href="/My_First_Real_Project/All-About-Me/Header_Pages/Places_I_have_Lived/Kansas.html">Kansas</a>
                        <li><a href="/My_First_Real_Project/All-About-Me/Header_Pages/Places_I_have_Lived/Oregon.html">Oregon</a>
                        <li><a href="/My_First_Real_Project/All-About-Me/Header_Pages/Places_I_have_Lived/Arizona.html">Arizona</a>
                    </ul>
                </li>
                <li class="dropbtn"><a>Links to my Social Media</a>
                    <ul class="dropdown-content">
                        <li><a href="https://www.linkedin.com/in/kid-barker-5b9183142/">LinkedIn</a>
                        <li><a href="https://www.facebook.com/kidd.barker">FaceBook</a>
                        <li><a href="https://www.instagram.com/ctz316/">Instagram</a>
                        <li><a href="https://github.com/ctz316">GitHub</a>
                    </ul>
                </li>
                <li class="dropbtn"><a>Motorcycles</a>
                    <ul class="dropdown-content">
                        <li><a href="/My_First_Real_Project/All-About-Me/Header_Pages/Motorcycles/Bikes_I_have_Ridden.html">Bikes I have Ridden</a>
                        <li><a href="/My_First_Real_Project/All-About-Me/Header_Pages/Motorcycles/Groups_I_Joined_Sub/Bikers_of_Afghanistan.html">Bikers of Afghanistan</a>
                        <li><a href="/My_First_Real_Project/All-About-Me/Header_Pages/Motorcycles/Groups_I_Joined_Sub/Combat_Veteran_Motorcycle_Association.html">Combat Veterans</a>
                    </ul>
                </li>
            </div>
    </header>

<style>
    header {
        text-align: center;
    }

    .title {
        font-size: xxx-large;
        text-shadow: 2px 2px 2px darkred;
        text-align: center;
        color: darkgoldenrod;
    }

        /* navbar bar */
    #navbar{
        display: inline-flex;
        padding-bottom: 25px;
        font-size: xxx-large;
        text-shadow: 2px 2px 2px darkred;
        text-align: center;
        color: darkgoldenrod;
    }

        /* Dropdown Button */
    .dropbtn {
        outline: none;
        background: rgba(0,0,0, 0.5);
        color: goldenrod;
        font-family: cursive;
        font-size: medium;
        border: thin solid goldenrod;
        padding-right: 5px;
        padding-left: 5px;
        text-shadow: none;
        vertical-align: center;
    }
    
            /* Dropdown Button */
    .dropbtn-sub {
        outline: none;
        background: rgba(146, 57, 57, 0.5);
        color: goldenrod;
        font-family: cursive;
        padding: 6px 6px 6px 6px;
        font-size: medium;
        border: thin solid goldenrod;
        position: relative;
        text-shadow: none;
        text-align: center;
    }

        /* Dropdown Content (Hidden by Default) */
    .dropdown-content {
        display: none;
        position: absolute;
        background: rgba(0,0,0, 0.5);
        padding-bottom: 25px;
        align-items: center;
        z-index: 6;
    }

        /* Links inside the dropdown */
    .dropdown-content a {
        color: gold;
        padding: 12px 16px;
        text-decoration: none;
        display: block;
    }
    
        /* Dropdown Content (Hidden by Default) */
    .dropdown-content-sub {
        display: none;
        position: absolute;
        background: rgba(0,0,0, 0.5);
        padding: 6px;
        text-align: center;
    }
    
        /* Links inside the dropdown */
    .dropdown-content-sub a {
        color: gold;
        padding: 6px 6px;
        text-decoration: none;
        display: block;
    }
    
        /* Change the background color of the dropdown button when the dropdown content is shown */
    .dropdown-content:hover .dropbtn {
        background-color: #D21404;
    }

        /* Change color of dropdown links on hover */
    #navbar a:hover {
        background-color: #D21404;
    }

        /* Show the dropdown menu on hover */
    .dropbtn:hover .dropdown-content {
        display: block;
    }
    
        /* Show the dropdown menu on hover */
    .dropbtn-sub:hover .dropdown-content-sub {
        display: block;
        position: relative;
    }
    
 </style>
   `;}}
        customElements.define('header-component', Header);