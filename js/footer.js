const footerTemplate = document.createElement('template')
const year = new Date().getFullYear()

footerTemplate.innerHTML = `
        
        <footer class="bg-primary-75 text-white">
            <section class="grid grid-rows-1 grid-flow-col items-center gap-2 w-screen">
                <img src="images/logo.png" alt="MaryJane Careers Logo" class="size-24 rounded-xl ml-8 my-4">
                <ul class="pt-8 underline underline-offset-4">
                    <li class="pb-4"><a href="/tester.html">Be A Tester</li>
                </ul>
                <ul class="pt-8 underline underline-offset-4">
                    <li class="pb-4"><a href="/about.html">About</li>
                </ul>
                <ul class="pt-8 underline underline-offset-4">
                    <li class="pb-4"><a href="/contact-us.html">Contact</li>
                </ul>
            </section>
            <p class="text-white w-full text-center pb-8">MaryJane Careers &#169; 2023-<span id="year"></span> | A Tech Budz LLC company</p>
        </footer>
`
document.body.appendChild(footerTemplate.content)
document.getElementById('year').innerHTML = year
