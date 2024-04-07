
"use client";

import { Footer } from "flowbite-react";
import {BsDribbble, BsFacebook, BsGithub, BsInstagram, BsLinkedin, BsTwitter} from "react-icons/bs";

function FooterComponent() {
    return (
        <Footer container>
            <div className="w-full">
                <div className="grid w-full justify-between sm:flex sm:justify-between md:flex md:grid-cols-1">
                    <div>
                        <Footer.Brand
                            href="/"
                            src="https://istad.co/resources/img/CSTAD_120.png"
                            alt="STAD-COMMERCE"
                            name="STAD-COMMERCE"
                        />
                    </div>
                    <div className="grid grid-cols-2 gap-8 sm:mt-4 sm:grid-cols-3 sm:gap-6">
                        <div>
                            <Footer.Title title="about" />
                            <Footer.LinkGroup col>
                                <Footer.Link href="#">About Us</Footer.Link>
                                <Footer.Link href="#">Contact Us</Footer.Link>
                            </Footer.LinkGroup>
                        </div>
                        <div>
                            <Footer.Title title="Follow us" />
                            <Footer.LinkGroup col>
                                <Footer.Link href="#">Github</Footer.Link>
                                <Footer.Link href="#">Discord</Footer.Link>
                            </Footer.LinkGroup>
                        </div>
                        <div>
                            <Footer.Title title="Legal" />
                            <Footer.LinkGroup col>
                                <Footer.Link href="/privacy">Privacy Policy</Footer.Link>
                                <Footer.Link href="#">Terms &amp; Conditions</Footer.Link>
                            </Footer.LinkGroup>
                        </div>
                    </div>
                </div>
                <Footer.Divider />
                <div className="w-full sm:flex sm:items-center sm:justify-between">
                    <Footer.Copyright href="#" by="STAD Commerce™" year={2024} />
                    <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
                        <Footer.Icon href="https://www.facebook.com/sovannarith.2804/" icon={BsFacebook} />
                        <Footer.Icon href="https://www.instagram.com/Bro_YaRith/" icon={BsInstagram} />
                        <Footer.Icon href="https://twitter.com/Sovannarith28" icon={BsTwitter} />
                        <Footer.Icon href="https://github.com/HoutSovannarith" icon={BsGithub} />
                        <Footer.Icon href="https://www.linkedin.com/in/hout-sovannarith-8453771a1/" icon={BsLinkedin} />
                    </div>
                </div>
            </div>
        </Footer>
    );
}
export default FooterComponent;
