import React from 'react';
import { Link } from 'react-router';

const HomePage = () => {
    return (
        <div className="container">
            <img className="img-fluid rounded" src="https://i.kinja-img.com/gawker-media/image/upload/s--ru1MoxNE--/c_scale,fl_progressive,q_80,w_800/naiqjp2jbpvcylp09utj.png" alt=""></img>
            <div className="col-lg-12">
                <h1>Batman's Batcave Bat-manager</h1>
                <p>This is a template that is great for small businesses. It doesn't have too much fancy flare to it, but it makes a great use of the standard Bootstrap core components. Feel free to use this template for any project you want!</p>
                <Link className="btn btn-primary btn-lg" to="manager">Manage Bat-assets</Link>
            </div>
        </div>
    );
};

export default HomePage;