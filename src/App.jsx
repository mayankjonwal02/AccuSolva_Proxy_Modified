import React, { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import Layout from "./Pages/Layout";
import Loading from "./components/Loading";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChain } from "@fortawesome/free-solid-svg-icons";
import { faMessage } from "@fortawesome/free-solid-svg-icons";
import { faSkype } from "@fortawesome/free-brands-svg-icons";

const Signup = lazy(() => import("./Pages/Signup"));
const Login = lazy(() => import("./Pages/Login"));
const ForgotPassword = lazy(() => import("./Pages/ForgotPassword"));
const Home = lazy(() => import("./Pages/Home"));
const Location = lazy(() => import("./Pages/Location"));
const Blog = lazy(() => import("./Pages/Blog"));
const ContactSales = lazy(() => import("./Pages/ContactSales"));
const MobileProxy = lazy(() => import("./Pages/MobileProxy"));
const MobileProxyPricing = lazy(() => import("./Pages/MobileProxyPricing"));
const ResidentialProxy = lazy(() => import("./Pages/ResidentialProxy"));
const ResidentialProxyPricing = lazy(() => import("./Pages/ResidentialProxyPricing"));
const DataCenterProxy = lazy(() => import("./Pages/DataCenterProxy"));
const DataCenterProxyPricing = lazy(() => import("./Pages/DataCenterProxyPricing"));
const Faq = lazy(() => import("./Pages/Faq"));
const HelpSupport = lazy(() => import("./Pages/HelpSupport"));
const GlobalNetwork = lazy(() => import("./Pages/GlobalNetwork"));
const BrandProtection = lazy(() => import("./Pages/BrandProtection"));
const AdVerification = lazy(() => import("./Pages/AdVerification"));
const MarketResearch = lazy(() => import("./Pages/MarketResearch"));
const SERPTracking = lazy(() => import("./Pages/SERPTracking"));
const InstagramProxies = lazy(() => import("./Pages/InstagramProxies"));
const Cybersecurity = lazy(() => import("./Pages/Cybersecurity"));
const DataScraping = lazy(() => import("./Pages/DataScraping"));
const AccountsCreation = lazy(() => import("./Pages/AccountsCreation"));
const WaysToTestProxy = lazy(() => import("./Pages/WaysToTestProxy"));
const ProxyVsVpn = lazy(() => import("./Pages/ProxyVsVpn"));
const Quiz = lazy(() => import("./Pages/Quiz"));
const Affiliate = lazy(() => import("./Pages/Affiliate"));
const ContactUs = lazy(() => import("./Pages/ContactUs"));
const TermCondition = lazy(() => import("./Pages/TermsCondition"));
const RefundPolicy = lazy(() => import("./Pages/RefundPolicy"));

// Asia
const India = lazy(() => import("./Pages/countries/India"));
const Canada = lazy(() => import("./Pages/countries/Canada"));
const Germany = lazy(() => import("./Pages/countries/Germany"));
const France = lazy(() => import("./Pages/countries/France"));
const Italy = lazy(() => import("./Pages/countries/Italy"));
const UnitedArabEmirates = lazy(() => import("./Pages/countries/UnitedArabEmirates"));
const Indonesia = lazy(() => import("./Pages/countries/Indonesia"));
const Laos = lazy(() => import("./Pages/countries/Laos"));
const Afghanistan = lazy(() => import("./Pages/countries/Afghanistan"));
const Israel = lazy(() => import("./Pages/countries/Israel"));
const Lebanon = lazy(() => import("./Pages/countries/Lebanon"));
const Armenia = lazy(() => import("./Pages/countries/Armenia"));
const SriLanka = lazy(() => import("./Pages/countries/SriLanka"));
const Azerbaijan = lazy(() => import("./Pages/countries/Azerbaijan"));
const Iraq = lazy(() => import("./Pages/countries/Iraq"));
const Myanmar = lazy(() => import("./Pages/countries/Myanmar"));
const Bangladesh = lazy(() => import("./Pages/countries/Bangladesh"));
const Iran = lazy(() => import("./Pages/countries/Iran"));
const Mongolia = lazy(() => import("./Pages/countries/Mongolia"));
const Bahrain = lazy(() => import("./Pages/countries/Bahrain"));
const Jordan = lazy(() => import("./Pages/countries/Jordan"));
const Macao = lazy(() => import("./Pages/countries/Macao"));
const BruneiDarussalam = lazy(() => import("./Pages/countries/BruneiDarussalam"));
const Japan = lazy(() => import("./Pages/countries/Japan"));
const Maldives = lazy(() => import("./Pages/countries/Maldives"));
const Bhutan = lazy(() => import("./Pages/countries/Bhutan"));
const Kyrgyzstan = lazy(() => import("./Pages/countries/Kyrgyzstan"));
const Malaysia = lazy(() => import("./Pages/countries/Malaysia"));
const Cyprus = lazy(() => import("./Pages/countries/Cyprus"));
const SouthKorea = lazy(() => import("./Pages/countries/SouthKorea"));
const Oman = lazy(() => import("./Pages/countries/Oman"));
const Georgia = lazy(() => import("./Pages/countries/Georgia"));
const Kuwait = lazy(() => import("./Pages/countries/Kuwait"));
const Philippines = lazy(() => import("./Pages/countries/Philippines"));
const HongKong = lazy(() => import("./Pages/countries/HongKong"));
const Kazakhstan = lazy(() => import("./Pages/countries/Kazakhstan"));
const Pakistan = lazy(() => import("./Pages/countries/Pakistan"));
const China = lazy(() => import("./Pages/countries/China"));
const Cambodia = lazy(() => import("./Pages/countries/Cambodia"));
const Nepal = lazy(() => import("./Pages/countries/Nepal"));

// Africa
const Alger = lazy(() => import("./Pages/countries/africa/Alger"));
const Eritrea = lazy(() => import("./Pages/countries/africa/Eritrea"));
const Malawi = lazy(() => import("./Pages/countries/africa/Malawi"));
const Angola = lazy(() => import("./Pages/countries/africa/Angola"));
const Ethiopia = lazy(() => import("./Pages/countries/africa/Ethiopia"));
const Mali = lazy(() => import("./Pages/countries/africa/Mali"));
const CentralAfricanRepublic = lazy(() => import("./Pages/countries/africa/CentralAfricanRepublic"));
const Gabon = lazy(() => import("./Pages/countries/africa/Gabon"));
const Mauritania = lazy(() => import("./Pages/countries/africa/Mauritania"));
const Botswana = lazy(() => import("./Pages/countries/africa/Botswana"));
const Gambia = lazy(() => import("./Pages/countries/africa/Gambia"));
const Morocco = lazy(() => import("./Pages/countries/africa/Morocco"));
const BurkinaFaso = lazy(() => import("./Pages/countries/africa/BurkinaFaso"));
const Ghana = lazy(() => import("./Pages/countries/africa/Ghana"));
const Mozambique = lazy(() => import("./Pages/countries/africa/Mozambique"));
const Burundi = lazy(() => import("./Pages/countries/africa/Burundi"));
const Guinea = lazy(() => import("./Pages/countries/africa/Guinea"));
const Namibia = lazy(() => import("./Pages/countries/africa/Namibia"));
const Cameroon = lazy(() => import("./Pages/countries/africa/Cameroon"));
const GuineaBissau = lazy(() => import("./Pages/countries/africa/GuineaBissau"));
const Niger = lazy(() => import("./Pages/countries/africa/Niger"));
const Benin = lazy(() => import("./Pages/countries/africa/Benin"));
const IvoryCoast = lazy(() => import("./Pages/countries/africa/IvoryCoast"));
const Nigeria = lazy(() => import("./Pages/countries/africa/Nigeria"));
const RepublicOfTheCongo = lazy(() => import("./Pages/countries/africa/RepublicOfTheCongo"));
const Chad = lazy(() => import("./Pages/countries/africa/Chad"));
const Kenya = lazy(() => import("./Pages/countries/africa/Kenya"));
const Libya = lazy(() => import("./Pages/countries/africa/Libya"));
const Lesotho = lazy(() => import("./Pages/countries/africa/Lesotho"));
const Rwanda = lazy(() => import("./Pages/countries/africa/Rwanda"));
const Djibouti = lazy(() => import("./Pages/countries/africa/Djibouti"));
const Liberia = lazy(() => import("./Pages/countries/africa/Liberia"));
const Senegal = lazy(() => import("./Pages/countries/africa/Senegal"));
const Egypt = lazy(() => import("./Pages/countries/africa/Egypt"));
const DrOfTheCongo = lazy(() => import("./Pages/countries/africa/DrOfTheCongo"));
const SierraLeone = lazy(() => import("./Pages/countries/africa/SierraLeone"));

// Oceania
const Australia = lazy(() => import("./Pages/countries/oceania/Australia"));
const Fiji = lazy(() => import("./Pages/countries/oceania/Fiji"));
const Guam = lazy(() => import("./Pages/countries/oceania/Guam"));
const NewCaledonia = lazy(() => import("./Pages/countries/oceania/NewCaledonia"));
const NewZealand = lazy(() => import("./Pages/countries/oceania/NewZealand"));

const App = () => {
  return (
    <div className="relative flex flex-col items-end">
      <div className="fixed  z-50 rounded w-fit h-fit  flex flex-col  items-end bg-transparent">
        <div className="bg-[#1B1A55] me-5 rounded-2xl h-fit w-fit p-4 flex flex-col justify-center items-center mt-[500px] md:mt-[600px] gap-3" >
       
          <a href="mailto:sales@accusolvaproxy.com" target="_blank">
            <FontAwesomeIcon icon={faMessage} style={{height:"45px",width:"45px"}} className="text-white" beat/>
          </a>
        </div>

        <div className="bg-[#007FFF] me-5 rounded-2xl h-fit w-fit p-3 flex flex-col justify-center items-center mt-[50px] md:mt-[20px] gap-3" >
       
          <a href="https://join.skype.com/invite/uh0h1fp4c520" target="_blank">
            <FontAwesomeIcon icon={faSkype} style={{height:"50px",width:"50px"}} className="text-white" beat/>
          </a>
        </div>
      </div>
      {/* <div className="bg-[#d52121] rounded w-12 h-12 flex justify-center items-center mt-10 absolute z-10">
        hello
      </div> */}
      {/* <div className="absolute z-0"> */}

      <BrowserRouter>
        <ScrollToTop />
        <Suspense fallback={<Loading />}>
          <Routes>
            <Route element={<Layout />}>
              <Route path="/" element={<Home />} />
              <Route path="/location" element={<Location />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/contact-sale" element={<ContactSales />} />
              <Route path="/contact-us" element={<ContactUs />} />
              <Route path="/mobile-proxy" element={<MobileProxy />} />
              <Route path="/mobile-proxy-price" element={<MobileProxyPricing />} />
              <Route path="/residential-proxy" element={<ResidentialProxy />} />
              <Route path="/residential-proxy-price" element={<ResidentialProxyPricing />} />
              <Route path="/data-center-proxy" element={<DataCenterProxy />} />
              <Route path="/data-center-proxy-price" element={<DataCenterProxyPricing />} />
              <Route path="/faq" element={<Faq />} />
              <Route path="/help-support" element={<HelpSupport />} />
              <Route path="/global-network" element={<GlobalNetwork />} />
              <Route path="/brand-protection" element={<BrandProtection />} />
              <Route path="/ad-verification" element={<AdVerification />} />
              <Route path="/market-research" element={<MarketResearch />} />
              <Route path="/serp-tracking" element={<SERPTracking />} />
              <Route path="/instagram-proxy" element={<InstagramProxies />} />
              <Route path="/cybersecurity" element={<Cybersecurity />} />
              <Route path="/data-scraping" element={<DataScraping />} />
              <Route path="/accounts-creation" element={<AccountsCreation />} />
              <Route path="/ways-to-test-proxy" element={<WaysToTestProxy />} />
              <Route path="/proxy-vs-vpn" element={<ProxyVsVpn />} />
              <Route path="/affiliate" element={<Affiliate />} />
              <Route path="/term-condition" element={<TermCondition />} />
              <Route path="/refund-policy" element={<RefundPolicy />} />

              {/*List of Asia  */}
              <Route path="/india" element={<India />} />
              <Route path="/canada" element={<Canada />} />
              <Route path="/germany" element={<Germany />} />
              <Route path="/france" element={<France />} />
              <Route path="/italy" element={<Italy />} />
              <Route path="/united-arab-emirates" element={<UnitedArabEmirates />} />
              <Route path="/indonesia" element={<Indonesia />} />
              <Route path="/laos" element={<Laos />} />
              <Route path="/afghanistan" element={<Afghanistan />} />
              <Route path="/israel" element={<Israel />} />
              <Route path="/lebanon" element={<Lebanon />} />
              <Route path="/armenia" element={<Armenia />} />
              <Route path="/sri-lanka" element={<SriLanka />} />
              <Route path="/azerbaijan" element={<Azerbaijan />} />
              <Route path="/iraq" element={<Iraq />} />
              <Route path="/myanmar" element={<Myanmar />} />
              <Route path="/bangladesh" element={<Bangladesh />} />
              <Route path="/iran" element={<Iran />} />
              <Route path="/mongolia" element={<Mongolia />} />
              <Route path="/bahrain" element={<Bahrain />} />
              <Route path="/jordan" element={<Jordan />} />
              <Route path="/macao" element={<Macao />} />
              <Route path="/brunei-darussalam" element={<BruneiDarussalam />} />
              <Route path="/japan" element={<Japan />} />
              <Route path="/maldives" element={<Maldives />} />
              <Route path="/bhutan" element={<Bhutan />} />
              <Route path="/kyrgyzstan" element={<Kyrgyzstan />} />
              <Route path="/malaysia" element={<Malaysia />} />
              <Route path="/cyprus" element={<Cyprus />} />
              <Route path="/south-korea" element={<SouthKorea />} />
              <Route path="/oman" element={<Oman />} />
              <Route path="/georgia" element={<Georgia />} />
              <Route path="/kuwait" element={<Kuwait />} />
              <Route path="/philippines" element={<Philippines />} />
              <Route path="/hong-kong" element={<HongKong />} />
              <Route path="/kazakhstan" element={<Kazakhstan />} />
              <Route path="/pakistan" element={<Pakistan />} />
              <Route path="/china" element={<China />} />
              <Route path="/cambodia" element={<Cambodia />} />
              <Route path="/nepal" element={<Nepal />} />

              {/* List of Africa */}
              <Route path="/alger" element={<Alger />} />
              <Route path="/eritrea" element={<Eritrea />} />
              <Route path="/malawi" element={<Malawi />} />
              <Route path="/angola" element={<Angola />} />
              <Route path="/ethiopia" element={<Ethiopia />} />
              <Route path="/mali" element={<Mali />} />
              <Route path="/central-african-republic" element={<CentralAfricanRepublic />} />
              <Route path="/gabon" element={<Gabon />} />
              <Route path="/mauritania" element={<Mauritania />} />
              <Route path="/botswana" element={<Botswana />} />
              <Route path="/gambia" element={<Gambia />} />
              <Route path="/morocco" element={<Morocco />} />
              <Route path="/burkina-faso" element={<BurkinaFaso />} />
              <Route path="/ghana" element={<Ghana />} />
              <Route path="/mozambique" element={<Mozambique />} />
              <Route path="/burundi" element={<Burundi />} />
              <Route path="/guinea" element={<Guinea />} />
              <Route path="/namibia" element={<Namibia />} />
              <Route path="/cameroon" element={<Cameroon />} />
              <Route path="/guinea-bissau" element={<GuineaBissau />} />
              <Route path="/niger" element={<Niger />} />
              <Route path="/benin" element={<Benin />} />
              <Route path="/ivory-coast" element={<IvoryCoast />} />
              <Route path="/nigeria" element={<Nigeria />} />
              <Route path="/republic-of-the-congo" element={<RepublicOfTheCongo />} />
              <Route path="/chad" element={<Chad />} />
              <Route path="/kenya" element={<Kenya />} />
              <Route path="/libya" element={<Libya />} />
              <Route path="/lesotho" element={<Lesotho />} />
              <Route path="/rwanda" element={<Rwanda />} />
              <Route path="/djibouti" element={<Djibouti />} />
              <Route path="/liberia" element={<Liberia />} />
              <Route path="/senegal" element={<Senegal />} />
              <Route path="/egypt" element={<Egypt />} />
              <Route path="/dr-of-the-congo" element={<DrOfTheCongo />} />
              <Route path="/sierra-leone" element={<SierraLeone />} />

              {/* List of Oceania */}
              <Route path="/australia" element={<Australia />} />
              <Route path="/fiji" element={<Fiji />} />
              <Route path="/guam" element={<Guam />} />
              <Route path="/new-caledonia" element={<NewCaledonia />} />
              <Route path="/new-zealand" element={<NewZealand />} />
            </Route>

            <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<Login />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />
            <Route path="/quiz" element={<Quiz />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
      {/* </div> */}

    </div>

  );
}
{/* <div className="bg-[#fff] rounded w-12 h-12 flex justify-center items-center" >
  <a href="https://join.skype.com/invite/uh0h1fp4c520" target="_blank">
    <FontAwesomeIcon icon={faSkype} size="2xl" className="text-[#007FFF]" />
  </a>
</div> */}

export default App;
