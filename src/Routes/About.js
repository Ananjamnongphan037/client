import React from 'react';
import '../App.css';
// import { jarallax, jarallaxVideo } from 'jarallax';


export default function About() {
    return (
        <main >
            <h2>About</h2>
            
            <div data-jarallax data-speed="0.5" className="jarallax jr">
                <img className="jarallax-img" src="https://images.unsplash.com/photo-1625035271800-76258e23aaa0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1080" alt="" />
               <div className="Adetail neonblack" style={{ padding: "2rem 0" ,color: "white" }}>
                    Timeline About Us

                    <ul className="timeline">
                    <li>
                        <div className="timeline-badge">
                            <p className="text-warning p2">6 Oct 1996</p>
                        </div>
                        <div className="timeline-card">
                            <h5 className="p1" >วันเกิดของเรา</h5>
                            <p className="p125 gray">เกิดวันที่ 6 ตุลาคม 199ุุ6 </p>
                        </div>
                    </li>
                    <li className="inverted">
                        <div className="timeline-badge">
                            <p className="text-warning p2">15 May 2006</p>
                        </div>
                        <div className="timeline-card">
                            <h5 className="p1">เรียนโรงเรียนสายธรรมจันทร์</h5>
                            <p className="p125 gray">เรียนสายศิลป์คำนวน</p>
                        </div>
                    </li>
                    <li>
                        <div className="timeline-badge">
                            <p className="text-warning p2">10 Aug 2012</p>
                        </div>
                        <div className="timeline-card">
                            <h5 className="p1" >มหาวิทยาลัยเทคโนโลยีราชมงคลรัตนโกสินทร์</h5>
                            <p className="p125 gray ">Business Information Technology Software Developer</p>
                        </div>
                    </li>
                    <li className="inverted">
                        <div className="timeline-badge">
                            <p className="text-warning p2">15 June 2016</p>
                        </div>
                        <div className="timeline-card">
                            <h5 className="p1" >เข้าทำงานที่ DOOTV MEDIA</h5>
                            <p className="p125 gray ">Full Stack Web Developer</p>
                        </div>
                    </li>
                    <li>
                        <div className="timeline-badge">
                            <p className="text-warning p2">1 June 2017</p>
                        </div>
                        <div className="timeline-card">
                            <h5 className="p1" >เข้าทำงานที่ Thai Livestream</h5>
                            <p className="p125 gray ">Reseach & Web Developer 360° </p>
                        </div>
                    </li>
                    <li className="inverted">
                        <div className="timeline-badge">
                            <p className="text-warning p2">15 Oct 2017 - Present</p>
                        </div>
                        <div className="timeline-card">
                            <h5 className="p1" >Freelance Web Developer</h5>
                            <p className="p125 gray ">Freelance & Web Developer ที่ AppzStory Studio สอนเขียนเว็บไซต์</p>
                        </div>
                    </li>
                    <li className="timeline-arrow">
                        <i className="fa fa-chevron-down"></i>
                    </li>
                </ul>

                </div>  
            </div>

        </main>
    )
}