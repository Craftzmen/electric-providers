export const howItWorksPage = {
  eyebrow: "How It Works",
  title: "Switching is easier than you think",
  description:
    "Changing to Electric Providers does not change who delivers your power or who you call in an outage. It only changes who sets the supply price on your statement.",
} as const

export const processSteps = [
  {
    step: 1,
    title: "Compare and pick a plan",
    description:
      "Look at the supply price, monthly fee, term, and cancellation fee for each plan on our Plans page. Home and business plans are shown separately so you only see what applies to you.",
  },
  {
    step: 2,
    title: "Sign up online or by phone",
    description:
      "Share your service address, the utility account number from a recent bill, and how we can reach you. Most people are done in about five minutes.",
  },
  {
    step: 3,
    title: "We tell your utility",
    description:
      "Your utility lines up the change for your next regular meter read. There is no interruption, no appointment, and nobody needs to come to your door.",
  },
  {
    step: 4,
    title: "Your first new statement",
    description:
      "After the switch date, your statement lists the Electric Providers supply price next to your utility's delivery charges, with your plan name and end date printed on every page.",
  },
] as const

export const checklist = [
  "Your service address",
  "Utility account number from a recent bill",
  "Meter or ESI ID, if your bill shows one",
  "A phone number and email for updates",
] as const

export const switchTimeline = [
  { when: "Day 0", what: "Your welcome email arrives with your plan documents attached." },
  { when: "Day 3", what: "Your free cancellation window closes. Change your mind before then at no cost." },
  { when: "Days 4 to 10", what: "The switch happens on your next meter read, usually 1 to 7 business days after the window." },
  { when: "Days 30 to 45", what: "Your first statement with Electric Providers pricing arrives for the period since the switch." },
] as const
