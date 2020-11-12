import React, { Component } from 'react';
import city from '../Assets/Image/city.jpg'
import snow from '../Assets/Image/snow.jpg'
import forest from '../Assets/Image/forest.jpg'
import ferry from '../Assets/Image/ferry.jpg'
import profilePhoto from '../Assets/Image/mcgarity_s.jpg'

class Banner extends Component {
    constructor(props){
        super(props);

        this.bannerData = props.bannerData
    }

    render() {
        return (
            <section id="profile" className="page banner">
                <div className="profile-image-holder">
                    <img className="profileImage" src={profilePhoto} alt='person' />
                </div>
                
                <div className="image-banner">
                    <div className="img-1 image-size">
                        <img src={forest}></img>
                    </div>
                    <div className="img-2 image-size">
                        <img src={city}></img>
                    </div>    
                    <div className="img-3 image-size">
                        <img src={ferry}></img>
                    </div>
                    <div className="img-4 image-size">
                        <img src={snow}></img>
                    </div>
                </div>
                <div className="profileHolder">
                    <div className="profileInfo">
                        <h2>{this.props.bannerData.firstName} {this.bannerData.lastName}</h2>
                        <p>USA Permanent Resident (Green Card Holder)</p>
                        <p>{this.bannerData.email}</p>
                        <button><a href="https://www.linkedin.com/in/sophie-mcgarity-0866ba181/detail/overlay-view/urn:li:fsd_profileTreasuryMedia:(ACoAACr_FuYBrx3bb5TTh-3hHwnVgjvnbq7BBKI,1604122192110)/">Resume</a></button>
                        <p>Software Engineer Student</p>
                    </div>

                    <div className="funFacts">
                        <div className="pets">
                            <h3>Pets</h3>
                            <p className="petTotal">3</p>
                            <div className="animals">
                                <p>
                                    German Shepard Mix< br/>
                                    Two Guinea Pigs
                                </p>
                            </div>
                            
                        </div>
                        <div className="hobbies">
                            <h3>Hobbies & Interests</h3>
                            <div className="activities">
                                <p>
                                    Hiking<br />
                                    Tae Kwon-Do<br />
                                    World of Warcraft<br />
                                    Animal Crossing<br />
                                    Cooking and Baking<br />
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default Banner;