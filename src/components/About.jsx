import Image from "next/image";

const About = () => {
    return (
        <div className="about-container">
            <h2>About Me</h2>
            <div className="flex-about">
                <div className="about-text">
                    <p>
                        Welcome to my personal website! I am a passionate developer with a strong foundation in software development and expertise in developing full stack systems by using frameworks like React, Express and MongoDB/SQL. I enjoy working on both the front-end and back-end, constantly seeking ways to optimize performance, improve user experience, and deliver high-quality code.
                    </p>
                    {/* <p>Throughout my career, I have worked on a wide range of projects, from simple websites to complex enterprise-level applications. I am experienced with various development tools and frameworks, including React, Next.js, AWS, Docker, Go, Rust and Node.js. I am always eager to learn new technologies, continuously seeking opportunities to improve my skills.</p> */}
                    <p>I approach my work with a growth mindset, staying updated with the latest trends and advancements in web development. Creating remarkable digital experiences is not just a profession for me, it's my passion. I am committed to delivering solutions that not only meet functional requirements but also captivate and engage users.</p>
                    {/* <p>Thank you for visiting my personal portfolio website. Please explore my work and projects to witness my dedication to pushing the boundaries of web development. I am excited to embark on new projects and collaborations, so feel free to reach out. Let's bring your ideas to life and unforgettable experience together.</p> */}
                </div>
                <div className="about-img">
                    <Image src='/images/about.jpeg' className="profile-img" width={300} height={500} alt="Joe and animal relaxing and having fun" />
                </div>
            </div>
        </div>

    )
}

export default About;