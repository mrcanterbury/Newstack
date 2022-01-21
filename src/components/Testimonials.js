import React from 'react';
import test1 from '../img/test-1.png'
import test2 from '../img/test-2.png'
import test3 from '../img/test-3.png'
import test4 from '../img/test-4.png'
import test5 from '../img/test-5.png'
import test6 from '../img/test-6.png'
import test7 from '../img/test-7.png'

function Testimonials() {
    return (
        <div>

            <div class="testimonial-container">
                <div class="testimonial-grid">
                    <div class="testimonial-card-span-down" id="test1">
                        <div class="testimonial-card-header">
                            <div class="test-card-header-img">
                                <img className='testimonial-img' src={test1} alt="Testimonial 1" />
                            </div>
                            <div class="test-card-header-text">
                                <div className='test-card-title'>
                                    <span>Brad Garlicbread</span>
                                </div>
                                <div className='test-card-subtitle'>
                                    <span>CEO of Some Company</span>
                                </div>
                            </div>
                        </div>
                        <div className="test-card-body">
                            <p>“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus.
                                Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus.
                                Maecenas eget condimentum velit, sit amet feugiat.</p>
                            <p>
                                Etiam eu turpis molestie, dictum est a, sit amet feugiat lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per.“
                            </p>
                        </div>
                    </div>
                    <div class="testimonial-card" id="test2">
                        <div class="testimonial-card-header">
                            <div class="test-card-header-img">
                                <img className='testimonial-img' src={test2} alt="Testimonial 2" />
                            </div>
                            <div class="test-card-header-text">
                                <div className='test-card-title'>
                                    <span>Bruce Wayne</span>
                                </div>
                                <div className='test-card-subtitle'>
                                    <span>Fights Crime at Night</span>
                                </div>
                            </div>
                        </div>
                        <div className="test-card-body">
                            <p>“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus.“</p>
                        </div>
                    </div>
                    <div class="testimonial-card" id="test3">
                        <div class="testimonial-card-header">
                            <div class="test-card-header-img">
                                <img className='testimonial-img' src={test3} alt="Testimonial 3" />
                            </div>
                            <div class="test-card-header-text">
                                <div className='test-card-title'>
                                    <span>Sarah Morris</span>
                                </div>
                                <div className='test-card-subtitle'>
                                    <span>Project Team Lead</span>
                                </div>
                            </div>
                        </div>
                        <div className="test-card-body">
                            <p>“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus.“</p>
                        </div>
                    </div>
                    <div class="testimonial-card-span-right" id="test4">
                        <div class="testimonial-card-header">
                            <div class="test-card-header-img">
                                <img className='testimonial-img' src={test4} alt="Testimonial 4" />
                            </div>
                            <div class="test-card-header-text">
                                <div className='test-card-title'>
                                    <span>Jennifer Lawrence</span>
                                </div>
                                <div className='test-card-subtitle'>
                                    <span>Senior Developer</span>
                                </div>
                            </div>
                        </div>
                        <div className="test-card-body">
                            <p>“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus.
                                Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus.
                                Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per.“</p>
                        </div>
                    </div>
                    <div class="testimonial-card" id="test5">
                        <div class="testimonial-card-header">
                            <div class="test-card-header-img">
                                <img className='testimonial-img' src={test5} alt="Testimonial 5" />
                            </div>
                            <div class="test-card-header-text">
                                <div className='test-card-title'>
                                    <span>Stan Therman</span>
                                </div>
                                <div className='test-card-subtitle'>
                                    <span>Junior Developer</span>
                                </div>
                            </div>
                        </div>
                        <div className="test-card-body">
                            <p>“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus.“</p>
                        </div>
                    </div>
                    <div class="testimonial-card" id="test6">
                        <div class="testimonial-card-header">
                            <div class="test-card-header-img">
                                <img className='testimonial-img' src={test6} alt="Testimonial 6" />
                            </div>
                            <div class="test-card-header-text">
                                <div className='test-card-title'>
                                    <span>Steven Roberts</span>
                                </div>
                                <div className='test-card-subtitle'>
                                    <span>Senior Developer</span>
                                </div>
                            </div>
                        </div>
                        <div className="test-card-body">
                            <p>“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus.“</p>
                        </div>
                    </div>
                    <div class="testimonial-card" id="test7">
                        <div class="testimonial-card-header">
                            <div class="test-card-header-img">
                                <img className='testimonial-img' src={test7} alt="Testimonial 7" />
                            </div>
                            <div class="test-card-header-text">
                                <div className='test-card-title'>
                                    <span>Cindy Williams</span>
                                </div>
                                <div className='test-card-subtitle'>
                                    <span>Project Team Lead</span>
                                </div>
                            </div>
                        </div>
                        <div className="test-card-body">
                            <p>“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus.“</p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Testimonials;
