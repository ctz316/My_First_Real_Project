class footer extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `

<footer>
    <div class="footer-insert">
        <ul class="footer-content">
            <li><a href="/My_First_Real_Project/All-About-Me/Footer-Elements/Contact-Info.html">Contact Info</a></li>
                        <li><a href="/My_First_Real_Project/All-About-Me/Footer-Elements/Resume/Resume.html">My Resume</a></li>
            <li><a href="/My_First_Real_Project/All-About-Me/Footer-Elements/Credits.html">Credits</a></li>
        </ul>
    </div>
</footer>




<style>

footer {
    /*position: relative;*/
    /*bottom: 0;*/
    width: 100%;
    margin-top: auto;
}

.footer-insert {
    font-size: x-large;
    text-align: center;
    color: darkgoldenrod;
    font-family: cursive;
    border: thin solid goldenrod;
}
    
.footer-content {
    display: flex;
    justify-content: space-evenly;
    padding: 15px 15px 15px 15px;
}
    
a {
    text-decoration: none;
    text-shadow: 2px 2px 2px darkred;
    color: darkgoldenrod;
}

    
 </style>
    `;}}
        customElements.define('footer-component', footer);