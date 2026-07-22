/* ============================================================================
 * blurbs.js  —  CONCEPT -> MEMORY BLURB library (the "recap" content).
 * ----------------------------------------------------------------------------
 * Each entry keyed by the same concept id used in concept_map.js.
 *   title   : short label for the recap header
 *   section : SIE domain (for grouping)
 *   blurb   : the 1-3 sentence memory aid shown in the post-drill recap
 *   trap     : the single most-tested "gotcha" (used as the flashcard BACK)
 *   compare  : side-by-side rows that directly fix the mix-up
 *   related  : other concept ids worth showing together
 *
 * Delivered as a `var` assignment (not fetch) to match the app's file:// load.
 * ==========================================================================*/
var SIE_BLURBS = {
  "rights_vs_warrants": {
    "title": "Rights vs. Warrants",
    "section": "2 - Products & Risks",
    "blurb": "Both let a holder buy issuer stock at a fixed price. Rights = short (~30-45 days), issued to CURRENT shareholders to raise quick capital. Warrants = long (years), usually attached to a new bond/IPO offering.",
    "trap": "The question 'which security has the LONGEST period to expiration at issuance?' = WARRANTS (not rights, not options). Rights are the SHORT one.",
    "compare": [
      { "item": "Rights",  "point": "Short-dated (~30-45d); existing shareholders; preemptive" },
      { "item": "Warrants", "point": "Long-dated (years); often with new issue; longest maturity at issuance" }
    ],
    "related": ["accred_vs_qib"]
  },
  "accred_vs_qib": {
    "title": "Accredited Investor vs. QIB",
    "section": "2 - Products & Risks",
    "blurb": "Accredited Investor = a person/entity meeting wealth thresholds (can buy private placements directly). QIB = a large institution with $100M+ in securities; needed to buy RESTRICTED stock under Rule 144A.",
    "trap": "Rule 144A restricted-stock sales go to QIBs (institutions), NOT merely 'accredited investors'. Don't swap the two.",
    "compare": [
      { "item": "Accredited Investor", "point": "Person/entity wealth test; buys private placements" },
      { "item": "QIB", "point": "$100M+ institution; buys Rule 144A restricted stock" }
    ],
    "related": ["rights_vs_warrants"]
  },
  "etn_vs_etf": {
    "title": "ETN vs. ETF",
    "section": "2 - Products & Risks",
    "blurb": "ETF owns a basket of securities. ETN is senior UNSECURED debt of the issuer, so it carries the issuer's CREDIT/default risk.",
    "trap": "A credit-rating DOWNGRADE of the issuer hurts an ETN (it's the issuer's debt) but does NOT affect an ETF.",
    "compare": [
      { "item": "ETF", "point": "Owns the underlying basket; no issuer credit risk" },
      { "item": "ETN", "point": "Unsecured debt note; exposed to issuer default risk" }
    ],
    "related": []
  },
  "loi_mutualfund": {
    "title": "Mutual Fund Letter of Intent",
    "section": "2 - Products & Risks",
    "blurb": "A Letter of Intent lets a shareholder qualify for a breakpoint sales-charge discount by promising to invest a target amount within a window.",
    "trap": "The LOI is valid for a MAXIMUM of 13 months.",
    "compare": [
      { "item": "Letter of Intent", "point": "Up to 13 months; reaches breakpoint discount" }
    ],
    "related": []
  },
  "reg_bluesky": {
    "title": "Blue-Sky Laws",
    "section": "4 - Regulatory Framework",
    "blurb": "Blue-sky laws are STATE securities laws meant to stop fraudulent 'blue sky' schemes.",
    "trap": "Blue-sky laws are enforced by STATE securities regulators — NOT the SEC, FINRA, or MSRB.",
    "compare": [
      { "item": "Blue-sky", "point": "State law; state securities regulators" },
      { "item": "Federal (SEC)", "point": "Federal securities law; SEC" }
    ],
    "related": []
  },
  "voting_rights": {
    "title": "Statutory vs. Cumulative Voting",
    "section": "2 - Products & Risks",
    "blurb": "Statutory (regular) voting gives one vote per share PER board vacancy. Cumulative voting lets a shareholder pool all votes and stack them on one candidate.",
    "trap": "Under STATUTORY voting, a shareholder has as many votes per vacancy as SHARES OWNED (votes cannot be concentrated).",
    "compare": [
      { "item": "Statutory", "point": "1 vote/share/vacancy; cannot concentrate" },
      { "item": "Cumulative", "point": "Pool votes; can stack on one candidate" }
    ],
    "related": []
  },
  "u4_disqual": {
    "title": "Statutory Disqualification (Form U4)",
    "section": "4 - Regulatory Framework",
    "blurb": "A felony tied to securities/finance (theft, misappropriation) is a statutory disqualification. A felony with no financial/securities nexus is not.",
    "trap": "A DUI felony is generally NOT a statutory disqualification; a theft/fraud felony IS.",
    "compare": [
      { "item": "Disqualifying", "point": "Felony theft / misappropriation of assets" },
      { "item": "Not disqualifying", "point": "DUI or unrelated felony" }
    ],
    "related": []
  },
  "index_option_settlement": {
    "title": "Index Option Settlement",
    "section": "2 - Products & Risks",
    "blurb": "Index options reference a basket you cannot physically deliver, so they settle in cash.",
    "trap": "All in-the-money S&P 100 (or other index) options settle in CASH, not the underlying stocks.",
    "compare": [
      { "item": "Index options", "point": "Cash settlement (no stock delivery)" },
      { "item": "Equity options", "point": "Physical delivery of shares" }
    ],
    "related": []
  }
};
