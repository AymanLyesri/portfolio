import { PortfolioData } from "@/types/portfolio";
import { portfolioDataEn } from "./portfolio-data-en";
import { portfolioDataFr } from "./portfolio-data-fr";

export function getPortfolioData(locale: string): PortfolioData {
  switch (locale) {
    case "fr":
      return portfolioDataFr;
    case "en":
    default:
      return portfolioDataEn;
  }
}
