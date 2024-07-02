import { useContext } from "react";
import ResumeContext from "../../context-provider/resume-context";
import Title from "../ui/title";
import Paragraph from "../ui/paragraph";
import LocationLink from "../ui/location-link";
import SocialsLink from "../ui/socials-link";
import type { socialIconsMap } from "../../data/social-icons-map";
const PersonalInformation = () => {
    const resume = useContext(ResumeContext);
    return (
        <section className="flex gap-2 justify-between items-center">
            <aside className="flex flex-col gap-2">
                <Title variant="name">{resume.basics.name}</Title>
                <h5> Experienced Backend Developer <br /> Node.js | Nest.js | AWS Cloud Technologies</h5>
                <Paragraph variant="bio">
                    <br />Passionate about leveraging Nest.js, Node.js, and AWS cloud technologies to architect and build scalable backend solutions. Proficient in developing applications utilizing AWS services such as S3, Kinesis, Lambda, CloudWatch, EC2, and Elastic Beanstalk. Skilled in optimizing backend systems for performance and reliability, with a focus on delivering efficient solutions that drive business growth.
                    <br />
                    <br />🔹 Nest.js Framework Expertise
                    <br />🔹 Node.js Development
                    <br />🔹 Scalable Backend Architecture
                    <br />🔹 Performance Optimization
                    <br />🔹 API Development and Integration
                    <br />🔹 AWS Cloud Services (S3, Kinesis, Lambda, CloudWatch, EC2, Elastic Beanstalk,ElasticCache,CodeBuild ,CodePipeline)
                    <br />
                </Paragraph>
                {/* TODO: REDUCE THIS TO ONLY LOCATION PROP, DECONSTRUCT INSIDE THE COMPONENT */}
                {/* <LocationLink location={resume.basics.location} /> */}
                <SocialsWrapper />
            </aside>
            <ProfilePicture />
        </section>
    );
};

export default PersonalInformation;

//
//
//
//
//
//
//
//
//
//
//
//
const SocialsWrapper = () => {
    const resume = useContext(ResumeContext);
    type SocialIconType = keyof typeof socialIconsMap;

    return (
        <section className="flex gap-1 items-center">
            <SocialsLink
                type="phone"
                href=""
                information={resume}
            />
            <SocialsLink
                type="mail"
                href=""
                information={resume}
            />
            {resume.basics.profiles.map(profile => (
                <SocialsLink
                    key={profile.url}
                    type={profile.network.toLowerCase() as SocialIconType}
                    href={profile.url}
                    information={resume}
                />
            ))}
        </section>
    );
};

const ProfilePicture = () => {
    const resume = useContext(ResumeContext);
    return (
        <img
            src={resume.basics.image}
            alt={resume.basics.name}
            className="w-32 h-32 rounded-md shrink-0 aspect-square shadow-sm"
        />
    );
};
