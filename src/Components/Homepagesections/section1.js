"use client";
import React, { useState, useEffect } from "react";
import AboutSection from "../Check/about";
import Image from "next/image";
import image2 from "@/Assets/img2.png";
import image3 from "@/Assets/img3.png";
import formstyle from "@/Components/SubmitDao/stepfrom.module.css";

function Section1() {
  const [proposalCount, setProposalCount] = useState(0);
  const [claimCount, setClaimCount] = useState(0);

  useEffect(() => {
    let startProposal = 0;
    const endProposal = 15;
    const durationProposal = 1500;
    const stepTimeProposal = Math.abs(
      Math.floor(durationProposal / endProposal)
    );
    const timerProposal = setInterval(() => {
      startProposal += 1;
      setProposalCount(startProposal);
      if (startProposal === endProposal) clearInterval(timerProposal);
    }, stepTimeProposal);

    // Clear the interval on component unmount
    return () => clearInterval(timerProposal);
  }, []);

  useEffect(() => {
    let startClaim = 0;
    const endClaim = 30;
    const durationClaim = 1500;
    const stepTimeClaim = Math.abs(Math.floor(durationClaim / endClaim));
    const timerClaim = setInterval(() => {
      startClaim += 1;
      setClaimCount(startClaim);
      if (startClaim === endClaim) clearInterval(timerClaim);
    }, stepTimeClaim);

    // Clear the interval on component unmount
    return () => clearInterval(timerClaim);
  }, []);

  return (
    <div className="min-h-screen relative">
      <div className="image-container">
        <Image src={image2} alt="Random 2" className="image-2 rounded-3xl" />
        <Image src={image3} alt="Random 3" className="image-3 rounded-3xl" />
      </div>

      <div className="w-full p-12 mt-12 flex flex-col items-center">
        <h1 className="text-3xl font-bold mb-2 text-center">
          Join
          <span className="text-violet-400 text-4xl">
            {" "}
            Token Resurrection
          </span>{" "}
          to Attest,
        </h1>
        <h1 className="text-3xl font-bold text-center">
          Claim, and Recover Your Lost Tokens
        </h1>
        <div className="flex justify-center gap-4 flex-wrap">
          {/* <a href="/check" rel="noopener noreferrer">
            <button className={`${formstyle.buttonin1stp} button`}>
              Claim Tokens
            </button>
          </a> */}
          {/* <a href="/submit" rel="noopener noreferrer">
            <button className={`${formstyle.buttonin1stp} button`}>
              Submit Proposal
            </button>
          </a> */}
          <a href="/dao" rel="noopener noreferrer">
            <button className={`${formstyle.buttonin1stp} ${formstyle.ExploreProposal} button cursor-pointer`}>
              Explore Proposal
            </button>
          </a>
        </div>
      </div>
      <div className={`w-full ${formstyle.info}`}>
        <AboutSection />
      </div>
    </div>
  );
}

export default Section1;
