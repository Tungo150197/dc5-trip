import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Footer extends Component {
    render() {
        return (
            <footer className="footer">
                <div className="footer_top">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-4 col-md-6 col-lg-4 ">
                                <div className="footer_widget" >
                                    <div className="footer_logo">
                                        <Link to=""><img src="../../images/footer_logo.png" alt="footer_logo" /></Link>
                                    </div>
                                    <p><i className="fa fa-map-marker"></i>  Lầu 8, Tòa nhà TMA Solutions Lab 6 <br />Đường số 10, CVPM Quang Trung, <br/>Phường Tân Chánh Hiệp, Quận 12, Tp. HCM</p><br />
                                    <p><i className="fa fa-phone"></i>  (+84) 585868587</p><br />
                                    <p><i className="fa fa-envelope"></i>  contact@travelo.com.vn</p>
                                </div>
                            </div>
                            <div className="col-xl-2 col-md-6 col-lg-2">
                                <div className="footer_widget">
                                    <h3 className="footer_title" style={{marginLeft:'8px'}}>
                                        Mạng xã hội
                                    </h3>
                                    <div className="socail_links">
                                    <ul>
                                        <li>
                                        <a href="https://www.facebook.com/tmadc5">
                                            <i className="fa fa-facebook" />
                                        </a>
                                        </li>
                                        <li>
                                            <Link to="">
                                                <i className="fa fa-google" />
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="">
                                                <i className="fa fa-instagram" />
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="">
                                                <i className="fa fa-youtube-play" />
                                            </Link>
                                        </li>
                                    </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3 col-md-6 col-lg-3">
                                <div className="footer_widget">
                                    <h3 className="footer_title"> Địa điểm </h3>
                                    <ul className="links double_links">
                                        <li><Link to=''>Lâm Đồng</Link></li>
                                        <li><Link to=''>Vũng Tàu</Link></li>
                                        <li><Link to=''>Cà Mau</Link></li>
                                        <li><Link to=''>Tp. Hồ Chí Minh</Link></li>
                                        <li><Link to=''>Cần Thơ</Link></li>
                                        <li><Link to=''>Bến Tre</Link></li>
                                        <li><Link to=''>Khánh Hòa</Link></li>
                                        <li><Link to=''>Đà Nẵng</Link></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-xl-3 col-md-6 col-lg-3">
                                <div className="footer_widget">
                                    <h3 className="footer_title"> Hình ảnh nổi bật </h3>
                                    <div className="instagram_feed">
                                        <div className="single_insta">
                                            <Link to="">
                                                <img src="../../images/instagram/1.png" alt="" />
                                            </Link>
                                        </div>
                                        <div className="single_insta">
                                            <Link to="">
                                                <img src="../../images/instagram/2.png" alt="" />
                                            </Link>
                                        </div>
                                        <div className="single_insta">
                                            <Link to="">
                                                <img src="../../images/instagram/3.png" alt="" />
                                            </Link>
                                        </div>
                                        <div className="single_insta">
                                            <Link to="">
                                                <img src="../../images/instagram/4.png" alt="" />
                                            </Link>
                                        </div>
                                        <div className="single_insta">
                                            <Link to="">
                                                <img src="../../images/instagram/5.png" alt="" />
                                            </Link>
                                        </div>
                                        <div className="single_insta">
                                            <Link to="">
                                                <img src="../../images/instagram/6.png" alt="" />
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <div className="copy-right_text">
                    <div className="container">
                        <div className="footer_border">
                            <div className="row">
                                <div className="col-xl-12">
                                    <p className="copy_right text-center">
                                        Website du lịch và dịch vụ bán sản phẩm du lịch <br />
                                        Bản quyền thuộc về Nhóm 28 - Khóa luận tốt nghiệp ® 2020
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> */}
            </footer>
        );
    }
}

export default Footer;