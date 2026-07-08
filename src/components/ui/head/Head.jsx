import "./head.css"

export function Head() {
    return (
        <section class="headquarters">
            <h4>Our headquarters</h4>

            <div class="headquarters-box">
                <div class="country">
                    <img src="/img/kingdom.png" alt="image" />

                    <h2>United Kingdom</h2>

                    <p>68 Asfordby Rd</p>
                    <p>Alcaston</p>
                    <p>SY6 1YA</p>
                    <p>+44 1241 918425</p>
                </div>

                <div class="country">
                    <img src="/img/canada.png" alt="image" />

                    <h2>Canada</h2>

                    <p>1528 Eglinton Avenue</p>
                    <p>Toronto</p>
                    <p>Ontario M4P 1A6</p>
                    <p>+1 416 485 2997</p>
                </div>

                <div class="country">
                    <img src="/img/aust.png" alt="image" />

                    <h2>Australia</h2>

                    <p>36 Swanston Street</p>
                    <p>Kewell</p>
                    <p>Victoria</p>
                    <p>+61 4 9928 3629</p>
                </div>
            </div>
        </section>


    )
}
