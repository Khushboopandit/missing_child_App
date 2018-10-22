import React, { Component } from 'react';
import '../css/home.css';

class CardsForMissingChild extends Component {
    constructor(){
        super()
        this.state={
            childImage:["https://img.etimg.com/thumb/msid-63393572,width-643,imgsize-91606,resizemode-4/rani-mukerji-feels-great-to-be-40-pens-a-touching-letter.jpg",
                        "https://pbs.twimg.com/profile_images/774530325418565633/1Nep9Qt5_400x400.jpg",
                        "https://pbs.twimg.com/profile_images/1002061247381204993/SxGVeDUI_400x400.jpg",
                        "https://d1qb2nb5cznatu.cloudfront.net/users/1807942-large?1500085149",
                        "https://www.thehindu.com/entertainment/movies/article19358288.ece/alternates/FREE_300/Megha",
                        "http://2.bp.blogspot.com/-LveeMpQDtkY/UvM1OjIfwMI/AAAAAAAAFFk/Bl4hz6DJ59c/s1600/Ankita+Sharma+in+Rangrasiya.jpg",
                        "https://starsunfolded.com/wp-content/uploads/2017/02/Kanika-Mann-compressed.jpg",
                        "http://www.sagennext.com/wp-content/uploads/2010/09/111.gif"],
                        
            childName:["Rani","Khushboo","Pooja","Lalita","Megha","Ankita","Kanika","Amar"],

            childDescription:["She is missed from Delhi when she is going to banglore",
                            "She is missed from Banglore Campus when she is going to Huskur to buy dairy milk",
                            "When she was palying cricket with her friends and suddenly the ball is missed so she was going to pick but  that time she also missed",
                            "Lalita is missed when she went to attend wedding",
                            "When she is eating free cost of food that time she missed from the shop",
                            "When Ankita is going to zim that time someone catched her",
                            "She is missed when she was jumped from the terrace",
                            "He was missed when he was going to meet his daughters"],
        } 
    }
  render()  {
    return (
        <div class="card">
            <div class="box">
                <div class="img">
                    <img src="https://www.planwallpaper.com/static/images/cool-wallpaper-5_G6Qe1wU.jpg"/>
                </div>
                <h2>Prakash Prajapati<br/><span>Web Graphic Designer</span></h2>
                <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                        tempor incididunt ut labore et.</p>
            </div>
        </div>
        );
    }
}

export default CardsForMissingChild;
