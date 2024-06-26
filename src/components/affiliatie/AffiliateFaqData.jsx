import React from "react";
import { Link } from "react-router-dom";

export const ques = [
  {
    id: 1,
    ques: "What is an Affiliate Program?",
    ans: (
      <span>
        AccuSolva offers an Affiliate Program that allows individuals to earn
        significant rewards by referring new users to our platform who make a
        purchase. You will be provided with exclusive links and promotional
        resources that can be displayed on your website, social media platforms,
        and other channels. When a new user signs up through your referral link
        and makes a purchase, you can receive commissions of up to 5%.
      </span>
    ),
  },
  {
    id: 2,
    ques: "How to join AccuSolva Affiliate program?",
    ans: (
      <span>
        Join our affiliate program today! It’s open to all AccuSolva account
        holders.{" "}
        <Link to="/signup" className="underline hover:text-[#EF6825]">
          Click here
        </Link>{" "}
        to sign up now.
      </span>
    ),
  },
  {
    id: 3,
    ques: "When referral earning are paid?",
    ans: (
      <span>
        Referral earnings are held for 30 days for verification before being
        paid out within 48 hours of a withdrawal request.
      </span>
    ),
  },
  {
    id: 4,
    ques: "Can you suggest me some places where I can share my affiliate link?",
    ans: (
      <span>
        Here are some ways to share your affiliate link: post it on your blog or
        website, share it on forums or discussion sites, answer questions on Q&A
        websites, include it in your YouTube or TikTok videos, promote it on
        social media platforms, and send it to your existing clients. However,
        please do not use the AccuSolva trademark in paid search advertisements,
        as it is a violation of our policy. If we discover that you have
        violated this rule, we may suspend your account.
      </span>
    ),
  },
  {
    id: 5,
    ques: "Will I receive any help if I have any questions?",
    ans: (
      <span>
        If you need assistance, our Support Team is available 24/7 via live chat
        on our website or by email at{" "}
        <a href="mailTo:support@AccuSolva.com" className="underline hover:text-[#EF6825]">support@AccuSolva.com.</a> We
        are always happy to help you with any questions you may have.
      </span>
    ),
  },
];
