import React from "react";
import CompanyBackgroundSection from "../../components/about/CompanyBackgroundSection";
import VisionMissionSection from "../../components/about/VisionMissionSection";
import WhyArakuMilletsSection from "../../components/about/WhyArakuMilletsSection";
import CommitmentSustainabilitySection from "../../components/about/CommitmentSustainabilitySection";
import Leaders from "../../components/about/Leaders";
import krishna from "../../assets/images/founders/krishna.jpeg";
import raghavendra from "../../assets/images/founders/raghavendra.jpeg";
import raghuram from "../../assets/images/founders/raghuram.jpeg";
import kavitha from "../../assets/images/founders/kavitha.jpeg";
import amara from "../../assets/images/founders/amara.jpeg";

const leadersData = [
  {
    name: "Krishna Urugonda",
    designation: "Founder",
    photo: krishna,
    bio: "Urugonda Krishna is an entrepreneur actively engaged in manufacturing and trading, with business interests spanning iron and steel products, B.G.I Manufacturing Private Limited, BGI Millets, and other essential goods. Through consistent effort, discipline, and a strong commitment to quality, he has successfully built and managed his enterprises while delivering reliable products and services to customers. Beyond his professional pursuits, he is deeply committed to social service and community welfare. He actively supports orphan homes and individuals in need by regularly providing food, vegetables, rice, and other essential supplies, benefiting nearly 100 people every day. Notably, during challenging periods such as the COVID-19 pandemic, he continued these humanitarian efforts using his own resources, without expectation of recognition or return. He attributes much of his strength and progress to the unwavering support of his life partner and family, whose encouragement has played a vital role in his personal and professional journey. Guided by values of integrity, responsibility, and compassion, he remains dedicated to expanding both his business initiatives and his efforts to serve society.",
  },
  {
    name: "Raghavendra Balla",
    designation: "Managing Director",
    photo: raghavendra,
    email: "Shivaraghu46b@gmail.com",
  },
  {
    name: "Raghuram Nama",
    designation: "Managing Director",
    photo: raghuram,
    email: "raghurammsw3@gmail.com",
  },
  {
    name: "Kavitha Gandhi Vanguri",
    designation: "Managing Director",
    photo: kavitha,
    email: "kavithagandhi.vanguri@gmail.com",
  },
  {
    name: "Amara Mohan Rao",
    designation: "Managing Director",
    photo: amara,
    email: "amaramohan74@gmail.com",
  },
  {
    name: "Ismail Sayyed",
    designation: "Managing Director",
    email: "ismailsyed921@gmail.com",
  },
];

const About = () => {
  return (
    <div>
      <CompanyBackgroundSection />
      <VisionMissionSection />
      <WhyArakuMilletsSection />
      <CommitmentSustainabilitySection />
      <Leaders leaders={leadersData} />
    </div>
  );
};

export default About;
