const template = document.createElement('template')

template.innerHTML = `
        <header class="fixed top-0 left-0 w-full bg-primary/25">
            <div class="flex">
                <div class="flex w-1/2">
                    <a href="index.html">
                        <img src="images/logo.png" alt="MaryJane Careers" class="size-24">
                    </a>
                </div>
                <div class="
                flex
                justify-end
                items-center
                gap-2
                w-1/2
                p-2
                    ">
                    <button class="
                    bg-primary-75
                    p-1
                    text-white
                    border border-2
                    border-primary-75
                    rounded-md
                    hover:bg-primary
                    hover:border-primary
                    dark:text-white
                    hover:text-white
                    h-fit
                    w-fit"
                    onclick="document.location='tester.html'">Be a Tester</button>
                    
                    <button class="
                    bg-primary-75
                    p-1
                    text-white
                    border border-2
                    border-primary-75
                    rounded-md
                    hover:bg-primary
                    hover:border-primary
                    dark:text-white
                    hover:text-white
                    h-fit
                    w-fit"
                    onclick="document.location='about.html'">About</button>

                    <button class="
                    bg-primary-75
                    p-1
                    text-white
                    border border-2
                    border-primary-75
                    rounded-md
                    hover:bg-primary
                    hover:border-primary
                    dark:text-white
                    hover:text-white
                    h-fit
                    w-fit"
                    onclick="document.location='contact-us.html'">Contact</button>
                </div>
            </div>
        </header>
`
document.body.appendChild(template.content)
