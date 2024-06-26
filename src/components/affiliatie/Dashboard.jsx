import React from "react";
import img from '../../assets/AffDashboard.png'

const Dashboard = () => {
  return (
    <main className="w-full py-24 px-2 sm:px-12 lg:px-24 bg-gradient-to-b from-[#498AC614] to-[#A7AEA714]">
      <section className="flex flex-col gap-6">
        <h1 className="text-[28px] sm:text-[36px]/[48px] text-[#0103EC] font-semibold text-center">
          How The Program Works:
        </h1>
        <p className="text-[16px] sm:text-[18px]/[38px] text-[#475569] text-center">
          Monitor the effectiveness of your affiliate program effortlessly with
          our user-friendly dashboard. From tracking referral registrations to
          monitoring payment amounts and earnings, it provides all the essential
          tools to ensure a seamless flow of revenue.
        </p>
      </section>
      <section className="mt-12">
        <img src={img} alt="dashboard" />
      </section>
    </main>
  );
};

export default Dashboard;
