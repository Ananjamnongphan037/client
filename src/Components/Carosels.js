import React from 'react';
import '../App.css';


export default function Carosels() {
    
    return (
    <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
        <ol className="carousel-indicators">
            <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
        </ol>
        <div className="carousel-inner neonblack">
            <div className="carousel-item active">
            <img className="d-block w-100 h667" src="https://images.unsplash.com/photo-1625035271800-76258e23aaa0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1080" alt="First slide" />
                <div className="caralcap">
                    <h1 className="display-4 font-weight-bold"> React Client Axios </h1>
                    <p className="lead"> สังคมของการเขียนเว็บไซต์ (HTML CSS JAVASCRIPT) </p>
                </div>
            </div>

            <div className="carousel-item">
            <img className="d-block w-100 h667" src="https://images.unsplash.com/photo-1637766717194-4ff983ef1175?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=1080" alt="Second slide" />
                <div className="caralcap">
                    <h1 className="display-4 font-weight-bold"> Node Express cors </h1>
                    <p className="lead"> สังคมของการเขียนเว็บไซต์ (HTML CSS JAVASCRIPT) </p>
                </div>
            </div>

            <div className="carousel-item">
            <img className="d-block w-100 h667" src="https://images.unsplash.com/photo-1544256718-3bcf237f3974?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDB8fHByb2dyYW1taW5nfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=1080" alt="Third slide" />
                <div className="caralcap">
                    <h1 className="display-4 font-weight-bold"> Mysql Database </h1>
                    <p className="lead"> สังคมของการเขียนเว็บไซต์ (HTML CSS JAVASCRIPT) </p>
                </div>
            </div>
        </div>
        <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="sr-only">Previous</span>
        </a>
        <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="sr-only">Next</span>
        </a>
    </div>
    )
}
