

import Slider from "react-slick";
function FifthBlock(){
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
    };
    return(
        <main className="fifth">
            <div className="container">
                <Slider {...settings}>
                    <div>h1</div>
                    <div>h2</div>
                    <div>h3</div>
                    <div>h4</div>
                    <div>h5</div>
                    <div>h6</div>
                    <div>h7</div>
                    <div>h8</div>
                </Slider>
            </div>
        </main>
    )
}
export default FifthBlock