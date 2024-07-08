import { Image } from "@nextui-org/react";
import "./navBar.css";
import PolicyModal from "../gerenal/policyModal";
export default function Footer() {
  
  const policys = [
    {
      tittle: `Privacy Policy`,
      ddd:[
        {
          subtitle:`SECTION 1 - HOW WE HANDLE YOUR INFORMATION`, 
          description:`When you make a purchase from our store, as part of the transaction process, we collect the personal information you provide such as your name, address, and email address.
          Email Communication: With your consent, we may send you emails about our store, new products, and updates.`
        },
        {
          subtitle:`SECTION 2 - CONSENT`,
          description:` How do you provide consent?
          By providing us with personal information to complete a transaction, verify your credit card, place an order, arrange delivery, or return a purchase, you consent to us collecting and using it for that specific purpose only.
          If we need your personal information for a secondary reason, such as marketing, we will either ask you directly for your explicit consent or provide you with the opportunity to decline.
          How can you withdraw your consent?
          If you change your mind after opting in, you can withdraw your consent for us to contact you, or for the continued collection, use, or disclosure of your information, at any time, by contacting us at info@thescentedmarket.ca.`
        },
        {
          subtitle:`SECTION 3 - DISCLOSURE`,
          description:`We may disclose your personal information if required by law or if you violate our Terms of Service.`
        },
        {
          subtitle:`SECTION 4 - SHOPIFY`,
          description:`Our store is hosted on Shopify Inc. They provide us with the online e-commerce platform that enables us to sell our products and services to you.
          Your data is stored through Shopify’s secure servers and databases.
          Payment:
          If you choose a direct payment gateway to complete your purchase, Shopify stores your credit card data securely. It is encrypted through the Payment Card Industry Data Security Standard (PCI-DSS). Your purchase transaction data is stored only as long as necessary to complete your purchase. Afterward, it is deleted.
          For more details, you may refer to Shopify’s Terms of Service (https://www.shopify.com/legal/terms) or Privacy Statement (https://www.shopify.com/legal/privacy).`
        },
        {
          subtitle:`SECTION 5 - SECURITY`,
          description:`We take reasonable precautions and follow industry best practices to protect your personal information from unauthorized access, misuse, or alteration. Your credit card information is encrypted using secure socket layer technology (SSL) and stored with AES-256 encryption.`
        },
        {
          subtitle:`SECTION 6 - CHANGES TO THIS PRIVACY POLICY`,
          description:`We reserve the right to modify this privacy policy at any time. Changes will take effect immediately upon posting on the website. If there are material changes, we will notify you here. If our store is acquired or merged with another company, your information may be transferred to the new owners.`
        },
        {
          subtitle:`SECTION 7 - SMS/MMS MOBILE MESSAGING MARKETING PROGRAM`,
          description:`We respect your privacy and will only use the information provided through the Program to transmit mobile messages and respond to you if necessary. We do not sell, or transfer phone numbers or customer information collected through the Program for profit. We may disclose information if necessary to satisfy a law, regulation, or governmental request.
          For any questions or concerns about your personal information, please contact our Privacy Compliance Officer at XXX`
        },
      ],
      
    },
    {
      tittle: `Return Policy`,
      ddd:[
        {
          subtitle:`Returns and Exchanges`,
          description:`Please review the following details and reach out to our customer service team at XXX for further assistance.
          To qualify for an exchange, store credit, or refund, your item(s) must meet the following conditions:
          Must be in a resalable condition.
          Candles have not been Lit.
          Customers are responsible for shipping costs incurred for returning products to us. Please ensure that products are securely packaged inside the box to prevent damage during transit. We cannot issue store credit or refunds for damaged returns. Please obtain a tracking number for your return, as we are not liable for lost packages.
          Upon receipt and confirmation of the product(s) being in a resalable condition, we will issue a store credit or refund for the product total (shipping costs are non-refundable).
          To process any return or exchange, proof of purchase within the last 5 days is required.
          The following items are not eligible for return or exchange:
          Products with broken seals or not in their original packaging.
          Candles that have been lit.
          Custom items, including Dough Bowl refills, Mug Candles, and Custom Vessels.
          Gift Cards.
          Sale Items.
          Returns on Gifts
          Proof of a gift receipt or the gift sender's email address is required to locate the order.
          If the order is found in our system, a store credit can be issued for the product total.
          If the order cannot be located in our system, we are unable to process a store credit.
          `
        },
        {
          subtitle:`Damaged Products`,
          description:`If your order arrives damaged, please contact our customer service team at XXX with the following details:
          Your order number.
          Photos of the damaged items.
          Photos of the packaging with the shipping label visible.
          Any damages must be reported within 5 days of receiving your shipment for a store credit or refund to be considered.
          `
        },
        {
          subtitle:`Undelivered Packages`,
          description:`If you receive a delivery confirmation but your package has not arrived, it may be due to the following reasons:
          The package has been scanned by the carrier but has not yet been delivered. This is common, especially during peak shipping periods. Please allow 2-3 days for the package to arrive before contacting customer service.
          Incorrect or incomplete address provided at checkout. Please ensure that we have the correct address for shipping your order. We are not responsible for orders delivered to an incorrect address.`
        },
      ],
      
    },
    {
      tittle: `Shipping Policy`,
      ddd:[
        {
          subtitle:`Order Processing Time`,
          description:`All orders undergo processing within 3-5 business days. Please note that orders are neither shipped nor delivered on weekends or holidays.
          During peak periods with a high order volume, shipments may encounter delays. Kindly allow additional transit days for delivery. Should there be a significant delay in the shipment of your order, we will promptly notify you via email or telephone.`
        },
        {
          subtitle:`Shipping Rates and Delivery Estimates`,
          description:`Shipping fees for your order will be computed and displayed at the checkout stage. Our shipping charges are determined based on Canada Post rates. To ascertain the current pricing for your address, please visit their website at  https://www.canadapost.ca 
          Occasional delays in delivery may arise.`
        },
        {
          subtitle:`Shipment Confirmation and Order Tracking`,
          description:`Upon shipment of your order, you will receive a Shipment Confirmation email containing your tracking number(s). Please allow approximately 24 hours for the tracking number to become active.`
        },
        {
          subtitle:`Damaged Products`,
          description:`In the event that your order arrives damaged, kindly contact our customer service team at XXX. Please provide the following details: Your order number Photos of the damaged items Photos of the packaging with the shipping label visible Any damages must be reported within 7 days of receiving your shipment for a store credit or refund to be considered.`
        },
        {
          subtitle:`Undelivered Packages`,
          description:`If you receive a delivery confirmation but your package has not arrived, the following reasons could account for it: The package has been scanned by the carrier but has not been delivered yet. This occurrence is common, particularly during peak shipping seasons. Please allow 2-3 days for the package to arrive before contacting customer service. Incorrect or incomplete address provided at checkout. Please ensure that we have the correct address to ship your order. We are not liable for orders delivered to an incorrect address.`
        },
        {
          subtitle:`International Shipping Guidelines`,
          description:`Currently, we only ship to Canada and the U.S.A.`
        },
        {
          subtitle:`Order Processing Time`,
          description:`Similar to domestic orders, all international orders undergo processing within 3-5 business days. Please note that orders are neither shipped nor delivered on weekends or holidays.
          During peak periods with a high order volume, international shipments may encounter delays by a few days. Kindly allow additional transit days for delivery. Should there be a significant delay in the shipment of your order, we will promptly notify you via email or telephone.`
        },
        {
          subtitle:`Shipping Rates and Delivery Estimates`,
          description:`Similar to domestic orders, shipping fees for international orders will be computed and displayed at the checkout stage. Our shipping charges are determined based on Canada Post rates. To ascertain the current pricing for your address, please visit their website at https://www.canadapost.ca 
          Occasional delays in delivery may arise.`
        },
        {
          subtitle:`Shipment Confirmation and Order Tracking`,
          description:`Upon shipment of your order, you will receive a Shipment Confirmation email containing your tracking number(s). Please allow approximately 24 hours for the tracking number to become active.
          `
        },
        {
          subtitle:`Customs, Duties, and Taxes`,
          description:`Please note that The Scented Market Inc is not liable for any customs and taxes applied to your order. All fees imposed during or after shipping are the responsibility of the customer (tariffs, taxes, etc.).`
        },
        {
          subtitle:`Refund Policy`,
          description:`Our Refund Policy provides detailed information about options and procedures for returning your order.`
        },
        
      ],
    },
    {
      tittle: `Terms of Service`,
      ddd:[
        {
          subtitle:`Introduction`,
          description:`Emuna Candles operates this website. Throughout the site, the terms “we,” “us,” and “our” refer to Emuna Candles. By accessing or using any part of the site, you agree to be bound by these Terms of Service. If you do not agree to all the terms and conditions of this agreement, then you may not access the website or use any services. These Terms of Service apply to all users of the site, including without limitation users who are browsers, vendors, customers, merchants, and contributors of content.
          Please read these Terms of Service carefully before accessing or using our website. By accessing or using any part of the site, you agree to be bound by these Terms of Service. If you do not agree to all the terms and conditions of this agreement, then you may not access the website or use any services. If these Terms of Service are considered an offer, acceptance is expressly limited to these Terms of Service.
          Any new features or tools which are added to the current store shall also be subject to the Terms of Service. You can review the most current version of the Terms of Service at any time on this page. We reserve the right to update, change, or replace any part of these Terms of Service by posting updates and/or changes to our website. It is your responsibility to check this page periodically for changes. Your continued use of or access to the website following the posting of any changes constitutes acceptance of those changes.
          Our store is hosted on Shopify Inc. They provide us with the online e-commerce platform that allows us to sell our products and services to you.`
        },
        {
          subtitle:`SECTION 1 - ONLINE STORE TERMS`,
          description:`By agreeing to these Terms of Service, you represent that you are at least the age of majority in your state or province of residence, or that you are the age of majority in your state or province of residence, and you have given us your consent to allow any of your minor dependents to use this site. You may not use our products for any illegal or unauthorized purpose, nor may you, in the use of the Service, violate any laws in your jurisdiction (including but not limited to copyright laws). You must not transmit any worms or viruses or any code of a destructive nature. A breach or violation of any of the Terms will result in an immediate termination of your Services.
          `
        },
        {
          subtitle:`SECTION 2 - GENERAL CONDITIONS`,
          description:`We reserve the right to refuse service to anyone for any reason at any time. You understand that your content (not including credit card information), may be transferred unencrypted and involve transmissions over various networks. Credit card information is always encrypted during transfer over networks. You agree not to reproduce, duplicate, copy, sell, resell, or exploit any portion of the Service, use of the Service, or access to the Service or any contact on the website through which the service is provided, without express written permission by us. The headings used in this agreement are included for convenience only and will not limit or otherwise affect these Terms.`
        },
        {
          subtitle:`SECTION 3 - ACCURACY, COMPLETENESS AND TIMELINESS OF INFORMATION`,
          description:`We are not responsible if information made available on this site is not accurate, complete, or current. The material on this site is provided for general information only and should not be relied upon or used as the sole basis for making decisions without consulting primary, more accurate, more complete, or more timely sources of information. Any reliance on the material on this site is at your own risk. This site may contain certain historical information. Historical information, necessarily, is not current and is provided for your reference only. We reserve the right to modify the contents of this site at any time, but we have no obligation to update any information on our site. You agree that it is your responsibility to monitor changes to our site.`
        },
        {
          subtitle:`SECTION 4 - MODIFICATIONS TO THE SERVICE AND PRICES`,
          description:`Prices for our products are subject to change without notice. We reserve the right at any time to modify or discontinue the Service (or any part or content thereof) without notice at any time. We shall not be liable to you or to any third-party for any modification, price change, suspension, or discontinuance of the Service.`
        },
        {
          subtitle:`SECTION 5 - PRODUCTS OR SERVICES (if applicable)`,
          description:`Certain products or services may be available exclusively online through the website. These products or services may have limited quantities and are subject to return or exchange only according to our Return Policy. We have made every effort to display as accurately as possible the colors and images of our products that appear at the store. We reserve the right, but are not obligated, to limit the sales of our products or Services to any person, geographic region, or jurisdiction. We may exercise this right on a case-by-case basis. We reserve the right to limit the quantities of any products or services that we offer. All descriptions of products or product pricing are subject to change at any time without notice, at the sole discretion of us. We reserve the right to discontinue any product at any time. Any offer for any product or service made on this site is void where prohibited. We do not warrant that the quality of any products, services, information, or other material purchased or obtained by you will meet your expectations, or that any errors in the Service will be corrected.`
        },
        {
          subtitle:`SECTION 6 - ACCURACY OF BILLING AND ACCOUNT INFORMATION`,
          description:`We reserve the right to refuse any order you place with us. We may, in our sole discretion, limit or cancel quantities purchased per person, per household, or per order. These restrictions may include orders placed by or under the same customer account, the same credit card, and/or orders that use the same billing and/or shipping address. In the event that we make a change to or cancel an order, we may attempt to notify you by contacting the e-mail and/or billing address/phone number provided at the time the order was made. We reserve the right to limit or prohibit orders that, in our sole judgment, appear to be placed by dealers, resellers, or distributors. You agree to provide current, complete, and accurate purchase and account information for all purchases made at our store. You agree to promptly update your account and other information, including your email address and credit card numbers and expiration dates, so that we can complete your transactions and contact you as needed. For more`
        },
      ],
    },
    {
      tittle: `Candle Safety Guidelines`,
      ddd:[
        {
          subtitle:`Candle Safety Guidelines`,
          description:`To reduce the risks associated with burning candles in your household, adhere to the following recommendations:
          Always follow the instructions provided on the candle label.
          Trim candle wicks to a length of 5-7 mm (1/4 inch) before lighting the candle.
          Utilize well-ventilated, sturdy candle holders that are resistant to tipping over. Avoid wooden or plastic holders, as they may ignite. Exercise caution with glass candle holders, as they may shatter when exposed to excessive heat.
          Avoid dropping objects, such as matches, into candles.
          Keep burning candles away from flammable materials such as curtains, decorations, and clothing. In case clothing catches fire, remember to "Stop, Drop, and Roll."
          Ensure burning candles are out of reach of children and pets.
          Do not leave burning candles unattended in a room.
          Extinguish all candles before retiring to bed.
          Educate children about the hazards of open flames. Teach them that candles are not toys and should not be handled or ingested.
          Reference: Health Canada - Candle Safety (https://www.canada.ca/en/health-canada/services/healthy-living/your-health/products/candle-safety.htm)`
        }  
      ]
    },
  ];
  
  return (
    <div className="w-full bg-gray-400 flex item-center justify-between px-5 sm:h-40 md:h-32 md:px-10 lg:px-16">
      <div className="flex h-full items-center ">
        <Image isZoomed src="/imgs/innminds.jpeg" alt="innminds" width={100} />
      </div>

      <div className="flex items-center flex-wrap flex-col text-gray-700 gap-2 mt-5">
        {policys.map((item,index)=>(
          <PolicyModal key={index} title={item.tittle}>{item.ddd && item.ddd.map((subItem,subIndex)=>(
            <div key={subIndex}>
              <h1 className="font-bold border-b">{subItem.subtitle}</h1>
              <p>{subItem.description}</p>
            </div>
          ))}</PolicyModal>
        ))}

      </div>

      {/* <div className="flex items-center flex-col text-gray-500 gap-2 mt-5">
        <button>Terms of Service</button>
        <button>Candle Safety Guidelines</button>
      </div> */}

      
    </div>
  );
}

