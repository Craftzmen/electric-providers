import type { StaticImageData } from "next/image"
import { PHOTOS } from "@/lib/remote-images"

export type ProductCollection = {
  slug: string
  title: string
  description: string
  image: StaticImageData
  imageAlt: string
  href: "/contact"
}

export const productCollections: ProductCollection[] = [
  {
    slug: "survey-and-mapping",
    title: "Survey and Mapping",
    description:
      "vLoc receivers paired with GNSS for locate-and-map work. Record line position, depth, and current as you walk the job.",
    image: PHOTOS.survey,
    imageAlt: "Engineers in safety vests reviewing a construction site layout",
    href: "/contact",
  },
  {
    slug: "utility-locators",
    title: "Utility Locators",
    description:
      "Pipe and cable locators for buried utilities. Multi-frequency receivers and transmitters for induction, direct connect, and sonde modes.",
    image: PHOTOS.locators,
    imageAlt: "Utility electrician working on a wall-mounted electrical box",
    href: "/contact",
  },
  {
    slug: "sonde-and-camera-locators",
    title: "Sonde and Camera Locators",
    description:
      "Trace sondes and push cameras in non-metallic pipe. Confirm camera head position before you mark or excavate.",
    image: PHOTOS.sonde,
    imageAlt: "Technician inspecting industrial piping with hand tools",
    href: "/contact",
  },
  {
    slug: "inspection-cameras",
    title: "Inspection Cameras",
    description:
      "Push-rod and crawler camera systems for pipes and ducts. Review laterals, joints, and blockages on a field monitor.",
    image: PHOTOS.cameras,
    imageAlt: "Welder working on metal pipe in an industrial workspace",
    href: "/contact",
  },
  {
    slug: "pipeline-defect-mapper",
    title: "Pipeline Defect Mapper",
    description:
      "Current-mapping tools for coating faults and pipeline integrity. Walk the line and log defect locations for follow-up.",
    image: PHOTOS.pipeline,
    imageAlt: "Industrial plant and piping used for integrity and mapping work",
    href: "/contact",
  },
  {
    slug: "metal-detectors",
    title: "Metal Detectors",
    description:
      "Ferrous and non-ferrous detectors for valve boxes, covers, and buried metal. Use alongside a locator when the line is quiet.",
    image: PHOTOS.metal,
    imageAlt: "Worker grinding metal on a job site",
    href: "/contact",
  },
  {
    slug: "accessories",
    title: "Accessories",
    description:
      "Clamps, sondes, batteries, bags, and replacement leads that keep a Vivax-Metrotech kit in the truck and working.",
    image: PHOTOS.accessories,
    imageAlt: "Cordless drill and job-site tools on a work floor",
    href: "/contact",
  },
]
