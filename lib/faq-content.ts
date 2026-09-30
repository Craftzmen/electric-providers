import { siteConfig } from "@/lib/site-nav"

export type FaqItem = { question: string; answer: string }

export const faqByPage: Record<string, FaqItem[]> = {
  services: [
    {
      question: "My power is out. Who should I call?",
      answer:
        "Call your local utility. They own the lines and handle outages, downed wires, and gas leaks at your address. If you reach us first, we will give you the right number and your account details.",
    },
    {
      question: "Will my meter or delivery charges change?",
      answer:
        "No. Your utility keeps owning and reading your meter and bills delivery at its regulated rates. We only set the supply part of your statement.",
    },
    {
      question: "Can I add gas to my plan later?",
      answer:
        "Yes. Home customers can move to Steady 24 at any time. We quote the price per therm when you add gas, and it stays fixed for the rest of the term.",
    },
  ],
  plans: [
    {
      question: "What does the price per kWh include?",
      answer:
        "It is the supply price for each kilowatt-hour you use. The monthly service fee, your utility's delivery charges, taxes, and regulatory fees are listed separately on your statement.",
    },
    {
      question: "What happens when my term is up?",
      answer:
        "At least 30 days before your term ends, we mail and email your renewal options. If you do nothing, service continues month to month at the current price until you pick a plan or leave.",
    },
    {
      question: "Does it cost anything to cancel?",
      answer:
        "Evergreen 12 has no cancellation fee. Steady 24 has a $60 fee, Longleaf 36 has a $125 fee per meter, and Canopy 100 has a $150 fee per meter if you leave early. There is never a fee if you move out of our service area.",
    },
    {
      question: "Can I switch plans before my term ends?",
      answer: `Yes. Moving to a different ${siteConfig.name} plan counts as a renewal, so no cancellation fee applies. Your new price starts on your next meter read.`,
    },
  ],
  "how-it-works": [
    {
      question: "Will my lights go off while I switch?",
      answer: "No. The change happens in your utility's billing system on your meter read date. Nothing happens at your home or business.",
    },
    {
      question: "What if I change my mind?",
      answer: "You can cancel for free within three business days of receiving your welcome packet. Just give us a call.",
    },
    {
      question: "How long does switching take?",
      answer:
        "Most switches happen on the next meter read after the three-day cancellation window, usually within 1 to 7 business days. Some utilities need one full billing cycle.",
    },
  ],
  contact: [
    {
      question: "How fast will I hear back?",
      answer: "We reply to form requests by email within one business day. If you sign up by phone, we finish everything on the call.",
    },
    {
      question: "How do I report a power outage?",
      answer: `Call the outage number printed on your utility bill. You can also call us at ${siteConfig.phone}, choose option 1, and we will connect you.`,
    },
    {
      question: "Can I get a quote for several business locations?",
      answer:
        "Yes. Choose the business quote topic on the form and list each service address, or attach a recent bill for every meter. We will send one combined quote.",
    },
  ],
}
