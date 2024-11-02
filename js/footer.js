const footerTemplate = document.createElement("template");
const year  = new Date().getFullYear();

footerTemplate.innerHTML=`
        
        <footer class="bg-primary-75 text-white">
            <section class="grid grid-cols-4 gap-4 w-screen">
                <img src="images/logo.png" alt="MaryJane Careers Logo">
                <ul class="pt-8">
                    <li class="pb-4">item 1</li>
                    <li class="pb-4">item 2</li>
                    <li class="pb-4">item 3</li>
                    <li class="pb-4">item 4</li>
                    <li class="pb-4">item 5</li>
                </ul>
                <ul class="pt-8">
                    <li class="pb-4">item 1</li>
                    <li class="pb-4">item 2</li>
                    <li class="pb-4">item 3</li>
                    <li class="pb-4">item 4</li>
                    <li class="pb-4">item 5</li>
                </ul>
                <ul class="pt-8">
                    <li class="pb-4">item 1</li>
                    <li class="pb-4">item 2</li>
                    <li class="pb-4">item 3</li>
                    <li class="pb-4">item 4</li>
                    <li class="pb-4">item 5</li>
                </ul>
            </section>
            <p class="text-white w-full text-center">MaryJane Careers<br>&#169; 2023-<span id="year"></span></p>
            <p class="text-white text-center pb-8">A Tech Budz LLC company</p>
        </footer>
`
document.body.appendChild(footerTemplate.content);
document.getElementById("year").innerHTML = year;