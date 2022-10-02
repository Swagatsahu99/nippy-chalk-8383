function navbar(){
    return `<header>
    <a href="#" class="logo"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Fiverr_Logo_09.2020.svg/600px-Fiverr_Logo_09.2020.svg.png?20200920230923" alt=""></a>

    <input type="text" placeholder="What service are you looking for?">
    <a id="search" href="#"><i class="fa-solid fa-magnifying-glass"></i></a>

    <ul>
        <li><a href="#">Fiver Business</a></li>
        <i class="fa-solid fa-earth-asia"></i>
        <li><a href="#">Explore</a></li>
        <i class="fa-sharp fa-solid fa-indian-rupee-sign"></i>
        <li><a href="#">INR</a></li>
        <li><a href="#">Become a Seller</a></li>
        <li><a href="#">Sign in</a></li>
        <li id="join"><a href="#">Join</a></li>
    </ul>
</header>
`
}

export {navbar}