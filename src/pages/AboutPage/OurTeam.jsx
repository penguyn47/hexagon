import React from 'react';

const teamMembers = [
    {
        name: 'Nguyễn Duy Lâm',
        position: 'Product Caretaker',
        image: 'src/assets/images/team-member-01.jpg',
        socials: [
            { icon: 'fa fa-facebook', link: '#' },
            { icon: 'fa fa-twitter', link: '#' },
            { icon: 'fa fa-linkedin', link: '#' },
            { icon: 'fa fa-behance', link: '#' },
        ],
    },
    {
        name: 'Nguyễn Đặng Minh Lân',
        position: 'Product Caretaker',
        image: 'src/assets/images/team-member-02.jpg',
        socials: [
            { icon: 'fa fa-facebook', link: '#' },
            { icon: 'fa fa-twitter', link: '#' },
            { icon: 'fa fa-linkedin', link: '#' },
            { icon: 'fa fa-behance', link: '#' },
        ],
    },
    {
        name: 'Huỳnh Tấn Lộc',
        position: 'Product Caretaker',
        image: 'src/assets/images/team-member-03.jpg',
        socials: [
            { icon: 'fa fa-facebook', link: '#' },
            { icon: 'fa fa-twitter', link: '#' },
            { icon: 'fa fa-linkedin', link: '#' },
            { icon: 'fa fa-behance', link: '#' },
        ],
    },
];

const OurTeam = () => {
    return (
        <section className="our-team">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="section-heading">
                            <h2>Our Amazing Team</h2>
                            <span>Details to details is what makes Hexashop different from the other themes.</span>
                        </div>
                    </div>
                    {teamMembers.map((member, index) => (
                        <div className="col-lg-4" key={index}>
                            <div className="team-item">
                                <div className="thumb">
                                    <div className="hover-effect">
                                        <div className="inner-content">
                                            <ul>
                                                {member.socials.map((social, i) => (
                                                    <li key={i}>
                                                        <a href={social.link}>
                                                            <i className={social.icon}></i>
                                                        </a>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                    <img src={member.image} alt={member.name} />
                                </div>
                                <div className="down-content">
                                    <h4>{member.name}</h4>
                                    <span>{member.position}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default OurTeam;
